import { useState } from "react";
import { motion } from "framer-motion";

import DashboardProjects from "./projects";
import DashboardDialog from "./dialog";

export default function DashboardUI() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <article className="flex flex-col h-screen">
      {/* 헤더  */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="px-12 py-10 text-4xl font-bold lg:px-20">
        <h2 className="text-4xl font-bold">프로젝트</h2>
        <p className="mt-2 text-gray-500 text-lg">진행한 작업과 실험들을 한눈에 확인해보세요.</p>
      </motion.div>

      {/* 프로젝트 */}
      <DashboardProjects setSelectedId={setSelectedId} />
      {/* 모달 */}
      <DashboardDialog selectedId={selectedId} setSelectedId={setSelectedId} />
    </article>
  );
}
