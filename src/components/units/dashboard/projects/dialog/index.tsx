import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

import DialogFeature from "./DialogFeature";

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
                  <div className="flex flex-col sm:flex-row gap-4">
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
                    <ul className="flex flex-col flex-wrap gap-2">
                      <li className="flex flex-col sm:flex-row gap-2">
                        <span className="inline-block w-28 shrink-0 font-bold">프론트엔드</span>
                        {selectedProject.skills.frontend.join(", ")}
                      </li>
                      <li className="flex flex-col sm:flex-row gap-2">
                        <span className="inline-block w-28 shrink-0 font-bold">스타일</span>
                        {selectedProject.skills.styles.join(", ")}
                      </li>
                      <li className="flex flex-col sm:flex-row gap-2">
                        <span className="inline-block w-28 shrink-0 font-bold">데이터 소스</span>
                        {selectedProject.skills.dataSource.join(", ")}
                      </li>
                      <li className="flex flex-col sm:flex-row gap-2">
                        <span className="inline-block w-28 shrink-0 font-bold">배포</span>
                        {selectedProject.skills.deployment.join(", ")}
                      </li>
                      {selectedProject.skills.etc && (
                        <li className="flex flex-col sm:flex-row gap-2">
                          <span className="inline-block w-28 shrink-0 font-bold">그 외</span>
                          {selectedProject.skills.etc.join(", ")}
                        </li>
                      )}
                    </ul>
                  )}
                  {selectedProject.url && (
                    <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-dotted border-gray-300">
                      <span className="w-28 shrink-0 font-bold">URL</span>
                      <a href={selectedProject.url} className="text-blue-600 underline" target="_blank">
                        {selectedProject.url}
                      </a>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <span className="w-28 shrink-0 font-bold">Github</span>
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
                  <DialogFeature key={`${feature.title}_${idx}`} feature={feature} />
                ))}
              {selectedProject.features
                .filter((el) => el.type === "core")
                .map((feature, idx) => (
                  <DialogFeature key={`${feature.title}_${idx}`} feature={feature} />
                ))}

              {/* 향후 계획 */}
              {selectedProject.futurePlans && (
                <div className="px-4 py-8 border-b border-gray-200 last:border-0">
                  <h3 className="mb-4 font-bold text-lg">향후 계획</h3>
                  <div className="ml-2 space-y-6">
                    <h4 className="mb-2 text-md font-semibold">{selectedProject.futurePlans.title}</h4>
                    <ul className="space-y-2 text-sm">
                      {selectedProject.futurePlans.contents.map((content, index) => (
                        <li key={index} className="flex gap-2">
                          • <p>{content}</p>
                        </li>
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
