import "./Gallery.css";

function Gallery() {

    const images = [
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg"
    ];

    return (

        <div className="gallery">

            <h2>📸 Beautiful Memories</h2>

            <div className="gallery-grid">

                {
                    images.map((image, index) => (

                        <img
                            key={index}
                            src={image}
                            alt={`Photo ${index + 1}`}
                        />

                    ))
                }

            </div>

        </div>

    );

}

export default Gallery;