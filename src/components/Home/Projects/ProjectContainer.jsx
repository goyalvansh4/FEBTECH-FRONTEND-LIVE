import React from "react";
import Project from "./Project";
import SlickSlider from "../Sliders/SlickSlider";

const ProjectContainer = () => {
   const projectData=[
    {
      src:"project-img1.jpg",
      title:"Ecommerce Website",
    },
    {
      src:"project-img2.jpg",
      title:"Office Management",
    },
    {
      src:"project-img3.jpg",
      title:"Digital Marketing",
    },
    {
      src:"project-img4.jpg",
      title:"SEO Optimization",
    },
    {
      src:"project-img5.jpg",
      title:"Web Development",
    },
    {
      src:"project-img6.jpg",
      title:"App Development",
    },
   ]
  return (
    <div className="w-[90vw] mx-auto py-3  my-8 flex flex-col items-center gap-5">
      <p className="lg:w-1/5 text-center  rounded-xl font-semibold py-2 px-3  text-white bg-[#1136ff] text-xl">
        Recent Project
      </p>
      <p className="lg:w-2/4 text-center font-semibold py-2 px-3  text-[#000] text-4xl ">
        We’ve Done <span className="text-[#1136ff]">2560+</span> Global Projects
        Take a Looks Work Gallery
      </p>
      <div className="h-[400px] ">
        <SlickSlider project={true} projectData={projectData} />
      </div>
    </div>
  );
};

export default ProjectContainer;
