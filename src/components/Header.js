import { useAuth } from '../context/Auth';
import { useHistory } from 'react-router-dom';

const Header = ({ title }) => {
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login")
    } catch {

    }
  }

  return (
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
              <svg
                className="h-9 w-9 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
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
  );
};

export default Header;
