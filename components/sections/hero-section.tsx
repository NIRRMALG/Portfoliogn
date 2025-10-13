"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ProfileImage } from "@/components/profile-image"
import { site } from "@/data/site"

export function HeroSection() {
  return (
    <section id="home" className="relative bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]">
      <div className="absolute inset-0 -z-10 bg-overlay opacity-90 shadow-[0_10px_30px_rgba(255,255,255,0.1),0_20px_50px_rgba(236,72,153,0.2)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600 shadow-[0_4px_20px_rgba(236,72,153,0.8),0_2px_10px_rgba(255,105,180,0.6)]">
            Aspiring AI & Data Science Engineer
          </h1>
          <p className="text-pretty text-muted-foreground">
            I’m Nirrmal G — passionate about applying coding and problem-solving skills to real-world projects in AI and
            Data Science.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-pink-400 text-white shadow-[0_4px_10px_rgba(255,105,180,0.5)] hover:shadow-[0_6px_15px_rgba(255,105,180,0.7)] transition-shadow">
              <a href="#projects" className="block w-full h-full">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="shadow-[0_4px_10px_rgba(255,105,180,0.5)] hover:shadow-[0_6px_15px_rgba(255,105,180,0.7)] transition-shadow">
              <a href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent("nirrmalg21@gmail.com")}`} target="_blank" rel="noreferrer" className="block w-full h-full">
                Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost" className="gap-2 shadow-[0_4px_10px_rgba(255,105,180,0.5)] hover:shadow-[0_6px_15px_rgba(255,105,180,0.7)] transition-shadow">
              <a href="https://github.com/NIRRMALG" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="block w-full h-full">
                <FaGithub className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" className="gap-2 shadow-[0_4px_10px_rgba(255,105,180,0.5)] hover:shadow-[0_6px_15px_rgba(255,105,180,0.7)] transition-shadow">
              <a
                href="https://linkedin.com/in/nirrmal-g"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="block w-full h-full"
              >
                <FaLinkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-pink-400 opacity-50 blur" />
            <div className="relative z-10 size-56 sm:size-64 overflow-hidden rounded-2xl">
              <ProfileImage src={site.profileImage} alt={`Portrait of ${site.name}`} width={512} height={512} priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
