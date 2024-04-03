
// import DropDawon from "./BannerDropDawon/DropDawon";
import DropDawon from "../../Buy/BuyBanner/BannerDropDawon/DropDawon";
import PropertyTypeDropdawon from "../../Buy/BuyBanner/BannerDropDawon/PropertyTypeDropdawon";
import { CiSearch } from "react-icons/ci";
import BuyNowBannerButton from "../../Buy/BuyBanner/BuyNowBannerButton/BuyNowBannerButton";



const RentBanner = () => {
    return (
        <div > 
        <hr  className="m-3 mb-5"/>
            <div className="max-w-6xl mx-auto ">
            <div className="flex flex-wrap lg:flex-nowrap md:flex-row justify-center items-center gap-5  ">
               <div className=" justify-center items-center bg-gray-200 py-2 px-2 rounded-md hidden md:flex">
               <span className="text-2xl px-2 py-[7px] -mr-10 z-10 "><CiSearch/></span>
                <input type="text" name="" id="" className=" px-4 py-2 rounded-md w-96 placeholder:pl-5" placeholder="City, Coumminty or Building "/>
               </div>
                <DropDawon title={"Rent"} item1={"Rent"} item2={"Buy"} item3={"Commercial Rent"} item4={"Commercial Rent"} />
              <PropertyTypeDropdawon title={"Property Type"} item1={"Property Type"} item2={"Apartment"} item3={"Villa"} item4={"Townhouse"} item5={"Penthouse"} item6={"Component"}
              item7={"Duplex"} item8={"Full Floor"} item9={"Half Floor"} item10={"Whole Bulding"} item11={"Land"} item12={"Black Sale Unit"} item13={"Bunglow"}/>
              
              <PropertyTypeDropdawon title={"Beds & Baths"} item1={"Property Type"} item2={"Apartment"} item3={"Villa"} item4={"Townhouse"} item5={"Penthouse"} item6={"Component"}
              item7={"Duplex"} item8={"Full Floor"} item9={"Half Floor"} item10={"Whole Bulding"} item11={"Land"} item12={"Black Sale Unit"} item13={"Bunglow"}/>

              <PropertyTypeDropdawon title={"Price"} item1={"Property Type"} item2={"Apartment"} item3={"Villa"} item4={"Townhouse"} item5={"Penthouse"} item6={"Component"}
              item7={"Duplex"} item8={"Full Floor"} item9={"Half Floor"} item10={"Whole Bulding"} item11={"Land"} item12={"Black Sale Unit"} item13={"Bunglow"}/>

              <PropertyTypeDropdawon title={"More Filters"} item1={"Property Type"} item2={"Apartment"} item3={"Villa"} item4={"Townhouse"} item5={"Penthouse"} item6={"Component"}
              item7={"Duplex"} item8={"Full Floor"} item9={"Half Floor"} item10={"Whole Bulding"} item11={"Land"} item12={"Black Sale Unit"} item13={"Bunglow"}/>
      

             

            <input className="px-4 py-2 bg-red-500 rounded-md font-semibold  cursor-pointer text-white " type="submit" value={"Find"} name="" id="" />
      
            </div>
            </div>
            <div className="max-w-6xl mx-auto">
                <BuyNowBannerButton/>
            </div>
            <hr className="my-5" />
            
        </div>
    );
};

export default RentBanner;