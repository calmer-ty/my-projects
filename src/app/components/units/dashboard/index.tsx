import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "./data";
import { DashboardDialog } from "./dialog";

export default function DashboardUI() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <article className="flex flex-col h-screen">
      {/* 헤더  */}
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="px-12 py-10 text-5xl font-bold lg:px-20">
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
        {projects.map((p) => (
          <motion.div
            key={p.id}
            onClick={() => setSelectedId(p.id)}
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
            <img className="absolute inset-0 w-full h-full brightness-70 object-cover" src={`/images/${p.bgSrc}`} alt="freepik" />
            <h3 className={`relative z-10 mb-2 text-sm font-bold text-${p.color}`}>{p.title}</h3>
            <h4 className={`relative z-10 text-xl font-bold text-${p.color}`}>{p.desc}</h4>
          </motion.div>
        ))}
      </motion.div>

      {/* 모달 */}
      <DashboardDialog selectedId={selectedId} setSelectedId={setSelectedId} />
    </article>
  );
}
