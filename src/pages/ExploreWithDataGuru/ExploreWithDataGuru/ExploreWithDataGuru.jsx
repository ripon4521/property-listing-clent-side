import RouteSelection from "../../Buy/PropertySale/RouteSelection/RouteSelection";
import DataGuruBanner from "../DataGuruBanner/DataGuruBanner";


const ExploreWithDataGuru = () => {
    return (
        <div>
            <hr />

            <div className="my-5">
            <RouteSelection  title={"Explore Dubai"}/>
            </div>
            <DataGuruBanner/>
            
        </div>
    );
};

export default ExploreWithDataGuru;