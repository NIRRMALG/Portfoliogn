"use client"

import { motion } from "framer-motion"

const items = [
	{
		title: "B.Tech (AI & Data Science) - Sri Venkateswara College of Engineering (Autonomous)",
		detail: "CGPA 8.51 (Expected 2028)",
	},
	{
		title: "Rashtrabhasha Praveen (equivalent to BA) - Dakshina Bharat Hindi Prachar Sabha,Madras",
		detail: "Degree equivalent awarded by DBHPS",
	},
	{
		title: "Diploma in Hindi - Central Hindi Directorate (CID), Ministry of HRD, Govt. of India",
		detail: "Diploma in Hindi Language Studies",
	},
	{ title: "HSC (2023) - 92.5%", detail: "Silver Jubilee Matriculation Hr. Sec. School (Hindi-medium)" },
	{ title: "SSLC (2021) - 96.4%", detail: "Mekana International School (Hindi-medium)" },
]

export function EducationSection() {
	return (
		<section id="education" className="border-t bg-background text-foreground shadow-[0_4px_6px_-1px_rgba(219,39,119,0.1),0_2px_4px_-2px_rgba(139,92,246,0.1)]">
			<div className="mx-auto max-w-6xl px-4 py-16">
				<div className="mb-8">
					<h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
						Education
					</h2>
				</div>
				<div className="grid gap-6 md:grid-cols-2">
					{items.map((item) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4 }}
							className="rounded-xl border bg-card p-5"
						>
							<div className="h-1.5 w-24 rounded-full bg-brand-gradient" />
							<h3 className="mt-3 font-medium">{item.title}</h3>
							<p className="text-sm text-muted-foreground">{item.detail}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
