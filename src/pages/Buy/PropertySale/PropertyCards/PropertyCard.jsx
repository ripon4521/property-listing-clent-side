import img from "../../../../../public/Property/Link → 11314283-018a8o.webp.png"
import { CiLocationOn } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaLandmark } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";











const PropertyCard = () => {
    return (
        <div className="my-5 border border-gray-300  rounded-md ">
            <div className="flex flex-col md:flex-row gap-5 " >
            <img src={img} alt="" />
            <div className="px-2">
                <p className="font-opanSans text-gray-400 mt-5">Villa</p>
                <h1 className="text-2xl font-opanSans font-semibold drop-shadow-md my-2">5,700,000 AED</h1>
                <h2 className="text-xl font-opanSans">Sold Fully Furnished | Private Plot | VOT</h2>
                <div className="mt-14">
                    <p className="flex items-center font-opanSans"><CiLocationOn/>Lila, Arabian Ranches 2, Dubai</p>
                </div>
                
                <div className="flex gap-5 pb-1 mt-3">
                    <p className="flex justify-center items-center gap-2 font-opanSans "><FaBed/>5</p>
                    <p className="flex justify-center items-center gap-2 font-opanSans "><FaBath/>4</p>
                    <p className="flex justify-center items-center gap-2 font-opanSans "><FaLandmark/>3250sqft</p>
                </div>
            </div>

                    
            </div>
            <hr />
            <div className="bg-gray-100 flex justify-between items-center py-2 px-2">
                        <p className="flex justify-start ml-2 gap-2 items-center py-2"><FaRegUserCircle className="text-3xl"/>Listed 5 days ago</p>
                        <div className="flex items-center gap-5">
                            <p className="flex justify-center items-center px-2 py-2 border border-[#3A307F] text-[#3A307F] rounded-md font-opanSans  cursor-pointer font-semibold  gap-2"><IoIosCall/>Call</p>
                            <p className=" hidden md:flex justify-center items-center px-2 py-2 border border-[#3A307F] text-[#3A307F] rounded-md font-opanSans  cursor-pointer font-semibold gap-2"><MdEmail/>Email</p>
                            <p className="flex justify-center items-center px-2 py-2 border border-[#3A307F] text-[#3A307F] rounded-md font-opanSans cursor-pointer font-semibold gap-2"><FaWhatsapp/>WWhtasapp</p>
                            
                            <div className=" justify-center items-center hidden md:flex gap-2">
                                <p className="font-semibold  text-xl px-2 py-2 border border-[#3A307F] text-[#3A307F] rounded-md font-opanSans  cursor-pointer"><FaRegHeart/></p>
                                <p className="font-semibold  text-xl px-2 py-2 border border-[#3A307F] text-[#3A307F] rounded-md font-opanSans  cursor-pointer"><CiBoxList/></p>
                            </div>
                        </div>

                    </div>

        </div>

    );
};

export default PropertyCard;