import React, { useEffect, useState } from 'react';
import Card from '../Card';
import SingleCard from './SingleCard';

const CardData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/data")
            .then(res => res.json())
            .then(data => setData(data))
  },[])
    return (
        <div className='my_container'>
            {
                data.map(singleData => <SingleCard key={singleData.id} singleData={singleData}></SingleCard> )
            }
        </div>
    );
};

export default CardData;