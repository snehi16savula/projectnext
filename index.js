import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function summarizeText(inputText) {
  if (!inputText || inputText.trim() === "") {
    console.error(" Error: No input text provided.");
    return;
  }

  const prompt = `
You are an AI that extracts structured summaries.

Return ONLY valid JSON in this format:
{
  "summary": "one sentence summary",
  "key_points": ["point1", "point2", "point3"],
  "sentiment": "positive | neutral | negative"
}

Text:
"""${inputText}"""
`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    });

    const output = response.choices[0].message.content;

    let parsed;

    try {
      parsed = JSON.parse(output);
    } catch (err) {
      console.error("Failed to parse JSON. Raw output:");
      console.log(output);
      return;
    }

    console.log("\nStructured Summary\n");

    console.log(" Summary:");
    console.log(parsed.summary);

    console.log("\n Key Points:");
    parsed.key_points.forEach((point, index) => {
      console.log(`${index + 1}. ${point}`);
    });

    console.log("\nSentiment:");
    console.log(parsed.sentiment);

  } catch (error) {
    console.error("API Error:", error.message);
  }
}

// Handle CLI input
let input = process.argv.slice(2).join(" ");

if (!input) {
  console.error(" Please provide input text or file path.");
  process.exit(1);
}

// If file exists → read file
if (fs.existsSync(input)) {
  try {
    input = fs.readFileSync(input, "utf-8");
  } catch (err) {
    console.error(" Error reading file:", err.message);
    process.exit(1);
  }
}

summarizeText(input);