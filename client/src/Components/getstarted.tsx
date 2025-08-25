import image from '../assets/images/getstarted.png'
import image1 from '../assets/images/getstarted2.png'
import BasicModal from './modal';
import { useState } from 'react';
import SignUpLoginModal from './signup'; 
const GetStarted: React.FC = () =>{
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    return(
        <>
        <div className='bg-[#CCC6C8] w-full max-w-full min-h-screen'>
        <div className='flex'>
          <div>
            <img src={image} alt='img' className='w-[580px] h-[300px]' />
          </div>
          <div className='flex flex-col items-center justify-center ml-[150px]'>
            <h2 className='text-5xl text-[#763B3B] mt-[80px] text-center'>THINKTALK</h2>
            <p className='text-3xl text-black text-center mt-[10px]'>Your AI powered chat bot</p>
            <img src={image1} alt='img' className='mt-3 w-[120px] h-[120px]'/>
          </div>
        </div>
        <p className='mt-[56px] text-md ml-[58px] mr-[45px]'>
            This project integrates the OpenAI API for real-time conversational AI, offering a seamless and responsive chat experience. It features a Model Explorer UI inspired by Hugging Face Spaces, allowing users to switch models or explore capabilities visually. Task-specific micro-copilots handle functions like summarization or translation, enhancing productivity through focused assistance. Additionally, intelligent “Did you mean?” suggestions help guide users when their input is ambiguous or slightly incorrect.
        </p>

        <div className='flex justify-center mt-[80px]'>
        <button className='bg-[#350BF5] w-[200px] h-[50px] rounded-[30px] text-white text-2xl' onClick={() => setShowAuthModal(true)}>Get Started</button>
         {showAuthModal && (
        <SignUpLoginModal onClose={() => setShowAuthModal(false)} />
      )}
        <button className='bg-[#350BF5]  w-[200px] h-[50px] rounded-[30px] ml-[70px] text-white text-2xl' onClick={()=>{setIsOpenModal(true)}}>Learn More</button>
        {isOpenModal && <BasicModal open={isOpenModal} onClose={()=>setIsOpenModal(false)}/> }
        </div>
        </div>
        </>
    );
}
export default GetStarted