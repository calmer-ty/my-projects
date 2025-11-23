import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHero() {
  return (
    <section id="hero" className="h-screen snap-start pt-16 bg-[url('/images/main.jpg')] bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-center gap-12 size-full p-20 text-white"
      >
        <a
          href="https://kr.freepik.com/free-vector/flat-design-polygonal-background_13264357.htm#fromView=image_search_similar&page=4&position=28&uuid=b5916a80-f115-47b1-9669-4810bd32f0d7&query=%EA%B0%9C%EB%B0%9C+%EB%B0%B0%EA%B2%BD"
          className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded"
        >
          Photo by freepik
        </a>
        {/* 글 내용 */}
        <p className="text-xl sm:text-2xl">안녕하세요!</p>
        <p className="text-4xl sm:text-5xl font-extrabold leading-14">
          <motion.span
            style={{ fontSize: "3rem", fontFamily: "monospace" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-extrabold leading-14"
          >
            프론트엔드 개발자
          </motion.span>
          김태연입니다.
        </p>

        <p className="text-lg sm:text-xl break-keep">사용자가 직접 쓰고 싶어 하는 경험과 가치를 고민합니다.</p>
        <div className="flex gap-4 mt-10">
          <Button className="cursor-pointer" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span>프로젝트 보기</span>
          </Button>
          <Button variant="secondary" className="cursor-pointer" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span>소개 보기</span>
          </Button>
        </div>
        {/* 사진 */}
        {/* <div className="w-100 h-100 p-10 bg-white border border-gray-300 rounded-full shadow-lg hidden lg:block">
            <img src="/images/profile.jpg" alt="profile" className="w-full h-full object-cover rounded-full z-10 shadow-lg" />
          </div> */}
      </motion.div>
    </section>
  );
}
