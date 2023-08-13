import React from "react";
import "../index.css";
import Button from "./btn";

const Emailsubstription = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center py-[100px]">
        <div className="md:w-[40%] w-[80%] mx-auto">
          <h1 className="md:text-[50px] text-[35px] font-bold bg-gradient-to-r from-purple-500 to-red-500 via-yellow-300 text-transparent bg-clip-text flex flex-col text-center">
            <span>Don’t miss out,stay</span>
            <span>updated</span>{" "}
          </h1>
          <div className="">
            <div className="flex sm:flex-row flex-col justify-between">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full input-field rounded-xl bg-[#494A4F] py-3 px-3 sm:mb-0 mb-[10px] text-white mr-[20px]"
              />
              <Button text="Subscribe" />
            </div>
            <p className="w-[80%] mx-auto my-3 text-white text-[14px] text-center">
              Get the latest information about the public Pre-sale, progress and
              community updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Emailsubstription;
