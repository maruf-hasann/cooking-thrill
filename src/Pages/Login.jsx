import React from "react";
import Git from '../assets/github-btn.png'
import Google from '../assets/google-btn.png'
const Login = () => {
  return (
    <div className="my_container text-center lg:w-2/4">
      <h2 className="text-5xl font-bold mb-8">LOGIN</h2>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="
Email"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
        />
        <br></br>

        <input type="submit" value="Login" className="btn w-full max-w-xs" />
      </form>
      <div className=" my-7 ">
        <button className="btn">Google</button>
        <button className="btn">Git</button>
      </div>
    </div>
  );
};

export default Login;
