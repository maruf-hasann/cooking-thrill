import React from 'react';

const Footer = () => {
    return (
      <div className="my_container">
        <div className="flex justify-between">
          <div className="w-2/4">
            <h2 className=" mb-3 font-bold text-2xl text-gray-600">
              Cooking thrill
            </h2>
            <p className="text-xl">
              Create a website that shows the recipes of all available chefs.
              The website must be exclusively dedicated to one
              cuisine Bangladeshi, Chinese, Indian, Mediterranean, Thai,
              Japanese, Italian, African, Vietnamese, Srilankan, Nepalese,
              American, Korean, Mexican, Australian, Afgan, French, etc.
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
            <h2 className="font-bold text-2xl text-gray-600">Follow Us</h2>
          </div>
        </div>
      </div>
    );
};

export default Footer;