import PropertyCards from "../PropertyCards/PropertyCards";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import PropertyStore from "../PropertyStore/PropertyStore";
import RouteSelection from "../RouteSelection/RouteSelection";


const PropertySale = () => {
    return (
        <div className="max-w-6xl mx-auto px-2">
            <RouteSelection/>
            <PropertyHeader/>
            <PropertyStore/>
            <PropertyCards/>
        </div>
    );
};

export default PropertySale;