import dotenv from "dotenv"
import path from "node:path"
import fs from "node:fs"
import { fileURLToPath } from "node:url"
import OpenAI from "openai"

// ------------------------------------------------------------
// Setup
// ------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load env from project root
dotenv.config({ path: path.resolve(__dirname, "../.env.local") })

const { OPENAI_API_KEY, OPENAI_VECTOR_STORE_ID } = process.env

if (!OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY missing")
  process.exit(1)
}

if (!OPENAI_VECTOR_STORE_ID) {
  console.error("❌ OPENAI_VECTOR_STORE_ID missing")
  process.exit(1)
}

const client = new OpenAI({ apiKey: OPENAI_API_KEY })

const KNOWLEDGE_DIR = path.resolve(__dirname, "../knowledge")
const DELETE_EXISTING = true // set to false if you ever want additive behavior

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

function getMarkdownFiles(dir) {
  const results = []

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      // Skip hidden/system directories
      if (entry.name.startsWith(".")) continue

      const fullPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        walk(fullPath)
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        results.push(fullPath)
      }
    }
  }

  walk(dir)

  // Stable ordering for consistent uploads
  results.sort((a, b) => a.localeCompare(b))

  return results
}

// ------------------------------------------------------------
// Main
// ------------------------------------------------------------

async function main() {
  console.log("🔁 Hydrating vector store:", OPENAI_VECTOR_STORE_ID)

  // 1. Optionally delete existing files
  if (DELETE_EXISTING) {
    const existing = await client.vectorStores.files.list(
      OPENAI_VECTOR_STORE_ID
    )

    if (existing.data.length > 0) {
      console.log(`🧹 Deleting ${existing.data.length} existing files`)
    }

    for (const item of existing.data) {
      // Case 1: Legacy behavior — direct file objects
      if (item.id?.startsWith("file-")) {
        await client.vectorStores.files.delete(
          item.id,
          { vector_store_id: OPENAI_VECTOR_STORE_ID }
        )
        await client.files.delete(item.id)

        console.log(`🗑️ Deleted legacy file ${item.id}`)
        continue
      }

      // Case 2: New behavior — vector-store-file indirection
      if (item.id?.startsWith("vsf_")) {
        await client.vectorStores.files.delete(
          item.id,
          { vector_store_id: OPENAI_VECTOR_STORE_ID }
        )

        if (item.file_id) {
          await client.files.delete(item.file_id)
        }

        console.log(`🗑️ Deleted ${item.id} → ${item.file_id}`)
        continue
      }

      throw new Error(`Unknown vector store file shape: ${JSON.stringify(item)}`)
    }
  }

  // 2. Upload new knowledge files
  const files = getMarkdownFiles(KNOWLEDGE_DIR)

  if (files.length === 0) {
    console.warn("⚠️ No markdown files found in /knowledge")
    return
  }

  console.log(`📄 Uploading ${files.length} knowledge files`)

  for (const filepath of files) {
    const filename = path.basename(filepath)

    const uploaded = await client.files.create({
      file: fs.createReadStream(filepath),
      purpose: "assistants",
    })

    await client.vectorStores.files.create(
      OPENAI_VECTOR_STORE_ID,
      { file_id: uploaded.id }
    )

    console.log(`✅ ${filename} attached (${uploaded.id})`)
  }

  console.log("🎉 Vector store hydration complete")
}

main().catch(err => {
  console.error("❌ Hydration failed")
  console.error(err)
  process.exit(1)
})