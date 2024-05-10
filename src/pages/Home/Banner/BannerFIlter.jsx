import { CiSearch } from "react-icons/ci";


const BannerFIlter = () => {
    return (
        <div className="bg-white px-5 py-5 shadow-md md:max-w-4xl  mx-auto rounded-md -mt-20 ">
            <div>
            <div className='bg-white md:px-2 px-1 py-1 rounded-md flex justify-center md:gap-2 '>
            <button className='text-black font-opanSans md:px-4 px-2  border-r hover:text-purple-600'>Rent</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>Buy</button>
            <button className='text-black font-opanSans md:px-4 px-2 border-r hover:text-purple-600'>New Projects</button>
            <button className='text-black font-opanSans md:px-4 px-2  hover:text-purple-600'>Commercial</button>
            
        </div>
            </div>

            <div className="flex md:flex-row flex-col  mt-5 md:px-20 gap-5 ">
                <div>
                <h1 className="text-[18px] font-opanSans">Search:*</h1>
                <div className='mt-5 flex justify-start  rounded-3xl items-center'>
       <button className='px-2 py-[11px] bg-white rounded-l-md'> <CiSearch className=' text-2xl text-red-500'></CiSearch></button>
        <input type="text" placeholder="City,coumminity or building" className="px-2 w-60 py-3 "  />
     
        
        </div>
                </div>

                <div>
                <h1 className="text-[18px] font-opanSans">Select Catagories:</h1>
                <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="px-4 py-2 bg-gray-100 rounded-md mt-5 hover:text-red-500">Explore More</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Buy</a></li>
    <li><a>Sell</a></li>
    <li><a>Commertial</a></li>
  </ul>
</div>
                </div>
                <div className="md:ml-10">
                <h1 className="text-[18px] font-opanSans">Select Catagories:</h1>
                <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="px-4 py-2 bg-gray-100 rounded-md mt-5 hover:text-red-500">Explore More</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Buy</a></li>
    <li><a>Sell</a></li>
    <li><a>Commertial</a></li>
  </ul>
</div>
                </div>
             
            </div>
       


        </div>
    );
};

export default BannerFIlter;