import React from 'react';
import image from '../assets/images/getstarted2.png'
import search from '../assets/images/search.png'
import face from '../assets/images/face.png'
const Sidebar: React.FC = () => {
  const previousChats = [
    "What is the capital of France?",
    "What is the chemical symbol for water?",
    "Which planet is known as the Red Planet?",
    "What is the boiling point of water at standard atmospheric pressure?",
  ];

  return (
    <div className="w-[380px] h-[1024px] bg-[#D9D9D9] p-4 flex flex-col justify-between">
      <div>
        <div className="text-[30px] font-bold mb-6 mt-[23px] w-[152px] h-[42px] ml-[105px] mr-[123px]">THINKTALK</div>
        <div className="ml-[144px] mr-[152px] mt-[2px]"><img src={image} alt='img'/></div>

        <button className="bg-[#A0A0A9] px-[27px] py-[8px] rounded mb-6 mt-[28px] text-[30px] ml-[63px] mr-[45px]"> New Chat +</button>

        <div className="text-[25px] mt-[39px] mb-2 font-semibold w-[238px] h-[35px] ml-[97px]">Previous Chats</div>
        <ul className="mt-[18px] text-[25px]">
          {previousChats.map((chat, index) => (
            <li key={index} className="bg-[#90888B] p-2 rounded cursor-pointer mb-[25px] mx-[0px] hover:bg-gray-400">
              {chat}
            </li>
          ))}
        </ul>
      </div>

        <span className='text-[25px] ml-[73px]'>
            Explore Models
        </span>
        <div className='flex w-[286px] h-[61px] bg-[#6E6868] text-[25px] ml-[30px] mr-[30px] px-3 py-2 mt-[10px] rounded border'>
           <input
          type="text"
          placeholder="Search models..."
          className="w-[211px] h-[29px] bg-[#6E6868] placeholder-black text-black text-[25px] ml-[22px] mr-[7px] rounded "
          />
           <button className='w-[35px] h-[35px] text-black'><img src={search} alt='img' className='w-[23.89px] h-[23.89px] text-black' /></button>
        </div>
       
        <div className="w-[253px] h-[42px] mt-[43px] flex ml-[22px]"><img src={face} alt='img' className='w-[35px] h-[35px] ml-[9px] mt-[4px] mr-[3px]'/> <span className="text-blue-500 text-[30px] ml-[5px]">MARY WILSON</span></div>
    

    </div>
    
  );
};

export default Sidebar;
