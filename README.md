# **ChatGPT Clone Project**

A full-stack ChatGPT clone with a **React frontend** and a **Node.js backend**, deployed online.

---

## **Live Demo**

* **Frontend (GitHub Pages):** [https://akshayas23.github.io/ChatGPT-clone/](https://akshayas23.github.io/ChatGPT-clone/)
* **Backend (Vercel):** [https://chat-gpt-clone-ivory-tau.vercel.app/](https://chat-gpt-clone-ivory-tau.vercel.app/)

---

## **Project Structure**

```
ChatGPT-clone/
├─ clone/        # Frontend (React)
├─ server/       # Backend (Node.js / Express)
├─ README.md
```

---

## **Frontend**

* Built with **React.js**, **React Router**, **CSS / Tailwind**
* Features:

  * Chat interface
  * Responsive design
  * Sends messages to the backend API

### **Local Setup**

```bash
cd clone
npm install
npm start
```

* Frontend fetches chat messages from the backend API.
* Make sure to update API URL to point to your **Vercel backend** or `localhost:5000` for local testing.

---

## **Backend**

* Built with **Node.js** and **Express** (or serverless-ready)
* Features:

  * POST `/api/chat` endpoint
  * Handles messages and chat history
  * Communicates with **Cohere / OpenAI API**
  * CORS enabled

### **API Example (you can test in postman)**

**Request:**

```json
POST https://chat-gpt-clone-ivory-tau.vercel.app/api/chat
Content-Type: application/json

{
  "message": "Hello",
  "history": []
}
```

**Response:**

```json
{
  "text": "Hello! How can I help you today?"
}
```

### **Local Setup**

```bash
cd server
npm install
```

* Create a `.env` file:

```
COHERE_API_KEY=your_cohere_api_key
OPENAI_API_KEY=your_openai_api_key (if used)
```

* Start the server:

```bash
node index.js
```

* Runs on `http://localhost:5000` by default.

---

## **Connecting Frontend & Backend**

* Update frontend fetch calls to point to the **live backend** in Vercel:

```javascript
fetch("https://chat-gpt-clone-ivory-tau.vercel.app/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message, history })
});
```

* Locally, you can point it to `http://localhost:5000/api/chat`.

---

## **Tech Stack**

* **Frontend:** React.js, React Router, CSS / Tailwind
* **Backend:** Node.js, Express, Cohere/OpenAI API
* **Deployment:** GitHub Pages (frontend), Vercel (backend)

---

