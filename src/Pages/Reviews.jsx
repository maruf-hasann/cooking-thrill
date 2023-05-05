import React from "react";
import One from "../assets/—Pngtree—businessman vector icon_3710727.png";
import Two from "../assets/pngwing.com (2).png";

const Reviews = () => {
  return (
    <div className="my_container">
      <h1 className=" text-center text-4xl font-bold mb-14">
        Customer Reviews
      </h1>
      <div className="lg:flex lg:gap-6">
        <div className="text-center">
          <img src={One} alt="" className="rounded-full w-1/2 block mx-auto" />
          <p className="mb-4">
            It’s a great experience. The ambiance is very welcoming and
            charming. Amazing wines, food and service. Staff are extremely
            knowledgeable and make great recommendations.
          </p>
          <strong className="font-bold">Afnaf Mafee</strong>
        </div>{" "}
        <div className="text-center">
          <img src={One} alt="" className="rounded-full w-1/2 block mx-auto" />
          <p className="mb-4">
            Loved this place. The atmosphere, food and most of the drinks were
            great. The bartenders knew their mixology and it showed in the
            drinks. Great place to hangout, chill or go out on a date.
          </p>
          <strong className="font-bold">Tahi Soha</strong>
        </div>{" "}
        <div className="text-center">
          <img src={One} alt="" className="rounded-full w-1/2 block mx-auto" />
          <p className="mb-4">
            It’s a great experience. The ambiance is very welcoming and
            charming. Amazing wines, food and service. Staff are extremely
            knowledgeable and make great recommendations.
          </p>
          <strong className="font-bold">Mile</strong>
        </div>
        <div className="text-center">
          <img src={One} alt="" className="rounded-full w-1/2 block mx-auto" />
          <p className="mb-4">
            This spot gives extraordinary service and yummy meals. One of my
            favourite restaurants around town. The meals served rapidly and the
            rates were reasonable. Highly recommended.
          </p>
          <strong className="font-bold">Rauho jon</strong>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
