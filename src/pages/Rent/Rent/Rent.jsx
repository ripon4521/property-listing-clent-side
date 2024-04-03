
import RentCondition from "../../../components/RentCondition/RentCondition";
import PropertyHeader from "../../Buy/PropertySale/PropertyHeader/PropertyHeader";
import PropertyStore from "../../Buy/PropertySale/PropertyStore/PropertyStore";
import RentBanner from "../RentBanner/RentBanner";
import RentCards from "../RentCards/RentCards";


const Rent = () => {
    return (
        <div>
     <RentBanner/>
     <PropertyHeader title={"Properties for rent in UAE"} property={"96,113 properties"}/>
     <PropertyStore/>
    <RentCards/>
    <RentCondition/>
        </div>
    );
};

export default Rent;