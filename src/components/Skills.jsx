"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Database,
  Cloud,
  Wrench,
  Settings,
} from "lucide-react";

const techCategories = [
  {
    title: "Languages & Frontend",
    icon: <Code className="w-5 h-5 text-primary" />,
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Database & Backend",
    icon: <Database className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 72 },
    ],
  },
  {
    title: "Deployment & DevOps",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 85 },
      { name: "Vercel", level: 80 },
      { name: "Netlify", level: 78 },
    ],
  },
  {
    title: "Cloud & APIs",
    icon: <Cloud className="w-5 h-5 text-primary" />,
    skills: [
      { name: "REST API", level: 88 },
      { name: "Google Cloud", level: 70 },
      { name: "Render", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="w-5 h-5 text-primary" />,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Trello", level: 80 },
    ],
  },
];

export default function TechSkills() {
  return (
    <motion.section
      id="skills"
      className="mt-32 w-full max-w-6xl mx-auto px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-center text-primary mb-12">
        Technical Skills Overview
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h4 className="text-xl font-semibold text-foreground">
                {category.title}
              </h4>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-muted-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 rounded-full bg-muted-foreground/10"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
