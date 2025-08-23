import React, { useState } from 'react';

type Message = {
  question: string;
  answer: string;
};

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      question: "What are the benefits of regular exercise?",
      answer:
        "Regular exercise improves cardiovascular health, strengthens muscles, and enhances flexibility. It also boosts mental well-being by reducing stress, anxiety, and symptoms of depression. Consistent physical activity can help maintain a healthy weight and improve sleep quality. Over time, it contributes to increased energy levels and a stronger immune system.",
    },
  ]);

  const handleSendMessage = () => {
    setMessages(prev => [
      ...prev,
      {
        question: "Sample user question...",
        answer: "Sample bot response...",
      },
    ]);
  };

  return (
    <div className="w-3/4 flex flex-col justify-between bg-white h-full">
      <div className="p-6 overflow-y-auto flex-grow">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-6">
            <div className="font-mono text-sm mb-2 bg-gray-100 p-2 rounded">
              {msg.question}
            </div>
            <div className="bg-gray-200 p-4 rounded font-mono text-sm">
              {msg.answer}
            </div>
          </div>
        ))}
      </div>

      <div className="flex p-4 border-t items-center">
        <input
          type="text"
          placeholder="What’s on your mind?"
          className="w-full border rounded px-4 py-2 mr-2"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
