import { useState } from "react";
import { motion } from "framer-motion";
import "./GiftBox.css";

function GiftBox({ onContinue }) {
  const [opened, setOpened] = useState(false);

  return (
    <section className="gift-section">
      <h1>🎁 A Special Gift For You</h1>

      {!opened ? (
        <motion.div
          className="gift-box"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
        >
          🎁
          <p>Tap to Open</p>
        </motion.div>
      ) : (
        <motion.div
          className="gift-content"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>🎉 Surprise! 🎉</h2>

          <div className="emoji-container">
            ❤️ 🎈 ⭐ 🧸 🍭 🎂 🌸 💖
          </div>

          <p>
            Wishing you a day full of happiness, laughter and magical moments!
          </p>

          <button
            className="continue-btn"
            onClick={onContinue}
          >
            Continue to Cake 🎂
          </button>
        </motion.div>
      )}
    </section>
  );
}

export default GiftBox;