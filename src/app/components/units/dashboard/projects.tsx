import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";

import { projects } from "./data";
import { useEffect, useState } from "react";

interface IDashboardProjectsProps {
  setSelectedId: (value: React.SetStateAction<number | null>) => void;
}
export default function DashboardProjects({ setSelectedId }: IDashboardProjectsProps) {
  const MotionCard = motion(Card);

  // 첫 렌더링시에만 애니메이션 실행
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <motion.div
      className="flex flex-col justify-between flex-1 h-full px-12 mb-10 md:flex-row lg:px-20"
      style={{ gap: "2rem" }}
      // 자식이 순차적으로 보여지게
      initial={hasAnimated ? false : "hidden"}
      animate={hasAnimated ? false : "visible"}
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
      {projects.map((p) => (
        <MotionCard
          key={p.id}
          onClick={() => setSelectedId(p.id)}
          className={`relative overflow-hidden flex-1 bg-gray-400 p-6 rounded-xl cursor-pointer`}
          // 부모 속성 값에 따라 효과 적용
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
          <img className="absolute inset-0 w-full h-full brightness-50 object-cover" src={`/images/${p.bgSrc}`} alt="freepik" />
          {/* 텍스트 */}
          <h5 className={`relative z-10 mb-2 font-bold text-white`}>{p.title}</h5>
          <p className={`relative z-10 text-xl font-bold text-white`}>{p.desc}</p>
        </MotionCard>
      ))}
    </motion.div>
  );
}
