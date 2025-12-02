import DashboardHero from "./hero";
import DashboardProjects from "./projects";
import DashboardSkills from "./skills";

export default function DashboardUI() {
  return (
    <article>
      <DashboardHero />
      <DashboardSkills />
      <DashboardProjects />
    </article>
  );
}
