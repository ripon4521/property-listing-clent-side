
import { Helmet } from "react-helmet-async";
import BuyBanner from "../BuyBanner/BuyBanner";
import PropertySale from "../PropertySale/PropertySale/PropertySale";


const Buy = () => {
    return (
        <div>
            <Helmet>
        <title>Prperty Finder || Buy</title>
      </Helmet>
           <BuyBanner/>
           <PropertySale/>
          
        </div>
    );
};

export default Buy;