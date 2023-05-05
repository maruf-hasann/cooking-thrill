import React from 'react';
import F from '../assets/icons8-facebook-144.png'
import I from '../assets/icons8-instagram-144.png'
import T from '../assets/icons8-twitter-144.png'
import Y from '../assets/icons8-youtube-144.png'

const Footer = () => {
    return (
      <div className="bg-gray-50 ">
        <div className="my_container" id="footer">
          <div className="lg:flex lg:justify-between space-y-3 lg:space-y-0 gap-4">
            <div className="lg:w-2/4">
              <h2 className=" mb-3 font-bold text-2xl text-gray-600">
                Cooking thrill
              </h2>
              <p className="text-xl">
                Since our modest beginnings in 2020 with a little space in
                Toronto’s stylish Yorkville locale, ‘Cooking Thrill’ ‘s
                development has been enlivened with the energy to cook and serve
                solid, Bangladeshi takeout food.
              </p>
            </div>
            <div>
              <h2 className=" mb-3 font-bold text-2xl text-gray-600">
                Need Help?
              </h2>
              <p className="text-xl font-semibold text-gray-600">
                Email:cook.thrill@yahoo.com
              </p>
              <p className="text-xl font-semibold text-gray-600">
                Phone: 3262562234
              </p>
            </div>
            <div>
              <h2 className=" mb-3 font-bold text-2xl text-gray-600">
                Location
              </h2>
              <p className="text-xl font-semibold text-gray-600">
               Gazipur, Dhaka Bangladesh
              </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl text-gray-600">Follow Us</h2>
              <div className="lg:flex gap-4 mt-4">
                <img src={F} alt="" className="w-11 h-11" />
                <img src={I} alt="" className="w-11 h-11" />
                <img src={T} alt="" className="w-11 h-11" />
                <img src={Y} alt="" className="w-11 h-11" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;