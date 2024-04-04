import RouteSelection from "../../Buy/PropertySale/RouteSelection/RouteSelection";
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
        
=
        </div>
    );
};

export default ExploreWithDataGuru;