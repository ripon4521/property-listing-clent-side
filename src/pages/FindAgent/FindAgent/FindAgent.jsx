import { Helmet } from "react-helmet-async";
import Agent from "../Agent/Agent";
import FindAgentBanner from "../FindAgentBanner/FindAgentBanner";
import SuperAgent from "../SupportAgent/SuperAgent";


const FindAgent = () => {
    return (
        <div>
               <Helmet>
        <title>Prperty Finder || Find Agent</title>
      </Helmet>
          <FindAgentBanner/>
          <SuperAgent/>
      
          <Agent/>
         
  
          
        </div>
    );
};

export default FindAgent;