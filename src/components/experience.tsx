"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Server, Code2, Cloud, ShieldCheck, Network, Workflow } from "lucide-react"

const experience = [
  {
    role: "Infrastructure Administrator",
    company: "Hybrid Bee Technology",
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    bullets: [
      "Manage and maintain IT infrastructure, ensuring high availability, performance, and security.",
      "Administer servers, networking, virtualization/cloud environments, and monitoring systems.",
      "Automate routine system administration tasks, backups, and operational workflows.",
      "Troubleshoot infrastructure incidents and support disaster recovery and continuity processes.",
    ],
  },
  {
    role: "Software Developer & QA",
    company: "Web Development & Software Testing",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    bullets: [
      "Designed and developed responsive web applications and landing pages for clients across multiple industries.",
      "Performed manual and automated testing to ensure reliability, performance, and defect-free software.",
      "Built e-commerce solutions, product catalogs, and order management workflows.",
    ],
  },
]

const highlights = [
  {
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    label: "Cloud & Virtualization",
  },
  {
    icon: <Network className="w-5 h-5 text-cyan-400" />,
    label: "Networking",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    label: "Security Hardening",
  },
  {
    icon: <Workflow className="w-5 h-5 text-cyan-400" />,
    label: "Automation & IaC",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2, once: true })

  return (
    <section id="experience" className="relative overflow-hidden py-12 sm:py-24 md:py-40">
      {/* Cyan glow */}
      <div className="absolute -top-10 left-1/2 h-35 w-70 -translate-x-1/2 rounded-full bg-cyan-600/30 blur-3xl"></div>
      <div className="absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex flex-col items-center px-4"
      >
        <h2
          className={cn(
            "from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 mb-6",
            geist.className
          )}
        >
          About Me & Experience
        </h2>

        <p className="max-w-3xl text-center text-lg text-muted-foreground relative z-10 mb-14 md:mb-20">
          I started as a software developer and QA engineer, building web
          applications end-to-end. Today I work as an{" "}
          <strong className="text-foreground">Infrastructure Administrator</strong>{" "}
          focused on reliability, security, networking, and automation — where my
          coding background gives me an edge in Infrastructure as Code, scripting,
          and DevOps practices.
        </p>

        {/* Highlight chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 md:mb-20 relative z-10">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 rounded-full border border-cyan-600/40 bg-cyan-600/10 px-4 py-2 text-sm text-cyan-300"
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-3xl">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-600/60 via-cyan-600/30 to-transparent md:-translate-x-1/2"></div>

          {experience.map((entry, i) => (
            <motion.div
              key={entry.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex flex-col gap-4 pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></div>

              <div
                className={`
                  border border-zinc-300/40 dark:border-zinc-800
                  hover:border-cyan-600/70 bg-background/80 backdrop-blur-md
                  p-6 rounded-2xl shadow-sm transition-all
                  ${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}
                `}
              >
                <div className="flex items-center gap-3 mb-1">
                  {entry.icon}
                  <h3 className="text-xl font-semibold">{entry.role}</h3>
                </div>
                <p className="text-sm font-medium text-cyan-500 mb-4">
                  {entry.company}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-500/70"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
