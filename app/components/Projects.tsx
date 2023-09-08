import { projects } from "@/utils/projectList";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="flex items-center w-full min-h-screen justify-start lg:justify-center px-[8%]"
    >
      <div className="flex flex-col">
        <h1 className="flex justify-start lg:justify-center font-bold pb-14 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8">
          Projects
        </h1>
        <div className="flex flex-wrap justify-evenly">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
