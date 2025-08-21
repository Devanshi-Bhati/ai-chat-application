import image from '../assets/images/getstarted.png'
import image1 from '../assets/images/getstarted2.png'
const GetStarted = () =>{
    return(
        <>
        <div className='bg-[#CCC6C8]'>
        <div className='flex'>
          <div>
            <img src={image} alt='img' className='w-[814px] h-[456px]' />
          </div>
          <div>
            <h2 className='text-[70px] text-[#763B3B] ml-[161px] mt-[113px] w-[380px] h-[68px] mr-[85px]'>THINKTALK</h2>
            <p className='text-[40px] text-black ml-[76px] w-[516px] h-[39px] mt-[30px] mr-[34px]'>Your AI powered chat bot</p>
            <img src={image1} alt='img' className='mt-[30.5px] ml-[266.5px] mr-[199.78px] w-[159.72px] h-[159.72px]'/>
          </div>
        </div>
        <p className='mt-[56px] w-[1337px] h-[219px] text-[20px] ml-[58px] mr-[45px]'>
            This project integrates the OpenAI API for real-time conversational AI, offering a seamless and responsive chat experience. It features a Model Explorer UI inspired by Hugging Face Spaces, allowing users to switch models or explore capabilities visually. Task-specific micro-copilots handle functions like summarization or translation, enhancing productivity through focused assistance. Additionally, intelligent “Did you mean?” suggestions help guide users when their input is ambiguous or slightly incorrect.
        </p>
        <button className='ml-[402px] bg-[#350BF5] w-[294px] h-[70px] rounded-[30px] text-white text-[30px]'>Get Started</button>
        <button className='ml-[402px] bg-[#350BF5]  w-[294px] h-[70px] rounded-[30px] ml-[68px] text-white text-[30px]'>Learn More</button>
        </div>
        </>
    );
}
export default GetStarted