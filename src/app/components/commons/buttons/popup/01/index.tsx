import { motion } from "framer-motion";

export default function PopupButton01<T>({
  setIsOpen,
  className,
  children,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<T | null>>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      className={`px-2 py-2 rounded-full text-white shadow cursor-pointer ${className}`}
      onClick={() => setIsOpen(null)}
      whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95, rotate: -1 }}
      // transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.button>
  );
}
