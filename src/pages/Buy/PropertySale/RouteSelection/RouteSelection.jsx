import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";



const RouteSelection = ({title}) => {
    return (
        <div className="max-w-6xl mx-auto px-2">
            <p className="flex items-center text-[18px] text-gray-500 gap-2 font-opanSans"><FaHome></FaHome> <MdKeyboardArrowRight/> {title}</p>
        </div>
    );
};

export default RouteSelection;