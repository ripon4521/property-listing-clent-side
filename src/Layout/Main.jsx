import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-white">
     
         <Outlet></Outlet>
         

        </div>
    );
};

export default Main;