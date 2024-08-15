"use client";
import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";
import { useState } from "react";
const AllProjects = [
  {
    id: 1,
    frontPhoto: "/Web Designs.png",
    backPhoto: "/Web Designs (1).png",
    name: "Web Design",
    title: "AirCalling Landing Page Design ",
  },
  {
    id: 2,
    frontPhoto: "/Web Designs (2).png",
    backPhoto: "/Web Designs (3).png",
    name: "Web Design",
    title: "Business Landing Page Design ",
  },
  {
    id: 3,
    frontPhoto: "/Web Designs (4).png",
    backPhoto: "/Web Designs (5).png",
    name: "Web Design",
    title: "Ecom Web Page Design ",
  },
  {
    id: 4,
    frontPhoto: "/Web Designs.png",
    backPhoto: "/Web Designs (1).png",
    name: "UI/UX",
    title: "AirCalling Landing Page Design ",
  },
  {
    id: 5,
    frontPhoto: "/Web Designs (2).png",
    backPhoto: "/Web Designs (3).png",
    name: "UI/UX",
    title: "Business Landing Page Design ",
  },
  {
    id: 6,
    frontPhoto: "/Web Designs (4).png",
    backPhoto: "/Web Designs (5).png",
    name: "UI/UX",
    title: "Ecom Web Page Design ",
  },
  {
    id: 7,
    frontPhoto: "/Web Designs (4).png",
    backPhoto: "/Web Designs (1).png",
    name: "App Design",
    title: "AirCalling Landing Page Design ",
  },
  {
    id: 8,
    frontPhoto: "/Web Designs.png",
    backPhoto: "/Web Designs (3).png",
    name: "App Design",
    title: "Ecom Web Page Design ",
  },
  {
    id: 9,
    frontPhoto: "/Web Designs (2).png",
    backPhoto: "/Web Designs (5).png",
    name: "Graphic Design",
    title: "Business Landing Page Design ",
  },
  {
    id: 10,
    frontPhoto: "/Web Designs (4).png",
    backPhoto: "/Web Designs (1).png",
    name: "Graphic Design",
    title: "Ecom Web Page Design ",
  },
];

const Projects = () => {
  let InitialProject = AllProjects.filter(
    (project) => project.name === "Web Design"
  );
  const [projects, setProjects] = useState(InitialProject);
  const ProjectFiltered = (name) => {
    if (name == "All") {
      return setProjects(AllProjects);
    }
    let FilteredProjects = AllProjects.filter(
      (project) => project.name === name
    );
    setProjects(FilteredProjects);
  };
  const buttons = [
    {
      name: "All",
    },
    {
      name: "UI/UX",
    },
    {
      name: "Web Design",
    },
    {
      name: "App Design",
    },
    {
      name: "Graphic Design",
    },
  ];
  return (
    <div>
      <SectionTitle title={"My Projects"} />
      <div className="flex justify-center items-center gap-5 my-4 ">
        {buttons.map((button) => (
          <button key={button.name}
            onClick={() => ProjectFiltered(button.name)}
            className="text-xl px-3 py-2 border border-[#545454] focus:border-none focus:bg-[#FD6F00] focus:text-white hover:bg-[#FD6F00] hover:border-none hover:text-white  text-semibold rounded-xl "
          >
           {button.name}
          </button>
        ))}
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2  gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" flex flex-col justify-center items-center"
          >
            <div>
              <div className="relative bg-[#FFEBDB] px-4">
                <div className="absolute -bottom-1 ">
                  <Image
                    src={project.frontPhoto}
                    alt={project.name}
                    width={300}
                    height={400}
                  />
                </div>
                <div className=" ml-20 ">
                  <Image
                    src={project.backPhoto}
                    alt={project.name}
                    width={300}
                    height={400}
                  />
                </div>
              </div>
              <h3 className="text-lg mt-4 text-[#FD6F00] hover:text-white text-semibold">
                {project.name}
              </h3>
              <p className="text-2xl font-bold ">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
