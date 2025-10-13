import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { ContactSection } from "@/components/sections/contact-section"
import { InternshipsSection } from "@/components/sections/internships-section"

export default function Page() {
  return (
    <main>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Navbar />
      <div id="main" className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <InternshipsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
        <footer className="border-t bg-background text-foreground">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm">
            <p className="font-medium">© {new Date().getFullYear()} Nirrmal G — All rights reserved.</p>
            <p className="mt-2 text-xs text-muted-foreground">Crafted with passion and creativity.</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
