import { useState } from "react";
import { motion } from "framer-motion";

import ModalB from "@/src/app/components/commons/modals/B";
import PopupButtonA from "@/src/app/components/commons/buttons/popup/A";

import { X } from "lucide-react";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { skillIcons } from "@/src/app/commons/types/constants/skillIcons";

import { items, projectData } from "./data";

export default function CardA() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projectData.find((item) => item.id === selectedId);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <article className="flex flex-col h-screen">
      {/* 헤더  */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="px-12 py-10 text-5xl font-bold lg:px-20"
      >
        PROJECTS
      </motion.h2>

      {/* 카드 컨텐츠 */}
      <motion.div
        className="flex flex-col justify-between flex-1 h-full px-12 mb-10 md:flex-row lg:px-20"
        style={{ gap: "2rem" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`} // layoutId가 같으면 애니메이션 연결됨
            onClick={() => setSelectedId(item.id)}
            className={`relative overflow-hidden flex-1 bg-gray-400 p-6 rounded-xl cursor-pointer`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {/* 배경이미지 */}
            <img
              className="absolute inset-0 w-full h-full brightness-70 object-cover"
              src={`/images/${item.bgSrc}`}
              alt="freepik"
            />
            <h3
              className={`relative z-10 mb-2 text-sm font-bold text-${item.color}`}
            >
              {item.title}
            </h3>
            <h4
              className={`relative z-10 text-xl font-bold text-${item.color}`}
            >
              {item.desc}
            </h4>
          </motion.div>
        ))}
      </motion.div>

      {/* 모달 */}
      <ModalB
        isOpen={selectedId}
        setIsOpen={setSelectedId}
        contentsStyle="w-4/5 h-4/5 pt-12"
      >
        {selectedProject && (
          <div className="flex flex-col gap-6 h-full lg:flex-row">
            {/* 이미지 */}
            <img
              className="w-full h-4/10 object-cover rounded-xl lg:w-4/10 lg:h-full"
              src={`/images/${selectedProject.bgSrc}`}
              alt={selectedProject.title}
            />

            {/* 콘텐츠 */}
            <div className="flex flex-col gap-6 overflow-scroll break-keep">
              {/* 상단 서비스 소개 */}
              <div className="flex flex-col gap-4 p-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-mb font-semibold text-gray-500 ">
                  {selectedProject.desc}
                </p>

                {/* 프로젝트 기간 및 인원 */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <p className="flex items-center gap-2">
                    <FaRegCalendarAlt /> {selectedProject.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaUser />
                    {selectedProject.team}
                  </p>
                </div>
                {/* skill */}
                <div className="flex flex-col gap-2 sm:flex-row">
                  <h4 className="w-18 shrink-0 font-bold">사용 기술</h4>
                  <ul className="flex flex-wrap gap-2">
                    {selectedProject.skill.map((name) => (
                      <li
                        key={name}
                        className="flex items-center gap-1 text-sm"
                      >
                        {skillIcons[name] ?? <span>{name}</span>}
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* URL */}
                {selectedProject.url && (
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <h4 className="w-18 shrink-0 font-bold">URL</h4>
                    <a
                      href={selectedProject.url}
                      className="text-blue-600 underline"
                      target="_blank"
                    >
                      {selectedProject.url}
                    </a>
                  </div>
                )}

                {/* Github */}
                <div className="flex flex-col gap-2 sm:flex-row">
                  <h4 className="w-18 shrink-0 font-bold">Github</h4>
                  <a
                    href={selectedProject.github}
                    className="text-gray-400 text-sm"
                    target="_blank"
                  >
                    {selectedProject.github}
                  </a>
                </div>
              </div>

              {/* 기능 설명 */}
              <ul className="flex flex-col gap-6">
                {selectedProject.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex flex-col p-4 gap-2 rounded-xl"
                    style={{
                      backgroundColor:
                        hoverIndex === index ? "#f3f4f6" : "transparent",
                    }}
                    onHoverStart={() => setHoverIndex(index)}
                    onHoverEnd={() => setHoverIndex(null)}
                  >
                    <h4 className="text-xl font-bold">{feature.title}</h4>

                    <div className="flex flex-col">
                      <h5 className="mb-1 font-bold">핵심 기능</h5>
                      <ul>
                        {feature.core.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h5 className="mb-1 font-bold">어려웠던 점</h5>
                      <p className="flex gap-1">
                        <span>문제:</span>
                        {feature.difficult?.[0]}
                      </p>
                      <p className="flex gap-1">
                        <span>해결:</span>
                        {feature.difficult?.[1]}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <h5 className="mb-1 font-bold">회고</h5>
                      <p>{feature.retrospect}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <PopupButtonA
          setIsOpen={setSelectedId}
          className="absolute top-3 right-3"
        >
          <X className="" size={20} strokeWidth={3} color="black" />
        </PopupButtonA>
      </ModalB>
    </article>
  );
}
