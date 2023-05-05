import React, { useContext } from "react";
import Git from "../assets/github-btn.png";
import Google from "../assets/google-btn.png";
import { AuthContext } from "../Shared/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset()
        navigate(from,{replace:true})
      })
      .catch(err => {
      console.log(err);
    })

}

  return (
    <div className="my_container text-center lg:w-2/4">
      <h2 className="text-5xl font-bold mb-8">LOGIN</h2>
      <form className="space-y-3" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="
Email"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
          name="email"
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
          name="password"
        />
        <br></br>

        <input type="submit" value="Login" className="btn w-full max-w-xs" />
      </form>
      <div className=" my-7 ">
        <button className="btn">Google</button>
        <button className="btn">Git</button>
      </div>
      <div>
        <h3>
          Don't Have an Account <Link to="/register" className="text-blue-500 underline">Register</Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
