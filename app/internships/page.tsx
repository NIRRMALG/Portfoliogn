import React from "react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experience.",
      technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
      link: "https://github.com/username/portfolio",
    },
    {
      title: "AI Chatbot",
      description: "An AI-powered chatbot for customer support and FAQs.",
      technologies: ["Python", "Flask", "TensorFlow"],
      link: "https://github.com/username/ai-chatbot",
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-20 bg-black text-white">
      <h1 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">Projects</h1>
      <p className="text-muted-foreground mb-6">A selection of my projects. Click an entry to view the repository.</p>

      <div className="relative overflow-hidden rounded-xl">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-pink-200 via-violet-300 to-indigo-600 opacity-20 animate-[flow_14s_linear_infinite]" />

        <div className="grid gap-6 md:grid-cols-2 p-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-lg border bg-card/60 p-6 backdrop-blur-sm hover:scale-[1.01] transition-transform">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium text-lg text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                >
                  Repository
                </a>
              </div>

              <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <div>
                  <strong>Technologies:</strong>
                  <ul className="ml-4 list-disc mt-2">
                    {p.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
