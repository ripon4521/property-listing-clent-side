import { useState } from "react";
import ExploreTabCar from "../ExploreTabCard/ExploreTabCar";





const ExploreProjectsTab = () => {
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabData = [
    { label: 'Dubai', content:<ExploreTabCar/>},
    { label: 'Abu_Dhabi', content: <ExploreTabCar/> },
    { label: 'Sharah', content:<ExploreTabCar/>},
    { label: 'Ras_AI_Khaimah', content:<ExploreTabCar/>}
  ];

    return (
        <div className="max-w-7xl mx-auto my-20 px-2 md:px-0 ">
           <div className="md:px-10 lg:px-0">  
           <h1 className="text-4xl font-opanSans font-bold drop-shadow-md ">Explore new projects in the UAE</h1>
          <p className=" my-2 font-opanSans text-gray-400 drop-shadow-md">Discover the latest off-plan properties and be informed.</p>
            </div>

            <div role="tablist" className="tabs  tabs-lifted font-opanSans my-5 text-xl  font-semibold drop-shadow-md px-0 md:px-10  lg:pl-0 ">
      {tabData.map((tab, index) => (
        <a
          key={index}
          role="tab"
          className={`tab ${index === activeTab ? 'tab-active ' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </a>
      ))}
      {tabData.map((tab, index) => (
        <div
          key={index}
          id={`tab${index + 1}`}
          className={`tab-content ${index === activeTab ? 'tab-active' : ''}`}
        >
          {tab.content}
        </div>
      ))}
    </div>
        </div>
    );
};



export default ExploreProjectsTab;



// const Tabs = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="tabs-container">
//       <div className="flex tabs tabs-lifted font-opanSans" >
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`cursor-pointer p-4  ${
//               activeTab === index ? ' ' : ''
//             }`}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab.title}
//           </div>
//         ))}
//       </div>
//       <div className="tab-content p-4 border border-gray-300 mt-4">
//         {tabs[activeTab].content}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const tabs = [
//     { title: 'Dubai', content: <div>Content for Tab 1</div> },
//     { title: 'Abu Dhabi', content: <div>Content for Tab 2</div> },
//     { title: 'AS AI SURAJ', content: <div>Content for Tab 3</div> },
//     { title: 'sURAJ', content: <div>Content for Tab 4</div> },
   
//   ];

//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold my-4">Responsive Tabs</h1>
//       <Tabs tabs={tabs} />
//     </div>
//   );
// };

// export default App;
