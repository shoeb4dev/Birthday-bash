import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "./Cake.css";

function Cake({ onContinue }) {
  const [candlesOut, setCandlesOut] = useState(false);

  const blowCandles = () => {
    setCandlesOut(true);

    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="cake-section">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎂 Birthday Cake
      </motion.h1>

      <p className="cake-text">
        Make a wish and blow out the candles!
      </p>

      <div className="cake">

        <div className="candles">

          {[1, 2, 3].map((candle) => (
            <div key={candle} className="candle">
              {!candlesOut && <div className="flame"></div>}
            </div>
          ))}

        </div>

        <div className="cake-top"></div>

        <div className="cake-bottom"></div>

      </div>

      {!candlesOut ? (
        <button
          className="cake-btn"
          onClick={blowCandles}
        >
          💨 Blow Candles
        </button>
      ) : (
        <>
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            🎉 Happy Birthday Princess Ayesha 🎉
          </motion.h2>

          <button
            className="cake-btn"
            onClick={onContinue}
          >
            Continue to Celebration 🎆
          </button>
        </>
      )}

    </section>
  );
}

export default Cake;