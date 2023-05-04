import React from 'react';
import HeroImg from '../../assets/hero.png'

const Hero = () => {
    return (
      <div className="flex flex-col items-center justify-between my_container lg:flex-row">
        {/* Text  */}
        <div className="max-w-xl text-center mb-7 lg:text-left">
          <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl sm:leading-none">
            Welcome & Enjoy <br></br>World-Class Cuisine
          </h1>
          <p className="mb-7 text-xl">
            Family dinners,date nights, brunches, parties,<br className='hidden lg:block'></br>get-togethers, and
            event meals for the entire week.
          </p>
          <button className="btn">Contat Us</button>
        </div>
        {/* Hero img */}
        <div className="px-6 lg:px-0">
          <img src={HeroImg} alt="" className="block" />
        </div>
      </div>
    );
};

export default Hero;