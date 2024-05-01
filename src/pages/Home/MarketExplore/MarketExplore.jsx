import PropertyPriceAreea from "../PropertyPriceArea/PropertyPriceAreea";
import MarketSlider from "./MarketSlider/MarketSlider";
import { FcIdea } from "react-icons/fc";



const MarketExplore = () => {
    return (
       <div className="bg-[#F7F7FC] py-20 md:mt-10 mt-5  ">
         <div className="max-w-7xl mx-auto md:mt-20 ">
            <div className="px-5">
            <h1 className="text-4xl font-bold font-opanSans drop-shadow-md md:flex items-center gap-1 ">Explore the <span className="text-yellow-400 px-2">UAE</span> market <FcIdea className="text-5xl"/></h1>
            <p className="font-opanSans drop-shadow-md mt-2 text-gray-500">Dive deep into the UAE’s real estate market with prices, transaction histories and community insights to help you make an educated decision.</p>
            </div>

            <MarketSlider/>
            {/* <PropertyPriceAreea/> */}
        </div>
       </div>
    );
};

export default MarketExplore;