import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">

      <div className="stars"></div>

      <div className="loading-card">

        <h1>✨ Preparing Your Magical Surprise ✨</h1>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        <p>Please wait...</p>

      </div>

    </div>
  );
}

export default Loading;