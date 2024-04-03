
import { Helmet } from "react-helmet-async";
import RentCondition from "../../../components/RentCondition/RentCondition";
import PropertyHeader from "../../Buy/PropertySale/PropertyHeader/PropertyHeader";
import PropertyStore from "../../Buy/PropertySale/PropertyStore/PropertyStore";
import RouteSelection from "../../Buy/PropertySale/RouteSelection/RouteSelection";
import RentBanner from "../RentBanner/RentBanner";
import RentCards from "../RentCards/RentCards";


const Rent = () => {
    return (
        <div>
                 <Helmet>
        <title>Prperty Finder || Rent</title>
      </Helmet>
           
     <RentBanner/>
     <RouteSelection title={"Properties commercial for rent in UAE"}/>
     <PropertyHeader title={"Properties for rent in UAE"} property={"96,113 properties"}/>
     <PropertyStore/>
    <RentCards/>
    <RentCondition/>
        </div>
    );
};

export default Rent;