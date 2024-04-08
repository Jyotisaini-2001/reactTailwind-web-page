import React, { useState, useEffect } from "react";

import download from "../../src/images/download.jpg";
import twitter from "../../src/images/twitter.svg";
import facebook from "../../src/images/facebook.svg";
import instagram from "../../src/images/instagram.svg";
import linkedin from "../../src/images/linkedin.svg";
import youtube from "../../src/images/youtube.svg";

const Footer = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);

  useEffect(() => {
    // Check if the device screen size is small
    const mediaQuery = window.matchMedia("(max-width: 480px)");
    setIsSmallDevice(mediaQuery.matches);

    // Add event listener to detect changes in screen size
    const handleResize = () => {
      setIsSmallDevice(mediaQuery.matches);
    };
    mediaQuery.addListener(handleResize);

    return () => {
      // Remove event listener when component unmounts
      mediaQuery.removeListener(handleResize);
    };
  }, []);
  const footerLinks = [
    {
      title: "About",
      links: [
        "About Calendly",
        "Contact Sales",
        "Newsroom",
        "Career",
        "Security",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Customer success",
        "Sales",
        "Recruiting",
        "Information Technology",
        "Marketing",
      ],
    },
    {
      title: "Popular Features",
      links: [
        "Embed Calendly",
        "Availability",
        "Sending Notification",
        "Using Calendly Mobile",
      ],
    },
    {
      title: "Supports",
      links: ["Help Center", "Video Tutorial", "Cookies Setting"],
    },
    {
      title: "Add-Ons",
      links: ["Download for Chrome", "Download for Firefox"],
    },
    {
      title: "Developers",
      links: ["Developer Tools"],
    },
  ];
  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(index === openAccordionIndex ? null : index);
  };
  return (
    <footer className="text-white pt-12 lg:mt-12">
      <div className="container mx-auto">
        <div className=" px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 flex md:grid-cols-1 gap-8">
            <div className="p-4 md:px-4 md:py-6">
              {" "}
              <div className="max-w-xs md:max-w-full lg:max-w-md">
              <h1 className="text-4xl font-bold mb-4 lg:flex lg:flex-col lg:max-w-md">
  <span className="text-blue-950">Easy</span>{" "}
  <span className="text-blue-600">ahead</span>
</h1>


               <h5 className="text-md lg:mb-4 text-blue-900 max-w-xs lg:max-w-none">
  We take the work out of connecting with others so you can accomplish more.
</h5>

                {/* Language Dropdown */}
                <div className="hidden lg:flex relative mb-4">
                  <select
                    className="w-full appearance-none border-1 border-gray-250 text-black py-2 px-4 pr-8 rounded-lg"
                    defaultValue="default"
                  >
                    <option value="default" className="text-black">
                      English
                    </option>
                    <option value="english" className="text-black">
                      Hindi
                    </option>
                    <option value="spanish" className="text-black">
                      Spanish
                    </option>
                    {/* Add more options as needed */}
                  </select>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                    <svg
                      className="w-4 h-4 ml-1 transform "
                      viewBox="0 0 20 20"
                      fill="black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 6.293a1 1 0 011.414 0L10 11.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {/* App Store and Google Play icons/images */}
                <div className="hidden lg:flex space-x-4 py-4">
                  <a href="#appstore">
                    <img
                      src={download}
                      alt="Download on the App Store"
                      className="w-auto h-10"
                    />
                  </a>
                </div>
                <div className="hidden lg:flex  mt-4 ">
                  <img src={twitter} alt="Twitter" className="w-6 h-6 mr-4 " />
                  <img src={facebook} alt="Facebook" className="w-6 h-6 mr-4" />
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="w-6 h-6 mr-4"
                  />
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-4" />
                  <img src={youtube} alt="YouTube" className="w-6 h-6 mr-4" />
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="md:px-8 md:py-6 p-4">
              {isSmallDevice ? (
                <div className="grid grid-cols-1 gap-4">
                  {footerLinks.map((item, index) => (
                    <div key={index}>
                      <h3
                        className="flex items-center justify-between text-lg font-bold mb-3 text-blue-950 cursor-pointer"
                        onClick={() => handleAccordionClick(index)}
                      >
                        {item.title}
                        <svg
                          className={`w-4 h-4 transform ${
                            openAccordionIndex === index
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.293 6.293a1 1 0 011.414 0L10 11.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h3>
                      <hr className="my-4 border-gray-700" />{" "}
                      <div
                        className={`overflow-hidden transition-all  ${
                          openAccordionIndex === index
                            ? "max-h-screen"
                            : "max-h-0"
                        }`}
                      >
                        <ul className="text-md text-blue-950">
                          {item.links.map((link, linkIndex) => (
                            <li key={linkIndex} className="mb-3">
                              {link}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {footerLinks.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-bold mb-3 text-blue-950">
                        {item.title}
                      </h3>
                      <ul className="text-md text-blue-950">
                        {item.links.map((link, linkIndex) => (
                          <li key={linkIndex} className="mb-3">
                            {link}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:hidden flex px-4 relative ">
              <select
                className="w-full appearance-none border-1 border-gray-250 text-black py-2 px-4 pr-8 rounded-lg"
                defaultValue="default"
              >
                <option value="default" className="text-black">
                  English
                </option>
                <option value="english" className="text-black">
                  Hindi
                </option>
                <option value="spanish" className="text-black">
                  Spanish
                </option>
                {/* Add more options as needed */}
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center pr-10 ">
                <svg
                  className="w-4 h-4 ml-1 transform "
                  viewBox="0 0 20 20"
                  fill="black"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 6.293a1 1 0 011.414 0L10 11.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* App Store and Google Play icons/images */}
            <div className="lg:hidden flex space-x-4 mt-2 px-4">
              <a href="#appstore">
                <img
                  src={download}
                  alt="Download on the App Store"
                  className="w-auto h-10"
                />
              </a>
            </div>
            <div className="lg:hidden flex  mt-4 px-4">
              <img src={twitter} alt="Twitter" className="w-6 h-6 mr-4 " />
              <img src={facebook} alt="Facebook" className="w-6 h-6 mr-4" />
              <img src={instagram} alt="Instagram" className="w-6 h-6 mr-4" />
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-4" />
              <img src={youtube} alt="YouTube" className="w-6 h-6 mr-4" />
            </div>
          </div>
          <div className="px-4 mb-6 md:flex md:justify-between mt-4 mb-16 text-sm text-gray-400">
            <p className="mb-2 lg:mb-0">© Copyright Calendly 2022</p>
            <p>
              <a href="#privacy" className="block lg:inline-block lg:mb-0 mr-4">
                Privacy/ Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
