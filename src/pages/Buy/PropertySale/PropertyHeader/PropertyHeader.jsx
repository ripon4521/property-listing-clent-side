import PropertyFilter from "../PropertyFilter/PropertyFilter";


const PropertyHeader = ({title, property}) => {
    return (
        <div className="max-w-6xl mx-auto px-2">
            <h1 className="text-2xl font-opanSans mt-5 font-semibold drop-shadow-md">{title}</h1>
            <p className="mt-2 font-opanSans text-gray-500"> {property}</p>
          <PropertyFilter/>
        </div>
    );
};

export default PropertyHeader;