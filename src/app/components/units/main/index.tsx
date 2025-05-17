import FadeInSection from "../../commons/fadeInSection";
import CardA from "./cardA";

export default function Main() {
  return (
    <>
      <FadeInSection id="intro" className="flex-col justify-center">
        <CardA />
      </FadeInSection>

      {/* <FadeInSection
        id="projects"
        className="flex-col justify-center items-end"
      >
        <h2 className="w-3/4 mx-auto my-5 text-5xl font-bold">PROJECTS</h2>
        <CardB />
      </FadeInSection> */}
    </>
  );
}
