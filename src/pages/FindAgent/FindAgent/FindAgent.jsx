import Agent from "../Agent/Agent";
import FindAgentBanner from "../FindAgentBanner/FindAgentBanner";
import SuperAgent from "../SupportAgent/SuperAgent";


const FindAgent = () => {
    return (
        <div>
          <FindAgentBanner/>
          <SuperAgent/>
      
          <Agent/>
         
  
          
        </div>
    );
};

export default FindAgent;