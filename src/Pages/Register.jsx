import React, { useContext } from "react";
import Img from '../assets/hero.png'
import { AuthContext } from "../Shared/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const photo = form.photo.value;
     const email = form.email.value;
     const password = form.password.value;
   
     createUser(email, password)
       .then((result) => {
         const createdUser = result.user;
         console.log(createdUser);
         update(result.user, name, photo)
         form.reset()
       })
       .catch((error) => {
         console.log(error);
       });
  }
  const update = (user,name,URL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: URL,
    });
   
  }
  return (
    <div className="my_container">
      <form action="bg-red" className="space-y-3" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
          required
          name="name"
        />
        <br></br>
        <input
          type="email"
          placeholder="Email"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
          required
          name="email"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
          required
          name="password"
        />
        <br />
        <input
          type="url"
          placeholder="Phot URL"
          className="input font-semibold text-xl input-bordered input-xs w-full max-w-xs py-5"
          required
          name="photo"
        />{" "}
        <br />
        <input type="submit" value="Register" className="btn" />
      </form>
    </div>
  );
};

export default Register;
