import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import PropertyDropDawon from "../PropertyDropDawon/PropertyDropDawon";


const PropertyFilter = () => {
    return (
        <div className=" items-center justify-between gap-5 my-5 hidden md:flex">
           <div className="flex items-center gap-5">
           <button className="flex justify-center items-center font-opanSans px-2 py-2 border border-blue-500 rounded-md gap-2 text-purple-500 font-semibold "><CiLocationOn/>Map view</button>
            <button className="flex justify-center items-center font-opanSans px-2 py-2 border border-blue-500 rounded-md gap-2 text-purple-500 font-semibold "><HiOutlineBellAlert/>Create alert</button>
           </div>
            <div className="flex justify-center items-center gap-5">
                <p className="font-opanSans">Sort by:</p>
                <PropertyDropDawon/>
            </div>
        </div>
    );
};

export default PropertyFilter;