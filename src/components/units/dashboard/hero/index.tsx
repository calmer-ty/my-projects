import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Reordering from "./Reordering";

export default function DashboardHero() {
  return (
    <section id="hero" className="overflow-hidden w-full h-screen pt-16 bg-gradient-to-b from-sky-0 via-sky-200 to-sky-300 bg-[url('/images/main.jpg')] bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }} // 마우스 올리면 살짝 확대
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center size-full px-10 py-36 text-white"
      >
        <Reordering />
        <p className="mb-6 text-xl sm:text-2xl">안녕하세요!</p>
        <p className="text-4xl sm:text-5xl font-bold leading-14"></p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-6 text-4xl leading-14 font-bold sm:text-5xl ">
          프론트엔드 개발자 김태연입니다.
        </motion.p>
        <p className="mb-12 text-lg sm:text-xl text-gray-200 break-keep">사용자가 필요한 서비스를 고민하고 실현해 나갑니다.</p>
        <div className="flex gap-4">
          <Button className="cursor-pointer" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span>프로젝트 보기</span>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
