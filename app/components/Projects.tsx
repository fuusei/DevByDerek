"use client";
import { projects } from "@/utils/projectList";
import Image from "next/image";

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center pt-12 pb-8"
    >
      <div className="w-full flex justify-center mb-4">
        <div className="flex-1">
          <div className="mb-8 text-center flex flex-col">
            <h2 className="font-bold lg:text-5xl text-3xl underline underline-offset-8 mb-4">
              Projects
            </h2>
            <span className="tracking-normal font-light">
              Click to find out more details.
            </span>
          </div>
          {/* <div className="flex justify-center items-center flex-wrap">
            {projects.map((project, index) => (
              <div key={index}>
                <div>
                  {project.technologies.map(
                    (tech) =>
                      tech.icon && (
                        <img
                          key={project.title + tech.name}
                          width={20}
                          height={20}
                          src={tech.icon}
                          alt={tech.name}
                        />
                      )
                  )}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
