import React from "react";
import { FaEthereum } from "react-icons/fa";
import imageSvg1 from "../assets/images/accubits.svg";
import imageSvg2 from "../assets/images/binance.svg";
import imageSvg3 from "../assets/images/bitmart.svg";
import imageSvg4 from "../assets/images/bros.svg";
import imageSvg5 from "../assets/images/card.svg";
import imageSvg6 from "../assets/images/certik1.svg";
import imageSvg7 from "../assets/images/chainlink.svg";
import imageSvg8 from "../assets/images/consulting-partners.svg";
import imageSvg9 from "../assets/images/kairon.svg";
import imageSvg10 from "../assets/images/luna-capital.png";
import imageSvg11 from "../assets/images/m3.svg";
import imageSvg12 from "../assets/images/primary-80ada38261b1c4f4.svg";
import imageSvg13 from "../assets/images/solid-proof.png";
import imageSvg14 from "../assets/images/usdt.svg";
import imageSvg15 from "../assets/images/wave-up.svg";

const HeaderCard = () => {
  return (
    <>
      <div>
        <div
          className="text-white lg:w-[90%] w-[90%] border-[0.5px] border-slate-600 mx-auto text-center rounded-3xl py-3 shadow-xl"
          style={{
            background: "hsla(0,0%,100%,.07)",
          }}
        >
          <h2 className="text-[25px] font-semibold my-3 ">Pre-Sale Progress</h2>
          <div className="my-5 py-2 w-[90%] mx-auto grid grid-cols-4 gap-y-4 ">
            <span className="border-2  md:py-3 md:px-5 px-[1.5px] py-[4px] md:text-[16px] text-[14px] rounded-lg md:mx-2 mx-1 bg-black hover:bg-gray-600 transition-all ease-out delay-100">
              05d
            </span>
            <span className="border-2 md:py-3 md:px-5 px-[1.5px] py-[4px] md:text-[16px] text-[14px] rounded-lg md:mx-2 mx-1  bg-black hover:bg-gray-600 transition-all ease-out delay-100">
              17h
            </span>
            <span className="border-2  md:py-3 md:px-5 px-[1.5px] py-[4px] md:text-[16px] text-[14px] rounded-lg md:mx-2 mx-1 bg-black hover:bg-gray-600 transition-all ease-out delay-100">
              19m
            </span>
            <span className="border-2 md:py-3 md:px-5 px-[1.5px] py-[4px] md:text-[16px] text-[14px] rounded-lg md:mx-2 mx-1  bg-black hover:bg-gray-600 transition-all ease-out delay-100">
              46s
            </span>
          </div>
          <h3 className="text-[22px] font-semibold">
            BUY IN BEFORE PRICE INCREASES!
          </h3>
          <div className="w-[60%] mx-auto h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700 my-4">
            <div className="h-4 bg-green-500 rounded-full  w-[40%]"></div>
          </div>
          <h3 className="text-[18px] font-semibold">
            USDT Raised: $16,827,537.89 / $18,004,966.16{" "}
          </h3>
          <h4 className="text-[16px] font-semibold">1 WSM = $0.322</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-1 my-3">
            <button class="bg-black text-white hover:bg-gray-700  font-bold py-3 px-3 rounded inline-flex items-center">
              <FaEthereum className="text-[40px]" />
              <span>ETH</span>
            </button>
            <button class="bg-[#000000c8] text-white hover:bg-gray-700  font-bold py-3 px-3 rounded inline-flex items-center">
              <img
                src={imageSvg14}
                alt={imageSvg14}
                className="object-fit"
                style={{ width: "20%" }}
              />
              <span className="ml-1">USDT</span>
            </button>
            <button class="bg-gray-700 text-white hover:bg-gray-600  font-bold py-3 px-3 rounded-lg inline-flex items-center">
              <img
                src={imageSvg5}
                alt={imageSvg5}
                className="object-fit"
                style={{ width: "20%" }}
              />
              <span className="ml-2">ETH</span>
            </button>
          </div>
          <div className="w-[80%] mx-auto ">
            <div className="grid lg:grid-cols-2 md:grid-cols-1  gap-2">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm text-[12px] font-medium text-white dark:text-white"
                >
                  Amount in ETH you pay
                </label>
                <input
                  type="Number"
                  id="first_name"
                  class="bg-gray-700 border border-gray-900 text-white text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[18px]"
                  placeholder="0"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-[12px] mb-2 text-sm font-medium text-white dark:text-white"
                >
                  MAX 0 Amount in WSM you receive
                </label>
                <input
                  type="number"
                  id=""
                  class="bg-gray-700 border border-gray-900 text-white text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  text-[18px]"
                  placeholder="0"
                  required
                />
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="w-[80%] mx-auto py-3">
            <button
              type="button"
              class="w-full py-5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#bf7219] text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 my-2"
            >
              Buy Now
            </button>
            <button
              type="button"
              class="w-full py-5 px-4 inline-flex justify-center items-center gap-2 rounded-lg font-medium bg-black text-white shadow-sm align-middle hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-50 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 my-2"
            >
              Buy with BNB
            </button>
            <button
              type="button"
              class="w-full py-5 px-4 inline-flex justify-center items-center gap-2 rounded-lg font-medium bg-gray-800 text-white shadow-sm align-middle hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-50 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 my-2"
            >
              How To Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
