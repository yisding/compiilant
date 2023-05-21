// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

type Data =
  | { error: string }
  | {
      originalText: string;
      redactedMarkdown: string;
      redactedText: string;
      replacements: [];
      laws: string[];
      tags: string[];
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { phrase } = req.query;

  if (typeof phrase !== "string") {
    res.status(400).json({ error: "phrase must be a string" });
    return;
  }

  const prompt = `Identify the Personal Identifiable Information (PII) in the sentence and return it as a JSON along with any laws that could be a concern.

COPPA applies if the user is under 13 years old. GDPR applies if the user is in the EU. HIPAA applies it's about patient data.

Use this format:

Input: <input>
PII: <JSON with fields \`type\`, \`value\`, and optionally \`laws\`. type can be "name", "address", "birth_place", "birth_date", "age", "ethnicity" or "health_condition". laws can be "HIPAA", "COPPA", or "GDPR">

RETURN ONLY JSON!

Examples:

Input: My email is david.beckham@gmail.com.
PII: [{"type": "email", "value": "david.beckham@gmail.com"}]

Input: Hi I'm 12 and I love this app.
PII: [{"type": "age", "value": "12“, "laws": "COPPA"}]

Input: My name is Yi and I have cystic fibrosis.
PII: [{"type": "name", "value": "Yi"}, {"type": "health_condition", "value": "cystic fibrosis", "laws": "HIPAA"}]

Input: I was born in Lyon.
PII: [{"type": "birth_place", "value": "Lyon"}]

Input: I live in China
PII: [{"type": "address", "value": "China"}]

Input: I am a Korean Chinese.
PII: [{"type": "ethnicity", "value": "Korean Chinese"}]

Input: I live on El Camino.
PII: [{"type": "address", "value": "El Camino"}]

Input: The nearest pharmacy is on 5146 Stevens Creek Blvd San Jose.
PII: []

Input: I live in France.
PII: [{"type": "address", "value": "France", "laws": "GDPR"}]

Input: I use gmail.
PII: []

Input: I have a gmail.
PII: []

Input: I go to gym near Sunnyvale.
PII:[]

Input: I go to a gym near 200 El Camino Real, Sunnyvale,CA.
PII: []

Input: I use Yahoo for my email.
PII: []

Input: I live in the United States.
PII: [{"type": "address", "value": "United States"}]

Input: I am 13.
PII: [{"type": "age", "value": "13“}]

Input: I am 14.
PII: [{"type": "age", "value": "14“}]

Input: My doctor is amazing.
PII: []

Input: I have a cold.
PII: [{"type": "health_condition", "value": "cold“, "laws": "HIPAA"}]

Input: I have a physical disability.
PII: [{"type": "health_condition", "value": "physical disability", "laws": "HIPAA"}]

Input: Hello my name is Emma and I walked the El Camino to Santiago
PII: [{"type": "name", "value": "Emma"}]

Input: hello my name is Neil and I love France
PII: [{"type": "name", "value": "Neil"}]`;

  const { data } = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: prompt },
      {
        role: "user",
        content: `Input: ${phrase}
PII:`,
      },
    ],
    max_tokens: 2000,
    temperature: 0.1,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    n: 1,
    stream: false,
  });

  const responseJson = data.choices[0].message?.content;

  if (!responseJson) {
    res.status(503).json({ error: "No response" });
    return;
  }

  console.log(responseJson);

  const responseData = JSON.parse(responseJson.slice(responseJson.indexOf('[')));

  let redactedText = phrase;
  for (let item of responseData) {
    redactedText = redactedText.replace(item.value, item.type.toUpperCase());
  }

  let redactedMarkdown = phrase;
  for (let item of responseData) {
    redactedMarkdown = redactedMarkdown.replace(item.value, `[**${item.type.toUpperCase()}**]`);
  }

  let tags: string[] = [];
  for (let item of responseData) {
    if (item.type) {
      tags.push(item.type);
    }
  }

  let laws: string[] = [];
  for (let item of responseData) {
    if (item.laws) {
      laws.push(item.laws);
    }
  }

  res.status(200).json({
    originalText: phrase,
    redactedMarkdown,
    redactedText,
    replacements: responseData,
    tags: tags,
    laws: laws,
  });
}
