import { useEffect } from "react";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import "./Fireworks.css";

function Fireworks({ onReplay }) {
  useEffect(() => {
    const interval = setInterval(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.6,
        },
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="fireworks-section">

      <Confetti recycle={true} numberOfPieces={180} />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        🎉 Happy Birthday 🎉
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Princess Ayesha ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        May Allah bless you with happiness,
        success and endless smiles.
      </motion.p>

      <div className="hearts">
        ❤️ 💖 💕 💗 💝 ❤️ 💖 💕
      </div>

      <button
        className="replay-btn"
        onClick={onReplay}
      >
        🔄 Replay Story
      </button>

    </section>
  );
}

export default Fireworks;