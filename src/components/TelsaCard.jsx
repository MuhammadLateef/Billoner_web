import React from "react";
import TelsaImage from "../assets/images/bg-figure-card.svg";

const TelsaCard = () => {
  return (
    <>
      <div className="bg-[#612f6a] text-white shadow-lg md:w-[70%] w-[90%] mx-auto my-[3rem] rounded-[30px] overflow-hidden  transition-all ease-in delay-100 ">
        <div
          className=" md:p-7 p-2 "
          style={{
            background: `url(${TelsaImage})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "850px",
            backgroundPositionY: "-200px",
            scroll: "-31px 10px",
          }}
        >
          <h2 className="md:text-[45px] text-slate-800 font-bold text-center  font-[Poppins,Arial,sans-serif] leading-24 ">
            $500k and Tesla giveaway!
          </h2>
          <p className="text-base text-center font-semibold font-[Poppins,Arial,sans-serif] leading-24  text-slate-800 ">
            The more $AIRB you purchase and the more you participate in Gleam,
            the more tickets you earn, and the higher your chances of walking
            away with these extraordinary prizes!
          </p>
          <div className="md:my-10 my-5  md:mx-5 mx-auto">
            <a
              href="https://64d1fe8d1411fb442c398ba8--monumental-licorice-779adf.netlify.app/win/"
              className="md:px-10 md:py-5 px-3 py-4 lg:text-[15px] text-[13px] text-white  hover:text-gray-300 font-[Poppins,Arial,sans-serif] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800   rounded-[30px] "
            >
              join the giveaway
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TelsaCard;
