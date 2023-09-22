import { projects } from "@/utils/projectList";
import { ProjectCard } from "./ProjectCard";
import useOnScreen from "./useOnScreen";
import { motion } from "framer-motion";
import { fadeIn, staggerFadeIn } from "./animations";

export function Projects() {
  const { ref: headerRef, controls: headerControls } = useOnScreen();
  const { ref: contentRef, controls: contentControls } = useOnScreen();
  return (
    <section
      id="projects"
      className="flex items-center w-full min-h-screen flex-col lg:flex-row justify-center lg:justify-between px-[10%]"
    >
      <div className="w-full flex flex-col justify-center lg:pt-0 pt-16">
        <div className="flex-1">
          <motion.h1
            className="flex justify-start lg:justify-center font-bold pt-4 lg:pb-16 pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8"
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={fadeIn}
          >
            Projects
          </motion.h1>
          <motion.div
            className="flex flex-wrap justify-center"
            ref={contentRef}
            initial="hidden"
            animate={contentControls}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={staggerFadeIn} custom={index}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
