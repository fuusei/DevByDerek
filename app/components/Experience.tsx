import { experiences } from "@/utils/experienceList";
import useOnScreen from "./useOnScreen";
import { motion } from "framer-motion";
import { fadeIn, staggerFadeIn } from "./animations";

export function Experience() {
  const { ref: headerRef, controls: headerControls } = useOnScreen();
  const { ref: contentRef, controls: contentControls } = useOnScreen();
  return (
    <section
      id="experience"
      className="flex items-center w-full min-h-screen px-[8%]"
    >
      <div className="flex flex-col">
        <motion.h1
          className="flex justify-start lg:justify-center font-bold lg:pb-16 pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8"
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeIn}
        >
          Experience
        </motion.h1>
        <motion.div
          className="flex flex-wrap justify-evenly"
          ref={contentRef}
          initial="hidden"
          animate={contentControls}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={staggerFadeIn}
              custom={index}
              className="flex flex-row py-3 mx-4 my-8 lg:w-[440px] w-[350px] h-[140px] shadow-xl rounded-xl bg-content1"
            >
              <div className="flex items-center justify-center w-2/5">
                <img
                  src={experience.image}
                  width={experience.width}
                  height={experience.height}
                  className="rounded-md h-auto"
                  alt={experience.company}
                />
              </div>
              <div className="flex flex-col p-2 w-3/5">
                <div className="font-bold lg:text-base text-sm mb-2">
                  {experience.company}
                </div>
                <div className="lg:text-base text-sm mb-2">
                  {experience.position}
                </div>
                <div className="lg:text-base text-sm">{experience.time}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
