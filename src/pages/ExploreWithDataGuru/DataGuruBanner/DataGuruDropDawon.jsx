import { useState } from "react";


const DataGuruDropDawon = ({title, item1, item2, item3, item4,item5}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div>
              <div className="relative inline-block text-left">
      <button
        type=""
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full  shadow-sm text-purple-500   font-medium "
      >
      {title}
        {/* Heroicon name: solid/chevron-down */}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L10 5.414 5.707 9.707a1 1 0 0 1-1.414-1.414l5-5A1 1 0 0 1 10 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 h-40 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="max-w-xs overflow-x-auto flex flex-col">
              <a href="#" className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{item1}</a>
              <a href="#" className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{item2}</a>
              <a href="#" className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{item3}</a>
              <a href="#" className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{item4}</a>
              <a href="#" className="inline-block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">{item5}</a>
   

        
             
              {/* Add more items as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
            

        
        </div>
    );
};

export default DataGuruDropDawon;