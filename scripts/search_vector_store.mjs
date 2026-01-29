import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: ".env.local" });

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const vsId = process.env.OPENAI_VECTOR_STORE_ID;

  const res = await client.vectorStores.search(vsId, {
    query: "What is Jordan's current role?",
    max_num_results: 5,
  });

  console.log("results:", res.data?.length ?? 0);
  for (const r of res.data || []) {
    const text = r.content?.[0]?.text ?? "";
    console.log("score:", r.score);
    console.log("preview:", text.slice(0, 200).replace(/\s+/g, " "));
    console.log("---");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});