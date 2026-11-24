"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import {
  Server,
  Network,
  Cloud,
  Container,
  Activity,
  DatabaseBackup,
  ShieldCheck,
  Workflow,
  GitBranch,
  Terminal,
  Code2,
  Globe,
} from "lucide-react"

const skillCategories = [
  {
    title: "Infrastructure & Cloud",
    desc: "Operating and hardening the systems that keep services online and secure.",
    icon: <Server className="w-10 h-10 text-cyan-400" />,
    skills: [
      { icon: <Server className="w-4 h-4" />, label: "Linux & Windows Server" },
      { icon: <Cloud className="w-4 h-4" />, label: "Cloud & Virtualization" },
      { icon: <Network className="w-4 h-4" />, label: "Networking" },
      { icon: <Container className="w-4 h-4" />, label: "Docker" },
      { icon: <Activity className="w-4 h-4" />, label: "Monitoring" },
      { icon: <DatabaseBackup className="w-4 h-4" />, label: "Backups & DRP" },
      { icon: <ShieldCheck className="w-4 h-4" />, label: "Security Hardening" },
    ],
  },
  {
    title: "Automation & DevOps",
    desc: "Turning repetitive ops work into reliable, repeatable automation.",
    icon: <Workflow className="w-10 h-10 text-cyan-400" />,
    skills: [
      { icon: <Workflow className="w-4 h-4" />, label: "CI/CD Pipelines" },
      { icon: <GitBranch className="w-4 h-4" />, label: "Git & GitHub Actions" },
      { icon: <Terminal className="w-4 h-4" />, label: "Scripting" },
      { icon: <Cloud className="w-4 h-4" />, label: "Infrastructure as Code" },
      { icon: <ShieldCheck className="w-4 h-4" />, label: "DevOps Practices" },
    ],
  },
  {
    title: "Software & Web Development",
    desc: "Full-stack development experience behind every project on this site.",
    icon: <Code2 className="w-10 h-10 text-cyan-400" />,
    skills: [
      { icon: <Globe className="w-4 h-4" />, label: "Frontend (React, TypeScript)" },
      { icon: <Code2 className="w-4 h-4" />, label: "Backend & APIs" },
      { icon: <Globe className="w-4 h-4" />, label: "Responsive UI/UX" },
      { icon: <Activity className="w-4 h-4" />, label: "QA & Testing" },
      { icon: <Container className="w-4 h-4" />, label: "Deployment" },
    ],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="skills" className="relative overflow-hidden py-12 sm:py-24 md:py-40">
      {/* Cyan glow */}
      <div className="absolute -top-10 left-1/2 h-35 w-70 -translate-x-1/2 rounded-full bg-cyan-600/30 blur-3xl"></div>
      <div className="absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent"></div>

      <motion.div
        ref={ref}
        style={{ opacity, y: translateY }}
        className="container mx-auto flex flex-col items-center px-4"
      >
        <h2
          className={cn(
            "from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 mb-12 md:mb-14",
            geist.className
          )}
        >
          Skills & Expertise
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-3 sm:px-10 md:px-20">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(8, 145, 178, 0.25)",
              }}
              className="
                border border-zinc-300/40 dark:border-zinc-800 
                hover:border-cyan-600/70
                bg-background/80 backdrop-blur-md
                p-6 rounded-2xl shadow-sm 
                transition-all cursor-pointer
              "
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                {category.desc}
              </p>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.label}
                    className="flex items-center gap-1.5 rounded-full border border-cyan-600/30 bg-cyan-600/10 px-3 py-1.5 text-xs text-cyan-300"
                  >
                    {skill.icon}
                    {skill.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
