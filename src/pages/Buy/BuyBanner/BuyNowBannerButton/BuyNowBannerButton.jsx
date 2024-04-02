import { MdVerifiedUser } from "react-icons/md";
import { TbBrandSupernova } from "react-icons/tb";
import { IoAlertCircleOutline } from "react-icons/io5";





const BuyNowBannerButton = () => {
    return (
        <div className="flex justify-start items-center gap-5 my-5 md:px-16 lg:px-0 px-5">
            <button className="flex justify-center items-center px-2 py-2 gap-2 bg-gray-300 rounded-md font-opanSans font-semibold"><MdVerifiedUser/>Verified</button>
            <button className="flex justify-center items-center px-2 py-2 gap-2 bg-gray-300 rounded-md font-opanSans font-semibold"><TbBrandSupernova/>SuperAgent</button>
            <h1 className="flex justify-center items-center gap-2 font-opanSans font-semibold"> <IoAlertCircleOutline className="text-xl"/>What's this?</h1>
        </div>
    );
};

export default BuyNowBannerButton;