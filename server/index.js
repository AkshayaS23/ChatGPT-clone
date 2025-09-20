import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API route
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const cohereRes = await fetch("https://api.cohere.ai/v1/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model:  "command-a-03-2025", // or command-r-plus if available
        message,
        chat_history: history || [],
      }),
    });

    if (!cohereRes.ok) {
      const errorText = await cohereRes.text();
      return res.status(cohereRes.status).json({ error: errorText });
    }

    const data = await cohereRes.json();
    return res.json({ text: data.text });
  } catch (err) {
    return res.status(500).json({ error: "Server error: " + err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
