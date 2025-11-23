import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

import DashboardHero from "./hero";
import DashboardProjects from "./projects";
import DashboardSkill from "./DashboardSkill";

export default function DashboardUI() {
  const MotionButton = motion(Button);

  return (
    <article className="flex flex-col items-center">
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
      <DashboardSkill />
      <DashboardProjects />

      {/* <section id="skill" className="w-full pt-16">
        <p>기술 스택</p>
        <p>
          React · Next.js · Firebase를 사용하여 실제 서비스 기능을 개발하고 배포했습니다. 이를 선택한 이유는 컴포넌트 기반 구조와 SSR/SSG 지원으로 유지보수와 확장성이 뛰어나고, Firebase를 통해 실시간
          데이터와 인증 기능을 간편하게 구현할 수 있기 때문입니다.
        </p>
        <p>단순히 기능 구현에 그치지 않고, 사용자 경험과 유지보수성을 고려하여 클린 코드 작성과 효율적인 아키텍처 설계에 집중하고 있습니다.</p>
      </section> */}
    </article>
  );
}
