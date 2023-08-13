import React from "react";
import ipod from "../assets/images/banners/ipad-pro-1.png";
import solidProof from "../assets/images/solid-proof.png";
const Bitmart = () => {
  return (
    <>
      <div className="my-3 py-3 flex lg:flex-row flex-col items-center justify-start">
        <div className="py-4 w-[100%]">
          <img
            src={ipod}
            alt={ipod}
            className="object-fit"
            style={{ width: "80%" }}
          />
        </div>
        <div className="text-white  lg:-ml-5 py-4 ">
          <h2 className="lg:text-[40px] md:text-[30px] sm:text-[25px] font-bold w-[80%] lg:mx-0 mx-auto  py-2 ">
            The BillionAir $AIRB token and NFT ticket create an economy filled
            with opportunities.
          </h2>
          <p className="text-[18px] font-normal py-2 w-[80%] lg:mx-0 mx-auto">
            Offering the next generation of raffles and games, we provide
            opportunities to stake, burn, earn rewards, connect communities and
            win a variety of life-changing prizes.
          </p>
          <div className="grid w-[80%]  lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-8  md:my-2 my-4 py-3 lg:mx-0 mx-auto">
            <span className="text-[20px] font-bold">Audit and KYC by > </span>
            <span>
              <img src={solidProof} alt={solidProof} />
            </span>
            <span class="w-full py-5 px-4 inline-flex justify-center items-center gap-2 rounded-lg font-medium  text-white shadow-sm align-middle bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transition-all text-sm  ">
              How To Buy
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bitmart;
