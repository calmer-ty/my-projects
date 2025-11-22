import { useState } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";

import DashboardDialog from "./DashboardDialog";

import { projects } from "./data";
import "./styles.css";

export default function DashboardUI() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const MotionCard = motion(Card);
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

      {/* Hero */}
      <section id="home" className="flex h-screen pt-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }} className="flex justify-between w-full pt-40 pr-30 p-20">
          {/* 글 내용 */}
          <div className="max-w-170">
            <p className="text-xl sm:text-2xl">안녕하세요!</p>
            <p className="my-6 text-4xl sm:text-5xl font-extrabold leading-12">
              프론트엔드 개발자 <span className="text-green-600">김태연</span>입니다.
            </p>
            <p className="my-6 text-lg sm:text-xl break-keep">
              React를 중심으로 웹 서비스를 개발합니다.
              <br />
              사용자가 직접 쓰고 싶어 하는 경험과 가치를 고민합니다.
            </p>
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
          </div>
          {/* 사진 */}
          <div className="w-100 h-100 p-10 bg-white border border-gray-300 rounded-full shadow-lg">
            <img src="/images/profile.jpg" alt="profile" className="w-full h-full object-cover rounded-full z-10 shadow-lg" />
          </div>
        </motion.div>
      </section>

      {/* 프로젝트 */}
      <section id="projects" className="w-full h-screen pt-16 p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col h-full"
        >
          {/* 상단 제목 */}
          <div className="w-full py-6 text-4xl">
            <h2 className="text-4xl font-bold">TAEYEON&apos;S PORTFOLIO</h2>
            <p className="mt-2 text-gray-500 text-lg">아이디어를 실현하고 협업한 다양한 프로젝트를 만나보세요.</p>
          </div>

          {/* 케로셀 */}
          <Carousel className="h-full -mx-2">
            <CarouselContent className="h-full -ml-0">
              {projects.map((p) => (
                <CarouselItem key={p.id} className="basis-full md:basis-1/2 lg:basis-1/3 px-0 sm:px-2">
                  <div className="h-full pt-4">
                    <MotionCard
                      onClick={() => setSelectedId(p.id)}
                      className="relative overflow-hidden size-full p-6 rounded-xl cursor-pointer"
                      // 부모 속성 값에 따라 효과 적용
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{
                        y: -8,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    >
                      <motion.img
                        className="absolute inset-0 w-full h-full brightness-50 object-cover"
                        src={`/images/${p.bgSrc}`}
                        alt="freepik"
                        whileHover={{
                          filter: "brightness(0.3)",
                        }}
                      />
                      <h5 className={`relative z-10 mb-2 font-bold text-white`}>{p.title}</h5>
                      <p className={`relative z-10 text-xl font-bold text-white`}>{p.desc}</p>
                    </MotionCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </section>

      {/* About (짧게) → 이 위치에 추가 */}
      <section id="about" className="w-full h-screen pt-16">
        <p>안녕하세요, 사용자가 체감할 수 있는 편리함을 만드는 프론트엔드 개발자 김태연입니다.</p>
        <p>React · Next.js · Firebase 기반으로 실제 서비스 기능 개발과 배포를 주도해 왔습니다.</p>
        <p>기능 구현뿐 아니라 사용자 경험과 유지보수성을 고려한 개발을 중요하게 생각합니다.</p>
      </section>
      {/* 모달 */}
      <DashboardDialog selectedId={selectedId} setSelectedId={setSelectedId} />
    </article>
  );
}
