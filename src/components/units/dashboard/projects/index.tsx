import { useState } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import DashboardDialog from "./DashboardDialog";

import { projects } from "./data";
import "./styles.css";

export default function DashboardProjects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const MotionCard = motion(Card);

  return (
    <section id="projects" className="w-full h-screen pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col h-full px-10 sm:px-20 pt-12 pb-20"
      >
        {/* 상단 제목 */}
        <div className="w-full py-6 font-bold text-2xl">아이디어를 실현하고 협업한 다양한 프로젝트를 만나보세요.</div>

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
                    <h5 className="relative z-10 mb-2 font-bold text-white">{p.title}</h5>
                    <p className="relative z-10 text-xl font-bold text-white">{p.desc}</p>
                  </MotionCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </motion.div>

      <DashboardDialog selectedId={selectedId} setSelectedId={setSelectedId} />
    </section>
  );
}
