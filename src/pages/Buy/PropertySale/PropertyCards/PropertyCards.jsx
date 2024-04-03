import PropertyCard from "./PropertyCard";
import PropertyCardsStore from "./PropertyCardsStore";
import PropertyPagination from "./PropertyPagination/PropertyPagination";


const PropertyCards = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 ">
<div>
    
<PropertyCard/>
<PropertyCard/>
<PropertyCard/>
<PropertyCard/>
<PropertyCard/>
<PropertyCard/>
<PropertyCard/>
<PropertyCard/>
<PropertyPagination/>
</div>

<PropertyCardsStore/>

     
        </div>
    );
};

export default PropertyCards;