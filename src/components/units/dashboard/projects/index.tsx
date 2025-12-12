import { useState } from "react";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import ProjectsDialog from "./dialog";

import { projects } from "./data";
import "./styles.css";

export default function DashboardProjects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const MotionCard = motion(Card);

  return (
    <section id="projects" className="h-screen pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col h-full px-10 sm:px-20 pt-12 pb-20"
      >
        {/* 상단 제목 */}
        <div className="py-6 font-bold text-2xl">아이디어를 실현하고 협업한 다양한 프로젝트를 만나보세요.</div>

        {/* 케로셀 */}
        <Carousel className="h-full">
          <CarouselContent className="h-full -ml-0">
            {projects.map((p) => (
              <CarouselItem key={p.id} className="basis-full md:basis-1/2 lg:basis-1/3 px-0 sm:px-2">
                <div className="h-full pt-4">
                  <MotionCard
                    onClick={() => setSelectedId(p.id)}
                    className="relative overflow-hidden size-full px-6 rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -8,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <img
                      src={p.bgSrc}
                      className="absolute inset-0 w-full h-full object-cover
                        brightness-50 dark:brightness-30"
                    />
                    <h5 className="relative z-10 mb-2 font-bold text-white">{p.title}</h5>
                    <p className="relative z-10 text-xl font-bold text-white">{p.desc}</p>
                    <a
                      href={p.sourceUrl}
                      onClick={(e) => e.stopPropagation()} // ★ 이벤트 전파 차단
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-2 bottom-2 px-2 py-1 text-xs text-white/70 bg-black/20 rounded-md backdrop-blur-sm
                          transition-colors hover:bg-black/30 hover:text-white"
                    >
                      {p.source}
                    </a>
                  </MotionCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex cursor-pointer" />
          <CarouselNext className="hidden sm:flex cursor-pointer" />
        </Carousel>
      </motion.div>

      <ProjectsDialog selectedId={selectedId} setSelectedId={setSelectedId} />
    </section>
  );
}
