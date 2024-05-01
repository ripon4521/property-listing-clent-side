import{ useState } from 'react';


const ExploremorePropertise = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    const tabData = [
      { label: 'Rent', content:"Conent"},
      { label: 'Buy', content: "Content"},
   
    ];



    return (
        <div className='max-w-7xl mx-auto  '>
            <h1 className='text-4xl font-opanSans px-5 md:px-0 font-bold'>Explore more <span className='text-yellow-400'>properties</span></h1>
            <div role="tablist" className="tabs tabs-lifted font-opanSans my-5 text-xl font-semibold drop-shadow-md md:pl-20  lg:pl-0 mt-10 pl-5 md:pl-0">
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
            <div className='flex gap-3 items-center py-2 '>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Dubai</p>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Abu dhabi</p>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Sharjah</p>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Ajman</p>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Ras AI Khaimah</p>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Al Ain</p>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Fujairah</p>
                <p className='text-[18px] font-thin px-3 cursor-pointer hover:bg-slate-200  border border-gray-300 rounded-md'>Umm AL Quiwan</p>
            </div>
          {tab.content}
        </div>
      ))}
    </div>
        </div>
    );
};

export default ExploremorePropertise;