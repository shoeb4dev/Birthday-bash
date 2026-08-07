import "./Hero.css";

function Hero({ onContinue }) {
  return (
    <section className="hero">

      <div className="rainbow"></div>

      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>

      <div className="balloon balloon1">🎈</div>
      <div className="balloon balloon2">🎈</div>

      <div className="butterfly butterfly1">🦋</div>
      <div className="butterfly butterfly2">🦋</div>

      <div className="hero-content">
        <h1>👑 Happy Birthday 👑</h1>

        <h2>Princess Ayesha</h2>

        <p>
          Today is your magical day.
          <br />
          May your smile shine brighter than every star.
        </p>

        <button onClick={onContinue}>
          🎁 Continue Journey
        </button>
      </div>

    </section>
  );
}

export default Hero;