"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Github, Moon, Sun } from "lucide-react";

import ChildrenTooltip from "../ChildrenTooltip";

export default function LayoutHeader() {
  const { theme, setTheme } = useTheme();

  // 마운트 후 동작 컨트롤
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), []);

  if (!mount) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed flex justify-between items-center w-full h-16 px-6 sm:px-8 z-10 bg-white dark:bg-black shadow-lg"
    >
      <h1 className="text-lg font-extrabold">TaeYeon.</h1>
      <div className="hidden md:flex gap-4">
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

      <div className="flex items-center gap-4">
        <Button asChild variant="outline" size="icon">
          <a href="https://github.com/calmer-ty?tab=repositories" target="_blank">
            <Github className="text-black dark:text-white" />
          </a>
        </Button>

        <ChildrenTooltip content={theme === "dark" ? "라이트 모드로 변경" : "다크 모드로 변경"}>
          <Button size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </ChildrenTooltip>
      </div>
    </motion.header>
  );
}
