import React from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="flex justify-between px-6 pt-2 =bg-[#EDF2F8]">
        <h1 className="text-[35px] font-sans font-bold">
          MO<span className="text-primary ">HIT</span>{" "}
        </h1>
        <ul className="flex items-center justify-center gap-9 text-[16px] font-semibold font-[sans-serif] ">
          <li className={`text-primary  underline-custom`}>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>SKILLS</li>
          <li>CONTACT</li>
          <li>
            <FaMoon className="text-xl" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
