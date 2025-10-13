"use client"

import { motion } from "framer-motion"
import {
  SiC,
  SiCplusplus,
  SiOpenjdk,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiArduino,
  SiReplit,
} from "react-icons/si"

const skills = [
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: SiOpenjdk },
  { name: "Python", icon: SiPython },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "MySQL", icon: SiMysql },
  { name: "Git", icon: SiGit },
  { name: "Arduino (Basic)", icon: SiArduino },
  { name: "Replit", icon: SiReplit },
]

export function SkillsSection() {
  return (
    <section id="skills" className="border-t bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">Skills</h2>
          <p className="text-muted-foreground">Languages, tools, and platforms I use.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 rounded-xl border bg-card p-4 transition hover:-translate-y-0.5 hover:ring-2 hover:ring-accent/50"
            >
              <div className="rounded-md bg-brand-gradient p-2 shadow-sm">
                <Icon className="size-6 text-primary-foreground" />
              </div>
              <span className="text-sm">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
