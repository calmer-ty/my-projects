import { useRef } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { projects } from "./data";

interface IDashboardProjectsProps {
  setSelectedId: (value: React.SetStateAction<string | null>) => void;
}

export default function DashboardProjects({ setSelectedId }: IDashboardProjectsProps) {
  const MotionCard = motion(Card);
  const MotionCarousel = motion(Carousel);

  const hasAnimatedRef = useRef(false);

  return (
    <section id="projects" className="w-full h-screen">
      {/* 헤더  */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, ease: "easeOut" }} className="w-full py-10 text-4xl">
        <h2 className="text-4xl font-bold">TAEYEON&apos;S PORTFOLIO</h2>
        <p className="mt-2 text-gray-500 text-lg">아이디어를 실현하고 협업한 다양한 프로젝트를 만나보세요.</p>
      </motion.div>

      <MotionCarousel
        className="w-2xs sm:w-full"
        initial={!hasAnimatedRef.current ? { opacity: 0, y: 30 } : {}}
        whileInView={!hasAnimatedRef.current ? { opacity: 1, y: 0 } : {}}
        viewport={{ once: false }}
        transition={{
          delay: 0.5, // h2 애니메이션 끝난 뒤 약간의 추가 딜레이
          duration: 0.7,
          ease: "easeOut",
        }}
        onAnimationComplete={() => {
          hasAnimatedRef.current = true; // 최초 애니메이션 끝나면 true로 고정
        }}
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
      </MotionCarousel>
    </section>
  );
}
