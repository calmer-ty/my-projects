import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { IProject, projects } from "./data";
import { ExternalLink, Github } from "lucide-react";
import "./styles.css";

export default function DashboardProjects() {
  return (
    <section id="projects" className="h-screen pt-16 bg-[#f5f5f5]">
      <div className="flex flex-col h-full px-10 sm:px-20 pt-12 pb-20">
        {/* 상단 제목 */}
        <div className="py-6 font-bold text-2xl">주요 프로젝트</div>

        {/* 케로셀 */}
        <Carousel className="h-full">
          <CarouselContent className="h-full -ml-0">
            {projects.map((p) => {
              return <ProjectsCard key={p.id} project={p} />;
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex cursor-pointer" />
          <CarouselNext className="hidden sm:flex cursor-pointer" />
        </Carousel>
      </div>

      {/* <ProjectsDialog selectedId={selectedId} setSelectedId={setSelectedId} /> */}
    </section>
  );
}

function ProjectsCard({ project }: { project: IProject }) {
  // 각 카드마다 개별적으로 탭 상태를 가지도록 map 내부에서 선언
  const [activeTab, setActiveTab] = useState<"features" | "trouble">("features");

  return (
    <CarouselItem key={project.id} className="basis-full md:basis-1/2 px-0 sm:px-4">
      <div className="flex flex-col gap-6 relative overflow-hidden size-full p-0 rounded-xl border border-zinc-200 bg-white shadow-sm flex flex-col">
        {/* 상단: 프로젝트 기본 정보 */}
        <div className="relative w-full p-6 overflow-hidden rounded-t-xl">
          <div className="absolute inset-0 w-full h-full overflow-hidden shrink-0 z-0">
            {/* 이미지 */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="size-full object-cover object-top opacity-70" // 👈 선명도를 살짝 낮추어 글씨 가독성을 확보합니다.
            />
            {/* 고정 그라데이션 레이어 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col gap-1 my-6">
            <h5 className="text-xl font-bold tracking-tight text-zinc-900">{project.title}</h5>
            <p className="text-xs font-semibold text-zinc-400">{project.period}</p>
          </div>
        </div>

        {/* 중단: 주요기능 / 트러블슈팅 탭 버튼 */}
        <div className="flex border-b border-zinc-100 px-6">
          <button
            type="button"
            onClick={() => {
              setActiveTab("features");
            }}
            className={`pb-2 px-4 text-sm font-medium transition-colors relative ${
              activeTab === "features" ? "text-zinc-900 font-semibold border-b-2 border-zinc-900" : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            주요 기능
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("trouble");
            }}
            className={`pb-2 px-4 text-sm font-medium transition-colors relative ${
              activeTab === "trouble" ? "text-zinc-900 font-semibold border-b-2 border-zinc-900" : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            트러블 슈팅
          </button>
        </div>
        {/* Content 영역: 선택된 탭에 따라 텍스트 노출 */}
        <div className="min-h-[160px] text-sm text-zinc-600 space-y-2 px-6">
          {activeTab === "features" ? (
            <ul className="list-disc list-inside space-y-1.5 break-keep">
              {project.features?.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-3 break-keep">
              <div>
                <span className="inline-block text-xs font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded mb-1">Problem</span>
                <p className="font-medium text-zinc-800 leading-relaxed">{project.troubleshooting?.problem}</p>
              </div>
              <div>
                <span className="inline-block text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded mb-1">Solution</span>
                <p className="text-zinc-600 leading-relaxed">{project.troubleshooting?.solution}</p>
              </div>
            </div>
          )}
        </div>
        {/* 하단: 외부 링크 버튼 영역 */}
        <div className="flex items-center gap-2 mt-auto px-6 pb-6">
          {project.link?.url && (
            <a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 flex-1 py-2 px-3 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-sm"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.link?.github && (
            <a
              href={project.link.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 flex-1 py-2 px-3 text-xs font-medium text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-lg transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </CarouselItem>
  );
}
