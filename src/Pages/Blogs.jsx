import React from "react";

const Blogs = () => {
  return (
    <div className="my_container">
      <h1 className=" text-center text-4xl font-bold mb-14">Blogs</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-3xl mb-4">
            Differences between uncontrolled and controlled components.
          </h2>
          <p>
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally
          </p>
        </div>{" "}
        <div>
          <h2 className="font-semibold text-3xl mb-4">
            Differences between uncontrolled and controlled components.
          </h2>
          <p>
            React PropTypes validators : 1 any : The prop can be of any data
            type. 2 bool : The prop should be a Boolean. 3 number : The prop
            should be a number. 4 string : The prop should be a string. func :
            The prop should be a function. 5 array : The prop should be an
            array. 6 object: The prop should be an object
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-3xl mb-4">
            Difference between nodejs and express js.
          </h2>
          <p>
            NodeJS is an event-driven, non-blocking I/O model using JavaScript
            as its main language. It helps to build scalable network
            applications. Express is a minimal and flexible Node. js web
            application framework that provides a robust set of features for web
            and mobile applications.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-3xl mb-4">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
