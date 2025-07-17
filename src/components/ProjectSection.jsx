"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Hammer } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projects } from "@/lib/projectData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-orange-500">
          🚀 My Projects ✨
        </h2> */}

        <motion.h3 className="text-3xl font-semibold text-center text-primary mb-10">
          🚀 My Projects ✨
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="relative flex flex-col h-full w-full rounded-xl border border-white/10 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-orange-400/20 shadow-md overflow-hidden group">
                {/* Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-fill transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
                  <div className="absolute bottom-3 left-3 z-20">
                    <h3 className="text-white text-base font-semibold flex items-center gap-2 drop-shadow-sm">
                      ✨{project.title}
                      {project.status === "in-progress" && (
                        <Badge className="bg-orange-200 text-orange-700 dark:bg-orange-400/20 dark:text-orange-300 text-[10px] flex items-center gap-1 px-2 py-[1px] shadow-sm">
                          <Hammer className="w-3 h-3" />
                          In Progress
                        </Badge>
                      )}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <CardHeader className="px-4 pt-3 pb-1">
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                {/* Tech + Links */}
                <CardContent className="px-4 pb-4 pt-1 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        className="text-[10px] px-2 py-[2px] border border-white/20 dark:border-white/10 bg-white/40 dark:bg-slate-800/40 text-gray-800 dark:text-gray-100 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center text-xs">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-300 hover:underline flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
