import React from "react";

function btn({ text }) {
  return (
    <div>
      <button className="bg-[#FFD296] py-3 px-10 rounded-xl  text-white  hover:text-gray-300 font-[Poppins,Arial,sans-serif] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800   border-none hover:border-1 hover:border-[#FFD296] hover:bg-[#fff]  transition duration-300   text-center ">
        {text}
      </button>
    </div>
  );
}
export default btn;
