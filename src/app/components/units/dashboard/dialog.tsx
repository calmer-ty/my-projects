import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";

import { skillIcons } from "@/src/app/commons/types/constants/skillIcons";
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
            <div className="grid gap-6 break-keep overflow-scroll max-h-100">
              {/* 프로젝트 개요 */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <p className="flex items-center gap-2">
                    <FaRegCalendarAlt /> {selectedProject.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaUser />
                    {selectedProject.team}
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <span className="w-18 shrink-0 font-bold">사용 기술</span>
                  <ul className="flex flex-wrap gap-2">
                    {selectedProject.skill.map((name) => (
                      <li key={name} className="flex items-center gap-1 text-sm">
                        {skillIcons[name]}
                        <span>{name === "REST API" ? "" : name}</span>
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
              </div>
              {/* 프로젝트 기능 */}
              {selectedProject.features.map((feature, idx) => (
                <Card key={`${feature.title}_${idx}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid">
                      <span className="mb-1 text-md font-semibold text-gray-700">핵심 기능</span>
                      <ul className="text-sm text-gray-600">
                        {feature.core.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid">
                      <span className="mb-1 text-md font-semibold text-gray-700">어려웠던 점</span>
                      <p className="flex gap-1 text-sm text-gray-600">
                        <span>문제:</span>
                        {feature.difficult.problem}
                      </p>
                      <p className="flex gap-1 text-sm text-gray-600">
                        <span>해결:</span>
                        {feature.difficult.solve}
                      </p>
                    </div>

                    <div className="grid">
                      <span className="mb-1 text-md font-semibold text-gray-700">회고</span>
                      <p className="text-sm text-gray-600">{feature.retrospect}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
