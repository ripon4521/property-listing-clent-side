import {
    createBrowserRouter,

  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import FindAgent from "../pages/FindAgent/FindAgent/FindAgent";
import Buy from "../pages/Buy/Buy/Buy";
import Rent from "../pages/Rent/Rent/Rent";
  


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },{
          path:'/findAgent',
          element:<FindAgent/>
        },{
          path:'/buy',
          element:<Buy/>
        },{
          path:'/rent',
          element:<Rent/>
        }
      ],
    },
  ]);