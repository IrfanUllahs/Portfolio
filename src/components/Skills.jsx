import React from "react";

function Skills() {
  const data = [
    {
      name: "HTML",
      icon: "../../Skill/html-5-svgrepo-com.svg",
      category: "frontend",
    },
    {
      name: "CSS",
      icon: "../../Skill/css-5-svgrepo-com.svg",
      category: "frontend",
    },
    {
      name: "Tailwind",
      icon: "../../Skill/tailwindcss-icon-svgrepo-com.svg",
      category: "frontend",
    },
    {
      name: "Bootstrap",
      icon: "../../Skill/bootstrap-fill-svgrepo-com.svg",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: "../../Skill/javascript-svgrepo-com.svg",
      category: "frontend",
    },
    {
      name: "React",
      icon: "../../Skill/react-svgrepo-com.svg",
      category: "frontend",
    },
    {
      name: "Redux",
      icon: "../../Skill/redux-logo-svgrepo-com.svg",
      category: "frontend",
    },
    {
      name: "Chakra UI",
      icon: "../../Skill/chakraui-svgrepo-com (1).svg",
      category: "frontend",
    },
    {
      name: "Material UI",
      icon: "../../Skill/materialui.6480f23a.svg",
      category: "frontend",
    },
    {
      name: "Node JS",
      icon: "../../Skill/nodejs-icon-svgrepo-com.svg",
      category: "backend",
    },
    {
      name: "Express JS",
      icon: "../../Skill/express-js-icon.svg",
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: "../../Skill/mongo-svgrepo-com.svg",
      category: "backend",
    },
    {
      name: "Mongoose",
      icon: "../../Skill/mongoose.20aad1bc.png",
      category: "backend",
    },
    {
      name: "Git",
      icon: "../../Skill/git-svgrepo-com.svg",
      category: "backend",
    },
    {
      name: "Postman",
      icon: "../../Skill/postman-icon-svgrepo-com.svg",
      category: "backend",
    },
    {
      name: "GraphQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png",
      category: "frontend",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center dark:bg-[#1A202C] py-[100px]">
      <h1 className="font-sans text-[28px] sm:text-[35px] font-bold text-center dark:text-secondary">
        My <span className="text-primary">Technical </span> Skills
      </h1>
      <div className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 mt-[50px] dark:text-white cm:px-[100px] text-black font-serif px-[30px] ">
        {data.map((item) => (
          <div className="h-[160px] flex flex-col items-center justify-center bg-[#EDF2F8] dark:bg-[#0F1624] p-4  rounded-lg hover:bg-white hover:shadow-md shadow-gray-300 transition-all duration-300 dark:hover:bg-black">
            <img src={item.icon} alt="" className="w-full h-full" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
