import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div className="tracking-wide">
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
