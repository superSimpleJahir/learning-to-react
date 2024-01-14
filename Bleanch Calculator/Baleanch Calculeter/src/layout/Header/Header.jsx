import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="relative w-full bg-gray-300 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="cursor-pointer inline-flex items-center space-x-2">
            <NavLink to="/" className="font-bold text-xl text-indigo-500 ">
              JaHiR
            </NavLink>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `cursor-pointer inline-flex items-center text-sm font-semibold ${
                      isActive ? "text-red-600" : "text-gray-700"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `cursor-pointer inline-flex items-center text-sm font-semibold ${
                      isActive ? "text-red-600" : "text-gray-700"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `cursor-pointer inline-flex items-center text-sm font-semibold ${
                      isActive ? "text-red-600" : "text-gray-700"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    `cursor-pointer inline-flex items-center text-sm font-semibold ${
                      isActive ? "text-red-600" : "text-gray-700"
                    }`
                  }
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <NavLink to="/singup">Sign Up</NavLink>
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <NavLink to="/login">Log In</NavLink>
            </button>
          </div>
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
