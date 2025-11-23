import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

import { skillIcons } from "@/commons/skillIcons";
import { projectsData } from "./data";

interface IDashboardDialogProps {
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}
export default function DashboardDialog({ selectedId, setSelectedId }: IDashboardDialogProps) {
  const selectedProject = projectsData.find((p) => p.id === selectedId);

  return (
    <Dialog open={!!selectedId} onOpenChange={() => setSelectedId(null)}>
      <DialogContent
        className="p-10 max-w-100 
          sm:max-w-130 md:max-w-170 lg:max-w-240 sm:h-150"
      >
        {selectedProject && (
          <>
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.desc}</DialogDescription>
            </DialogHeader>

            {/* 내용 */}
            <div className="flex flex-col break-keep overflow-y-auto max-h-100">
              {/* 프로젝트 개요 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">프로젝트 개요</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 작업 기간 및 프로젝트 인원 */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <p className="flex items-center gap-2">
                      <FaRegCalendarAlt /> {selectedProject.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaUser />
                      {selectedProject.team}
                    </p>
                  </div>
                  {/* 사용 기술 */}
                  <div className="flex flex-col items-center gap-2 sm:flex-row">
                    <span className="w-18 shrink-0 font-bold">사용 기술</span>
                    <ul className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill) => (
                        <li key={skill.icon} className="flex gap-1 text-sm">
                          <div className="flex shrink-0">
                            <i className="mt-1 mr-1">{skillIcons[skill.icon]}</i>
                            <span>{skill.icon}</span>
                          </div>
                          : {skill.reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {selectedProject.url && (
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <span className="w-18 shrink-0 font-bold">URL</span>
                      <a href={selectedProject.url} className="text-blue-600 underline" target="_blank">
                        {selectedProject.url}
                      </a>
                    </div>
                  )}
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <span className="w-18 shrink-0 font-bold">Github</span>
                    <a href={selectedProject.github} className="text-gray-400 text-sm" target="_blank">
                      {selectedProject.github}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* 기능 */}
              {selectedProject.features.map((feature, idx) => (
                <div key={`${feature.title}_${idx}`} className="px-4 py-8 border-b border-gray-200 last:border-0">
                  <h3 className="mb-4 font-bold text-lg">{feature.title}</h3>

                  <ul className="ml-2 space-y-6">
                    <li>
                      <h4 className="mb-2 text-md font-semibold text-gray-700">{selectedProject.team === "개인 프로젝트" ? "핵심" : "담당"} 기능</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {feature.core.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </li>

                    <li>
                      <h4 className="mb-2 text-md font-semibold text-gray-700">어려웠던 점</h4>
                      <ul className="space-y-2">
                        <li className="flex gap-1 text-sm text-gray-600">
                          <span className="shrink-0">• 문제:</span>
                          {feature.difficult.problem}
                        </li>
                        <li className="flex gap-1 text-sm text-gray-600">
                          <span className="shrink-0">• 해결:</span>
                          {feature.difficult.solve}
                        </li>
                      </ul>
                    </li>

                    <li>
                      <h4 className="mb-2 text-md font-semibold text-gray-700">회고</h4>
                      <p className="text-sm text-gray-600">• {feature.retrospect}</p>
                    </li>
                  </ul>
                </div>
              ))}
              {/* 향후 계획 */}
              {selectedProject.futurePlans && (
                <div className="px-4 py-8 border-b border-gray-200 last:border-0">
                  <h3 className="mb-4 font-bold text-lg">향후 계획</h3>
                  <div className="ml-2 space-y-6">
                    <h4 className="mb-2 text-md font-semibold text-gray-700">{selectedProject.futurePlans.title}</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {selectedProject.futurePlans.contents.map((content, index) => (
                        <li key={index}>• {content}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
