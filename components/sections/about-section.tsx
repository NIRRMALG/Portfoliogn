"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="border-t bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]" data-reveal>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-3"
        >
          <div>
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">About</h2>
            <div className="mt-2 text-sm text-muted-foreground space-y-1">
              <div>
                <strong className="text-[13px] text-muted-foreground">Email:</strong>{' '}
                <span className="text-sm">nirrmalg21@gmail.com</span>
              </div>
              <div>
                <strong className="text-[13px] text-muted-foreground">Location:</strong>{' '}
                <span className="text-sm">Chennai, India</span>
              </div>
              <div>
                <strong className="text-[13px] text-muted-foreground">Phone:</strong>{' '}
                <span className="text-sm">+91 63743 10007</span>
              </div>

            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I’m an AI & Data Science student focused on turning ideas into practical solutions. I enjoy collaborating
              on GitHub projects and exploring ML with Python, TensorFlow, and Flask. I’m currently expanding my skills
              with web technologies and system design.
            </p>

            <h3 className="mt-6 text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">Roles & Responsibilities</h3>
            <ul className="mt-2 list-inside list-disc text-muted-foreground space-y-2">
              <li>Develop ML prototypes and evaluate model performance (classification/regression).</li>
              <li>Build and deploy web frontends and simple Flask backends for demos.</li>
              <li>Participate in hackathons and technical workshops to learn and mentor peers.</li>
              <li>Joint Secretary — ACE (student chapter): helped organise events, managed member communications, and
                coordinated guest sessions and workshops.</li>
            </ul>
            <div className="mt-6">
              <a
                href="/api/resume"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
