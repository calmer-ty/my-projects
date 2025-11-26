"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { SiFirebase, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

const tabs = [
  {
    icon: <SiReact size={22} />,
    label: "React",
    desc: ["참고 자료와 강의가 풍부합니다.", "다양한 라이브러리를 활용할 수 있습니다.", "많은 웹 서비스 개발 도구로 사용하고 있어 유지보수와 협업에 유리합니다."],
  },
  {
    icon: <SiNextdotjs size={22} />,
    label: "Next.js",
    desc: [
      "파일 기반 라우팅을 사용하여 페이지를 생성하면 자동으로 URL과 연결되므로 라우팅이 간편합니다.",
      "프론트와 서버를 한 프로젝트 안에서 관리할 수 있어, CORS 문제 없이 REST API 호출을 손쉽게 처리했습니다.",
    ],
  },
  {
    icon: <SiFirebase size={22} />,
    label: "Firebase",
    desc: ["데이터베이스(Firestore)와 인증(Authentication) 등 백엔드 기능을 빠르게 연결할 수 있습니다.", "서버리스로 배포가 간편해 인프라 관리 부담을 줄일 수 있습니다."],
  },
  {
    icon: <SiTailwindcss size={22} />,
    label: "Tailwind CSS",
    desc: [
      "별도의 스타일 파일이나 스타일 함수 선언이 필요하지 않습니다.",
      "컴포넌트 내에서 바로 스타일을 적용할 수 있어 개발 속도가 빠릅니다.",
      "Tailwind CSS 기반 UI 키트(예: shadcn)를 활용하여 손쉽게 일관된 디자인을 구현할 수 있습니다.",
    ],
  },
];

export default function DashboardSkills() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section id="skills" className="px-10 py-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="w-full max-w-180 text-center"
      >
        <h2 className="mb-4 font-medium text-sky-500">기술 스택</h2>
        <p className="mb-8 text-2xl font-bold">사용할 수 있는 기술과 선택 이유</p>
        {/* Nav */}
        <div className="flex flex-col h-full min-h-90 gap-4 p-6 border border-gray-300 rounded-4xl">
          <nav className="flex gap-4 justify-center">
            {tabs.map((item) => (
              <motion.button
                key={item.label}
                initial={false}
                animate={{
                  backgroundColor: item === selectedTab ? "#4169E1" : "#FFF",
                  color: item === selectedTab ? "#FFF" : "#000",
                }}
                whileHover={{
                  backgroundColor: "#5A7EFF",
                  color: "#FFF",
                }}
                onClick={() => setSelectedTab(item)}
                className="relative px-4 py-2 rounded-full font-medium text-gray-700 text-center cursor-pointer"
              >
                <i className="inline-block align-middle mr-0 md:mr-2">{item.icon}</i>
                <span className="hidden md:inline-block">{item.label}</span>
                {item === selectedTab ? <motion.div layoutId="underline" id="underline" /> : null}
              </motion.button>
            ))}
          </nav>

          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div key={selectedTab ? selectedTab.label : "empty"} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }}>
                {selectedTab?.desc.map((line, idx) => (
                  <p key={idx} className="flex items-start gap-2 flex-col md:flex-row mb-8 text-left text-base break-keep">
                    <span className="shrink-0 w-18 py-1 bg-blue-400 rounded-lg text-white text-center text-sm">Point {idx + 1}</span>
                    {line}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
