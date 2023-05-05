import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Blogs from './Pages/Blogs';
import ChefInfo from './Pages/ChefInfo/ChefInfo';
import Error from './Pages/Error';
import AuthProvider from './Shared/AuthProvider';
import Private from './PrivateRoutes/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/chefInfo/:id",
        element: (
          <Private>
            <ChefInfo></ChefInfo>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-side-afnafmafeee-gmailcom.vercel.app/data/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
