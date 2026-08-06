import "./Welcome.css";

function Welcome({ onOpen }) {
  return (
    <div className="welcome">
      <div className="overlay">
        <h1 className="title">🎉 Happy Birthday 🎉</h1>

        <p className="subtitle">
          A special surprise is waiting for you ❤️
        </p>

        <button className="btn" onClick={onOpen}>
          🎁 Open Surprise
        </button>
      </div>
    </div>
  );
}

export default Welcome;