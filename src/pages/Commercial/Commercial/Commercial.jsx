import { Helmet } from "react-helmet-async";
import PropertyHeader from "../../Buy/PropertySale/PropertyHeader/PropertyHeader";
import PropertyStore from "../../Buy/PropertySale/PropertyStore/PropertyStore";
import RouteSelection from "../../Buy/PropertySale/RouteSelection/RouteSelection";
import CommertialBanner from "../CommercialBanner/CommertialBanner";
import CommercialCards from "../CommercialCards/CommercialCards";


const Commercial = () => {
    return (
        <div>
                 <Helmet>
        <title>Prperty Finder || Commercial</title>
      </Helmet>
           <CommertialBanner/>
           <RouteSelection title={"Properties commercial for rent in UAE"}/>
           <PropertyHeader title={"Commercial Properties for Rent in the UAE"} property={"13,539 properties"}/>
           <PropertyStore/>
           <CommercialCards/>
        </div>
    );
};

export default Commercial;