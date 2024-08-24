import React from "react";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem("themeMode");
    return storedTheme ? storedTheme === "light" : true; // true for light mode by default
  });

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode ? "light" : "dark");
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode ? "light" : "dark");
  }, [themeMode]);

  return (
    <>
      <div className="flex justify-between px-6 pt-2 bg-[#EDF2F8] dark:bg-[#0F1624]  transition-all duration-300">
        <h1 className="text-[35px] font-sans font-bold dark:text-secondary">
          MO<span className="text-primary ">HIT</span>{" "}
        </h1>
        <ul className="flex items-center justify-center gap-9 text-[16px] font-semibold font-[sans-serif] dark:text-white ">
          <li className={`text-primary  underline-custom`}>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>SKILLS</li>
          <li>CONTACT</li>
          <li>
            <FaMoon
              className="text-xl hover:cursor-pointer "
              onClick={() => setThemeMode((prev) => !prev)}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
