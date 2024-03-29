import Banner from "../Banner/Banner";
import DawonloadApp from "../DawonloadApp/DawonloadApp";
import ExploreNewProjects from "../ExploreNewProjects/ExploreNewProjects";
import LookingAdvertise from "../LookingAdvertise/LookingAdvertise";
import MarketExplore from "../MarketExplore/MarketExplore";
import SuperCharge from "../SuperCharge/SuperCharge";

const Home = () => {
  return (
    <div>

      <Banner />
      <SuperCharge />
      <DawonloadApp />
      <ExploreNewProjects />
      <MarketExplore />
      <LookingAdvertise />

    </div>
  );
};

export default Home;
