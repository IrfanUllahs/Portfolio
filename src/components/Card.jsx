import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Card() {
  return (
    <div className="  h-[630px] md:h-[500px] lg:h-[590px] xs:h-[450px] xl:h-[520px]   bg-[#ffffff] dark:bg-[#0B111B] p-5 font-serif rounded-lg cm:h-[470px] ">
      {/* this is the image sectin of the card */}
      <div className="w-full h-[38%] border-2 rounded-lg"></div>
      <div className="flex flex-col gap-3">
        <h1 className="text-center font-bold text-[20px] dark:text-[#ECECED] mt-3">
          Project Name
        </h1>
        <p className="text-[14px] text-[#4a5568] dark:text-[#ECECED]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          voluptate, quos, est, voluptatem autem voluptates voluptatibus Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate,
          quos, est, voluptatem autem voluptates voluptatibus
        </p>
        <p className="text-[#4a5568] dark:text-[#ECECED]">
          <span className="text-primary font-bold">Tech Stack: </span> React,
          Node, MongoDB, Express,Chakra UI,Tailwind Css
        </p>
        <div className="flex justify-between text-[35px] px-[20px] text-[#1A202C]">
          <div className="hover:bg-primary hover:text-tertiary cursor-pointer rounded-full p-2 transition-all duration-300 dark:text-[#ECECED]">
            {" "}
            <FaEye />
          </div>
          <div>
            <div className="hover:bg-primary hover:text-tertiary cursor-pointer rounded-full p-2 transition-all duration-300 dark:text-[#ECECED]">
              {" "}
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
