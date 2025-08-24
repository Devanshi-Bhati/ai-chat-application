import { useState, useEffect } from 'react'
import sun from '../assets/images/sun.png'
import sun2 from '../assets/images/sun2.png'
// import toggle from '../assets/images/toggle.png'

const ThemeToggle: React.FC = () =>{
    const [isDark, setIsDark] = useState(()=>{
        return localStorage.getItem('theme')==='dark'
    });
    useEffect(()=>{
        if(isDark){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
             document.documentElement.classList.remove('dark');
             localStorage.setItem('theme', 'light');
        }
    }, [isDark]);
return(
    <div className="flex items-center justify-end gap-2 dark:bg-black"> 
    <img src={isDark?sun2:sun} alt='img' className="w-[35px] h-[35px] text-black dark:text-white" />
    <button onClick={() => setIsDark(!isDark)} className="w-[35px] h-[20px] rounded-[10px] border-[3px] border-black transition duration-300 flex items-center dark:border-white">
    <div
      className={`w-[13px] h-[13px] bg-black dark:bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
      isDark ? 'translate-x-[14px]' : 'translate-x-0'
    }`}
  />
    </button>
    </div>
);

}

export default ThemeToggle;