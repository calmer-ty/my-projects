import DashboardHero from "./hero";
import DashboardProjects from "./projects";
import DashboardSkills from "./DashboardSkills";

export default function DashboardUI() {
  return (
    <article className="flex flex-col items-center">
      <DashboardHero />
      <DashboardSkills />
      <DashboardProjects />
    </article>
  );
}
