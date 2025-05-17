import FadeInSection from "../../commons/fadeInSection";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import Slider from "./slider";
import TitleItem from "./titleItem";

export default function Intro() {
  // targetRef
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("scrollYProgress:", latest);
    });
  }, [scrollYProgress]);

  // 각각 다른 애니메이션 설정
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0", "-100%"]);
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const xRight = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <>
      <FadeInSection
        id="home"
        className="bg-gradient-to-b from-black via-black to-white overflow-hidden"
      >
        <div className="w-screen mx-20" ref={targetRef}>
          <TitleItem x={xLeft} scale={scaleLeft} text="Hello" />
          <TitleItem x={xRight} scale={scaleRight} text="TaeYeon" />
        </div>
      </FadeInSection>

      <FadeInSection
        id="projects"
        className="flex-col justify-center items-end"
      >
        <h2 className="w-3/4 mx-auto my-5 text-4xl font-bold">Project</h2>
        <Slider />
      </FadeInSection>
    </>
  );
}
