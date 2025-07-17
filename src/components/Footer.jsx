"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full mt-20 overflow-hidden"
    >
      {/* 🎨 Animated Glowing Balls */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* 🟠 Orange Center Ball (Bounce) */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[300px] h-[300px] bg-orange-400 opacity-30 blur-3xl rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 💗 Pink Ball (Diagonal Float) */}
        <motion.div
          className="absolute left-10 bottom-10 w-[200px] h-[200px] bg-pink-400 opacity-20 blur-2xl rounded-full"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 🟢 Teal Ball (Soft Horizontal Float) */}
        <motion.div
          className="absolute right-10 bottom-0 w-[250px] h-[250px] bg-teal-400 opacity-25 blur-2xl rounded-full"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 🌐 Footer Content */}
      <div className="relative z-10">
        <div
          className="
            relative mx-auto max-w-7xl px-6 py-10 rounded-t-3xl border-t
            backdrop-blur-lg
            bg-white/60 dark:bg-black/20
            border-white/30 dark:border-white/10
            text-black dark:text-white
            shadow-lg dark:shadow-none
            ring-1 ring-inset ring-white/10 dark:ring-white/10
            transition-all duration-500
          "
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm"
          >
            {/* About Section */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-lg font-semibold mb-3">Vishal.dev</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Crafting modern web experiences with precision, creativity, and
                speed using Next.js, Tailwind CSS, and futuristic UI.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h4 className="text-md font-semibold mb-2">Navigation</h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li><Link href="#hero" className="hover:underline">Home</Link></li>
                <li><Link href="#about" className="hover:underline">About</Link></li>
                <li><Link href="#skills" className="hover:underline">Skills</Link></li>
                <li><Link href="#projects" className="hover:underline">Projects</Link></li>
                <li><Link href="#contact" className="hover:underline">Contact</Link></li>
              </ul>
            </motion.div>

            {/* Contact & Socials */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h4 className="text-md font-semibold mb-2">Contact</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:vishal12suthar@gmail.com" className="hover:underline">
                    vishal12suthar@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+916355322544" className="hover:underline">
                    +91 63553 22544
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </li>
              </ul>

              <div className="mt-4 flex gap-4">
                <SocialIcon href="https://github.com/Vis-star-sys" label="GitHub" Icon={Github} />
                <SocialIcon href="https://linkedin.com/in/Vishal-suthar-vs18" label="LinkedIn" Icon={Linkedin} />
                <SocialIcon href="https://instagram.com/vs_suthar18" label="Instagram" Icon={Instagram} />
                <SocialIcon href="https://facebook.com" label="Facebook" Icon={Facebook} />
                <SocialIcon href="https://youtube.com/@Coding_Vision" label="YouTube" Icon={Youtube} />
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom line */}
          <div className="mt-10 border-t border-white/20 pt-4 text-xs text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Vishal.dev made with ❤️ and ☕in India — All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

// Social Icon component
function SocialIcon({ href, label, Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}
