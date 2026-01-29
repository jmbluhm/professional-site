import dotenv from "dotenv";
import OpenAI from "openai";

// Load .env.local explicitly
dotenv.config({ path: ".env.local" });

if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY");
  process.exit(1);
}

if (!process.env.OPENAI_VECTOR_STORE_ID) {
  console.error("Missing OPENAI_VECTOR_STORE_ID");
  process.exit(1);
}

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const vsId = process.env.OPENAI_VECTOR_STORE_ID;

  const vs = await client.vectorStores.retrieve(vsId);
  console.log("Vector store:", {
    id: vs.id,
    name: vs.name,
    status: vs.status,
  });

  const files = await client.vectorStores.files.list(vsId);
  console.log("Files in vector store:", files.data.length);

  for (const f of files.data) {
    console.log("File:", {
      id: f.id,
      status: f.status,
      created_at: f.created_at,
    });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});