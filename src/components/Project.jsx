import React from "react";
import Card from "./Card";

function Project() {
  return (
    <div className="  xl:px-[100px] lg:px-[30px] px-[20px] py-[100px] dark:bg-[#0F1624] bg-[#EDF2F8] ">
      <h1 className="font-sans text-[28px] sm:text-[35px] font-bold text-center dark:text-secondary">
        My Creative <span className="text-primary">Portfolio</span> Section
      </h1>
      <div className="grid lg:grid-cols-3 cm:grid-cols-2 grid-cols-1 mt-[50px] gap-10">
        {Array(6)
          .fill()
          .map((_, i) => (
            <Card key={i} />
          ))}
      </div>
    </div>
  );
}

export default Project;
