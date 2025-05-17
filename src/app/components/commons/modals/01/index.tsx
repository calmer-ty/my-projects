import { motion, AnimatePresence } from "framer-motion";

import { IProject } from "@/src/app/components/units/intro/types";

export default function Modal01({
  isOpen,
  setIsOpen,
}: {
  isOpen: IProject | null;
  setIsOpen: React.Dispatch<React.SetStateAction<IProject | null>>;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        // 모달 배경
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(null)} // 바깥 클릭 시 닫기
        >
          {/* 모달 창 */}
          <motion.div
            className="bg-white p-6 rounded-xl w-[90%] max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 닫히지 않음
          >
            <h2 className="text-xl font-bold">{isOpen.title}</h2>
            <p className="mt-2">{isOpen.desc}</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={() => setIsOpen(null)}
            >
              닫기
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
