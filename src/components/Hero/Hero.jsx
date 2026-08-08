import "./Hero.css";

function Hero({ onContinue }) {
  return (
    <section className="hero-section">

      {/* Background stars */}
      <div className="stars">
        <span className="star star-1">✦</span>
        <span className="star star-2">✧</span>
        <span className="star star-3">✦</span>
        <span className="star star-4">✧</span>
        <span className="star star-5">✦</span>
        <span className="star star-6">✧</span>
        <span className="star star-7">✦</span>
        <span className="star star-8">✧</span>
        <span className="star star-9">✦</span>
        <span className="star star-10">✧</span>
      </div>

      {/* Floating particles */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="hero-content">

        {/* Magic icon */}
        <div className="magic-symbol">
          <span className="magic-spark spark-left">✦</span>
          <span className="magic-wand">🪄</span>
          <span className="magic-spark spark-right">✦</span>
        </div>

        {/* Heading */}
        <h1>
          A Little Magic
          <br />
          <span>Just For You</span>
        </h1>

        {/* Message */}
        <p className="hero-message">
          Someone has prepared something
          <br />
          special for you...
        </p>

        {/* HERO GIFT - unique classes */}
        <div className="hero-gift-wrapper">

          <div className="hero-gift-glow"></div>

          <div className="hero-gift">

            {/* Lid */}
            <div className="hero-gift-lid">
              <span className="hero-ribbon-horizontal"></span>
            </div>

            {/* Body */}
            <div className="hero-gift-body">
              <span className="hero-ribbon-vertical"></span>
            </div>

          </div>

          <div className="hero-gift-shadow"></div>

        </div>

        {/* Hint */}
        <p className="reveal-text">
          ✨ Your surprise is waiting ✨
        </p>

        {/* Button */}
        <button
          className="reveal-button"
          onClick={onContinue}
        >
          <span>🪄</span>
          Reveal the Magic
          <span>✨</span>
        </button>

        {/* Footer */}
        <p className="secret-text">
          A little surprise made with love 💕
        </p>

      </div>

    </section>
  );
}

export default Hero;