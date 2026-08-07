import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { TechMarquee } from "@/components/tech-marquee";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <TechMarquee />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}