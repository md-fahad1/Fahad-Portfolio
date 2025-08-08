import About from "./components/About/About";

import Contact from "./components/Contact/Contact";
import Display from "./components/Display/Display";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Experties from "./components/Experties/Experties";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import ProjectsBtn from "./components/ProjectBtn/ProjectBtn";
import Skills from "./components/Skills/Skills";
import TabData from "./components/TabData/TabData";

import Typing from "./components/Typing/Typing";
// import WhyWorkWith from "./components/WhyWorkWith/WhyWorkWith";

// import ResultShow from "./components/ResultShow/ResultShow";
// import TabData from "./components/TabData/TabData";
// import Testimonial from "./components/Testimonial/Testimonial";

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
