"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const projects: ReadonlyArray<{
  name: string
  image?: string
  stack?: string
  desc?: string
  internship?: string
  links: { repo?: string; live?: string; pdf?: string }
}> = [
  {
    name: "GASCK College Website",
    image:"GA.png",
    stack: "Python, HTML, CSS, GitHub, Render",
    desc: "Built and deployed a simple college website for course and faculty display.",
    internship: "Student Project",
    links: {
      repo: "https://github.com/NIRRMALG/gasck-college",
      live: "https://gasckcollege.onrender.com",
    },
  },
  {
    name: "Mission Maru Ulavu",
    image:"MU.png",
    stack: "Concept, Documentation",
    desc: "Agriculture automation concept (Mission Maru Ulavu) — documentation available as PDF.",
    links: {
      pdf: "https://drive.google.com/file/d/1Y8Nfd16wSOnDjPVsJ7YeqNZZ53WnVkDx/view?usp=sharing",
    },
  },
]

const researchPapers: ReadonlyArray<{
  name: string
  stack?: string
  desc?: string
  links: { repo?: string; live?: string; pdf?: string }
}> = [
  {
    name: "Research: Optimized Deep Learning for Breast Cancer Detection (VGG16)",
    stack: "TensorFlow, Flask, Google Colab",
    desc: `
      <ul>
        <li>Trained a deep learning model using VGG16 CNN architecture to classify histopathological breast cancer images from BreakHis, Paul Mooney’s dataset.</li>
        <li>Achieved ~68% accuracy after preprocessing, segmentation, and feature extraction.</li>
        <li>Used Google Colab for model training.</li>
        <li>Draft prepared; targeting submission to IEEE conference.</li>
      </ul>
    `,
    links: {
      repo: "#",
      live: "https://colab.research.google.com/drive/1h_hPLn_BcTE8jNWwXGY5eQu7ZDuVrIrS",
      pdf: "#",
    },
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]" data-reveal>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-4 text">
          <h2 className="text-3xl font bg-clip-text text-transparent bg-pink-500 drop-shadow-md">
            Projects
          </h2>
          <p className="text-muted-foreground">Selected work and ongoing explorations.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-xl border bg-card p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg border">
                  <img
                    src={`${p.image}`}
                    alt={`${p.name} Project Image`}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-pink-500 transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.stack}</p>
                  </div>
                  {p.internship ? (
                    <span className="rounded-md bg-pink-500 px-2 py-1 text-xs font-medium text-white">
                      {p.internship}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.live ? (
                    <Button asChild size="sm" className="bg-pink-500 text-white hover:bg-pink-600">
                      <a href={p.links.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </Button>
                  ) : null}
                  {p.links.pdf ? (
                    <Button asChild size="sm" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                      <a
                        href={encodeURI(p.links.pdf)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        PDF
                      </a>
                    </Button>
                  ) : null}
                  {p.links.repo ? (
                    <Button asChild size="sm" variant="ghost" className="text-pink-500 hover:text-pink-600">
                      <a href={p.links.repo} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </Button>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
          <aside className="md:col-span-1">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-pink-500">
              Research & Papers
            </h3>
            <div className="mt-6 grid gap-6">
              {researchPapers
                .filter((r) => {
                  const has = (v?: string) => !!v && v !== "#"
                  return has(r.links.pdf) || has(r.links.live) || has(r.links.repo)
                })
                .map((r) => (
                  <motion.article
                    key={r.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-xl border bg-card p-6 shadow-lg hover:shadow-2xl hover:bg-card transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground group-hover:text-pink-500 transition-colors">
                          {r.name}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">{r.stack}</p>
                      </div>
                      <span className="inline-block rounded bg-pink-500 px-2 py-1 text-xs text-white">
                        Paper
                      </span>
                    </div>
                    <p
                      className="mt-2 text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: r.desc || "" }}
                    ></p>
                    <div className="mt-3 flex gap-2">
                      {r.links.pdf && r.links.pdf !== "#" ? (
                        <Button asChild size="sm" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
                          <a href={r.links.pdf} target="_blank" rel="noreferrer">
                            PDF
                          </a>
                        </Button>
                      ) : null}
                      {r.links.live && r.links.live !== "#" ? (
                        <Button asChild size="sm" className="bg-pink-500 text-white hover:bg-pink-600">
                          <a href={r.links.live} target="_blank" rel="noreferrer">
                            View
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </motion.article>
                ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
