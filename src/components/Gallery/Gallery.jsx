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

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📸 Memory Gallery
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Every picture tells a beautiful story ❤️
      </motion.p>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            onClick={() => setSelectedImage(photo)}
          >
            <img src={photo} alt={`Photo ${index + 1}`} />
          </motion.div>
        ))}
      </div>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <div className="gallery-footer">
        <button
          className="continue-btn"
          onClick={onContinue}
        >
          Continue to Letter 💌
        </button>
      </div>

    </section>
  );
}

export default Gallery;