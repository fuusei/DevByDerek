"use client";
import programmer from "@/public/programmer.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

export function Landing() {
  const quirks:string[] = [
    "front-end development💻.",
    "to play basketball🏀.",
    "to do kyudo🏹.",
    "boxing🥊.",
    "learning languages🌎."
  ];
  return (
    <section
      id="landing"
      className="flex items-center w-full min-h-screen lg:flex-row lg:justify-around justify-center flex-col"
    >
      <div>
        <Lottie
          animationData={programmer}
          loop
          autoplay
          style={{ height: 600, width: 600 }}
        />
      </div>
      {/* all text elements */}
      <div className="flex flex-col text-center lg:text-left">
        {/* welcome message */}
        <div>
          <h2 className="lg:text-3xl text-lg font-semibold">Welcome, I am</h2>
          <h1 className="lg:text-6xl my-3 text-2xl font-bold tracking-widest text-green">
            Derek Mackey
          </h1>
        </div>
        {/* typewriter */}
        <div>
          <p>I am a Software Engineer that likes</p>
          <span className="text-green font-bold">
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
