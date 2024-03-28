import ExploreProjectsTab from "./ExploreProjectsTab/ExploreProjectsTab";


const ExploreNewProjects = () => {
    return (
        <div className="max-w-7xl mx-auto">
          
          <ExploreProjectsTab/>
          <button className="px-2 py-2 bg-gray-100 hover:bg-gray-200 font-semibold text-purple-600 text-xl font-opanSans rounded-md flex max-w-7xl mx-auto"> See all new  Projects</button>
            
        </div>
    );
};

export default ExploreNewProjects;