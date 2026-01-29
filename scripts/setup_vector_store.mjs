import dotenv from "dotenv";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local from project root
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

// Debug check (remove later)
console.log("OPENAI_API_KEY loaded?", Boolean(process.env.OPENAI_API_KEY));

if (!process.env.OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY not found. Check .env.local path + formatting.");
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  // 1) Create vector store
  const vs = await client.vectorStores.create({
    name: "jordanmbluhm-knowledge",
  });

  // 2) Upload file (absolute path for safety)
  const knowledgePath = path.resolve(__dirname, "../knowledge/resume_core.md");

  const file = await client.files.create({
    file: fs.createReadStream(knowledgePath),
    purpose: "assistants",
  });

  // 3) Attach file to vector store
  await client.vectorStores.files.create(vs.id, {
    file_id: file.id,
  });

  console.log("VECTOR_STORE_ID =", vs.id);
  console.log("FILE_ID =", file.id);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});