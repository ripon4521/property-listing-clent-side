import { FcIdea } from "react-icons/fc";
import  DataGuruDropDawon  from "./DataGuruDropDawon";

const DataGuruBanner = () => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h3 className="text-center text-2xl font-opanSans font-semibold drop-shadow-md text-gray-600 flex justify-center gap-5 items-center">Explore <DataGuruDropDawon
             item5={"Al ain"} item4={"Abu Dhabi"} item3={"Sharj Ali"} item2={"Ajman"} item1={"Dubai"} title={"Dubai"}/></h3>
            <h1 className="text-center text-4xl font-opanSans font-bold drop-shadow-md flex justify-center items-center gap-2 my-5" >Data <span className="text-yellow-400">Guru</span> <FcIdea className="text-red-500"/></h1>
            <p className="text-center font-opanSans text-[18px] text-gray-600 md:w-[650px] mx-auto px-2 md:px-0">Explore house prices, community and residential insights, to make informed decisions when buying or renting property in UAE.</p>
        </div>
    );
};

export default DataGuruBanner