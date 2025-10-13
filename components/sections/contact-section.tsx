"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="border-t bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]" data-reveal>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">Contact</h2>
          <p className="text-muted-foreground">Let’s connect and explore opportunities to collaborate.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border bg-card p-5"
          >
            <h3 className="font-medium">Send a message</h3>
            <form
              className="mt-4 grid gap-3"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const data = new FormData(form)
                const payload = {
                  name: data.get("name"),
                  email: data.get("email"),
                  message: data.get("message"),
                }

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  })
                  if (res.ok) {
                    alert("Message sent — thank you!")
                    form.reset()
                  } else {
                    alert("Failed to send message")
                  }
                } catch (err) {
                  console.error(err)
                  alert("Network error")
                }
              }}
            >
              <Input name="name" placeholder="Your Name" aria-label="Your Name" />
              <Input name="email" type="email" placeholder="Your Email" aria-label="Your Email" />
              <Textarea name="message" placeholder="Your Message" aria-label="Your Message" />
              <Button type="submit">
                Submit
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border bg-card p-5"
          >
            <h3 className="font-medium">Reach me directly</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  className="underline"
                  href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent("nirrmalg21@gmail.com")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  nirrmalg21@gmail.com (Gmail)
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a className="underline" href="https://linkedin.com/in/nirrmal-g" target="_blank" rel="noreferrer">
                  linkedin.com/in/nirrmal-g
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a className="underline" href="https://github.com/NIRRMALG" target="_blank" rel="noreferrer">
                  github.com/NIRRMALG
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
