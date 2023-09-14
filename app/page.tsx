"use client"
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Socials } from "./components/Socials";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
      <div className="tracking-wide">
        <Landing />
        <Socials />
        <About />
        <Experience />
        <Projects />
      </div>
  );
}
