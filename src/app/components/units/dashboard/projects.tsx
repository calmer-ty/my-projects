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
    <>
      <MotionCarousel
        className="w-2xs sm:w-full"
        initial={!hasAnimatedRef.current ? { opacity: 0, y: 30 } : {}}
        animate={!hasAnimatedRef.current ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 1, // h2 애니메이션 끝난 뒤 약간의 추가 딜레이
          duration: 1,
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
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`relative overflow-hidden size-full p-6 rounded-xl cursor-pointer`}
                  // 부모 속성 값에 따라 효과 적용
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -8,
                    // boxShadow: "inset 0px 12px 24px rgba(0, 0, 0, 0.15)",
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
      {/* <motion.div
        className="grid grid-cols-1 gap-8 h-full px-12 pb-10
        lg:px-20 sm:grid-cols-3"
        // 자식이 순차적으로 보여지게
        initial={hasAnimated ? false : "hidden"}
        animate={hasAnimated ? false : "visible"}
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
          <MotionCard
            key={p.id}
            onClick={() => setSelectedId(p.id)}
            className={`relative overflow-hidden w-full p-6 rounded-xl cursor-pointer`}
            // 부모 속성 값에 따라 효과 적용
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
       
            <img className="absolute inset-0 w-full h-full brightness-50 object-cover" src={`/images/${p.bgSrc}`} alt="freepik" />
        
            <h5 className={`relative z-10 mb-2 font-bold text-white`}>{p.title}</h5>
            <p className={`relative z-10 text-xl font-bold text-white`}>{p.desc}</p>
          </MotionCard>
        ))}
      </motion.div> */}
    </>
  );
}
