import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

import Feature from "./feature";

import { skillIcons } from "@/commons/skillIcons";
import { projectsData } from "../data";

interface IProjectsDialogProps {
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}
export default function ProjectsDialog({ selectedId, setSelectedId }: IProjectsDialogProps) {
  const selectedProject = projectsData.find((p) => p.id === selectedId);

  return (
    <Dialog open={!!selectedId} onOpenChange={() => setSelectedId(null)}>
      <DialogContent className="overflow-y-auto lg:max-w-4xl max-h-140 px-6 sm:px-10 py-10">
        {selectedProject && (
          <>
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.desc}</DialogDescription>
            </DialogHeader>

            {/* 내용 */}
            <div className="flex flex-col break-keep">
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
                      {selectedProject.projectType}
                    </p>
                  </div>
                  {/* 사용 기술 */}
                  {selectedProject.skills && (
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <span className="w-18 shrink-0 font-bold">사용 기술</span>
                      <ul className="flex flex-wrap gap-2">
                        {selectedProject.skills.map((skill) => (
                          <li key={skill.icon} className="flex flex-col gap-1 text-sm">
                            <div className="flex shrink-0">
                              <i className="mt-1">{skillIcons[skill.icon]}</i>
                              <span className="ml-1">{skill.icon}:</span>
                            </div>
                            <p>{skill.reason}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                    <a href={selectedProject.github} className="text-sm" target="_blank">
                      {selectedProject.github}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* 기능 */}
              {selectedProject.features
                .filter((el) => el.type === "responsible")
                .map((feature, idx) => (
                  <Feature key={`${feature.title}_${idx}`} feature={feature} />
                ))}
              {selectedProject.features
                .filter((el) => el.type === "core")
                .map((feature, idx) => (
                  <Feature key={`${feature.title}_${idx}`} feature={feature} />
                ))}
              {/* 향후 계획 */}
              {selectedProject.futurePlans && (
                <div className="px-4 py-8 border-b border-gray-200 last:border-0">
                  <h3 className="mb-4 font-bold text-lg">향후 계획</h3>
                  <div className="ml-2 space-y-6">
                    <h4 className="mb-2 text-md font-semibold">{selectedProject.futurePlans.title}</h4>
                    <ul className="space-y-2 text-sm">
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
