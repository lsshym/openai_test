// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "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",
// });

// async function main() {
//   console.log("test");
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// }

// main();

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-C4BraryG2bARcxYPc5iRugc8",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();