import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";

function ImageModal({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close image"
          >
            ✕
          </button>

          {/* Image */}
          <motion.img
            src={image}
            alt="Selected memory"
            className="modal-image"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Magical decoration */}
          <div className="modal-sparkle sparkle-one">✦</div>
          <div className="modal-sparkle sparkle-two">✧</div>
          <div className="modal-sparkle sparkle-three">✦</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;