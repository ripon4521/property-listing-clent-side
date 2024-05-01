import{ useState } from 'react';
import PropertyMap from './PropertyMap';

const PropertyPriceAreea = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    const tabData = [
      { label: 'Rent', content:<PropertyMap/> },
      { label: 'Buy', content: <PropertyMap/>},
   
    ];



    return (
        <div className='max-w-7xl mx-auto   '>
            <h1 className='text-3xl font-opanSans px-5 md:px-0 md:pt-10'><span className='text-yellow-400 font-bold drop-shadow-md'>UAE</span> property prices by area</h1>
            <div role="tablist" className="tabs tabs-lifted font-opanSans my-5 text-xl font-semibold drop-shadow-md md:pl-20  lg:pl-0 mt-10 pl-5 ">
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

export default PropertyPriceAreea;