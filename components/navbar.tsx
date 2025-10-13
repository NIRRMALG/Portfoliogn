"use client"

import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { site } from "@/data/site"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

const links = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#education", label: "Education" },
	{ href: "#internships", label: "Internships" },
	{ href: "#projects", label: "Projects" },
	{ href: "#skills", label: "Skills" },
	{ href: "#achievements", label: "Achievements" },
	{ href: "#contact", label: "Contact" },
]

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b bg-background/100 backdrop-blur text-foreground">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
				<Link href="#home" className="inline-flex items-center gap-2">
					<Logo size={36} />
					<span className="font-semibold">{site.name}</span>
				</Link>

				<div className="hidden items-center gap-2 md:flex">
					{links.map((l) => (
						<Button key={l.href} asChild size="sm" variant="ghost" className="text-foreground hover:text-accent">
							<a href={l.href}>{l.label}</a>
						</Button>
					))}
				</div>

				<div className="flex items-center gap-2">
					<Button asChild size="sm" className="hidden md:inline-flex">
						<a
							href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
								"nirrmalg21@gmail.com"
							)}`}
							target="_blank"
							rel="noreferrer"
						>
							Contact Me
						</a>
					</Button>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	)
}
