import DashboardHero from "./hero";
import DashboardProjects from "./projects";
import DashboardSkills from "./DashboardSkills";

export default function DashboardUI() {
  return (
    <article className="">
      <DashboardHero />
      <DashboardSkills />
      <DashboardProjects />
    </article>
  );
}
