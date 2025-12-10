"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { tabs } from "./data";
import { Button } from "@/components/ui/button";

export default function DashboardSkills() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section id="skills" className="py-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-220 mx-auto"
      >
        {/* title */}
        <div className="text-center">
          <h2 className="mb-4 font-medium text-sky-500">기술 스택</h2>
          <p className="mb-8 text-2xl font-bold">왜 이 기술을 사용하는가?</p>
        </div>
        {/* 탭 컨텐츠 */}
        <div className="flex flex-col h-full min-h-90 gap-4 p-6 border border-gray-300 rounded-4xl">
          {/* Tab */}
          <nav className="flex gap-4 justify-center">
            {tabs.map((item) => (
              <Button
                key={item.label}
                variant="outline"
                onClick={() => setSelectedTab(item)}
                className={`relative px-4 py-2 rounded-full ${item === selectedTab ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-white" : ""} font-medium text-center
                dark:${item === selectedTab ? "bg-blue-900/50" : "bg-blue-900/20"} dark:hover:bg-blue-900/60`}
              >
                <i className="inline-block align-middle mr-0 md:mr-2">{item.icon}</i>
                <span className="hidden md:inline-block">{item.label}</span>
              </Button>
            ))}
          </nav>
          {/* Contents */}
          <div className="flex-1 px-6 py-8 bg-muted rounded-lg shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {selectedTab.points.map((point, idx) => (
                  <div key={idx} className="flex items-start flex-col md:flex-row gap-4 p-4 rounded-md break-keep">
                    <span className="shrink-0 w-18 py-1 bg-blue-400 rounded-lg text-white text-center text-sm">Point {idx + 1}</span>
                    <div>
                      <h3 className="mb-1 font-bold">{point.title}</h3>
                      <p>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
