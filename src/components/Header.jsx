import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Divide as Hamburger } from "hamburger-react";

function Header({ isOpen, setOpen }) {
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem("themeMode");
    return storedTheme ? storedTheme === "light" : true; // true for light mode by default
  });

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode ? "light" : "dark");
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode ? "light" : "dark");
  }, [themeMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "skills", "contact"];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && scrollY >= element.offsetTop - 60) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <div className="flex justify-between px-6 pt-2 bg-[#EDF2F8] dark:bg-[#0F1624] transition-all duration-300 fixed w-full z-40">
      <h1 className="text-[35px] font-sans font-bold dark:text-secondary">
        IR<span className="text-primary">FAN</span>
      </h1>
      <ul className="flex items-center justify-center gap-4 text-[16px] font-semibold font-[sans-serif] dark:text-white">
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        {[
          { name: "HOME", section: "home" },
          { name: "ABOUT", section: "about" },
          { name: "WORK", section: "work" },
          { name: "SKILLS", section: "skills" },
          { name: "CONTACT", section: "contact" },
        ].map((item) => (
          <li
            key={item.section}
            className={`${
              activeSection === item.section
                ? "text-primary underline-custom  hover:text-white"
                : ""
            } md:block hidden hover:cursor-pointer hover:bg-primary px-4 py-2 rounded-lg hover:text-white`}
            onClick={() => handleClick(item.section)}
          >
            {item.name}
          </li>
        ))}

        <li>
          {themeMode ? (
            <FaMoon
              className="text-xl hover:cursor-pointer"
              onClick={() => setThemeMode((prev) => !prev)}
            />
          ) : (
            <FaSun
              className="text-xl hover:cursor-pointer"
              onClick={() => setThemeMode((prev) => !prev)}
            />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Header;
