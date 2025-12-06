import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import certificate1 from "../../../public/asset/sabi-ticket.png";
import certificate2 from "../../../public/asset/sabi-ticket2.jpg";
import certificate3 from "../../../public/asset/sabi-ticket.png";

const images = [certificate1, certificate2, certificate3];

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Image Slider */}
      <div className="flex items-center justify-between mt-14 relative">


        {/* Prev Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.15 }}
          onClick={prevImage}
          className="w-[40px] h-[40px] flex justify-center items-center border-2 border-amber-800 rounded-full m-1"
        >
          ◁
        </motion.button>

        {/* Animated Image */}
        <div className="w-[calc(100%-108px)] overflow-hidden flex justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src={images[currentIndex]}
                alt="certificate"
                className="cursor-pointer max-h-[350px]"
                onClick={() => setOpenModal(true)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.15 }}
          onClick={nextImage}
          className="w-[40px] h-[40px] flex justify-center items-center border-2 border-amber-800 rounded-full m-1"
        >
          ▷
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              className="relative bg-white p-3 rounded-xl max-w-[90%] max-h-[90%]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="text-black font-bold text-xl absolute top-3 right-3"
                onClick={() => setOpenModal(false)}
              >
                ✕
              </motion.button>

              {/* Zoomed Image */}
              <Image
                src={images[currentIndex]}
                alt="certificate enlarged"
                className="w-full h-full max-h-[500px] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificate;
