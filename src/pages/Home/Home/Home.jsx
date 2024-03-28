import Banner from "../Banner/Banner";
import DawonloadApp from "../DawonloadApp/DawonloadApp";
import ExploreCarosel from "../ExploreNewProjects/ExploreCarusel/ExploreCarosel";
import ExploreNewProjects from "../ExploreNewProjects/ExploreNewProjects";
import Footer from "../Footer/Footer";
import LookingAdvertise from "../LookingAdvertise/LookingAdvertise";
import MarketExplore from "../MarketExplore/MarketExplore";
import Navbar from "../Navbar/Navbar";
import PropertyPriceAreea from "../PropertyPriceArea/PropertyPriceAreea";
import SuperCharge from "../SuperCharge/SuperCharge";


const Home = () => {
    return (
        <div >
          <Navbar/>
          <Banner/>
          <SuperCharge/>
          <DawonloadApp/>
          <ExploreNewProjects/>
          <MarketExplore/>
          {/* <PropertyPriceAreea/> */}
          <LookingAdvertise/>
          <Footer/>
         
        </div>
    );
};

export default Home;