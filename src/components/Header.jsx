import React from "react";
import bg_image from "../assets/images/banners/bg-figure.svg";
import HeaderCard from "./HeaderCard";
import { SiLinktree } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoLogoOctocat } from "react-icons/io";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { AiFillMediumSquare } from "react-icons/ai";
const header = () => {
  return (
    <>
      <div
        className="w-full h-auto my-[3rem]"
        style={{
          backgroundPosition: "left end",
        }}
      >
        <div className=" w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-y-8  ">
          <div className="lg:w-[80%] md:w-[80%] w-[95%] h-auto  grid justify-items-start mx-auto content-center">
            <h2 className="text-white lg:text-[45px] md:text-[35px] text-[30px] font-[Poppins,Arial,sans-serif] sm:text-[20px] font-bold ">
              {" "}
              The Ultimate Web3 <br /> Raffle & Earn Hub
            </h2>
            <p className="text-[13px] leading-8 lg:w-[75%] font-[Poppins,Arial,sans-serif] md:w-[90%] sm:w-[95%] font-normal text-white">
              Join the official $AIRB token Pre-Sale and start earning now.
              Engage, experience, enjoy and win with an honest, fun and
              rewarding entertainment platform.
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-8 md:mx-0 mx-auto justify-content-center content-center py-3 mt-3">
              <a
                href=""
                className="lg:px-7 lg:py-4 md:px-5 md:py-2.5 px-3 py-2 text-[18px] font-medium text-black rounded-lg text-center bg-gray-400 hover:bg-black hover:text-white transition-all"
              >
                Whitespaper
              </a>

              <a
                type="button"
                class=" lg:px-7 lg:py-4 md:px-6 md:py-3 px-3 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg lg:text-[18px] md:text-[15px] text-center md:ml-5 ml-0 "
              >
                BUY $AIRB Now
              </a>
            </div>

            <div className="grid md:grid-cols-8 grid-cols-4 md:mx-0 mx-auto md:gap-x-2 gap-x-4 gap-y-8  content-center lg:gap-5 gap-2 mt-4">
              <i className="text-[#ffd641] text-[30px]">
                <a href="https://linktr.ee/billionair_app" target="_blank">
                  {" "}
                  <SiLinktree />
                </a>
              </i>
              <i className="text-[#ffd641] text-[30px]">
                <a href="https://twitter.com/billionair_app" target="_blank">
                  <BsTwitter />
                </a>
              </i>
              <i className="text-[#ffd641] text-[30px]">
                <a href="https://t.me/billionair_app" target="_blank">
                  <FaTelegramPlane />
                </a>
              </i>
              <i className="text-[#ffd641] text-[30px]">
                <a href="https://t.me/billionair_announcements" target="_blank">
                  <MdNotificationsActive />
                </a>
              </i>
              <i className="text-[#ffd641] text-[30px]">
                <a href="https://discord.com/invite/QGHv26UajU" target="_blank">
                  <IoLogoOctocat />
                </a>
              </i>
              <i className="text-[#ffd641] text-[30px]">
                <a
                  href="https://www.instagram.com/billionair_app/"
                  target="_blank"
                >
                  <BiLogoInstagramAlt />
                </a>
              </i>
              <i className="text-[#ffd641] text-[30px]">
                <a
                  href="https://www.facebook.com/BillionAIRB/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </i>
              <i className="text-[#ffd641] text-[30px]">
                <a href="https://medium.com/billionair-app" target="_blank">
                  {" "}
                  <AiFillMediumSquare />{" "}
                </a>
              </i>
            </div>
          </div>
          <div>
            <HeaderCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
