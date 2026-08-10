import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Fireworks.css";

const fireworks = [
  { left: "15%", top: "25%", delay: 0 },
  { left: "50%", top: "18%", delay: 0.8 },
  { left: "82%", top: "28%", delay: 1.5 },
  { left: "30%", top: "45%", delay: 2.2 },
  { left: "70%", top: "48%", delay: 3 },
];

const particles = Array.from({ length: 18 });

function Fireworks({ onReplay }) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="fireworks-section">

      {/* Night sky glow */}
      <div className="fireworks-glow"></div>

      {/* Stars */}
      <div className="firework-stars">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
      </div>

      {/* Fireworks */}
      {started &&
        fireworks.map((firework, index) => (
          <motion.div
            key={index}
            className="firework"
            style={{
              left: firework.left,
              top: firework.top,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 0.4, 1, 1.3],
            }}
            transition={{
              duration: 2.5,
              delay: firework.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {particles.map((_, particleIndex) => {
              const angle =
                (particleIndex / particles.length) *
                Math.PI *
                2;

              const distance =
                45 + (particleIndex % 3) * 18;

              return (
                <span
                  key={particleIndex}
                  className="firework-particle"
                  style={{
                    "--x": `${Math.cos(angle) * distance}px`,
                    "--y": `${Math.sin(angle) * distance}px`,
                  }}
                >
                  ✦
                </span>
              );
            })}

            <div className="firework-center"></div>
          </motion.div>
        ))}

      {/* Main content */}
      <motion.div
        className="fireworks-content"
        initial={{
          opacity: 0,
          scale: 0.7,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.7,
          type: "spring",
        }}
      >

        <motion.div
          className="celebration-emoji"
          animate={{
            y: [0, -10, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          🎆
        </motion.div>

        <motion.p
          className="final-small"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          AND FINALLY...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
            type: "spring",
          }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.8,
          }}
        >
          My Lovely Wife👑
        </motion.h2>

        <motion.div
          className="final-divider"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
        />

        <motion.p
          className="final-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.2,
          }}
        >
          May your life always be filled with
          <br />
          happiness, love, laughter and beautiful
          <br />
          moments. 💖
        </motion.p>

        <motion.div
          className="final-hearts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.5,
          }}
        >
          💖 ✨ 🌸 ✨ 💖
        </motion.div>

        <motion.button
          className="replay-btn"
          onClick={onReplay}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.8,
          }}
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Experience Again
          <span>↻</span>
        </motion.button>

      </motion.div>

      {/* Bottom glow */}
      <div className="bottom-glow"></div>

    </section>
  );
}

export default Fireworks;