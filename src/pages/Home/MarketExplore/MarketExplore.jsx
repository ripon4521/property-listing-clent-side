import MarketSlider from "./MarketSlider/MarketSlider";


const MarketExplore = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-4xl font-bold font-opanSans drop-shadow-md">Explore the UAE market</h1>
            <p className="font-opanSans drop-shadow-md mt-2 text-gray-500">Dive deep into the UAE’s real estate market with prices, transaction histories and community insights to help you make an educated decision.</p>

            <MarketSlider/>
        </div>
    );
};

export default MarketExplore;