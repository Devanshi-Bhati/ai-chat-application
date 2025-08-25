import React, { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle.tsx';
import brain from '../assets/images/brain.png'
import share from '../assets/images/share.png'
import pencil from '../assets/images/pencil.png'
type Message = {
  question: string;
  answer: string;
};

const ChatWindow: React.FC = () => {
  const [input, setInput] = useState('');
  
  const [templates, setTemplates] = useState<string[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [showParams, setShowParams] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(300);

  const [messages, setMessages] = useState<Message[]>([
    {
      question: "What are the benefits of regular exercise?",
      answer:
        "Regular exercise improves cardiovascular health, strengthens muscles, and enhances flexibility. It also boosts mental well-being by reducing stress, anxiety, and symptoms of depression. Consistent physical activity can help maintain a healthy weight and improve sleep quality. Over time, it contributes to increased energy levels and a stronger immune system.",
    },
  ]);
const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 
  };

  const handleSendMessage = (): void => {
    setMessages(prev => [
      ...prev,
      {
        question: "Sample user question...",
        answer: "Sample bot response...",
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem('chatTemplates', JSON.stringify(templates));
  }, [templates]);

   useEffect(() => {
    const storedTemplates = localStorage.getItem('chatTemplates');
    if (storedTemplates) {
      setTemplates(JSON.parse(storedTemplates));
    }
  }, []);

  const handleSaveTemplate = () => {
    if (input.trim() && !templates.includes(input.trim())) {
      setTemplates(prev => [...prev, input.trim()]);
    }
  };

  const handleLoadTemplate = (template: string) => {
  setInput(template);
  setTimeout(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, 0);
};

  return (
    <div className="w-3/4 flex flex-col  bg-white h-full">
        <ThemeToggle />
      <div className="p-6 overflow-y-auto flex-grow dark:bg-black">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-6">
            <div className="flex items-center max-w-[600px] w-full text-md ml-auto bg-[#D9D9D9] p-2 mb-4 rounded">
              {msg.question} <img src={pencil} className='w-[20px] h-[20px] ml-auto cursor-pointer' alt='img' />
            </div>
            <div className="bg-[#D9D9D9] max-w-[600px] w-full rounded text-md">
              {msg.answer}
            </div>
          </div>
        ))}
      </div>



      <div className="flex p-4 border-t items-center bg-[#D9D9D9] w-full h-70px">
        <img src={brain} alt='img' />
        <textarea
          onInput={handleInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={1}
          placeholder="What's on your mind?"
          className="w-full outline-none rounded px-4 py-2 mr-2 bg-[#D9D9D9]"
        ></textarea>

        <button onClick={handleSendMessage} className="ml-[4px] text-white flex items-center justify-center mr-3"><img src={share} alt='img' className='w-[30px] flex justify-center items-center'/>
        </button>

       {templates.length > 0 && (
         <select value={selectedTemplate} onChange={(e) => {
         const val = e.target.value;
         setSelectedTemplate(val);
         handleLoadTemplate(val);
        }}
         className="px-2 py-1 mr-3 rounded bg-[#D9D9D9] dark:bg-[#333] dark:text-white text-sm"
       >
      <option value="">Select template</option>
      {templates.map((template, index) => (
        <option key={index} value={template}>
          {template.length > 30 ? template.slice(0, 30) + '...' : template}
        </option>
      ))}
        </select>
      )}

        <button
          onClick={handleSaveTemplate}
          title="Save as Template"
          className="w-[35px] h-[35px] mr-3 text-lg  flex items-center justify-center font-bold"
        >
         Save
        </button>
        <button onClick={() => setShowParams(prev => !prev)} className=" text-lg font-bold" title="Toggle parameters">Parameters</button>
      </div>


       {showParams && (
         <div className="bg-[#EDEDED] dark:bg-[#2B2B2B] px-4 py-3 text-sm flex gap-6 items-center border-t">
           <div className="flex flex-col">
              <label className="font-medium mb-1">Temperature</label>
              <input type="range" min="0" max="1" step="0.1" value={temperature} onChange={(e) => setTemperature(parseFloat(e.target.value))} className="w-[150px]" />
              <span>{temperature}</span>
           </div>

          <div className="flex flex-col">
             <label className="font-medium mb-1">Max Tokens</label>
             <input type="number" min="10" max="4000" value={maxTokens} onChange={(e) => setMaxTokens(parseInt(e.target.value))} className="w-[100px] px-2 py-1 rounded bg-white dark:bg-[#444] border" />
          </div>
        </div>
       )}
    </div>

  );
};

export default ChatWindow;