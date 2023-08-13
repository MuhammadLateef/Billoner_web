import React from "react";
import Slider from "react-slick";
import "../index.css";

import imge1 from "../assets/img/slider2/DigitalJournal.svg";
import imge2 from "../assets/img/slider2/binance-1.svg";
import imge3 from "../assets/img/slider2/benzinga.svg";
import imge4 from "../assets/img/slider2/binance.svg";
import imge5 from "../assets/img/slider2/investing.svg";
// import imge6 from "../assets/img/slider2/morningstar-2.svg";
import imge7 from "../assets/img/slider2/news_btc.svg";
import imge8 from "../assets/img/slider2/techbullion.svg";
import imge9 from "../assets/img/slider2/yahoo.svg";
const SlickSlider1 = () => {
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
    <div className="w-full  h-[20vh] py-[20px] my-[60px] mx-auto">
      <h2 className=" text-center md:text-[35px] text-[24px]   my-4 font-bold bg-gradient-to-r from-purple-500 to-red-500 via-yellow-300 text-transparent bg-clip-text">
        Backers and Partners
      </h2>
      <Slider {...settings}>
        <div className="h-[20vh] object-cover w-auto flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img
                  src={imge1}
                  className="h-[70px] mt-[27px] w-[100%] object-fill "
                  alt="img"
                />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img
                  src={imge2}
                  className="h-[60px] mt-8 object-fill my-auto "
                  alt="img"
                />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge3} className="h-[25px] mt-[50px] " alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge4} className="h-[60px] mt-8" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge5} className="h-[50px] mt-[40px]" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        {/* <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge6} className="h-[130px]" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div> */}
        <div className="h-[20vh] flex items-center justify-center ">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge7} className="h-[60px] mt-[40px]" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge8} className="h-[60px] mt-8" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="h-[20vh] flex items-center justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <a href="#" target="_blank">
                <img src={imge4} className="h-[70px] mt-[30px]" alt="img" />{" "}
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider1;
