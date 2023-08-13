import React from "react";
// import img1 from "../assets/images/logo.svg"
// import icon1 from "../assets/images/icon1.png"
// import icon2 from "../assets/images/icon2.png"
// import icon3 from "../assets/images/icon3.png"
// import icon4 from "../assets/images/icon4.png"
import img1 from "../assets/images/logo.svg";
import icon1 from "../assets/img/social/twitterwhite.png";
import icon2 from "../assets/img/social/telegramwhite.png";
import icon3 from "../assets/img/social/telegramnotificationwhite.png";
import icon4 from "../assets/img/social/discordwhite.png";
import icon5 from "../assets/img/social/instagramwhite.png";
const Footer = () => {
  return (
    <div className="w-full bg-[#232225] py-[20px]">
      <ul className="w-[80%] mx-auto flex items-center justify-center flex-wrap mb-6 md:mb-0">
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6"
          >
            Ecosystem
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6"
          >
            whitepaper
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6"
          >
            WIN $500K
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6"
          >
            HOW TO BUY
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6 "
          >
            CONTACT US
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6"
          >
            PRIVACY POLICY
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm font-normal uppercase font-medium text-[#D5D5D6] hover:underline mr-4 md:mr-6"
          >
            TERMS POLICY{" "}
          </a>
        </li>
      </ul>
      <footer className="w-[90%] mx-auto md:flex md:items-center md:justify-between shadow p-4 md:p-6 xl:p-8">
        <ul className="flex items-center flex-wrap mb-6 md:mb-0">
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline"
            >
              <img src={img1} alt="img" />
            </a>
          </li>
        </ul>

        <div className="flex sm:justify-center space-x-4">
          <a
            href="https://twitter.com/billionair_app"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <img src={icon1} alt="icon" className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/billionair_app"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <img src={icon2} alt="icon" className="h-5 w-5" />
          </a>

          <a
            href="https://t.me/billionair_announcements"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <img src={icon3} alt="icon" className="h-5 w-5" />
          </a>

          <a
            href="https://discord.com/invite/QGHv26UajU"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <img src={icon4} alt="icon" className="h-5 w-5" />
          </a>
          <a
            href="https://discord.com/invite/QGHv26UajU"
            target="_blank"
            className="text-gray-500 hover:text-gray-900"
          >
            <img src={icon5} alt="icon" className="h-5 w-5" />
          </a>
        </div>
      </footer>
      <div className="md:w-[60%] w-[80%] pb-[50px] mx-auto flex flex-col justify-center items-center">
        <p className="text-[#DDDDDE] text-sm">
          For support, email us:{" "}
          <span className="font-semibold">support@billionair.com</span>
        </p>
        <p className="text-[#DDDDDE] text-sm text-center my-[16px]">
          Cryptocurrency may be unregulated in your jurisdiction. The value of
          cryptocurrencies may go down as well as up. Profits may be subject to
          capital gains or other taxes applicable in your jurisdiction.
        </p>
        <p className="text-[#DDDDDE] text-sm">
          2023 BillionAir. All rights reserved. IRR Group Limited, Majuro
          Islands, Marshall Islands
        </p>
      </div>
    </div>
  );
};

export default Footer;
