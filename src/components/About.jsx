"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  Sparkles,
  Code,
  MonitorSmartphone,
  Server,
} from "lucide-react";

const techStack = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "GSAP",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "REST API",
  "Firebase",
];

const traits = [
  "Problem Solver",
  "Team Player",
  "Detail-Oriented",
  "Self-Learner",
  "Creative Thinker",
];

const timeline = [
  {
    year: "2021",
    title: "Started Learning Web Development",
    icon: <Sparkles className="w-4 h-4 text-primary" />,
  },
  {
    year: "2022",
    title: "Built Full Stack Projects using MERN",
    icon: <Code className="w-4 h-4 text-primary" />,
  },
  {
    year: "2023",
    title: "Contributed to Open Source & YouTube Channel",
    icon: <MonitorSmartphone className="w-4 h-4 text-primary" />,
  },
  {
    year: "2024",
    title: "Mastered Next.js and UI Animation",
    icon: <Server className="w-4 h-4 text-primary" />,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 py-24 bg-transparent text-foreground flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🔶 Glowing Background */}
      <div className="absolute z-0 top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-72 h-72 bg-orange-400 rounded-full blur-[110px] opacity-30 dark:opacity-20 animate-blink-glow" />
      </div>

      {/* Floating Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-56 h-56 bg-purple-500 opacity-10 rounded-full blur-3xl animate-float1 top-[20%] left-[5%] dark:bg-purple-300" />
        <div className="absolute w-64 h-64 bg-teal-400 opacity-10 rounded-full blur-3xl animate-float2 bottom-[5%] right-[8%] dark:bg-teal-200" />
      </div>

      {/* <motion.h3 className="text-3xl font-semibold text-center text-primary mb-10">
        About Us
      </motion.h3> */}

      <motion.div
        className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <Image
              src="/Profile.jpg"
              alt="Vishal Suthar"
              width={320}
              height={320}
              className="rounded-full shadow-xl ring-4 ring-white/20 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>

        <div className="space-y-6 text-center md:text-left">
          <motion.h3 className="text-3xl font-semibold text-center text-primary mb-10">
            About
          </motion.h3>
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Vishal
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A <strong>Full Stack Developer</strong> driven by passion and
            curiosity. I design interactive UI/UX, craft scalable web solutions,
            and love to bring motion and interactivity to life with animation
            tools like GSAP and Framer Motion.
            <br />
            I'm on a journey of continuous learning, currently exploring the
            depths of <strong>Next.js 14</strong> and AI-integrated web
            development.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {techStack.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs px-3 py-1 border border-white/10 dark:border-white/20 bg-white/20 dark:bg-white/5 backdrop-blur-sm text-black dark:text-white"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {traits.map((trait, i) => (
              <Badge
                key={i}
                className="text-xs px-3 py-1 border border-orange-400 bg-orange-100/30 dark:bg-orange-300/10 text-orange-800 dark:text-orange-300"
              >
                {trait}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild variant="default" className="gap-2 text-sm">
              <a href="/resume.pdf" download>
                <Download className="w-4 h-4" /> Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-24 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-3xl font-semibold text-center text-primary mb-10">
          My Journey
        </h3>
        <div className="relative space-y-10 before:absolute before:left-6 before:top-0 before:bottom-0 before:w-[2px] before:bg-border">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="relative pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="absolute left-6 top-2 w-8 h-8 flex items-center justify-center bg-background border border-border rounded-full shadow-md">
                {item.icon}
              </div>
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-border shadow-lg rounded-xl p-5">
                <div className="text-sm font-medium text-muted-foreground">
                  {item.year}
                </div>
                <div className="text-lg font-semibold text-foreground mt-1">
                  {item.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
