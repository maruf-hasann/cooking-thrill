import React from 'react';
import Errorr from '../assets/download (1).jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div className="my_container text-center">
        <div>
          <img src={Errorr} alt="" className="w-1/2" />
        </div>
        <div>
          <Link to="/" className="btn">
            Back To Home
          </Link>
        </div>
      </div>
    );
};

export default Error;