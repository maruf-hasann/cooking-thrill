import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from 'react-router-dom';
import icon from '../../assets/icons8-heart-100.png'
const ChefInfo = () => {
    const data = useLoaderData()
   const {
     rating,
     method,
     name,
     banner,
     img,
     bio,
     experience,
     recipes,
     like,
     ingredients,
     ingredients_two,
     ingredients_three,
     rating_two,
     rating_three,
     method_two,
     method_three,
   } = data;
  const [click, setClick] = useState('show')
  const loveReact = () => {
    setClick('hidden')
     toast("Recipe add your favorite list");
  }
  return (
    <div className="my_container ">
      <div className="mb-7">
        <img src={banner} alt="" className="rounded-2xl lg:h-32 w-full " />
      </div>
      <div className="lg:flex lg:gap-7">
        <div className="text-center">
          <div className="bg-gray-100 p-9 rounded-xl space-y-2">
            <img
              src={img}
              alt=""
              className="w-1/4 rounded-lg block mx-auto hi"
            />
            <h1 className="font-semibold text-2xl">{name}</h1>
            <p className="lg:w-1/2 lg:mx-auto">{bio}</p>
            <p className="font-semibold text-gray-800 text-xl ">
              {experience} Year Of experience
            </p>
            <h2>Total Recipes : {recipes.length}</h2>
            <h3>Likes: {like}</h3>
            <h3>{experience} Year Experience</h3>
          </div>
        </div>
        <div className="">
          <div className=" bg-gray-100 p-8 rounded-xl">
            <h2 className="font-bold text-3xl text-gray-600">{recipes[0]}</h2>
            <p className="font-semibold text-2xl my-3">Ingredients </p>
            {ingredients.map((show, i) => (
              <p key={i}>{show}, </p>
            ))}
            <p className="my-6"> Cooking Methods : {method}</p>
            <div className="flex justify-between">
              <div>Rating : {rating}</div>
              <div>
                <img
                  src={icon}
                  className={`${click} w-10`}
                  alt=""
                  onClick={loveReact}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl my-5">
            <h2 className="font-bold text-3xl text-gray-600">{recipes[1]}</h2>
            <p className="font-semibold text-2xl my-3">Ingredients </p>
            {ingredients_two.map((show, i) => (
              <p key={i}>{show}, </p>
            ))}
            <p className="my-6"> Cooking Methods : {method_two}</p>
            <div className="flex justify-between">
              <div>Rating : {rating_two}</div>
              <div>
                <img src={icon} className="w-8" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl my-5">
            <h2 className="font-bold text-3xl text-gray-600">{recipes[2]}</h2>
            <p className="font-semibold text-2xl my-3">Ingredients </p>
            {ingredients_three.map((show, i) => (
              <p key={i}>{show}, </p>
            ))}
            <p className="my-6"> Cooking Methods : {method_three}</p>
            <div className="flex justify-between">
              <div>Rating : {rating_three}</div>
              <div>
                <img src={icon} className="w-8" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default ChefInfo;