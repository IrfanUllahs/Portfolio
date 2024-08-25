import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
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
        </>
      )}
    </div>
  );
}
