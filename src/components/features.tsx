"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Code, Brush, Wrench, Search } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const primaryColor = "text-cyan-600"

  const services = [
    {
      title: "Frontend Development",
      desc: "Building responsive, accessible, and modern user interfaces with a strong focus on usability.",
      icon: <Brush className={`w-10 h-10 ${primaryColor}`} />,
    },
    {
      title: "Software Development",
      desc: "Developing scalable, maintainable, and well-structured applications using best practices.",
      icon: <Code className={`w-10 h-10 ${primaryColor}`} />,
    },
    {
      title: "Quality Assurance & Testing",
      desc: "Manual and automated testing to ensure reliability, performance, and defect-free software.",
      icon: <Search className={`w-10 h-10 ${primaryColor}`} />,
    },
    {
      title: "Maintenance & Continuous Improvement",
      desc: "Bug fixing, refactoring, and continuous enhancements to improve software quality over time.",
      icon: <Wrench className={`w-10 h-10 ${primaryColor}`} />,
    },
  ]

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-3 sm:px-20 md:px-30">
          {services.map((service, i) => (
            <motion.div
              key={i}
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
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
