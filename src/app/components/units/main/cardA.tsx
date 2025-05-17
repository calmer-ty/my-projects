import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import Modal02 from "@/src/app/components/commons/modals/02";
import PopupButton01 from "@/src/app/components/commons/buttons/popup/01";
import { items, popups } from "./data";

export default function CardA() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedPopup = popups.find((item) => item.id === selectedId);

  return (
    <>
      {/* 헤더  */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="px-12 py-10 text-5xl font-bold lg:px-20"
      >
        PROJECTS
      </motion.h2>

      {/* 카드 컨텐츠 */}
      <motion.div
        className="flex flex-col justify-between flex-1 px-12 mb-10 md:flex-row lg:px-20"
        style={{ gap: "2rem" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`} // layoutId가 같으면 애니메이션 연결됨
            onClick={() => setSelectedId(item.id)}
            className={`relative overflow-hidden flex-1 bg-gray-400 p-6 rounded-xl cursor-pointer`}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {/* 배경이미지 */}
            <img
              className="absolute inset-0 w-full h-full brightness-70 object-cover"
              src={`/images/${item.bgSrc}`}
              alt="freepik"
            />
            <h3
              className={`relative z-10 mb-2 text-sm font-bold text-${item.color}`}
            >
              {item.title}
            </h3>
            <h4
              className={`relative z-10 text-xl font-bold text-${item.color}`}
            >
              {item.desc}
            </h4>
          </motion.div>
        ))}
      </motion.div>

      <Modal02
        isOpen={selectedId}
        setIsOpen={setSelectedId}
        contStyle="w-4/5 h-4/5 pt-11"
      >
        {selectedPopup && (
          <div className="flex flex-col gap-6 h-full lg:flex-row">
            {/* 이미지 */}
            <img
              className="h-1/2 flex-1 object-cover rounded-xl lg:h-full"
              src={`/images/${selectedPopup.bgSrc}`}
              alt={selectedPopup.title}
            />

            {/* 콘텐츠 */}
            <div className="overflow-y-scroll flex-2">
              <h3 className="text-2xl font-bold mb-2">{selectedPopup.title}</h3>
              <h4 className="text-lg font-semibold text-gray-500 mb-4">
                {selectedPopup.desc}
              </h4>
              <p className="mb-2">{selectedPopup.date}</p>
              <p className="mb-4">{selectedPopup.team}</p>

              <p className="text-blue-600 underline mb-2">
                <a href={selectedPopup.url} target="_blank">
                  {selectedPopup.url}
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a href={selectedPopup.github} target="_blank">
                  {selectedPopup.github}
                </a>
              </p>
            </div>
          </div>
        )}
        <PopupButton01
          setIsOpen={setSelectedId}
          className="absolute top-3 right-3 bg-red-600"
        >
          <X size={14} strokeWidth={4} />
        </PopupButton01>
      </Modal02>
    </>
  );
}
