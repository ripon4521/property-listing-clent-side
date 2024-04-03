import ExploreMore from "../../../components/ExploreMore/ExploreMore";
import PropertyCard from "../../Buy/PropertySale/PropertyCards/PropertyCard";
import PropertyPagination from "../../Buy/PropertySale/PropertyCards/PropertyPagination/PropertyPagination";
import CommerCialSideStore from "../CommercialSideStore/CommerCialSideStore";


const CommercialCards = () => {
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
<CommerCialSideStore/>


     
        </div>
      </div>
    );
};

export default CommercialCards;