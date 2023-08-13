import React from "react";
import Button from "./btn";

const Message = () => {
  return (
    <>
      <div
        className=" mt-5 py-5  "
        style={{
          background: "rgb(194,195,34)",
          background:
            "linear-gradient(0deg, rgba(194,195,34,1) 0%, rgba(253,205,45,1) 81%)",
        }}
      >
        <div className="md:w-[80%] w-[90%] mx-auto grid grid-cols-2  py-5 px-4 ">
          <h2 className="text-[30px] font-bold text-slate-700">
            Stop scrolling and join our community
          </h2>
          <a href="" className="md:ml-[1.5rem] ml-2">
            <Button text="Buy $AIRB" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Message;
