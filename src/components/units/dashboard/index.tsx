import { useState } from "react";
import { motion } from "framer-motion";

import DashboardDialog from "./DashboardDialog";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "./data";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function DashboardUI() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // const hasAnimatedRef = useRef(false);
  // const MotionCarousel = motion(Carousel);
  const MotionCard = motion(Card);
  const MotionButton = motion(Button);

  return (
    <article className="flex flex-col items-center">
      {/* Hero */}
      <section className="flex w-full h-screen snap-start">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } },
          }}
          className="w-4/6 pt-20 pr-30 p-14"
        >
          <motion.p className="text-xl sm:text-2xl" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            안녕하세요!
          </motion.p>
          <motion.p className="my-6 text-3xl sm:text-4xl font-extrabold leading-12" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            프론트엔드 개발자 <span className="text-green-600">김태연</span>입니다.
          </motion.p>
          <motion.p className="my-6 text-lg sm:text-xl break-keep" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt iste, quasi quos culpa maxime totam soluta quo expedita, modi aliquid eius ratione, ullam quisquam pariatur?
            Consequuntur nulla ea et.
          </motion.p>
          <MotionButton
            className="mt-10"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span>소개 보기</span>
          </MotionButton>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
          className="w-2/6 pt-20 p-14 bg-sky-100"
        >
          <div className="relative w-86 h-130 mt-10">
            {/* 뒤 레이어 */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-full rotate-45 z-0" />

            {/* 앞 카드 */}
            <img
              src="/images/sample.jpg"
              alt="sample"
              className="relative w-full h-full object-cover rounded-full z-10 shadow-lg 
                transition-transform duration-300 hover:scale-105 hover:translate-x-2 hover:translate-y-2"
            />
          </div>
        </motion.div>
      </section>

      {/* About (짧게) → 이 위치에 추가 */}
      {/* <section className="w-full h-screen">
        <p>안녕하세요, 사용자가 체감할 수 있는 편리함을 만드는 프론트엔드 개발자 김태연입니다.</p>
        <p>React · Next.js · Firebase 기반으로 실제 서비스 기능 개발과 배포를 주도해 왔습니다.</p>
        <p>기능 구현뿐 아니라 사용자 경험과 유지보수성을 고려한 개발을 중요하게 생각합니다.</p>
      </section> */}

      {/* 프로젝트 */}
      <section id="projects" className="w-full h-screen snap-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full py-10 text-4xl">
          <h2 className="text-4xl font-bold">TAEYEON&apos;S PORTFOLIO</h2>
          <p className="mt-2 text-gray-500 text-lg">아이디어를 실현하고 협업한 다양한 프로젝트를 만나보세요.</p>
        </motion.div>

        <Carousel
          className="w-2xs sm:w-full"
          // initial={!hasAnimatedRef.current ? { opacity: 0, y: 30 } : {}}
          // whileInView={!hasAnimatedRef.current ? { opacity: 1, y: 0 } : {}}
          // viewport={{ once: false }}
          // transition={{
          //   delay: 0.5, // h2 애니메이션 끝난 뒤 약간의 추가 딜레이
          //   duration: 0.7,
          //   ease: "easeOut",
          // }}
          // onAnimationComplete={() => {
          //   hasAnimatedRef.current = true; // 최초 애니메이션 끝나면 true로 고정
          // }}
        >
          <CarouselContent className="-ml-0">
            {projects.map((p) => (
              <CarouselItem
                key={p.id}
                className="h-150 basis-full md:basis-1/2 lg:basis-1/3
                px-0 sm:px-2"
              >
                <div className="h-full py-4">
                  <MotionCard
                    onClick={() => setSelectedId(p.id)}
                    className={`relative overflow-hidden size-full p-6 rounded-xl cursor-pointer`}
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
      </section>
      {/* 모달 */}
      <DashboardDialog selectedId={selectedId} setSelectedId={setSelectedId} />
    </article>
  );
}
