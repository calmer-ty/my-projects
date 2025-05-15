import { motion, MotionValue } from "framer-motion";

export default function TitleItem({
  x,
  scale,
  text,
}: {
  x: MotionValue<string>;
  scale: MotionValue<number>;
  text: string;
}) {
  return (
    <motion.h2
      //   initial={{ x: 0, scale: 1 }}
      style={{ x, scale, color: "#fff" }}
      className="w-100% text-[14rem] font-bold"
    >
      {text}
    </motion.h2>
  );
}
