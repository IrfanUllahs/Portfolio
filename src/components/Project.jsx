import React from "react";
import Card from "./Card";
import  img1 from '../../public/Screenshot from 2025-05-03 11-00-06.png'
import  img2 from '../../public/Screenshot from 2025-05-03 11-18-56.png'

const project = [
  {
    title: "FoodifyHub",
    description:
      "A full-stack MERN application where users can browse food by categories, add items to cart, place orders, and manage their profiles. Includes authentication, payment history, and secure login/signup, making food ordering simple, fast, and user-friendly. Admins can add food or other items, and users can view categorized products easily.",
    techStack: " React,Node, MongoDB, Express,Chakra UI,Tailwind Css",
    image: img1,
    github:'https://github.com/IrfanUllahs/Portfolio',
    live:'https://portfolio-amber-five-80.vercel.app/'
  },
  {
    title: "EpicBazaar",
    description:
      "A feature-rich React app where users can explore products by categories, add items to cart, sort by price, rating, or name, and manage selections via an image gallery. Features include dark mode, real-time cart updates, item removal, toast notifications, and responsive design for a smooth user experience.",
    image: img2,
    techStack: " React, Tailwind CSS, Toastify,Animate on Scroll,Image Gallery",
    github:"https://github.com/IrfanUllahs/Epicbazar",
    live:'https://epicbazar-irfan-ullahs-projects.vercel.app/'
  },
  // {
  //   title: "FoodifyHub",
  //   description:
  //     "A full-stack MERN application where users can browse food by categories, add items to cart, place orders, and manage their profiles. Includes authentication, payment history, and secure login/signup, making food ordering simple, fast, and user-friendly. Admins can add food or other items, and users can view categorized products easily.",
  //   techStack: " React,Node, MongoDB, Express,Chakra UI,Tailwind Css",
  //   image: img1,
  // },
]
function Project() {
  return (
    <div className="  xl:px-[100px] lg:px-[30px] px-[20px] py-[100px] dark:bg-[#0F1624] bg-[#EDF2F8] ">
      <h1 className="font-sans text-[28px] sm:text-[35px] font-bold text-center dark:text-secondary">
        My Creative <span className="text-primary">Portfolio</span> Section
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[50px] gap-10">
        {project.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Project;
