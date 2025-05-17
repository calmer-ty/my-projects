import FadeInSection from "../../commons/fadeInSection";

import Intro from "./intro";
import Projects from "./projects";

export default function Main() {
  return (
    <>
      <FadeInSection
        id="intro"
        className="bg-gradient-to-b from-black via-black to-white overflow-hidden"
      >
        <Intro />
      </FadeInSection>

      <FadeInSection
        id="projects"
        className="flex-col justify-center items-end"
      >
        <h2 className="w-3/4 mx-auto my-5 text-5xl font-bold">PROJECTS</h2>
        <Projects />
      </FadeInSection>
    </>
  );
}
