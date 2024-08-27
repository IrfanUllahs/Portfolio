import React, { useState } from "react";
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
          } w-full h-[100vh] bg-[#EDF2F8] dark:bg-[#0F1624] transition-all duration-700 border-2 `}
        >
          <IoClose
            className="text-4xl absolute top-3 right-3 hover:cursor-pointer hover:bg-slate-200 rounded-md dark:text-white dark:hover:text-gray-800"
            onClick={() => setOpen(false)}
          />
          <ul className="flex flex-col items-center justify-center h-full space-y-6 text-[16px] font-semibold font-[sans-serif] dark:text-white">
            <li>
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="text-[25px] hover:text-primary transition-all duration-300"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="text-[25px] hover:text-primary transition-all duration-300"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => setOpen(false)}
                className="text-[25px] hover:text-primary transition-all duration-300"
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setOpen(false)}
                className="text-[25px] hover:text-primary transition-all duration-300"
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-[25px] hover:text-primary transition-all duration-300"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Header isOpen={isOpen} setOpen={setOpen} />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="work">
            <Project />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-[134px] left-4 sm:flex hidden items-center justify-center cursor-pointer">
        <a
          className="bg-primary h-[40px] w-[40px] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300"
          href="mailto:engrirfanullah981@gmail.com"
          target="_blank"
        >
          <MdOutlineEmail className="text-[22px]" />
        </a>
      </div>
      <div className="fixed bottom-[80px] left-4 sm:flex hidden items-center justify-center cursor-pointer">
        <a
          className="bg-primary h-[40px] w-[40px] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300"
          href="https://github.com/irfanullahs"
          target="_blank"
        >
          <FaGithub className="text-[22px]" />
        </a>
      </div>
      <div className="fixed bottom-6 left-4 sm:flex hidden items-center justify-center cursor-pointer">
        <a
          className="bg-primary h-[40px] w-[40px] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300"
          href="https://www.linkedin.com/in/irfan-ullah-2155b5235/"
          target="_blank"
        >
          <FaLinkedin className="text-[22px]" />
        </a>
      </div>
      <div
        className="fixed bottom-4 right-2 sm:flex hidden items-center justify-center cursor-pointer"
        onClick={handleScroll}
      >
        <div className="bg-primary h-[35px] w-[35px] rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary border-2 border-primary transition-all duration-300">
          <TiArrowUpThick className="text-[20px]" />
        </div>
      </div>
    </div>
  );
}
