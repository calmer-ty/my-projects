import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Intro() {
  // targetRef
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("scrollYProgress:", latest);
    });
  }, [scrollYProgress]);

  // 각각 다른 애니메이션 설정
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0", "-100%"]);
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const xRight = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className="w-screen mx-20" ref={targetRef}>
      <motion.h2
        //   initial={{ x: 0, scale: 1 }}
        style={{ x: xLeft, scale: scaleLeft, color: "#fff" }}
        className="w-100% text-[14rem] font-bold"
      >
        Hello
      </motion.h2>
      <motion.h2
        //   initial={{ x: 0, scale: 1 }}
        style={{ x: xRight, scale: scaleRight, color: "#fff" }}
        className="w-100% text-[14rem] font-bold"
      >
        TaeYeon
      </motion.h2>
    </div>
  );
}
