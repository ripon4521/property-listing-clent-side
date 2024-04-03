import PropertyFilter from "../PropertyFilter/PropertyFilter";


const PropertyHeader = () => {
    return (
        <div className="max-w-6xl mx-auto px-2">
            <h1 className="text-2xl font-opanSans mt-5 font-semibold drop-shadow-md">Properties for sale in UAE</h1>
            <p className="mt-2 font-opanSans text-gray-500">165,419 properties</p>
          <PropertyFilter/>
        </div>
    );
};

export default PropertyHeader;