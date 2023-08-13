import React from "react";

const Viddeo = () => {
  return (
    <>
      <div className="w-[90%] mx-auto my-5 py-5  ">
        <h2 className=" lg:text-[40px] text-[30px] text-white my-5 py-5  font-bold text-center">
          BillionAir platform to be released after Pre-Sale
        </h2>

        <div
          class="gs-container shadow-lg bg-[url('https://billionair.com/images/info/device.webp')] bg-[length:100%_100%] p-2 md:mx-[20px] md:p-5"
          style={{
            "background-image":
              "url(https://billionair.com/images/info/device.webp)",
          }}
        >
          <div class="relative w-full overflow-hidden rounded-2xl">
            <video
              class="h-full w-full scale-[1.002] transform transition-opacity  cursor-pointer rounded-5 p-1"
              autoPlay
              loop
              playsInline
              preload="auto"
            >
              <source
                src="https://billionair.com/_next/static/videos/billionair-5e4fc4301286b398fac69a6304bcb1af.mp4"
                type="video/mp4"
              />
              <source
                src="https://billionair.com/_next/static/videos/billionair-5345ccd9e0321bb4deafd3ac61c93fa8.webm"
                type="video/webm"
              />
            </video>
            <button
              aria-label="play video"
              class="absolute top-0 right-0 left-0 bottom-0 m-auto h-full w-full transition-colors hover:text-white/80 focus:text-white/80 #F4F5F7"
              type="button"
            >
              <svg
                aria-hidden="true"
                class="inline-flex shrink-0 fill-current"
                focusable="false"
                role="presentation"
                style={{ width: " 29px", " height": " 33px" }}
              >
                <use xlinkHref="https://billionair.com/_next/static/media/sprite-9c60ffc5a924d1ba..svg#play"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viddeo;
