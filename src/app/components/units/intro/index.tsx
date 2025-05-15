import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FadeInSection from "../../commons/fadeInSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import TitleItem from "./titleItem";

// Slider
const projects = [
  { id: 1, title: "프로젝트 1", description: "첫 번째 프로젝트 설명입니다." },
  { id: 2, title: "프로젝트 2", description: "두 번째 프로젝트 설명입니다." },
  { id: 3, title: "프로젝트 3", description: "세 번째 프로젝트 설명입니다." },
  { id: 4, title: "프로젝트 4", description: "네 번째 프로젝트 설명입니다." },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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

  // const opacityFrontend = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const scaleFrontend = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <>
      <FadeInSection
        id="home"
        className="bg-gradient-to-b from-black via-black to-white overflow-hidden"
      >
        <section className="w-screen mx-20" ref={targetRef}>
          {/* <motion.h2
            style={{ x: xLeft, scale: scaleLeft }}
            className="w-[max-content] text-[14rem] font-bold"
          >
            Hello
          </motion.h2> */}
          <TitleItem x={xLeft} scale={scaleLeft} text="Hello" />
          <TitleItem x={xRight} scale={scaleRight} text="TaeYeon" />

          {/* <motion.h2
            style={{ x: xRight, scale: scaleRight, float: "right" }}
            className="w-[max-content] text-[14rem] font-bold"
          >
            TaeYeon
          </motion.h2> */}

          {/* <motion.h2
            style={{ opacity: opacityFrontend, scale: scaleFrontend }}
            className="relative top-2/3 left-1/2 -translate-x-1/2 text-[14rem] font-bold"
          >
            Frontend
          </motion.h2> */}
        </section>
      </FadeInSection>

      <FadeInSection id="projects">
        <Slider {...settings} className="w-96 mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
            </div>
          ))}
        </Slider>
      </FadeInSection>
    </>
  );
}
