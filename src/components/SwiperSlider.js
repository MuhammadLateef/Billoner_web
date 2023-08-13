import "../index.css";
import imge1 from "../assets/img/slider1/accubits.svg";
import imge2 from "../assets/img/slider1/binance.svg";
import imge3 from "../assets/img/slider1/bnb-chain.png";
import imge4 from "../assets/img/slider1/bros.svg";
import imge5 from "../assets/img/slider1/certik1.svg";
import imge6 from "../assets/img/slider1/consulting-partners.svg";
import imge7 from "../assets/img/slider1/luna-capital.png";
import imge8 from "../assets/img/slider1/wave-up.svg";
import imge9 from "../assets/img/slider1/accubits.svg";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectFade, Autoplay, Navigation } from "swiper";
const SwiperSlider = () => {
  return (
    <>
      <div className="relative bg-[#EDEDED]">
        {/* <h2 className='text-[#0A7750] text-[20px] font-semibold pl-[30px] pt-[30px]'>Our Member Organizations</h2> */}
        <div className="h-[40vh] flex justify-center items-center">
          {/* <div className=''>
                        <div className=" cursor-pointer swiper-button absolute z-10 md:py-[19px] py-[10px] md:px-[19px] px-[10px] bottom-[7rem] left-4 right-30 border border-green-400 rounded-xl image-swiper-button-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                        <div className=" cursor-pointer swiper-button image-swiper-button-next absolute z-10 md:py-[19px] py-[10px] md:px-[19px] px-[10px] bottom-[7rem] md:left-30 left-18 md:right-10 right-5 border border-green-400 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div> */}
          <Swiper
            effect={"fade"}
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              840: {
                // width: 768,
                slidesPerView: 4,
              },
              1024: {
                // width: 768,
                slidesPerView: 5,
              },
            }}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper w-[95%] mx-auto h-auto flex items-center"
          >
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge1} className="h-[130px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge2} className="h-[60px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge3} className="h-[50px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge4} className="h-[50px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge5} className="h-[50px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge6} className="h-[80px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className='h-[20vh]'>
                                <div className="flex items-center">
                                <a href="#" target='_blank'>
                                     <img src={imge7} className="h-[100px]" alt='img' /> </a>
                                </div>
                            </SwiperSlide>                             */}
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge8} className="h-[100px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-[20vh]">
              <div className="flex items-center">
                <a href="#" target="_blank">
                  <img src={imge9} className="h-[150px]" alt="img" />{" "}
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwiperSlider;
