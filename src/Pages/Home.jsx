import React from 'react';
import Hero from './HeroSection/Hero';
import CardData from './ChefCard/CardData';
import Service from '../Layout/Service';
import Reviews from './Reviews';


const Home = () => {
    return (
      <div className="my-container">
        <Hero />
        <Service />
            <CardData />
            <Reviews/>
      </div>
    );
};

export default Home;