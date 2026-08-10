import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Letter.css";
import letter from "./LetterContent";

function Letter({ onContinue }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="letter-section">

      {/* Magical background */}
      <div className="letter-glow letter-glow-one"></div>
      <div className="letter-glow letter-glow-two"></div>

      {/* Stars */}
      <div className="letter-stars">
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
        className="letter-heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="letter-icon">💌</div>

        <h1>
          A Little
          <span> Letter</span>
        </h1>

        <p>
          There is something special
          <br />
          waiting just for you...
        </p>
      </motion.div>

      {/* Envelope */}
      {!open && (
        <motion.div
          className="magic-envelope"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            type: "spring",
          }}
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          whileTap={{
            scale: 0.94,
          }}
          onClick={() => setOpen(true)}
        >
          <div className="envelope-glow"></div>

          <div className="envelope-body">
            <div className="envelope-flap"></div>

            <div className="envelope-heart">
              💗
            </div>
          </div>

          <div className="envelope-text">
            <span>✦</span>
            Tap to Open
            <span>✦</span>
          </div>
        </motion.div>
      )}

      {/* Letter */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="letter-card"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            {/* Letter decoration */}
            <div className="letter-card-sparkle sparkle-a">
              ✦
            </div>

            <div className="letter-card-sparkle sparkle-b">
              ✧
            </div>

            <div className="letter-top-icon">
              💗
            </div>

            <h2>{letter.title}</h2>

            <div className="letter-divider">
              <span>✦</span>
              <div></div>
              <span>✦</span>
            </div>

            <pre>{letter.message}</pre>

            <div className="letter-signature">
              With lots of love ❤️
               Yaseen Khan
            </div>

            <button
              className="letter-continue-btn"
              onClick={onContinue}
            >
              Continue to Surprise
              <span>🎁</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Letter;