import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";



const PropertyPagination = () => {
    return (
        <div className="flex justify-around items-center">
            <p className="px-2 py-2 cursor-pointer rounded-md border border-[3A307F] text-[3A307F] bg-gray-300"><FaChevronLeft/></p>
            <ul className="flex justify-center items-center gap-5">
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">1</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">2</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">3</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">4</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">5</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">6</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">7</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">8</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">9</li>
                <li className="px-3 hover:bg-gray-300 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] ">10</li>
            </ul>
            <p className="px-2 py-2 cursor-pointer rounded-md border border-[#3A307F] text-[#3A307F] "><FaChevronRight/></p>
            
        </div>
    );
};

export default PropertyPagination;