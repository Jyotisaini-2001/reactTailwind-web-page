import React from "react";
import Services from "./Services";
import Pricing from "./pricing";
const LandingPage = () => {
  return (
    <div>
      {/* Introduction Section */}
      <div
        id="introduction"
        className="relative  pt-20 pb-20 lg:h-screen-3/4 xl:h-screen-2/3"
      >
        <div
          className="container absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none pb-4 "
          aria-hidden="true"
        >
          <svg
            className="absolute bottom-0"
            width="90%"
            height="85%"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,30 A50,25 0 0,1 100,25 Z"
              fill="rgba(173, 216, 230, 0.1)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-xl lg:text-xl  text-blue-500 mb-8">
              SOLUTIONS
            </h4>

            <h1 className="text-6xl  font-bold text-gray-900 mb-8">
              <span className="text-primary">Calendly</span> for the work you do
            </h1>

            <p className="max-w-3xl mx-auto text-2xl text-blue-950 mb-8 font-light">
              Across a range of uses, Calendly helps people and teams build
              efficieny, professionalism, and results into work they do.
            </p>
            <button className="py-3 px-8 bg-blue-600 text-white rounded-full shadow-md  transition duration-300 ease-in-out ">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <Services />
      <Pricing />
    </div>
  );
};

export default LandingPage;
