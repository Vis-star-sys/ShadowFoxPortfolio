"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 md:pt-24 px-6 md:px-12 pb-32 bg-background flex items-center justify-center overflow-hidden"
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

      {/* Main Content */}
      <motion.div
        className="text-center z-10 max-w-4xl relative backdrop-blur-sm bg-gradient-to-br from-white/50 to-white/30 dark:from-white/10 dark:to-white/5 border border-white/30 dark:border-white/20 rounded-2xl p-10 shadow-2xl text-black dark:text-white transition-colors duration-500"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <p className="uppercase tracking-widest text-sm font-medium text-muted-foreground mb-4">
          Welcome to my portfolio
        </p>

        <p className="text-base text-muted-foreground mb-6 italic">
          Turning ideas into immersive digital experiences 🚀
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-foreground mb-4">
          Hi, I'm{" "}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 dark:from-yellow-300 dark:via-orange-400 dark:to-yellow-500">
            Vishal Suthar
          </span>
        </h1>

        <div className="text-lg md:text-2xl font-medium text-muted-foreground mb-6">
          I'm a{" "}
          <span className="text-primary font-bold">
            <Typewriter
              words={[
                "Frontend Developer",
                "MERN Stack Learner",
                "React.js Engineer",
                "Next.js Enthusiast",
                "Tailwind CSS Lover",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={35}
              delaySpeed={1500}
            />
          </span>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I create fast, accessible, and engaging web apps using the latest
          frontend tech, always focused on smooth UX and clean code ✨
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#projects">
            <Button
              size="lg"
              className="transition-all shadow-md hover:shadow-lg hover:bg-orange-500 hover:text-white dark:hover:bg-orange-400"
            >
              🚀 Explore Projects
            </Button>
          </Link>
          <a href="/resume.pdf" download className="transition-all">
            <Button
              variant="outline"
              size="lg"
              className="transition-all hover:border-orange-500 dark:hover:border-orange-400"
            >
              📄 Download Resume
            </Button>
          </a>
        </div>

        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://github.com/Vis-star-sys"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-black dark:text-white hover:text-gray-800 dark:hover:text-gray-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/Vishal-suthar-vs18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#0077B5] hover:text-[#005a8c]"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/@Coding_Vision"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-[#FF0000] hover:text-[#cc0000]"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/vs_suthar18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#E4405F] hover:text-[#d6244c]"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#1877F2] hover:text-[#0f5dcf]"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        {/* 👇 Mobile-only scroll mouse inside content */}
        <div className="md:hidden mt-10 flex flex-col items-center pointer-events-none">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1 animate-scroll-bounce">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll-bounce" />
          </div>
          <p className="text-xs mt-1 text-muted-foreground animate-scroll-bounce">
            Scroll down
          </p>
        </div>
      </motion.div>

      {/* 👇 Desktop-only scroll mouse below content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center pointer-events-none animate-scrollBounce"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1 animate-scroll-bounce">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scrollBounce animate-scroll-bounce" />
        </div>
        <p className="text-xs mt-1 text-muted-foreground animate-scroll-bounce">
          Scroll down
        </p>
      </motion.div>
    </section>
  );
}
