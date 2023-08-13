import { useState } from "react";
import logo from "../assets/images/billioners_logo.svg";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-[#505050] py-4  transition-all ease-in-out delay-200 shadow-lg sticky top-0 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <img src={logo} alt={logo} />
            </a>
            <div
              className="
            md:hidden"
            >
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white text-[13px] font-semibold hover:text-gray-300">
                <a href="javascript:void(0)">HOME</a>
              </li>
              <li className="text-white text-[13px] font-semibold hover:text-gray-300">
                <a
                  href="https://docsend.com/view/s/66eqhubrbqgnuwqj"
                  target="_blank"
                >
                  WHITEPAPER
                </a>
              </li>
              <li className="text-white text-[13px] font-semibold hover:text-gray-300">
                <a href="javascript:void(0)">WIN $500K</a>
              </li>
              <li className="text-white text-[13px] font-semibold hover:text-gray-300">
                <a href="javascript:void(0)">REFER TO EARN</a>
              </li>
              <li className="text-white text-[13px] font-semibold hover:text-gray-300">
                <a href="javascript:void(0)">HOW TO BUY</a>
              </li>
              <li className="text-white text-[13px] font-semibold hover:text-gray-300">
                <a href="javascript:void(0)">CONTACT US</a>
              </li>
              <li className="text-white lg:text-[13px] text-[12px]  hover:text-gray-300 font-[Poppins,Arial,sans-serif] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm lg:px-5 lg:py-2.5 py-1.5 px-2 text-center lg:mr-2 mr-0 mb-2">
                <a href="javascript:void(0)">Buy $AIRB Now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
