import { motion, AnimatePresence } from "framer-motion";
import { IModalProps } from "@/src/app/commons/types";

export default function ModalB<T>({
  isOpen,
  setIsOpen,
  children,
  contentsStyle,
}: IModalProps<T>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(null)}
            className="fixed inset-0 bg-black z-40"
          />
          {/* 팝업 */}
          <motion.div
            layoutId={`card-${isOpen}`} // 같은 layoutId
            className={`fixed top-1/2 left-1/2 p-8 pr-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg z-50 shadow-lg ${contentsStyle}`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
