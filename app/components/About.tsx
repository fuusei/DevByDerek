"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import useOnScreen from "./useOnScreen";
import { motion } from "framer-motion";
import {
  fadeToRight,
  aboutFadeToRight,
  techFadeToRight,
} from "./animations";
import { Skills } from "./Skills";

export function About() {
  const { ref: aboutHeaderRef, controls: aboutHeaderControls } = useOnScreen();
  const { ref: aboutContentRef, controls: aboutContentControls } = useOnScreen();
  const { ref: techRef, controls: techControls } = useOnScreen();

  const aboutContent = [
    "I'm Derek, a full-stack developer who has mostly worked with MERN stack in my development career. I am based in South Florida and am actively looking for new job opportunities, preferably remote.",
    "Recently, I have found that I enjoy front-end development and have been committed to creating minimalist, dynamic UI/UX that easily capture attention. Here are some technologies I've become proficient with lately:",
  ];

  const proficientTech = [
    "TypeScript",
    "JavaScript",
    "React",
    "Python",
    "MongoDB",
    "Next.js",
  ];

  return (
    <section
      id="about"
      className="flex items-center w-full min-h-screen justify-center lg:justify-between px-[10%]"
    >
      {/* about skills container */}
      <div className="flex flex-col lg:flex-row">
        {/* about container */}
        <div className="flex-1 flex-col pb-20 lg:pr-16 pr-0">
          <motion.h1
            className="font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8"
            ref={aboutHeaderRef}
            initial="hidden"
            animate={aboutHeaderControls}
            variants={fadeToRight}
          >
            About
          </motion.h1>
          <div>
            {aboutContent.map((paragraph, i) => (
              <motion.p
                key={i}
                ref={aboutContentRef}
                initial="hidden"
                animate={aboutContentControls}
                variants={aboutFadeToRight}
                custom={i}
                className="pb-8 lg:text-xl md:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
            <div className="flex flex-wrap">
              {proficientTech.map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex flex-row items-center lg:w-[200px] w-[150px] py-5 pr-7"
                  ref={techRef}
                  initial="hidden"
                  animate={techControls}
                  variants={techFadeToRight}
                  custom={i}
                >
                  <div className="w-6">
                    <FaArrowRightLong />
                  </div>
                  <div className="lg:text-xl md:text-lg text-primary pl-4">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* skills container */}
        <Skills />
      </div>
    </section>
  );
}
