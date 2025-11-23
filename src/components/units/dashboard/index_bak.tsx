import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

import "./styles.css";
import DashboardHero from "./DashboardHero";
import DashboardProjects from "./projects";

export default function DashboardUI() {
  const MotionButton = motion(Button);

  return (
    <article>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed flex justify-between items-center w-full h-16 px-8 bg-white z-10"
      >
        <h1 className="text-lg font-extrabold">TaeYeon.</h1>
        <div className="flex gap-4">
          <Button variant="link" className="hover:text-purple-600 transition-colors duration-300" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>
            Home
          </Button>
          <Button variant="link" className="hover:text-purple-600 transition-colors duration-300" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            Projects
          </Button>
          <Button variant="link" className="hover:text-purple-600 transition-colors duration-300" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
            About
          </Button>
        </div>
        <MotionButton
          variant="outline"
          className="w-10 h-10 rounded-full"
          animate={{
            // opacity: [1, 0.5, 1], // 깜박임
            scale: [1, 1.2, 1], // 살짝 커졌다 작아짐
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Github size={10} />
        </MotionButton>
      </motion.header>

      <DashboardHero />
      <DashboardProjects />

      {/* About (짧게) → 이 위치에 추가 */}
      <section id="about" className="w-full h-screen pt-16">
        <p>안녕하세요, 사용자가 체감할 수 있는 편리함을 만드는 프론트엔드 개발자 김태연입니다.</p>
        <p>React · Next.js · Firebase 기반으로 실제 서비스 기능 개발과 배포를 주도해 왔습니다.</p>
        <p>기능 구현뿐 아니라 사용자 경험과 유지보수성을 고려한 개발을 중요하게 생각합니다.</p>
      </section>
    </article>
  );
}
