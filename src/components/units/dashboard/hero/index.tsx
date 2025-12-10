import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Reordering from "./Reordering";

export default function DashboardHero() {
  return (
    <section id="hero" className="overflow-hidden relative pt-16">
      {/* 출처 표시 */}
      <a
        href="https://kr.freepik.com/free-vector/flat-design-polygonal-background_13264357.htm#fromView=image_search_similar&page=4&position=28&uuid=b5916a80-f115-47b1-9669-4810bd32f0d7&query=EA%B0%9C%EB%B0%9C+%EB%B0%B0%EA%B2%BD"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-2 bottom-2 px-2 py-1 text-xs text-white/70 bg-black/20 rounded-md backdrop-blur-sm
        transition-colors hover:bg-black/30 hover:text-white"
      >
        Image by Freepik
      </a>
      <img
        src="/images/main.jpg"
        className="absolute inset-0 w-full h-full object-cover
             brightness-70 dark:brightness-20"
      />

      <div className="h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }} // 마우스 올리면 살짝 확대
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mt-6 text-white"
        >
          <Reordering />
          <p className="mb-6 text-xl sm:text-2xl">안녕하세요!</p>
          <p className="text-4xl sm:text-5xl font-bold leading-14"></p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-6 text-4xl leading-14 font-bold sm:text-5xl ">
            프론트엔드 개발자 김태연입니다.
          </motion.p>
          <p className="mb-12 text-lg sm:text-xl break-keep">사용자가 필요한 서비스를 고민하고 실현해 나갑니다.</p>
          <div className="flex gap-4">
            <Button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span>프로젝트 보기</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
