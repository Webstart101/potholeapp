import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../auth/Auth";

const Header = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <nav className="bg-gradient-to-tl from-black via-gray-900 to-black">
      <div className="container-xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white text-2xl font-bold leading-none w-auto">
              Roadside Report
            </h1>
          </div>
          {currentUser ? (
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-8">
                <div className="flex space-x-4">
                  <a
                    className="text-gray-300 px-3 py-4 rounded-md text-sm font-medium"
                    href="/map"
                  >
                    Home
                  </a>
                  <a
                    className="text-gray-300 px-3 py-4 rounded-md text-sm font-medium"
                    href="/about"
                  >
                    About
                  </a>
                </div>
              </div>
              <div className="dropdown relative ml-auto">
                <div>
                  <img
                    className="inline object-cover w-12 h-12 mr-2 rounded-full"
                    src={currentUser.photoURL}
                    alt="avatar"
                  />
                </div>
                <div className="dropdown-menu hidden absolute right-0 shadow-lg z-50">
                  <ul className="w-full mt-2 origin-top-right rounded-md md:w-48 bg-white rounded-md shadow text-gray-700">
                    <a
                      className="hover:bg-gray-400 hover:text-gray-800 rounded-t py-2 px-4 block whitespace-no-wrap"
                      href="/profile"
                    >
                      <li className="">Profile</li>
                    </a>

                    <li className="">
                      <span
                        className="w-full text-left rounded-b hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex order-2">
              <Link to="/login">
                <button className="px-7 py-1 mr-2 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-1 w-25 border rounded text-white bg-purple-700 border-transparent hover:bg-purple-900 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
