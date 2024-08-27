import React from "react";
import image from "../../public/contact.f495edec.svg/";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="flex flex-col bg-[#EDF2F8] dark:bg-[#0F1624] pt-[100px] md:px-[100px]  sm:gap-20 gap-10 ">
      <h1 className="font-sans text-[24px] xs:text-[28px] sm:text-[35px] font-bold text-center px-[20px] dark:text-[#ECECED]">
        Take A <span className="text-primary">Coffe</span> And{" "}
        <span className="text-primary">Chat</span> With Me
      </h1>
      <div className="flex  flex-col items-center relative ">
        <div className="flex  lg:flex-row flex-col ">
          {/* left section is here */}
          <div className="flex-1 sm:mt-16  px-[20px] ">
            <img src={image} alt="image" draggable="false" />
          </div>
          {/* this is right section  */}
          <div className="flex-1 flex-col ">
            <div>
              <div className="flex w-full   min-h-screen xl:px-[80px] md:px-[10px] sm:px-[30px] px-[10px]    ">
                <form className="  pt-6 pb-8 mb-4  w-full flex flex-col  gap-2">
                  <div className="flex justify-between mb-4 font-serif ">
                    <a
                      className="bg-[#00A0DC] hover:bg-[#167fa5] transition-all duration-200 text-white font-bold py-2 xs:px-4 px-2 rounded flex items-center justify-center gap-2"
                      href="https://www.linkedin.com/in/irfan-ullah-2155b5235/"
                      target="_blank"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </a>
                    <a
                      className="bg-[#333] hover:bg-[#222] transition-all duration-200 text-white font-bold py-2 xs:px-4 px-2 rounded flex items-center justify-center gap-2"
                      href="https://github.com/irfanullahs"
                      target="_blank"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    <a
                      className="bg-primary hover:bg-[#c2211c] transition-all duration-200 text-white font-bold py-2 xs:px-4 px-2 rounded flex items-center justify-center gap-2"
                      href="mailto:engrirfanullah981@gmail.com"
                      target="_blank"
                    >
                      <MdOutlineEmail className="text-[20px]" />
                      Gmail
                    </a>
                  </div>
                  <div className="mb-4">
                    <input
                      className="outline-blue-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight font-serif "
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="outline-blue-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight font-serif "
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="outline-blue-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight font-serif "
                      id="number"
                      type="text"
                      placeholder="Number"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      className="outline-blue-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight font-serif "
                      id="message"
                      rows="5"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-primary hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded  w-full font-serif"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h1 className="sm:text-[16px] text-[#303640] dark:text-[#ECECED]  text-center  absolute bottom-2  font-serif text-[12px]">
          Developed By Irfan Ullah, 2024 All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default Contact;
