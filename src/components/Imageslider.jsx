import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../custom.scss";
import { useMediaQuery } from "react-responsive";

const Imageslider = ({ images, autoplaySpeed }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 991px)",
  });

  const sliderRef = useRef(null);

  useEffect(() => {
    // Start the auto-scrolling after the component mounts
    const slider = sliderRef.current;
    const autoplayInterval = setInterval(() => {
      slider.slickNext();
    }, autoplaySpeed);

    // Stop the auto-scrolling when the component unmounts
    return () => clearInterval(autoplayInterval);
  }, [autoplaySpeed]);

  const getSlidesToShow = () => {
    if (isSmallScreen) {
      return 2;
    } else if (isMediumScreen) {
      return 3;
    } else {
      return 14;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow(),
    slidesToScroll: 1,
    autoplay: false, // We handle autoplay manually in the useEffect hook
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div
      className="styles_logosSlider__ApNVx mt-[20px]"
      style={{ width: "100%" }}
    >
      <ul
        className="styles_logosSlider__container__QGCRg items-center"
        style={{ width: "100%", padding: "0px" }}
      >
        <Slider ref={sliderRef} {...settings} style={{ width: "100%" }}>
          {images.map((image, index) => (
            <li
              className="styles_logosSlider__slide__3b66D flex h-12 w-fit max-w-full flex-shrink-0 items-center sm:h-14 lg:h-9 xl:h-20"
              key={index}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="img-fluid "
              />
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default Imageslider;
