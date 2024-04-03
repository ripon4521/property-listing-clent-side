import ExploreMore from "../../../../components/ExploreMore/ExploreMore";
import PropertyCard from "./PropertyCard";
import PropertyCardsStore from "./PropertyCardsStore";
import PropertyPagination from "./PropertyPagination/PropertyPagination";


const PropertyCards = () => {
    return (
      <div className="max-w-6xl mx-auto px-2">
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
<ExploreMore/>
</div>

<PropertyCardsStore/>

     
        </div>
      </div>
    );
};

export default PropertyCards;