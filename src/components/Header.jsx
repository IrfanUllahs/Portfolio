import React from "react";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

function Header({ isOpen, setOpen }) {
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
      <div className="flex justify-between px-6 pt-2 bg-[#EDF2F8] dark:bg-[#0F1624]  transition-all duration-300  fixed w-full dark:shadow-sm dark:shadow-gray-300">
        <h1 className="text-[35px] font-sans font-bold dark:text-secondary ">
          IR<span className="text-primary ">FAN</span>{" "}
        </h1>
        <ul className="flex items-center justify-center gap-9 text-[16px] font-semibold font-[sans-serif] dark:text-white   ">
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

          <li className={`text-primary  underline-custom md:block hidden`}>
            HOME
          </li>
          <li className=" md:block hidden">ABOUT</li>
          <li className=" md:block hidden">WORK</li>
          <li className=" md:block hidden">SKILLS</li>
          <li className=" md:block hidden">CONTACT</li>
          <li>
            {themeMode ? (
              <FaMoon
                className="text-xl hover:cursor-pointer "
                onClick={() => setThemeMode((prev) => !prev)}
              />
            ) : (
              <FaSun
                className="text-xl hover:cursor-pointer "
                onClick={() => setThemeMode((prev) => !prev)}
              />
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
