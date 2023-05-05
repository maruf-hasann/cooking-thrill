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
        element: <ChefInfo></ChefInfo>,
        loader: ({ params }) => fetch(`http://localhost:3000/data/${params.id}`),
      },
    ],
  }, {
    path: '/*',
    element: <Error/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
