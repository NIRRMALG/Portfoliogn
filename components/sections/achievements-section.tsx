"use client"

import { motion } from "framer-motion"

const certifications: ReadonlyArray<{ title: string; org?: string; url?: string }> = [
  { title: "Programming in C", org: "Infosys Springboard", url: "https://drive.google.com/file/d/19I8oEuvpnpmss0mrwbm2gRXqNreyTFUt/view?usp=sharing" },
  { title: "Secure Programming in C#", org: "Infosys Springboard", url: "https://drive.google.com/file/d/1m6zoCPW4SMBjZYCiMjkMn5ZHAeP8w_VV/view?usp=drive_link" },
  { title: "Python using AI Workshop", org: "AI for Techies", url: "https://drive.google.com/file/d/1WdWQ0tTyYxhw7DsmU9zq49ZM-ddYBE0x/view?usp=drive_link" },
  { title: "Codeathon 3.0", org: "Prathyusha Engineering College", url: "https://drive.google.com/file/d/16PiaeD-106oYcUw604dUiqnV1OYd9bK0/view?usp=drive_link" },
  { title: "MongoDB Aggregation Fundamentals", org: "MongoDB", url: "https://drive.google.com/file/d/1pyFUXupoxtTGUrtIpvcpqnEm1gzig-3W/view?usp=drive_link" },
  { title: "MongoDB Indexing Design", org: "MongoDB", url: "https://drive.google.com/file/d/1DY1maeAtu3htvHkJm8AUmieVUyFyZa-O/view?usp=drive_link" },
  { title: "Basics of Python", org: "Infosys Springboard", url: "https://drive.google.com/file/d/1DkgEx1KT3Vv4JQjVGzjnhVmjxPSix68o/view?usp=drive_link" },
  { title: "Innovative Ambassador Training (Foundation)", org: "MOE's Innovation Cell", url: "https://drive.google.com/file/d/1kUKXeIvNxeVana6ya5mymhMGTMG65F5X/view?usp=drive_link" },
  { title: "Innovative Ambassador Training (Reskilling)", org: "MOE's Innovation Cell", url: "https://drive.google.com/file/d/1l03UP8XmqrfR22N0qzmH8Xgw8AmOQnUF/view?usp=drive_link" },
  { title: "Innovative Ambassador Training (Advanced)", org: "MOE's Innovation Cell", url: "https://drive.google.com/file/d/1iH_BdbsGUuZ1dIA0Xs8UCbT7ITDwSk3V/view?usp=drive_link" },
]

const accolades: ReadonlyArray<{ title: string; org?: string; url?: string }> = [
  { title: "Zonal Runner-Up in Table Tennis & Football", org: "" },
  { title: "Silambam District-level Third Prize", org: "" },
  { title: "INTRAMUN Delegate", org: "Sri Venkateswara College of Engineering", url: "https://drive.google.com/file/d/1kH7hasNsFfyJKvFLewZ1xKlsKFIYvAVs/view?usp=drive_link" },
  { title: "TNLA Delegate", org: "Sri Venkateswara College of Engineering", url: "https://drive.google.com/file/d/1mEB9b89eRqnK8Tku3L6UNk--aKi81twl/view?usp=drive_link" },
  
  { title: "Angel Investment/VC Funding Workshop", org: "Sri Venkateswara College of Engineering", url: "https://drive.google.com/file/d/1hKZr5ZY7R8NpcT3VZV7BL_nDp1c7BjMn/view?usp=drive_link" },
  { title: "State Machine Design for Low Cost Automation", org: "Sri Venkateswara College of Engineering", url: "https://drive.google.com/file/d/1-zP7eX_fBca4FfiPjFrWU2Xh-jxA2zLE/view?usp=drive_link" },
  { title: "IntraMUN Delegate Honourable Mention", org: "Sri Venkateswara College of Engineering" },
]

const hackathons: ReadonlyArray<{ title: string; org?: string; url?: string }> = [
  { title: "Cheminithon", org: "Sri Venkateswara College of Engineering", url: "https://drive.google.com/file/d/1Og4l9MCoPBj1YlweYq83ij5NxKS9YH8q/view?usp=drive_link" },
  { title: "Codeathon", org: "Prathyusha Engineering College", url: "https://drive.google.com/file/d/16PiaeD-106oYcUw604dUiqnV1OYd9bK0/view?usp=drive_link" },
  { title: "Smart India Hackathon", org: "Sri Venkateswara College of Engineering", url: "https://drive.google.com/file/d/1gez3L-C3g8puB-8460g5cT9dX62roQof/view?usp=drive_link" },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="border-t bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600 drop-shadow-md">
            Achievements & Certifications
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium">Technical Certifications</h3>
            <div className="mt-4 grid gap-4">
              {certifications.map((c) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border bg-card p-4 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="block">
                      <span className="inline-block rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">Certificate</span>
                      <p className="mt-2 text-sm text-muted-foreground font-medium">{c.title}</p>
                      {c.org ? <p className="text-xs text-muted-foreground mt-1">{c.org}</p> : null}
                    </a>
                  ) : (
                    <div>
                      <span className="inline-block rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">Certificate</span>
                      <p className="mt-2 text-sm text-muted-foreground font-medium">{c.title}</p>
                      {c.org ? <p className="text-xs text-muted-foreground mt-1">{c.org}</p> : null}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Accolades & Other Achievements</h3>
            <div className="mt-4 grid gap-4">
              {accolades.map((a) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border bg-card p-4 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  {a.url ? (
                    <a href={a.url} target="_blank" rel="noreferrer" className="block">
                      <span className="inline-block rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">Achievement</span>
                      <p className="mt-2 text-sm text-muted-foreground font-medium">{a.title}</p>
                      {a.org ? <p className="text-xs text-muted-foreground mt-1">{a.org}</p> : null}
                    </a>
                  ) : (
                    <div>
                      <span className="inline-block rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">Achievement</span>
                      <p className="mt-2 text-sm text-muted-foreground font-medium">{a.title}</p>
                      {a.org ? <p className="text-xs text-muted-foreground mt-1">{a.org}</p> : null}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium">Hackathons</h3>
          <div className="mt-4 grid gap-4">
            {hackathons.map((h) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border bg-card p-4 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                {h.url ? (
                  <a href={h.url} target="_blank" rel="noreferrer" className="block">
                    <span className="inline-block rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">Hackathon</span>
                    <p className="mt-2 text-sm text-muted-foreground font-medium">{h.title}</p>
                    {h.org ? <p className="text-xs text-muted-foreground mt-1">{h.org}</p> : null}
                  </a>
                ) : (
                  <div>
                    <span className="inline-block rounded bg-secondary px-2 py-1 text-xs text-secondary-foreground">Hackathon</span>
                    <p className="mt-2 text-sm text-muted-foreground font-medium">{h.title}</p>
                    {h.org ? <p className="text-xs text-muted-foreground mt-1">{h.org}</p> : null}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
