
import { FcIdea } from "react-icons/fc";

const DataGuruBanner = () => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h3 className="text-center text-2xl font-opanSans font-semibold drop-shadow-md text-gray-600">Explore Dubai</h3>
            <h1 className="text-center text-4xl font-opanSans font-bold drop-shadow-md flex justify-center items-center gap-2 my-5" >DataGuru<FcIdea className="text-red-500"/></h1>
            <p className="text-center font-opanSans text-[18px] text-gray-600 md:w-[650px] mx-auto px-2 md:px-0">Explore house prices, community and residential insights, to make informed decisions when buying or renting property in UAE.</p>
        </div>
    );
};

export default DataGuruBanner;