import About from "./components/About/About";

import Contact from "./components/Contact/Contact";
import Display from "./components/Display/Display";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Experties from "./components/Experties/Experties";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Display />

      <About />
      <Education />
      <Experience />
      <Skills />
      <Experties />
      <Project />
      <Portfolio />
      <Contact />
    </div>
  );
}
