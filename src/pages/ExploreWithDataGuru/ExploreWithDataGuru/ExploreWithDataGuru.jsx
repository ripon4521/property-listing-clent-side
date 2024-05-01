import RouteSelection from "../../Buy/PropertySale/RouteSelection/RouteSelection";
import PropertyMap from "../../Home/PropertyPriceArea/PropertyMap";
import PropertyPriceAreea from "../../Home/PropertyPriceArea/PropertyPriceAreea";
import DataGuruBanner from "../DataGuruBanner/DataGuruBanner";
import DataGuruCarusel  from "../DataGuruCarusel/DataGuruCarusel";
import DataGuruFeauters from "../DataGuruFeauters/DataGuruFeauters";



const ExploreWithDataGuru = () => {
    return (
        <div>
            <hr />

            <div className="my-5">
            <RouteSelection  title={"Explore Dubai"}/>
            </div>
            <DataGuruBanner/>
            <DataGuruFeauters/>
            <div className="max-w-7xl mx-auto">
                <PropertyPriceAreea/>
            
            </div>
        
=
        </div>
    );
};

export default ExploreWithDataGuru;