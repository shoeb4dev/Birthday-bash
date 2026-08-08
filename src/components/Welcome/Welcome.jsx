import "./Welcome.css";

function Welcome({ onOpen }) {
  return (
    <div className="welcome">

      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>

      <div className="balloon balloon1">🎈</div>
      <div className="balloon balloon2">🎈</div>

      <div className="card">

        <h1>
          👑 Happy Birthday 👑
        </h1>

        <h2>
          Princess Ashu Baby
        </h2>

        <p>
          A magical surprise is waiting for you!
        </p>

        <button onClick={onOpen}>
          🎁 Open Surprise
        </button>

      </div>

    </div>
  );
}

export default Welcome;