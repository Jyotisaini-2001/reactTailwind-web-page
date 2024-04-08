import React from "react";
import salesIcon from "../../src/images/target.svg";
import recruiting from "../../src/images/recruiting.svg";
import education from "../../src/images/education.svg";
import revenue from "../../src/images/revenue.svg";
import marketing from "../../src/images/marketing.svg";
import customer from "../../src/images/customer.svg";
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="mb-4">
      <div className="card h-300 shadow-md rounded-lg">
        <div className="card-body px-4">
          {/* Icon */}
          <div className="mb-2">{icon}</div>
          {/* Title */}
          <h5 className="card-title text-lg font-semibold mb-4 text-left text-blue-900">
            {title}
          </h5>
          {/* Description */}
          <p className="card-text text-gray-700 text-left font-serif font-light">
            {description}
          </p>
          {/* Learn More Button */}
          <a
            href="#learn"
            className="text-blue-600 flex items-center mt-8 mb-2 text-md"
          >
            Learn more
            <svg
              className="w-4 h-4 ml-1 transform -rotate-90"
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
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      icon: <img src={salesIcon} alt="My Icon" className="w-8 h-8" />,
      title: "Sales",
      description:
        "Spend more time on selling and less time on admin. Shotern you sales cylce by letting prospects schedule while they're in pick buying mode",
    },
    {
      icon: <img src={recruiting} alt="My Icon" className="w-8 h-8" />,
      title: "Recruiting",
      description:
        "Spend more time on selling and less time on admin. Shotern you sales cylce by letting prospects schedule while they're in pick buying mode",
    },
    {
      icon: <img src={education} alt="My Icon" className="w-8 h-8" />,
      title: "Education",
      description:
        "Spend more time on selling and less time on admin. Shotern you sales cylce by letting prospects schedule while they're in pick buying mode",
    },
    {
      icon: <img src={revenue} alt="My Icon" className="w-8 h-8" />,
      title: "Revenue",
      description:
        "Spend more time on selling and less time on admin. Shotern you sales cylce by letting prospects schedule while they're in pick buying mode",
    },
    {
      icon: <img src={marketing} alt="My Icon" className="w-8 h-8" />,
      title: "Marketing",
      description:
        "Spend more time on selling and less time on admin. Shotern you sales cylce by letting prospects schedule while they're in pick buying mode",
    },
    {
      icon: <img src={customer} alt="My Icon" className="w-8 h-8" />,
      title: "Customer sucess",
      description:
        "Spend more time on selling and less time on admin. Shotern you sales cylce by letting prospects schedule while they're in pick buying mode",
    },
    // Repeat the above structure for additional services
  ];

  return (
    <div id="services" className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-xl lg:text-xl  text-blue-500 mb-8">SOLUTIONS</h4>

          <h1 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-16">
            Calendly can solve your specific pain points
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
