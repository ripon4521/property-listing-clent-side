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
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-[#F7F7FC]'>
        <img className='rounded-md' src="https://www.propertyfinder.ae/static/images/homepage/dubai.jpg" alt="" />
        <h1 className='text-2xl font-opanSans mt-2 font-semibold drop-shadow-md'>Abu Dhabi </h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='bg-[#F7F7FC]'>
        <img className='rounded-md' src="https://www.propertyfinder.ae/static/images/homepage/abu_dhabi.jpg" alt="" />
        <h1 className='text-2xl font-opanSans mt-2 font-semibold drop-shadow-md'>Dubai</h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='bg-[#F7F7FC]'>
        <img className='rounded-md' src="https://www.propertyfinder.ae/static/images/homepage/sharjah.jpg" alt="" />
        <h1 className='text-2xl font-opanSans mt-2 font-semibold drop-shadow-md'>Sharaj</h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='bg-[#F7F7FC]'>
        <img className='rounded-md' src="https://www.propertyfinder.ae/static/images/homepage/ras_al_khaimah.jpg" alt="" />
        <h1 className='text-2xl font-opanSans mt-2 font-semibold drop-shadow-md'>Ras AI Khaimah</h1>
        </div> </SwiperSlide>
        <SwiperSlide><div className='bg-[#F7F7FC]'>
        <img className='rounded-md' src="https://www.propertyfinder.ae/static/images/homepage/ajman.jpg" alt="" />
        <h1 className='text-2xl font-opanSans mt-2 font-semibold drop-shadow-md'>Ajman</h1>
        </div> </SwiperSlide>
        
      </Swiper>

     
    </>
  );
}
