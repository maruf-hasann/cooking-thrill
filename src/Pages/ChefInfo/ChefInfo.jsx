import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefInfo = () => {
    const data = useLoaderData()
   const {name} = data
    
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default ChefInfo;