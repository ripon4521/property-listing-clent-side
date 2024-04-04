import { useState } from "react";
import TabData1 from "./TabData/TabData1/TabData1";


const SuperCharge = () => {
    const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabData = [
    { label: 'Rent', content:<TabData1/> },
    { label: 'Buy', content: <TabData1/> },
    { label: 'Invest', content: <TabData1/> }
  ];

    return (
        <div className="max-w-7xl mx-auto my-20 px-5 md:px-0 ">
           <div className="md:px-20 lg:px-0">  <h1 className="text-4xl font-opanSans font-bold drop-shadow-md">Supercharge your <span className="text-yellow-400">search</span></h1>
            <p className="text-xl font-opanSans mt-1 text-gray-500 drop-shadow-md">Explore the most home listings in the UAE. With the most reliable information. All at your fingertips.</p></div>

            <div role="tablist" className="tabs tabs-lifted font-opanSans my-5 text-xl font-semibold drop-shadow-md md:pl-20  lg:pl-0">
      {tabData.map((tab, index) => (
        <a
          key={index}
          role="tab"
          className={`tab ${index === activeTab ? 'tab-active' : ''}`}
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



export default SuperCharge;