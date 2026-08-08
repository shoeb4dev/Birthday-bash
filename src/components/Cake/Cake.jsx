import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Cake.css";

const particles = Array.from({ length: 20 });

function Cake({ onContinue }) {
  const [blown, setBlown] = useState(false);

  const blowCandles = () => {
    if (!blown) {
      setBlown(true);
    }
  };

  return (
    <section className="cake-section">

      {/* Background */}
      <div className="cake-glow cake-glow-one"></div>
      <div className="cake-glow cake-glow-two"></div>

      {/* Stars */}
      <div className="cake-stars">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
      </div>

      {/* Heading */}
      <motion.div
        className="cake-heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cake-heading-icon">🎂</div>

        <h1>
          Make a
          <span> Wish</span>
        </h1>

        <p>
          Close your eyes...
          <br />
          and make a beautiful wish 💖
        </p>
      </motion.div>

      {/* Cake */}
      <motion.div
        className="cake-container"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        onClick={blowCandles}
      >

        {/* Magical glow */}
        <div className="cake-main-glow"></div>

        {/* Floating particles after candles go out */}
        <AnimatePresence>
          {blown &&
            particles.map((_, index) => {
              const angle =
                (index / particles.length) * Math.PI * 2;

              const distance = 90 + (index % 4) * 30;

              return (
                <motion.span
                  key={index}
                  className="cake-particle"
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    x: Math.cos(angle) * distance,
                    y:
                      Math.sin(angle) * distance - 50,
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    delay: index * 0.04,
                  }}
                >
                  {index % 2 === 0 ? "✦" : "✨"}
                </motion.span>
              );
            })}
        </AnimatePresence>

        {/* Candles */}
        <div className="candles">

          {[1, 2, 3].map((candle) => (
            <div
              className="candle-wrapper"
              key={candle}
            >
              <div className="candle">

                <AnimatePresence>
                  {!blown && (
                    <motion.div
                      className="flame"
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: [1, 1.15, 0.9, 1.1],
                        y: [0, -3, 0, -2],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                    >
                      🔥
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          ))}

        </div>

        {/* Cake top */}
        <div className="cake-top">
          <div className="cream cream-one"></div>
          <div className="cream cream-two"></div>
          <div className="cream cream-three"></div>
        </div>

        {/* Cake body */}
        <div className="cake-body">

          <div className="cake-cream-line"></div>

          <div className="cake-decoration">
            ✦ 💗 ✦ 💗 ✦
          </div>

        </div>

        {/* Cake plate */}
        <div className="cake-plate"></div>

      </motion.div>

      {/* Bottom message */}
      <AnimatePresence mode="wait">

        {!blown ? (
          <motion.div
            key="before"
            className="cake-instruction"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span>✦</span>
            Tap the cake to blow the candles
            <span>✦</span>
          </motion.div>
        ) : (
          <motion.div
            key="after"
            className="cake-message"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
          >
            <h2>
              Wish made! ✨
            </h2>

            <p>
              May every little dream in your heart
              <br />
              turn into something beautiful. 💖
            </p>

            <motion.button
              className="cake-continue-btn"
              onClick={onContinue}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Let's Celebrate
              <span>🎆</span>
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}

export default Cake;