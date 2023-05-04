import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefInfo = () => {
    const data = useLoaderData()
   const { name, banner, img, bio, experience } = data;
    
    return (
      <div className="my_container">
        <div className="mb-7">
          <img src={banner} alt="" className="rounded-2xl h-32 w-full " />
        </div>
        <div className="">
          <img src={img} alt="" className="w-1/4 rounded-lg" />
          <p>{bio}</p>
          <p className="font-semibold text-gray-800 text-xl">
            {experience} Year Of experience
          </p>
        </div>
      </div>
    );
};

export default ChefInfo;