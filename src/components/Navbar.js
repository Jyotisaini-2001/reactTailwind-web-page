import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="lg:max-w-8xl mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              src="https://marketing-assets.calendly.com/media/logo.svg"
              alt="Calendly logo"
              className="h-10"
            />{" "}
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className=" hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center xl:space-x-2">
            <a href="#individuals" className=" hover:text-gray-300 px-2 py-2">
              Individuals
            </a>
            <a href="#team" className=" hover:text-gray-300 px-3 py-2">
              Team
            </a>
            <a href="#interprise" className=" hover:text-gray-300 px-3 py-2">
              Enterprise
            </a>
            <a href="#product" className=" hover:text-gray-300 px-3 py-2">
              Product
              <svg
                className="w-4 h-4 inline   transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 6.293a1 1 0 011.414 0L10 11.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#pricing" className=" hover:text-gray-300 px-3 py-2">
              Pricing
            </a>
            <a href="#resources" className=" hover:text-gray-300 px-3 py-2">
              Resources
            </a>
          </div>
          <div className="hidden lg:flex md:items-center">
            <button className="bg-white text-gray-800 font-semibold py-2 px-3 rounded-lg ">
              Log In
            </button>
            <button className="bg-blue-500 text-white  py-3 px-3 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3">
            <a
              href="#individuals"
              className="block  hover:text-gray-300 px-3 py-2"
            >
              Individuals
            </a>
            <a href="#team" className="block  hover:text-gray-300 px-3 py-2">
              Teams
            </a>
            <a
              href="#enterprise"
              className="block  hover:text-gray-300 px-3 py-2"
            >
              Enterprise
            </a>

            <a href="product" className="block  hover:text-gray-300 px-3 py-2">
              Product
            </a>
            <a href="pricing" className="block  hover:text-gray-300 px-3 py-2">
              Pricing
            </a>
            <a
              href="resources"
              className="block  hover:text-gray-300 px-3 py-2"
            >
              Resources
            </a>

            <div className="flex justify-between mt-4">
              <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2">
                Log In
              </button>
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
