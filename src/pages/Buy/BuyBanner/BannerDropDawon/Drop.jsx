// Tab.js
import  { useState } from "react";

const  Drop  = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
    // Add more tabs as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4">
            <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md ${
                    activeTab === index
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-3/4 mt-4 lg:mt-0">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">{tabs[activeTab].title}</h2>
              <p>{tabs[activeTab].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drop;
