import React from "react";
import "flowbite";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-gray-200 px-6 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-[1280px]">
        <a href="/" className="flex items-center">
          <h2 className="text-[1.75rem] font-bold">
            Mini<span className="text-[#5658dd]">Url</span>
          </h2>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto py-1"
          id="navbar-default"
        >
          <ul className="flex flex-col p-1 px-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li className="flex">
              <a
                href="#"
                className="my-auto block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
                {/* go to home */}
              </a>
            </li>
            <li className="flex">
              <a
                href="/#shortenUrl"
                className="block my-auto py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Shorten Url
              </a>
            </li>
            <li className="flex">
              <a
                href="#"
                className="my-auto block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Features
              </a>
            </li>
            <li>
              {/* <div className="space-x-3 my-auto ml-2"> */}
              <button className="bg-white p-2 px-3 text-[#6163ff] rounded-lg">
                Sign Up
                {/* user sign up */}
              </button>
              {/* </div> */}
            </li>
            <li>
              <button className="bg-[#6163ff] ml-2 sm:ml-0 p-2 px-3 rounded-lg">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
