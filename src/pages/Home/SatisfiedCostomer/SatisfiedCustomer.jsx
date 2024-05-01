import CountUp from 'react-countup';

const SatisfiedCustomer = () => {
    return (
        <div>
            <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Title */}
    <h2 className="text-center text-3xl font-bold md:text-4xl font-opanSans drop-shadow-md">Trusted By Our Happy <span className="text-yellow-400">Customer</span></h2>
    <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm font-opanSans text-[#636262] sm:text-base md:mb-12 lg:mb-16">Customer satisfied is our satisfied . Our mission is coustomer satisfied.</p>
    {/* Content */}
    <div className="mx-auto flex w-full max-w-3xl flex-col flex-wrap justify-between gap-5 bg-[#f2f2f7] px-16 py-8 sm:flex-row md:gap-6">
      {/* Item */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm uppercase font-opanSans"> Total Property</p>
        <h4 className="text-xl font-bold sm:text-2xl md:text-3xl drop-shadow-md font-opanSans text-yellow-400"><CountUp end={200} duration={20} />+
</h4>
      </div>
      {/* Item */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm uppercase">Total Customer</p>
        <h4 className="text-xl font-bold sm:text-2xl md:text-3xl drop-shadow-md text-yellow-400"><CountUp end={100} duration={20} /></h4>
      </div>
      {/* Item */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-opanSans uppercase ">CUSTOMERS</p>
        <h4 className="text-xl font-bold sm:text-2xl font-opanSans md:text-3xl text-yellow-400 drop-shadow-md"><CountUp end={1500} duration={20} />+</h4>
      </div>
      {/* Item */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm uppercase font-opanSans">SUPPORT TICKETS</p>
        <h4 className="text-xl font-bold sm:text-2xl md:text-3xl font-opanSans text-yellow-400 drop-shadow-md"><CountUp end={890} duration={20} /></h4>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default SatisfiedCustomer;