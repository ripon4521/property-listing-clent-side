import PropertyPriceAreea from "../PropertyPriceArea/PropertyPriceAreea";
import MarketSlider from "./MarketSlider/MarketSlider";
import { FcIdea } from "react-icons/fc";



const MarketExplore = () => {
    return (
       <div className="bg-[#F7F7FC] py-5 mt-10">
         <div className="max-w-7xl mx-auto mt-20 ">
            <h1 className="text-4xl font-bold font-opanSans drop-shadow-md flex items-center">Explore the UAE market <FcIdea className="text-5xl"/></h1>
            <p className="font-opanSans drop-shadow-md mt-2 text-gray-500">Dive deep into the UAE’s real estate market with prices, transaction histories and community insights to help you make an educated decision.</p>

            <MarketSlider/>
            <PropertyPriceAreea/>
        </div>
       </div>
    );
};

export default MarketExplore;