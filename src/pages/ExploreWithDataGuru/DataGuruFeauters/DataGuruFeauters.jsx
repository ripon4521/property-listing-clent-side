import DataGuruCarusel from "../DataGuruCarusel/DataGuruCarusel";


const DataGuruFeauters = () => {
    return (
        <div className=" bg-[#F7F7F7] my-20 ">
          <div className="max-w-7xl mx-auto py-20">
          <h1 className="text-xl font-opanSans font-semibold drop-shadow-md mb-5 text-center md:text-center lg:text-start">Features powered by <span className="text-yellow-400">DataGuru</span></h1>
            <div className="md:px-10 lg:px-0 px-16">
          <DataGuruCarusel/>
           
        
            </div>
          </div>
            
        </div>
    );
};

export default DataGuruFeauters;