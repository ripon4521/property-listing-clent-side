import Banner from "../Banner/Banner";
import DawonloadApp from "../DawonloadApp/DawonloadApp";
import Navbar from "../Navbar/Navbar";
import SuperCharge from "../SuperCharge/SuperCharge";


const Home = () => {
    return (
        <div >
          <Navbar/>
          <Banner/>
          <SuperCharge/>
          <DawonloadApp/>
        </div>
    );
};

export default Home;