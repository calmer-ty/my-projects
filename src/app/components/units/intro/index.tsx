import FadeInSection from "../../commons/fadeInSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import TitleItem from "./titleItem";

import * as S from "./styles";

// Slider
const projects = [
  { id: 1, title: "프로젝트 1", description: "첫 번째 프로젝트 설명입니다." },
  { id: 2, title: "프로젝트 2", description: "두 번째 프로젝트 설명입니다." },
  { id: 3, title: "프로젝트 3", description: "세 번째 프로젝트 설명입니다." },
  { id: 4, title: "프로젝트 4", description: "네 번째 프로젝트 설명입니다." },
];
const settings = {
  // dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
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

  // fadeInUp
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // 아이템마다 딜레이
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <FadeInSection id="home" className="bg-gradient-to-b from-black via-black to-white overflow-hidden">
        <div className="w-screen mx-20" ref={targetRef}>
          <TitleItem x={xLeft} scale={scaleLeft} text="Hello" />
          <TitleItem x={xRight} scale={scaleRight} text="TaeYeon" />
        </div>
      </FadeInSection>

      <FadeInSection id="projects" className="justify-end">
        <div>
          <S.Slide {...settings} className="w-300 h-100 mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="h-100 p-6 bg-white rounded-3xl shadow"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{
                  y: -8,
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </motion.div>
            ))}
          </S.Slide>
        </div>
      </FadeInSection>
    </>
  );
}
