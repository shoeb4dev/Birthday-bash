import "./Gallery.css";

function ImageModal({ image, onClose }) {

  if (!image) return null;

  return (
    <div className="modal" onClick={onClose}>

      <img
        src={image}
        alt="Selected"
        className="modal-image"
      />

    </div>
  );
}

export default ImageModal;