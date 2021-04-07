import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../auth/Auth";

const Header = ({ title }) => {
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

  function handleSignIn() {
    history.push("/login");
  }

  return (
    <div className="App">
      {currentUser ? (
        <nav className="bg-gray-800">
          <div className="container-xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-white text-2xl font-bold leading-none w-auto">
                    {title}
                  </h1>
                </div>
                <div className="hidden sm:block sm:ml-8">
                  <div className="flex space-x-4">
                    <a
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/"
                    >
                      Home
                    </a>
                    <a
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/about"
                    >
                      About
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown relative ml-3">
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
                      <a
                        className="w-full text-left rounded-b hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="bg-gray-800">
          <div className="container-xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-white text-2xl font-bold leading-none w-auto">
                    {title}
                  </h1>
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
