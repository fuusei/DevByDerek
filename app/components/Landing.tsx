"use client";
import programmer from "@/public/programmer.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

export function Landing() {

  const quirks: string[] = [
    "front-end development💻.",
    "basketball🏀.",
    "kyudo🏹.",
    "boxing🥊.",
    "learning languages🌎.",
  ];
  return (
    <section
      id="landing"
      className="flex items-center w-full min-h-screen flex-col lg:flex-row justify-center lg:justify-between px-[10%]"
    >
      <div className="lg:w-[600px] md:w-[500px] w-[400px]">
        <Lottie
          animationData={programmer}
          loop
          autoplay
        />
      </div>
      {/* all text elements */}
      <div className="flex flex-col text-center lg:text-left">
        {/* welcome message */}
        <div>
          <h2 className="lg:text-3xl text-lg font-semibold">Welcome, I am</h2>
          <h1 className="lg:text-6xl my-3 text-4xl font-bold tracking-widest text-primary-900 dark:text-primary-300">
            Derek Mackey
          </h1>
        </div>
        {/* typewriter */}
        <div>
          <p>I am a Software Engineer that likes</p>
          <span className="font-bold">
            <Typewriter
              words={quirks}
              loop={true}
              cursor={true}
              cursorBlinking={true}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
