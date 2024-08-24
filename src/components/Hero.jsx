import React from "react";
import profileImage from "../../public/file.png";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="flex flex-col cm:flex-row cm:h-[90vh] dark:bg-[#0F1624] ">
      {/* Left Side */}
      <div className="flex-[2]  flex justify-center flex-col items-center cm:items-end p-4 cm:order-1 order-2 ">
        <div className="flex flex-col  text-center md:text-right text-[#1A202C] items-start lg:pr-24">
          <p className="font-sans text-[18px] xs:text-[28px] font-bold leading-tight">
            Hello, my name is
          </p>
          <h1 className="name text-[50px] xs:text-[75px] font-bold leading-none my-2 ">
            Irfan Ullah
          </h1>
          <p className="font-sans text-[20px]  xs:text-[30px] font-semibold leading-snug">
            I'm a{" "}
            <span className="text-primary font-bold text-[22px] sm:text-[40px] leading-tight">
              Full Stack Developer
            </span>
          </p>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              delay: 200,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(250)
                .deleteAll()

                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
          <a
            href=""
            className="text-[16px] xs:text-[20px] font-semibold font-sans bg-primary text-white px-3  xs:px-6 py-3 rounded-md hover:bg-white hover:text-primary border-primary border-2 transition-all duration-150 mt-3"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1  pt-10 md:pt-[100px] flex  cm:order-2 order-1  md:px-0 cs:mt-0 mt-6  ">
        <div className="relative  w-[280px] h-[280px] xs:w-[400px] xs:h-[400px] md:w-[350px] md:h-[350px]  mx-auto ">
          <div className="bg-primary rounded-full w-[85%] h-[85%] "></div>
          <img
            src={profileImage}
            alt=""
            className="absolute -top-10 sm:-top-13 -left-6 w-full h-full object-cover rounded-br-md rounded-bl-md "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
