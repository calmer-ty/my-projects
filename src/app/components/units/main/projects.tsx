import { useState } from "react";
import { motion } from "framer-motion";

import Modal01 from "../../commons/modals/01";

import * as S from "./styles";
import { IProject } from "./types";
import PopupButton01 from "../../commons/buttons/popup/01";
import { Plus } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "부동산 시뮬레이터",
    desc: "원하는 매물 시세를 한번에.",
  },
  { id: 2, title: "프로젝트 2", desc: "두 번째 프로젝트 설명입니다." },
  { id: 3, title: "프로젝트 3", desc: "세 번째 프로젝트 설명입니다." },
  { id: 4, title: "프로젝트 4", desc: "네 번째 프로젝트 설명입니다." },
];

const settings = {
  // dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
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
      <S.Slide {...settings} className="w-9/10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative h-150 p-6 bg-blue-100 rounded-3xl shadow"
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
            <h3 className="text-sm font-normal">{project.title}</h3>
            <p className="mt-2 text-lg font-bold">{project.desc}</p>

            <PopupButton01
              target={project}
              setIsOpen={setSelectedProject}
              className=" bg-black absolute right-4 bottom-4"
            >
              <Plus size={24} strokeWidth={2.4} />
            </PopupButton01>
          </motion.div>
        ))}
      </S.Slide>

      <Modal01 isOpen={selectedProject} setIsOpen={setSelectedProject} />
    </>
  );
}
