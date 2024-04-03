import ExploreMore from "../../../components/ExploreMore/ExploreMore";
import RentSideStore from "../RentSideStore/RentSideStore";
import PropertyCard from "../../Buy/PropertySale/PropertyCards/PropertyCard";
import PropertyPagination from "../../Buy/PropertySale/PropertyCards/PropertyPagination/PropertyPagination";


const RentCards = () => {
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

<RentSideStore/>

     
        </div>
      </div>
    );
};

export default RentCards;