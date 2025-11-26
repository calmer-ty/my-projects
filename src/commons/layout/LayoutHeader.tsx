"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function LayoutHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed flex justify-between items-center w-full h-16 px-8 bg-white z-10"
    >
      <h1 className="text-lg font-extrabold">TaeYeon.</h1>
      <div className="flex gap-4">
        <Button variant="link" className="transition-colors duration-300 hover:text-purple-600" onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}>
          Home
        </Button>
        <Button variant="link" className="transition-colors duration-300 hover:text-purple-600" onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
          Skills
        </Button>
        <Button variant="link" className="transition-colors duration-300 hover:text-purple-600" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          Projects
        </Button>
      </div>
      <motion.a
        href="https://github.com/calmer-ty?tab=repositories"
        target="_blank"
        className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-50 transition-colors duration-200 hover:bg-gray-200 shadow-md hover:shadow-lg"
        animate={{
          // opacity: [1, 0.5, 1], // 깜박임
          scale: [1, 1.1, 1], // 살짝 커졌다 작아짐
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Github size={24} className="text-gray-800" />
      </motion.a>
    </motion.header>
  );
}
