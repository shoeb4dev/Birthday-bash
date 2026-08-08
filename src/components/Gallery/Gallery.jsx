import { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";
import ImageModal from "./ImageModal";

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
  "/images/photo5.jpg",
  "/images/photo6.jpg",
];

function Gallery({ onContinue }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">

      {/* Magical background */}
      <div className="gallery-stars">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
      </div>

      {/* Background glow */}
      <div className="gallery-glow gallery-glow-one"></div>
      <div className="gallery-glow gallery-glow-two"></div>

      {/* Heading */}
      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="gallery-icon">📸</div>

        <h1>
          Beautiful
          <span> Memories</span>
        </h1>

        <p>
          Every picture holds a little piece
          <br />
          of a beautiful story ❤️
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="gallery-grid">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`gallery-card card-${index + 1}`}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => setSelectedImage(photo)}
          >

            <div className="photo-glow"></div>

            <img
              src={photo}
              alt={`Beautiful memory ${index + 1}`}
            />

            <div className="photo-overlay">
              <span>✦</span>
              <span>View Memory</span>
            </div>

          </motion.div>
        ))}

      </div>

      {/* Image modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* Continue */}
      <motion.div
        className="gallery-footer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: photos.length * 0.12 + 0.5,
        }}
      >

        <p className="gallery-hint">
          ✨ More magic is waiting for you
        </p>

        <button
          className="continue-btn"
          onClick={onContinue}
        >
          Continue to Letter
          <span>💌</span>
        </button>

      </motion.div>

    </section>
  );
}

export default Gallery;