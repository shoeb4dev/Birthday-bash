import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Letter.css";
import letter from "./LetterContent";

function Letter({ onContinue }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="letter-section">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        💌 Birthday Letter
      </motion.h1>

      {!open && (
        <motion.div
          className="envelope"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
        >
          💌
          <p>Tap to Open</p>
        </motion.div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="letter-card"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>{letter.title}</h2>

            <pre>{letter.message}</pre>

            <button
              className="continue-btn"
              onClick={onContinue}
            >
              Continue 🎁
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Letter;