"use client";
import { skills } from "@/utils/skillsList";
import useOnScreen from "./useOnScreen";
import { motion } from "framer-motion";
import { fadeToLeft, staggerFadeToLeft } from "./animations";

export function Skills() {
  const { ref: headerRef, controls: headerControls } = useOnScreen();
  const { ref: contentRef, controls: contentControls } = useOnScreen();
  return (
    <div className="flex-1 flex-col lg:pl-6 pl-0 lg:text-left">
      <motion.h1
        className="font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8"
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={fadeToLeft}
      >
        Skills
      </motion.h1>
      <div className="flex flex-col">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="pb-6"
            ref={contentRef}
            initial="hidden"
            animate={contentControls}
            variants={staggerFadeToLeft}
            custom={i}
          >
            <h1 className="font-semibold text-2xl pb-3 flex justfy-start">
              {skill.category}
            </h1>
            <div className="flex flex-wrap">
              {skill.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-row px-4 py-2 rounded-lg m-2 bg-content1 whitespace-nowrap hover:origin-top-left hover:rotate-1"
                >
                  <h1>{tech.name}</h1>
                  {tech.icon ? (
                    <img
                      src={tech.icon}
                      width={20}
                      height={20}
                      className="ml-2"
                    ></img>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
