import React from "react";
import D from "../assets/download.png";
import C from "../assets/c.png";
import r from "../assets/pngfind.com-hamburger-clipart-png-3739629.png";
import F from "../assets/pngwing.com (1).png";

const Service = () => {
  return (
    <div className="my_container">
      <h1 className=" text-center text-4xl font-bold mb-10">Our Services</h1>
      <div className="lg:flex lg:justify-between ">
        <div className="text-center">
          <img src={D} alt="" className="w-36 block mx-auto" />
          <p className="font-semibold text-2xl">24 hour fast delivery</p>
        </div>
        <div className="mt-7 text-center">
          <img src={r} alt="" className="w-36 block mx-auto" />
          <p className="font-semibold text-2xl">Best Restuarent Service</p>
        </div>
        <div className="mt-3 text-center">
          <img src={C} alt="" className="w-36 block mx-auto" />
          <p className="font-semibold text-2xl">Experience Chef</p>
        </div>
        <div className="text-center">
          <img src={F} alt="" className="w-36 block mx-auto" />
          <p className="font-semibold text-2xl">Good Food</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
