import React from "react";
import Slider from "react-slick";
import "../index.css";

import imge1 from "../assets/img/slider1/accubits.svg";
import imge2 from "../assets/img/slider1/binance.svg";
import imge3 from "../assets/img/slider1/bnb-chain.png";
import imge4 from "../assets/img/slider1/bros.svg";
import imge5 from "../assets/img/slider1/certik1.svg";
import imge6 from "../assets/img/slider1/consulting-partners.svg";
import imge7 from "../assets/img/slider1/luna-capital.png";
import imge8 from "../assets/img/slider1/wave-up.svg";
import imge9 from "../assets/img/slider1/bros2.svg";
const Slick_slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="w-full  h-[30vh] py-[40px] mx-auto">
      <Slider {...settings}>
        <div className="h-[20vh] w-auto flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge1} className="h-[130px] " alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge2} className="h-[50px] mt-10" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge3} className="h-[50px] mt-10" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge4} className="h-[80px] mt-8" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge5} className="h-[100px] mt-5" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge6} className="h-[130px]" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center ">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge7} className="h-[150px]" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge8} className="h-[100px] mt-8" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge4} className="h-[160px]" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slick_slider;
