import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import DawonloadApp from "../DawonloadApp/DawonloadApp";
import ExploreNewProjects from "../ExploreNewProjects/ExploreNewProjects";
import LookingAdvertise from "../LookingAdvertise/LookingAdvertise";
import MarketExplore from "../MarketExplore/MarketExplore";
import SuperCharge from "../SuperCharge/SuperCharge";
import SatisfiedCustomer from "../SatisfiedCostomer/SatisfiedCustomer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Prperty Finder || Home</title>
      </Helmet>

      <Banner />
      <SuperCharge />
      <DawonloadApp />
      <ExploreNewProjects />
      <MarketExplore />
      <SatisfiedCustomer/>
      <LookingAdvertise />
      
    </div>
  );
};

export default Home;
