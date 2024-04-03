import TermsandCondition from "../../../../components/PropertyTerms&Condition/TermsandCondition";
import PropertyCards from "../PropertyCards/PropertyCards";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import PropertyStore from "../PropertyStore/PropertyStore";
import RouteSelection from "../RouteSelection/RouteSelection";


const PropertySale = () => {
    return (
        <div >
            <RouteSelection/>
            <PropertyHeader/>
            <PropertyStore/>
            <PropertyCards/>
            <TermsandCondition/>
        </div>
    );
};

export default PropertySale;