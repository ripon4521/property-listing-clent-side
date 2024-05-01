import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
//   const [swiperRef, setSwiperRef] = useState(null);


 

  return (
    <>
      <Swiper
      breakpoints={{
        425: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
        // onSwiper={setSwiperRef}
        slidesPerView={3}
        // centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='h-full'>
        <img className='rounded-md' src="https://img.freepik.com/free-photo/abu-dhabi-seascape-with-skyscrapers_181624-11582.jpg?t=st=1714538520~exp=1714542120~hmac=a8afb62dcd8391a683be9578cf1c2e9e5e634eff94f5f6a1cfaefd266a17c8a1&w=1380" alt="" />
        <h1 className='text-2xl font-opanSans -mt-8 text-white font-semibold drop-shadow-md'>Abu Dhabi </h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='h-full'>
        <img className='rounded-md' src="https://img.freepik.com/free-photo/cityscape-singapore-city-skyline_74190-6349.jpg?t=st=1714538581~exp=1714542181~hmac=2ba102be0682fd92ed0de546bcfebd0f0e61543331f9eea51e4749264dc57968&w=1380" alt="" />
        <h1 className='text-2xl font-opanSans -mt-8 text-white font-semibold drop-shadow-md'>Dubai</h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='h-full'>
        <img className='rounded-md' src="https://img.freepik.com/free-photo/park-lujiazui-financial-centre-shanghai-china_1127-3135.jpg?t=st=1714538607~exp=1714542207~hmac=8f3ecc4280df972626734b6b74a5b68017719ade159f3901962f342a0f82fe9b&w=1380" alt="" />
        <h1 className='text-2xl font-opanSans -mt-8 text-white font-semibold drop-shadow-md'>Sharaj</h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='h-full'>
        <img className='rounded-md' src="https://img.freepik.com/free-photo/shanghai-aerial-dusk_649448-3739.jpg?t=st=1714538680~exp=1714542280~hmac=4a83697748ffe11b05f3e825a493e6bd9698ba79f752fcec0776d7708d6a3041&w=1380" alt="" />
        <h1 className='text-2xl font-opanSans -mt-8 text-white font-semibold drop-shadow-md'>Ras AI Khaimah</h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='h-full'>
        <img className='rounded-md' src="https://img.freepik.com/free-photo/panorama-waterfront-blue-financial-metropolis-river_1417-1318.jpg?t=st=1714538717~exp=1714542317~hmac=dd8f29c7df6fb5913ce5003a3228bdce9536e87f8ca9c204b8c2a742c5e3015f&w=1380" alt="" />
        <h1 className='text-2xl font-opanSans -mt-8 text-white font-semibold drop-shadow-md'>Ajman</h1>
        </div> </SwiperSlide>
        
      </Swiper>

     
    </>
  );
}
