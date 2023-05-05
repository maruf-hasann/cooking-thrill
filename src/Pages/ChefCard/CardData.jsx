import React, { useEffect, useState } from 'react';
import Card from '../Card';
import SingleCard from './SingleCard';

const CardData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(
          "https://chef-recipe-hunter-server-side-afnafmafeee-gmailcom.vercel.app/data"
        )
          .then((res) => res.json())
          .then((data) => setData(data));
  },[])
    return (
      <div className="my_container">
        <h1 className=" text-center text-4xl font-bold mb-14">
          Experience chefs
        </h1>
        <div className="grid lg:grid-cols-3 my-3">
          {data.map((singleData) => (
            <SingleCard
              key={singleData.id}
              singleData={singleData}
            ></SingleCard>
          ))}
        </div>
      </div>
    );
};

export default CardData;