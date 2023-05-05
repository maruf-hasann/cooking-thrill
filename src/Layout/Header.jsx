import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import './Header.css'
import { AuthContext } from '../Shared/AuthProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  }
    return (
      <div className=" px-4 font-semibold py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center font-bold text-3xl">
            Cooking Thrill
          </Link>

          {/* Menu Section */}
          <ul className="items-center hidden space-x-7 lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Register
              </NavLink>
            </li>
          </ul>
          {user ? (
            <button onClick={handleLogOut} className='btn'>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className='btn' >Login</button>
            </Link>
          )}
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        Cooking thrill
                      </Link>
                    </div>
                    {/*  close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/blogs"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Blogs
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/register"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Register
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Header;