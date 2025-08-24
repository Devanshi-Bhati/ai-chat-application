import React from 'react';
import image from '../assets/images/getstarted2.png'
import search from '../assets/images/search.png'
import face from '../assets/images/face.png'
import face1 from '../assets/images/face1.png'
import { useState, useEffect } from 'react'
const Sidebar: React.FC = () => {
    const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const previousChats = [
    "What is the capital of France?",
    "What is the chemical symbol for water?",
    "Which planet is known as the Red Planet?",
    "What is the boiling point of water at standard atmospheric pressure?",
  ];

  return (
    <div className="w-[380px] h-full bg-[#D9D9D9] p-4 flex flex-col justify-between dark:bg-[#241818]">
      <div>
        <div className="text-lg font-bold mb-6 mt-[23px] text-center  dark:text-white">THINKTALK</div>
        <div className="flex justify-center mb-6"><img src={image} alt='img' className="w-[60px] h-[60px]"/></div>

        <button className="bg-[#A0A0A9] max-w-full w-[300px] px-5 py-2 ml-5 rounded text-lg dark:bg-[#252344] dark:text-white"> New Chat <span className="text-xl ml-7">+</span></button>

        <div className="text-lg mt-2 mb-2 font-bold text-center dark:text-white">Previous Chats</div>
        <ul className="mt-2 text-sm">
          {previousChats.map((chat, index) => (
            <li key={index} className="bg-[#90888B] p-2 rounded cursor-pointer mb-2 hover:bg-gray-400 dark:bg-[#D9D9D9]">
              {chat}
            </li>
          ))}
        </ul>
      </div>

        <span className='text-sm text-black dark:text-white'>
            Explore Models
        </span>
        <div className='flex w-[280px] bg-[#6E6868] text-md  mt-2  rounded border dark:bg-[#D9D9D9]'>
           <input
          type="text"
          placeholder="Search models..."
          className="bg-[#6E6868] placeholder-black text-black text-md outline-none px-2 rounded dark:bg-[#D9D9D9]"
          />
           <button className='w-[30px] h-[30px] text-black ml-5'><img src={search} alt='img' className=' text-black' /></button>
        </div>
       
        <div className=" mt-2 flex ml-12 items-center"><img src={theme ==='dark'? face1 : face} alt='img' className='w-[20px] h-[20px]' /> <span className="text-blue-500 text-lg ml-3">MARY WILSON</span></div>
    

    </div>
    
  );
};

export default Sidebar;
