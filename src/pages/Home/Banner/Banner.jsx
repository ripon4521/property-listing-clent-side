
// import { TypewriterClass } from 'typewriter-effect';
import bannerVideo from '../../../../public/Banner Video/home-ae.mp4'
import './style.css'
import { CiSearch } from "react-icons/ci";
// import Typewriter from 'typewriter-effect/dist/core';
import {  useTypewriter } from 'react-simple-typewriter'

const Banner = () => {
    const [text] = useTypewriter({
        words: ['We Open The Doors'],
        loop: 0
      })
    


    return (
        <div className=''>
       <video className=''   src={bannerVideo} autoPlay loop muted />
       <div className="  text">
       <h1 className='md:text-5xl text-3xl font-opanSans font-bold drop-shadow-md text-white p-2'> 
       {text}</h1>
       <div className='bg-slate-500 bg-opacity-50 md:px-16 px-2 rounded-md py-3 my-10 w-[350px] md:w-full'>
    
        <div className='bg-white md:px-2 px-1 py-1 rounded-md flex justify-center md:gap-2 '>
            <button className='text-black font-opanSans md:px-4 px-2  border-r hover:text-purple-600'>Rent</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>Buy</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>New Projects</button>
            <button className='text-black font-opanSans md:px-4 px-2  hover:text-purple-600'>Commercial</button>
            
        </div>
        <div className='mt-5 flex justify-center  rounded-3xl items-center'>
       <button className='px-2 py-[11px] bg-white rounded-l-md'> <CiSearch className=' text-black text-2xl'></CiSearch></button>
        <input type="text" placeholder="City,coumminity or building" className="px-2 w-80 py-3 "  />
        <input type="submit"value={'Seacrh'} className="px-2 py-3 font-opanSans font-semibold bg-red-500 rounded-r-sm" />
        
        </div>
       </div>
       </div>
            
        </div>
    );
};

export default Banner;