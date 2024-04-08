import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-blue-950 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Pricing heading */}
          <h2 className="text-3xl font-bold text-white mb-8">
            Easy access for easy bookings
          </h2>
          {/* Pricing description */}

          <p className="text-lg text-white font-light mb-8  ">
            Share your Calendly link form right from your browser, so you can
            schedule meetings without back and forth
          </p>

          {/* Pricing buttons */}
          <div className="flex flex-col items-center mt-4 md:flex-row md:justify-center">
            <button className="px-8 py-3  mb-3 lg:mb-0 md:mr-3  lg:mr-4 bg-blue-600 text-sm text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Start with Free
            </button>
            <button className="px-8 py-3 mb-3 text-sm text-white rounded-full border-2 border-white focus:outline-none">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
