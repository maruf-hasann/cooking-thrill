import React from "react";
import Img from '../assets/hero.png'
const Register = () => {
  return (
    <div className="my_container">
      <form action="bg-red" className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
        />{" "}
        <br></br>
        <input
          type="email"
          placeholder="Email"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
        />
        <br />
        <input
          type="url"
          placeholder="Phot URL"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
              /> <br/>
        <input type="submit" value="Register" className="btn" />
      </form>
    </div>
  );
};

export default Register;
