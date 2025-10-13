import React from "react"

export function InternshipsSection() {
  const internships = [
    {
      org: "Corizo",
      role: "Machine Learning Intern",
      duration: "1 month",
      mode: "Online",
      contributions: [
        "Contributed to company projects",
        "Collaborated via GitHub",
        "Improved teamwork and collaboration skills",
      ],
      certificate: "https://drive.google.com/file/d/1iqQAyMJiUI-X_QVxA_AwWoBBNXjty2hK/view?usp=drive_link",
    },
    {
      org: "AIIRF-EDII / WIDEZO",
      role: "Web Development (with AI Basics)",
      duration: "15 days",
      mode: "Online",
      contributions: [
        "Contributed to company projects",
        "Participated in building the website",
        "Enhanced teamwork and web development skills",
      ],
      certificate: "https://drive.google.com/file/d/1dpKkthYML0wzldcSCWP5hxtft4neltlo/view?usp=drive_link",
    },
  ]

  return (
    <section id="internships" className="border-t bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">Internships</h2>
       

        <div className="relative overflow-hidden rounded-xl">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-pink-200 via-violet-300 to-indigo-600 opacity-20 animate-[flow_14s_linear_infinite]" />

          <div className="grid gap-6 md:grid-cols-2 p-6">
            {internships.map((i) => (
              <article
                key={i.org}
                className="rounded-lg border bg-card p-6 backdrop-blur-sm hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-lg">{i.org}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{i.role}</p>
                  </div>
                  <a
                    href={i.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    Certificate
                  </a>
                </div>

                <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  <div>
                    <strong>Duration:</strong> {i.duration}
                  </div>
                  <div>
                    <strong>Mode:</strong> {i.mode}
                  </div>
                  <div>
                    <strong>Key contributions:</strong>
                    <ul className="ml-4 list-disc mt-2">
                      {i.contributions.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
