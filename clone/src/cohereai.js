// Accept external abort controller to support Stop button
export async function sendMsgToCohere(userMessage, abortController, fullHistory = []) {
  const chatHistory = fullHistory
    .filter((msg) => msg.text && msg.text.trim())
    .map((msg) => ({
      role: msg.isBot ? "CHATBOT" : "USER",
      message: msg.text,
    }));

  const res = await fetch("https://chat-gpt-clone-ivory-tau.vercel.app//api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: userMessage,
      history: chatHistory,
    }),
    signal: abortController.signal,
  });

  if (!res.ok) {
    throw new Error("❌ Failed to fetch from backend API");
  }

  const data = await res.json();
  return data.text || "Sorry, I couldn't understand that.";
}
