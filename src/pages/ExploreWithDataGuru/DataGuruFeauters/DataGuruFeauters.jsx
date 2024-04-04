import DataGuruFeaturesCard from "./DataGuruFeautersCard/DataGuruFeaturesCard";

const DataGuruFeauters = () => {
    return (
        <div className=" bg-[#F7F7F7] my-20 ">
          <div className="max-w-7xl mx-auto py-20">
          <h1 className="text-xl font-opanSans font-semibold drop-shadow-md mb-5 text-center md:text-center lg:text-start">Features powered by <span className="text-yellow-400">DataGuru</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-24 lg:grid-cols-4 gap-5 px-20 lg:px-0">
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
            <DataGuruFeaturesCard/>
        
            </div>
          </div>
            
        </div>
    );
};

export default DataGuruFeauters;