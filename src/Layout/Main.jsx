import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-white">
     <Navbar/>
         <Outlet></Outlet>
         <Footer/>
         

        </div>
    );
};

export default Main;