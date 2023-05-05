import React from "react";

import { Link } from "react-router-dom";

const SingleCard = ({ singleData }) => {
  const { name, img, experience, recipes, like,id } = singleData;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-semibold text-gray-700">{name}</h2>
        <p className="font-semibold text-gray-800 text-xl">
          {experience} Year Of experience
        </p>
        <div>
          <p className="font-semibold">Some Famous Recipes :</p>
          {recipes.map((showRecipes,i) => (
            <strong key={i}>{showRecipes}, </strong>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">Likes: {like}</h2>
          </div>
          <div>
            <Link to={`/chefInfo/${id}`}>
              <button className=" font-semibold  border-2 border-yellow-300 py-3 p-4 rounded-xl">
                VIEW RECIPES
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
