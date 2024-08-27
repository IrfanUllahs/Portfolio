import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { IoClose } from "react-icons/io5";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiArrowUpThick } from "react-icons/ti";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const handleScroll = () => {
    // Scroll to the target element smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {isOpen ? (
        <div
          className={`absolute top-0 ${
            isOpen ? "right-0" : "-right-full"
          } w-full h-[100vh] bg-[#EDF2F8] dark:bg-[#0F1624] transition-all duration-700 border-2 md:hidden`}
        >
          <IoClose
            className="text-4xl absolute top-3 right-3 hover:cursor-pointer hover:bg-slate-200 rounded-md dark:text-white dark:hover:text-gray-800"
            onClick={() => setOpen(false)}
          />
        </div>
      ) : (
        <>
          <Header isOpen={isOpen} setOpen={setOpen} />
          <Hero isOpen={isOpen} setOpen={setOpen} />
          <AboutMe />
          <Project />
          <Skills />
          <Contact />
        </>
      )}
      <div className="  bg-primary h-[40px] w-[40px] rounded-full fixed bottom-[134px]  sm:flex hidden items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 cursor-pointer left-4  ">
        <MdOutlineEmail className="text-[22px]" />
      </div>
      <div className="  bg-primary h-[40px] w-[40px] rounded-full fixed bottom-[80px]  sm:flex hidden items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 cursor-pointer left-4 ">
        <FaGithub className="text-[22px]" />
      </div>
      <div className="  bg-primary h-[40px] w-[40px] rounded-full fixed bottom-6  sm:flex hidden items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 cursor-pointer left-4  ">
        <FaLinkedin className="text-[22px]" />
      </div>
      <div
        className="  bg-primary h-[35px] w-[35px] rounded-full fixed bottom-4  sm:flex hidden items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300 cursor-pointer right-2  "
        onClick={handleScroll}
      >
        <TiArrowUpThick className="text-[20px]" />
      </div>
    </div>
  );
}
