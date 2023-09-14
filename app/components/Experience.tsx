import { experiences } from "@/utils/experienceList";
import useOnScreen from "./useOnScreen";
import { motion } from "framer-motion";
import Image from "next/image";
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
          className="flex justify-start lg:justify-center font-bold pb-8 lg:text-5xl text-3xl underline decoration-solid decoration-2 underline-offset-8"
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeIn}
        >
          Experience
        </motion.h1>
        <div className="flex flex-wrap justify-evenly">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              ref={contentRef}
              initial="hidden"
              animate={contentControls}
              variants={staggerFadeIn}
              custom={index}
              className="flex flex-row p-3 m-4 w-120 h-40 shadow-xl rounded-xl bg-content1"
            >
              <div className="flex items-center justify-center w-2/5">
                <Image
                  priority
                  src={experience.image}
                  width={85}
                  height={85}
                  className="rounded-xl"
                  alt={experience.company}
                />
              </div>
              <div className="flex flex-col justify-between p-4 w-3/5">
                <div className="font-bold lg:text-base text-sm">
                  {experience.company}
                </div>
                <div className="font-medium lg:text-base text-sm">
                  {experience.position}
                </div>
                <div className="font-thin lg:text-base text-sm">
                  {experience.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
