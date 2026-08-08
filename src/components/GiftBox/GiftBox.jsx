import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GiftBox.css";

const particles = Array.from({ length: 24 });

function GiftBox({ onContinue }) {
  const [opened, setOpened] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleGiftClick = () => {
    if (opened || shaking) return;

    setShaking(true);

    setTimeout(() => {
      setShaking(false);
      setOpened(true);
    }, 650);
  };

  return (
    <section className="gift-section">

      {/* Background glow */}
      <div className="gift-glow gift-glow-one"></div>
      <div className="gift-glow gift-glow-two"></div>

      {/* Background stars */}
      <div className="gift-stars">
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
        className="gift-heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="gift-heading-icon">🎁</div>

        <h1>
          A Little
          <span> Surprise</span>
        </h1>

        <p>
          Something special is waiting
          <br />
          just for you...
        </p>
      </motion.div>

      {/* Gift */}
      <motion.div
        className={`gift-container ${
          shaking ? "is-shaking" : ""
        }`}
        onClick={handleGiftClick}
        whileTap={!opened ? { scale: 0.94 } : {}}
      >

        {/* Glow underneath */}
        <div className="gift-box-glow"></div>

        {/* Light burst */}
        <AnimatePresence>
          {opened && (
            <motion.div
              className="gift-light"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0.7],
                scale: [0, 1.5, 1],
              }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>

        {/* Particles */}
        <AnimatePresence>
          {opened &&
            particles.map((_, index) => {
              const angle =
                (index / particles.length) * Math.PI * 2;

              const distance = 100 + (index % 4) * 35;

              return (
                <motion.span
                  key={index}
                  className="gift-particle"
                  initial={{
                    x: 0,
                    y: 20,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y:
                      Math.sin(angle) * distance - 80,
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1.3, 0.8, 0],
                    rotate: 180,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.025,
                    ease: "easeOut",
                  }}
                >
                  {index % 3 === 0 ? "💖" : "✦"}
                </motion.span>
              );
            })}
        </AnimatePresence>

        {/* Gift lid */}
        <motion.div
          className="gift-lid"
          animate={
            opened
              ? {
                  y: -125,
                  x: 35,
                  rotate: 12,
                }
              : {
                  y: 0,
                  x: 0,
                  rotate: 0,
                }
          }
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        >
          <div className="gift-lid-ribbon"></div>

          <div className="gift-bow">
            <span className="bow-left"></span>
            <span className="bow-right"></span>
            <span className="bow-center"></span>
          </div>
        </motion.div>

        {/* Gift body */}
        <div className="gift-body">
          <div className="gift-ribbon-vertical"></div>

          <div className="gift-ribbon-horizontal"></div>

          <div className="gift-body-shine"></div>
        </div>

        {/* Heart */}
        <AnimatePresence>
          {opened && (
            <motion.div
              className="gift-heart"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                y: -80,
                scale: [0, 1.3, 1],
              }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                type: "spring",
              }}
            >
              💖
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

      {/* Before opening */}
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="closed"
            className="gift-instruction"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>✦</span>
            Tap the gift to open
            <span>✦</span>
          </motion.div>
        ) : (
          /* After opening */
          <motion.div
            key="opened"
            className="gift-message"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
          >
            <h2>🎉 Surprise! 🎉</h2>

            <div className="emoji-container">
              ❤️ 🎈 ⭐ 🧸 🍭 🌸 💖
            </div>

            <p>
              Wishing you a day full of happiness,
              laughter and magical moments!
            </p>

            <motion.button
              className="gift-continue-btn"
              onClick={onContinue}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Continue to Cake
              <span>🎂</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default GiftBox;