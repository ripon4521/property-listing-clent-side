import TermsandCondition from "../../../../components/PropertyTerms&Condition/TermsandCondition";
import PropertyCards from "../PropertyCards/PropertyCards";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import PropertyStore from "../PropertyStore/PropertyStore";
import RouteSelection from "../RouteSelection/RouteSelection";


const PropertySale = () => {
    return (
        <div >
            <RouteSelection title={"Properties for sale in UAE"} />
            <PropertyHeader title={"Properties for sale in UAE"} property={"165,419 properties"} />
            <PropertyStore/>
            <PropertyCards/>
            <TermsandCondition/>
        </div>
    );
};

export default PropertySale;