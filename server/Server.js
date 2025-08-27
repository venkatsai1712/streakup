import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.post("/", async (req, res) => {
  const message = req.body.message;
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });
    res.send({ apireply: response.text });
  } catch (err) {
    console.log(err.message);
    res.send({ message: "api error" });
  }

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
