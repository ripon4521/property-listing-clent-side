
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./Style.css"
import DataGuruFeaturesCard from "../DataGuruFeauters/DataGuruFeautersCard/DataGuruFeaturesCard";



const DataGuruCarusel=()=> {
  
    // console.log(data);

    var settings = {
      dots: true,
   
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      swipeToSlide: true,
        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };



    return (
      <div className=" max-w-7xl mx-auto">

        
        <Slider {...settings}>
           <DataGuruFeaturesCard/>
           <DataGuruFeaturesCard/>
           <DataGuruFeaturesCard/>
           <DataGuruFeaturesCard/>
           <DataGuruFeaturesCard/>
           <DataGuruFeaturesCard/>
         
        </Slider>
      </div>
    );
  }

export default DataGuruCarusel