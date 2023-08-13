import React from "react";
import charts from "../assets/chart.svg";
import { BsCircleFill } from "react-icons/bs";
const Tokenomics = () => {
  const images = [
    "https://billionair.com/images/partners/bitmart.svg",
    "https://billionair.com/images/partners/consulting-partners.svg",
    "https://billionair.com/images/partners/chainlink.svg",
    "https://billionair.com/images/partners/luna-capital.png",
    "https://billionair.com/images/partners/binance.svg",
    "https://billionair.com/images/partners/accubits.svg",
    "https://billionair.com/images/partners/wave-up.svg",
    "https://billionair.com/images/partners/chainlab.svg",
    "https://billionair.com/images/partners/bros.svg",
    "https://billionair.com/images/partners/m3.svg",
    "https://billionair.com/images/partners/kairon.svg",
    "https://billionair.com/images/partners/solid-proof.png",
    "https://billionair.com/images/partners/certik1.svg",
    "https://billionair.com/images/partners/bnb-chain.png",
    "https://billionair.com/images/partners/bitmart.svg",
    "https://billionair.com/images/partners/consulting-partners.svg",
    "https://billionair.com/images/partners/chainlink.svg",
    "https://billionair.com/images/partners/luna-capital.png",
    "https://billionair.com/images/partners/binance.svg",
    "https://billionair.com/images/partners/accubits.svg",
    "https://billionair.com/images/partners/wave-up.svg",
    "https://billionair.com/images/partners/chainlab.svg",
    "https://billionair.com/images/partners/bros.svg",
    "https://billionair.com/images/partners/m3.svg",
    "https://billionair.com/images/partners/kairon.svg",
    "https://billionair.com/images/partners/solid-proof.png",
    "https://billionair.com/images/partners/certik1.svg",
    "https://billionair.com/images/partners/bnb-chain.png",
  ];

  return (
    <>
      <div className="lg:h-screen h-auto py-5 my-4 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <div className="lg:h-[90vh] py-5 my-5 shadow-3xl bg-[#000417] backdrop-blur-sm bg-[#000417]/60 rouded-lg  h-auto w-[85%] mx-auto">
          <div>
            <h2 className="lg:text-[35px] text-[25px] text-white font-bold text-center ">
              $AIRB Tokenomics
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 w-[60%] mx-auto content-center items-center py-4 my-3">
            <div className="lg:ml-auto">
              <ul className="text-white">
                <li className="grid grid-cols-4 gap-3 my-1">
                  <span className="text-[14px] col-span-2"> Public Sale </span>{" "}
                  <span className="font-bold"> 41% </span>
                  <span className="text-center h-[20px] w-[20px] bg-[#5269ef] rounded-full "></span>
                </li>
                <li className="grid grid-cols-4 gap-4 my-1">
                  <span className="text-[14px] col-span-2">Staking </span>{" "}
                  <span className="font-bold "> 12% </span>
                  <span className="text-center h-[20px] w-[20px] bg-[#4e9aec] rounded-full "></span>
                </li>
                <li className="grid grid-cols-4  gap-4  my-1">
                  <span className="text-[14px] col-span-2">Community </span>{" "}
                  <span className="font-bold"> 10% </span>
                  <span className="text-center h-[20px] w-[20px] bg-[#ff8bf0] rounded-full "></span>
                </li>
                <li className="grid grid-cols-4 gap-4 my-1">
                  <span className="text-[14px] col-span-2 ">Marketing </span>{" "}
                  <span className="font-bold"> 8% </span>
                  <span className="text-center h-[20px] w-[20px] bg-[#ff957d] rounded-full "></span>
                </li>
                <li className="grid grid-cols-4 gap-4 my-1">
                  <span className="text-[13px] col-span-2 ">
                    Operations & Dev
                  </span>{" "}
                  <span className="font-bold"> 8% </span>
                  <span className="text-center h-[20px] w-[20px] bg-[#638fff] rounded-full "></span>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <img src={charts} alt={charts} />
            </div>
            <div className="lg:-ml-[1rem] ml-[0rem] ">
              <ul className="text-white">
                <li className="my-1 ">
                  <span className=" px-2.5 bg-[#ea8c8c] rounded-full mr-3"></span>
                  <span className="font-bold">5%</span>
                  <span className="ml-1">Treasury</span>
                </li>
                <li className="my-1">
                  {" "}
                  <span className=" px-2.5 bg-[#ac7eff] rounded-full mr-3"></span>
                  <span className="font-bold"> 1% </span>
                  Airdrop 5%{" "}
                </li>
                <li className="my-1">
                  {" "}
                  <span className=" px-2.5 bg-[#ffcb6f] rounded-full mr-3"></span>
                  <span className="font-bold"> 5% </span>
                  Exchange & Liquidity
                </li>
                <li className="my-1">
                  {" "}
                  <span className=" px-2.5 bg-[#ff7a7a] rounded-full mr-3"></span>
                  <span className="font-bold"> 5% </span>
                  Team
                </li>
                <li className="my-1">
                  {" "}
                  <span className=" px-2.5 bg-[#64c3c2] rounded-full mr-3"></span>
                  <span className="font-bold"> 5% </span>
                  <span> Advisors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
