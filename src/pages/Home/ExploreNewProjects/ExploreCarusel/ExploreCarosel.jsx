
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";




const ExploreCarosel = () => {
  return (
   <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>


     <div className="max-w-sm  rounded overflow-hidden bg-white  ">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}

        loop={true}
     
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/dubai-skyline-wallpaper_1409-6486.jpg?t=st=1714539449~exp=1714543049~hmac=c3e8f7319993cb00f0d2056398973cca389d62069a524e94706816b02ab15d49&w=1380"
            alt="Placeholder 1"
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/dubai-marina_158595-2000.jpg?t=st=1714539474~exp=1714543074~hmac=139208378f4999a6975a45f3566938f46f590b662f35c0d5a2c52d179c5d0b9a&w=1380"
            alt="Placeholder 2"
            className="w-full  rounded-md "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/abu-dhabi-seascape-with-skyscrapers_181624-11582.jpg?t=st=1714538520~exp=1714542120~hmac=a8afb62dcd8391a683be9578cf1c2e9e5e634eff94f5f6a1cfaefd266a17c8a1&w=1380"
            alt="Placeholder 3"
            className="w-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
      <div className=" ">
      <div className="p-4 md:p-6 lg:px-5 lg:py-0 ">
        <span className='text-xs bg-purple-100 px-2 py-1 font-opanSans'>Delevery Date: Q2 2027</span>
            
            <h3 className="text-xl font-semibold text-gray-600 mt-2 ">
             Riwa
            </h3>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>From</span>: 2,350,000 AED</p>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>Developer</span>: Meras Holding</p>
            <p className='text-[14px] text-gray-500 font-thin flex justify-start items-center py-3 gap-2'><span className='text-[15px] '><CiLocationOn/></span> Dubai, umm Suqeim, Madinat Jumeria Living, Riwa</p>

        
          </div>
          <hr className='py-2' />
          <div className="mt-auto flex justify-around items-center pb-1">
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><MdOutlineEmail/></span> Email </button>
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><FaWhatsapp/></span> Whatsapp </button>
          </div>
      </div>
    </div>


     <div className="max-w-sm  rounded overflow-hidden bg-white  ">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}

        loop={true}
     
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/aerial-photography-villa-complex-luxury-resort_1205-9757.jpg?w=1380"
            alt="Placeholder 1"
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/aerial-photography-chinese-city_1127-3566.jpg?t=st=1714541284~exp=1714544884~hmac=4b1e8769050323b542cf8e56d297fb4501e7534d5563200feb57833fa8d30fb3&w=1380"
            alt="Placeholder 2"
            className="w-full  rounded-md "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1714541298~exp=1714544898~hmac=0e63c54ec340082a6da23edac33b26f322c3e19a615730bd354c5eeff311b4a6&w=1380"
            alt="Placeholder 3"
            className="w-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
      <div className=" ">
      <div className="p-4 md:p-6 lg:px-5 lg:py-0 ">
        <span className='text-xs bg-purple-100 px-2 py-1 font-opanSans'>Delevery Date: Q4 2025</span>
            
            <h3 className="text-xl font-semibold text-gray-600 mt-2 ">
             Celeste
            </h3>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>From</span>: 2,350,000 AED</p>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>Developer</span>: Wester Properties</p>
            <p className='text-[14px] text-gray-500 font-thin flex justify-start items-center py-3 gap-2'><span className='text-[15px] '><CiLocationOn/>  </span> Dubai, Jumeria Village Circle</p>

        
          </div>
          <hr className='py-2' />
          <div className="mt-auto flex justify-around items-center pb-1">
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><MdOutlineEmail/></span> Email </button>
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><FaWhatsapp/></span> Whatsapp </button>
          </div>
      </div>
    </div>


     <div className="max-w-sm  rounded overflow-hidden bg-white  ">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}

        loop={true}
     
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/photo-fence-two-people-walking-fenced-lawn-towards-old-building_181624-10028.jpg?t=st=1714541533~exp=1714545133~hmac=f1bb8e59252709d69d1f2f8007cb99333f6ff621376fc69a271fd51ee1531536&w=996"
            alt="Placeholder 1"
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/typical-norwegian-rural-cottage-with-breathtaking-landscape-beautiful-greenery-norway_181624-11492.jpg?t=st=1714541563~exp=1714545163~hmac=ba2d0648e5d3bf6849d0706aca04b39ba7e3c25cd4363e260342fc19b481cb2c&w=1380"
            alt="Placeholder 2"
            className="w-full  rounded-md "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/small-private-house-forest-tuddal-gaustatoppen-norway_181624-20194.jpg?t=st=1714541583~exp=1714545183~hmac=479594cfa79488f932a8d0c1fd6b328b45373d4f60bc55567675ce6d2c7452e3&w=1380"
            alt="Placeholder 3"
            className="w-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
      <div className=" ">
      <div className="p-4 md:p-6 lg:px-5 lg:py-0 ">
        <span className='text-xs bg-purple-100 px-2 py-1 font-opanSans'>Delevery Date: Q1 2028</span>
            
            <h3 className="text-xl font-semibold text-gray-600 mt-2 ">
             Farm Gerdens 2
            </h3>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>From</span>: 7,350,000 AED</p>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>Developer</span>: Emarar Properties</p>
            <p className='text-[14px] text-gray-500 font-thin flex justify-start items-center py-3 gap-2'><span className='text-[15px] '><CiLocationOn/></span> Dubai, The Valley, Farm Gardens 2</p>

        
          </div>
          <hr className='py-2' />
          <div className="mt-auto flex justify-around items-center pb-1">
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><MdOutlineEmail/></span> Email </button>
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><FaWhatsapp/></span> Whatsapp </button>
          </div>
      </div>
    </div>



     <div className="max-w-sm  rounded overflow-hidden bg-white  ">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}

        loop={true}
     
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/relax-area-resort_1150-10728.jpg?t=st=1714541760~exp=1714545360~hmac=b181219ef3ec979ca169b3d0606e738c5944cbb4b4e7c5c714a2cd1a43d79b4b&w=1380"
            alt="Placeholder 1"
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/3d-visualization-villa-dubai-modern-architecture-evening-illumination-facade_727625-88.jpg?w=740"
            alt="Placeholder 2"
            className="w-full  rounded-md "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/swimming-pool-resort_1150-10730.jpg?t=st=1714541798~exp=1714545398~hmac=c7f5f47968adee3d9bdb230c5c643bcd495ea27b9c4c9a8fb06ee8dc1e53e7b1&w=1380"
            alt="Placeholder 3"
            className="w-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
      <div className=" ">
      <div className="p-4 md:p-6 lg:px-5 lg:py-0 ">
        <span className='text-xs bg-purple-100 px-2 py-1 font-opanSans'>Delevery Date: Q2 2026</span>
            
            <h3 className="text-xl font-semibold text-gray-600 mt-2 ">
             Nature Damac Hills 2
            </h3>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>From</span>: 1,830,000 AED</p>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>Developer</span>: Damac Properties</p>
            <p className='text-[14px] text-gray-500 font-thin flex justify-start items-center py-3 gap-2'><span className='text-[15px] '><CiLocationOn/></span> Dubai, umm Suqeim, Damac Hills 2, Nature</p>

        
          </div>
          <hr className='py-2' />
          <div className="mt-auto flex justify-around items-center pb-1">
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><MdOutlineEmail/></span> Email </button>
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><FaWhatsapp/></span> Whatsapp </button>
          </div>
      </div>
    </div>


     <div className="max-w-sm  rounded overflow-hidden bg-white  ">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}

        loop={true}
     
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661455.jpg?t=st=1714541936~exp=1714545536~hmac=c1cb69b16a0bd9804e41364b5efb2e9f17785901b60b8e750c89c3be646a4e25&w=1380"
            alt="Placeholder 1"
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661463.jpg?t=st=1714541966~exp=1714545566~hmac=5b4d3d973f76bfd40042a7a5989de3c884f09b03cd6131507a6ead9f854fbdd6&w=1380"
            alt="Placeholder 2"
            className="w-full  rounded-md "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661462.jpg?t=st=1714541984~exp=1714545584~hmac=86c126f4611c8d47ce70105057982abc76cefec70821be5f586992c852775fca&w=1380"
            alt="Placeholder 3"
            className="w-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
      <div className=" ">
      <div className="p-4 md:p-6 lg:px-5 lg:py-0 ">
        <span className='text-xs bg-purple-100 px-2 py-1 font-opanSans'>Delevery Date: Q1 2026</span>
            
            <h3 className="text-xl font-semibold text-gray-600 mt-2 ">
             Vitaly Residance
            </h3>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>From</span>: 60,000 AED</p>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>Developer</span>: Segrex Development LLC</p>
            <p className='text-[14px] text-gray-500 font-thin flex justify-start items-center py-3 gap-2'><span className='text-[15px] '><CiLocationOn/></span> Dubai, Jumeria Village Circle, Vitality Residance</p>

        
          </div>
          <hr className='py-2' />
          <div className="mt-auto flex justify-around items-center pb-1">
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><MdOutlineEmail/></span> Email </button>
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><FaWhatsapp/></span> Whatsapp </button>
          </div>
      </div>
    </div>


     <div className="max-w-sm  rounded overflow-hidden bg-white  ">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}

        loop={true}
     
      >
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/wide-angle-shot-building-front-park_181624-9836.jpg?t=st=1714542181~exp=1714545781~hmac=229fc601adf7a603394989a02479e0a8344a5789123fe416d4512b2d2938fe71&w=996"
            alt="Placeholder 1"
            className="w-full rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/aerial-view-shot-garden-morro-vila-nova-de-gaia-portugal_181624-38739.jpg?t=st=1714542214~exp=1714545814~hmac=f95af79a5cf4667f54ab17dd153016e05e21c0f69f8b9d8df87a58be66cb5f54&w=996"
            alt="Placeholder 2"
            className="w-full  rounded-md "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/urban-city-architecture_649448-5343.jpg?t=st=1714542230~exp=1714545830~hmac=f4123b603778235dd5871feff63bc53d94239345c3f2f939f3bc9e89613d22b6&w=1380"
            alt="Placeholder 3"
            className="w-full rounded-md"
          />
        </SwiperSlide>
      </Swiper>
      <div className=" ">
      <div className="p-4 md:p-6 lg:px-5 lg:py-0 ">
        <span className='text-xs bg-purple-100 px-2 py-1 font-opanSans'>Delevery Date: Q1 2024</span>
            
            <h3 className="text-xl font-semibold text-gray-600 mt-2 ">
             Confidanet Lancster
            </h3>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>From</span>: 699,000 AED</p>
            <p className='text-[14px] text-gray-500'><span className='text-[15px] text-gray-700'>Developer</span>: Confident Group</p>
            <p className='text-[14px] text-gray-500 font-thin flex justify-start items-center py-3'><span className='text-[15px] '><CiLocationOn/></span> Dubai, Dubai Land, Liwan, Confident Lancster</p>

        
          </div>
          <hr className='py-2' />
          <div className="mt-auto flex justify-around items-center pb-1">
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><MdOutlineEmail/></span> Email </button>
      <button className='flex items-center justify-center gap-2 px-8 py-1 text-indigo-800  rounded-md font-opanSans bg-gray-100 '><span><FaWhatsapp/></span> Whatsapp </button>
          </div>
      </div>
    </div>

    

  

   </div>
  );
};

export default ExploreCarosel;
