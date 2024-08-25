import React from "react";
import profileSvg from "../../public/svgProfile.svg";
function AboutMe() {
  return (
    <div className=" flex justify-center items-center flex-col cm:px-[100px] px-[10px] py-[100px] dark:bg-[#1A202C] ">
      <h1 className="font-sans text-[28px] sm:text-[35px] font-bold text-center dark:text-secondary">
        All <span className="text-primary">About</span> Me And My{" "}
        <span className="text-primary">Experience</span>
      </h1>
      <div className=" flex justify-center items-center mt-10 gap-10 cm:flex-row flex-col  ">
        <div className="flex-1 ">
          <img src={profileSvg} alt="profile" />
        </div>
        <div className="flex-1">
          <ul className="flex flex-col gap-6 custom-bullets">
            <li className="font-serif text-[18px] text-[#1a202c] dark:text-secondary  ">
              As a full-stack developer with a degree from the University of
              Engineering and Technology Mardan, I am driven by a passion for
              creating innovative web applications. My academic background has
              provided me with a solid understanding of software engineering
              principles and a keen eye for detail in both front-end and
              back-end development.
            </li>
            <li className="font-serif text-[18px] text-[#1a202c] dark:text-secondary">
              During my studies, I gained hands-on experience with technologies
              like React, Node.js, Express.js, and MongoDB. These tools have
              allowed me to build dynamic, responsive user interfaces and
              efficient, scalable server-side applications. I’ve worked on
              several projects that have sharpened my problem-solving skills and
              deepened my understanding of web development.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
