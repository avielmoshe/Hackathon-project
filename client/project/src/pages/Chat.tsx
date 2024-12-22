import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]); // Lista de mensagens
  const [inputMessage, setInputMessage] = useState(""); // Mensagem do input

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return; // Evita envio de mensagem vazia
    setMessages([...messages, { text: inputMessage, sender: "user" }]); // Adiciona nova mensagem
    setInputMessage(""); // Limpa o campo de input
  };

  return (
    <div className="min-h-screen bg-gradient-to-br mt-6 from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700 dark:text-blue-300">
          Chat with Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          We're here to help. Send us a message!
        </p>
      </header>

      {/* Chat Box */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg flex flex-col mb-6">
        <div className="flex flex-col space-y-4 overflow-y-auto h-64 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 text-gray-800 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input and Send Button */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 bg-blue-500 text-white px-4 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
