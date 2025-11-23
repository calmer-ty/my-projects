import { Transition, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiFirebase, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 3000);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul className="flex flex-wrap gap-4 w-36 mb-12">
      {order.map((el) => (
        <motion.li key={el.bgc} layout transition={spring} className="flex justify-center items-center w-16 h-16 rounded-md text-white !text-2xl" style={{ backgroundColor: el.bgc }}>
          {el.icon}
        </motion.li>
      ))}
    </ul>
  );
}

interface InitialOrderType {
  icon: React.ReactNode;
  bgc: string;
}
const initialOrder: InitialOrderType[] = [
  { icon: <SiReact className="w-10 h-10" />, bgc: "#ff0088" },
  { icon: <SiNextdotjs className="w-10 h-10" />, bgc: "#dd00ee" },
  { icon: <SiFirebase className="w-10 h-10" />, bgc: "#9911ff" },
  { icon: <SiTailwindcss className="w-10 h-10" />, bgc: "#0d63f8" },
];

/*** ==============   Utils   ================ */
function shuffle([...array]: InitialOrderType[]) {
  return array.sort(() => Math.random() - 0.5);
}

/*** ==============   Styles   ================ */

const spring: Transition = {
  type: "spring",
  damping: 30,
  stiffness: 400,
};
