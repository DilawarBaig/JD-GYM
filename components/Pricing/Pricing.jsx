import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

const Pricing = () => {
  const pricingData = [
    {
      name: "Gold Card",
      price: 499,
      link: "#",
      description: [
        "Monthly access to fitness area.",
        "Training sessions on demand.",
        "Personal trainer on demand.",
        "Live classes on demand.",
      ],
      duration: "12 month",
      aosDelay: "0",
    },
    {
      name: "Flexible Card",
      price: 899,
      link: "#",
      description: [
        "Monthly access to fitness area.",
        "Training sessions on demand.",
        "Personal trainer on demand.",
        "Live classes on demand.",
      ],
      duration: "12 month",
      aosDelay: "500",
    },
    {
      name: "Platium Card",
      price: 1299,
      link: "#",
      description: [
        "Monthly access to fitness area.",
        "Training sessions on demand.",
        "Personal trainer on demand.",
        "Live classes on demand.",
      ],
      duration: "12 month",
      aosDelay: "1000",
    },
  ];
  return (
    <div className=" pt-12 pb-20 dark:bg-gray-900">
      <div className="container mx-auto ">
        <h1 className="text-3xl sm:text-5xl font-bold textcolor py-5 mb-20 text-center relative group  ">pricing
        <span className='inline-block absolute color h-[2px] w-full -bottom-5 transition-all  duration-300 left-0'></span>
        </h1>
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
            {pricingData.map(({name,price,description,duration,aosDelay, link}) => (
                <div 
                key={name}
                className="space-y-3 text-center bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-300 p-4 sm:py-16 rounded-lg group shadow-2xl hover:bg-yellow-300 duration-500">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h1 className="text-5xl font-bold">{price}</h1>
                    {description.map((item) =>(
                        <p className="font-semibold">{item}</p>
                    ))}
                    <h1 className="text-xl font-bold ">{duration}</h1>
                    <button className="primary_btn  "> Learn More</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
