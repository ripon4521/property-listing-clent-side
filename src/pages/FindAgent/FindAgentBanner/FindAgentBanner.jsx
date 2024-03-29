import { CiSearch } from "react-icons/ci";


const FindAgentBanner = () => {
    return (
        <div className="">
            <div className="hero h-[400px] w-full" style={{backgroundImage: 'url(https://argonaut.au.reastatic.net/resi-agent/prod/customer-profile-home-mfe/hero-image-4ce492e6f6ed88e79362.png)', width:'100%'}}>
  <div className="hero-overlay bg-opacity-60 ">
  <h1 className=" text-3xl md:text-5xl font-bold text-white text-center my-5 lg:mt-20 md:mt-16">Find your agent to find a home</h1>
  
  <div className='bg-white md:px-2 px-1 py-1 rounded-md flex justify-center md:gap-2 md:w-[400px] w-[350px] mx-auto '>
            <button className='text-black font-opanSans md:px-4 px-2  border-r hover:text-purple-600'>Rent</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>Buy</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>New Projects</button>
            <button className='text-black font-opanSans md:px-4 px-2  hover:text-purple-600'>Commercial</button>
            
        </div>

<div className="flex justify-center items-center mt-5 flex-col md:flex-row gap-2">

<div  className="flex justify-center ">
     <button className='px-2 py-[11px] bg-white rounded-l-md'> <CiSearch className=' text-black text-2xl'></CiSearch></button>
        <input type="text" placeholder="Enter Location or agent name" className="px-2 w-80 py-3 "  />
     </div>

<div className="flex gap-2 mt-5 md:mt-0">
    
<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="border px-3 py-3 rounded-md font-opanSans text-white">Service Needed</div>
   <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
     <li className="hover:text-purple-500 text-black"><a>Service Needed</a></li>
     <li className="hover:text-purple-500 text-black "><a>Residantial For Sale</a></li>
     <li className="hover:text-purple-500 text-black "><a>Residantial For Rent</a></li>
     <li className="hover:text-purple-500 text-black "><a>Commercial For Sale</a></li>
     <li className="hover:text-purple-500 text-black "><a>Commercial For Rent</a></li>
   </ul>
 </div>

 <div className="dropdown dropdown-hover">
   <div tabIndex={0} role="button" className="border px-3 py-3 rounded-md font-opanSans text-white">Language</div>
   <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
     <li className="hover:text-purple-500 text-black"><a>Bangla</a></li>
     <li className="hover:text-purple-500 text-black "><a>English</a></li>
     <li className="hover:text-purple-500 text-black "><a>Hindi</a></li>
     <li className="hover:text-purple-500 text-black "><a>Arabic</a></li>
   </ul>
 </div>
 <div className="dropdown dropdown-hover">
   <div tabIndex={0} role="button" className="border px-3 py-3 rounded-md font-opanSans text-white">Nationality</div>
   <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
     <li className="hover:text-purple-500 text-black"><a>Bangaldeshi</a></li>
     <li className="hover:text-purple-500 text-black "><a>Englishi</a></li>
     <li className="hover:text-purple-500 text-black "><a>Indaian</a></li>
     <li className="hover:text-purple-500 text-black "><a>Arabic</a></li>
   </ul>
 </div>


</div>

<input type="submit"value={'Seacrh'} className="px-2 py-3 font-opanSans font-semibold bg-red-500 rounded-md cursor-pointer text-white" />

</div>

    
  </div>
  </div>

 
</div>
       
    );
};

export default FindAgentBanner;


{/* <div className="hero-content text-center text-neutral-content">
    <div className="max-w-7xl ">
     
      <div className=" lg:-mt-16 -mt-16 text">
      <h1 className=" text-3xl md:text-5xl font-bold text-white md:-ml-20 lg:mb-5">Find your agent to find a home</h1>
     
       <div className='bg-slate-500 bg-opacity-50 md:px-16 lg:px-0 px-2 rounded-md py-3 my-10 w-[350px]  md:w-[500px] lg:w-[900px] ml-5 md:-ml-0 lg:-ml-40 -mt-2 md:-mt-0'>
    
        <div className='bg-white md:px-2 px-1 py-1 rounded-md flex justify-center md:gap-2 md:w-[400px] w-[350px] mx-auto '>
            <button className='text-black font-opanSans md:px-4 px-2  border-r hover:text-purple-600'>Rent</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>Buy</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>New Projects</button>
            <button className='text-black font-opanSans md:px-4 px-2  hover:text-purple-600'>Commercial</button>
            
        </div>
        <div className='mt-5 flex flex-col lg:flex-row justify-center  rounded-3xl items-center gap-3 md:gap-5'>
     <div className="flex">
     <button className='px-2 py-[11px] bg-white rounded-l-md'> <CiSearch className=' text-black text-2xl'></CiSearch></button>
        <input type="text" placeholder="Enter Location or agent name" className="px-2 w-80 py-3 "  />
     </div>

// <div className="flex gap-5"> 
// <div className="dropdown dropdown-hover">
//   <div tabIndex={0} role="button" className="border px-3 py-3 rounded-md font-opanSans">Service Needed</div>
//   <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//     <li className="hover:text-purple-500 text-black"><a>Service Needed</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Residantial For Sale</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Residantial For Rent</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Commercial For Sale</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Commercial For Rent</a></li>
//   </ul>
// </div>
//         <div className="dropdown dropdown-hover">
//   <div tabIndex={0} role="button" className="border px-3 py-3 rounded-md font-opanSans">Language</div>
//   <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//     <li className="hover:text-purple-500 text-black"><a>Bangla</a></li>
//     <li className="hover:text-purple-500 text-black "><a>English</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Hindi</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Arabic</a></li>
  
//   </ul>
// </div>
//         <div className="dropdown dropdown-hover">
//   <div tabIndex={0} role="button" className="border px-3 py-3 rounded-md font-opanSans">Nationality</div>
//   <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//     <li className="hover:text-purple-500 text-black"><a>Bangaldeshi</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Englishi</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Indaian</a></li>
//     <li className="hover:text-purple-500 text-black "><a>Arabic</a></li>
  
//   </ul>
// </div>
// </div>
//         <input type="submit"value={'Seacrh'} className="px-2 py-3 font-opanSans font-semibold bg-red-500 rounded-md cursor-pointer" />
        
//         </div>
//        </div>
//        </div>
//     </div>
//   </div> */}