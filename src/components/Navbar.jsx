import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between bg-opacity-20 backdrop-filter backdrop-blur-md fixed text-white z-[1] w-screen">
      <div className="w-screen sticky flex flex-wrap items-center justify-between p-4">
        <h1 className="text-white font-bold text-title">
          <Link to="root" spy={true} smooth={true} duration={500} offset={-100}>
            Zaire McAllister
          </Link>
        </h1>

        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-500"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 "
            aria-hidden="true"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block text-nav md:w-auto ${
            open ? "block text-nav " : "hidden"
          }`}
        >
          <ul className="flex flex-col md:text-sm p-4 gap-3 font-medium md:p-0 mt-4 border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 transition-all duration-500 ease-in">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="block text-nav py-2 pl-3 pr-5 text-white hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent rounded md:bg-transparent md:p-0"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="block text-nav py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              className="block text-nav py-2 pl-3 pr-4 text-white rounded hover:bg-gray-200 hover:text-black md:hover:text-white md:hover:bg-transparent md:border-0  md:p-0"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
