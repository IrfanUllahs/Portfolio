import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Card({title,description,techStack,image,github,live}) {
  return (
    <div className="  h-[580px]   bg-[#ffffff] dark:bg-[#0B111B] p-5 font-serif rounded-lg   ">
      {/* this is the image sectin of the card */}
      {/* <div className="w-full h-[38%] border-2  rounded-lg  overflow-hidden"> */}
        <img src={image} alt="image" draggable="false" className="w-full h-[38%] bg-gray-200  rounded-lg object-contain"  />
      {/* </div> */}
      <div className="flex flex-col gap-3 ">
        <h1 className="text-center font-bold text-[20px] dark:text-[#ECECED] mt-3">
          {title}
        </h1>
        <p className="text-[14px] text-[#4a5568] dark:text-[#ECECED]">
          {description}
        </p>
        <p className="text-[#4a5568] dark:text-[#ECECED]">
          <span className="text-primary font-bold">Tech Stack: </span>
          {techStack}
        </p>
        <div className="flex justify-between text-[35px] px-[20px] text-[#1A202C]">
          <div className="hover:bg-primary hover:text-tertiary cursor-pointer rounded-full p-2 transition-all duration-300 dark:text-[#ECECED]" onClick={() => window.open(live)}>
            {" "}
            <FaEye />
          </div>
          <div>
            <div className="hover:bg-primary hover:text-tertiary cursor-pointer rounded-full p-2 transition-all duration-300 dark:text-[#ECECED]" onClick={() => window.open(github)}>
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
