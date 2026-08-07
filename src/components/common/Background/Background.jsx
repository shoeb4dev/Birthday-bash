import "./Background.css";

function Background({ children }) {
  return (
    <div className="background">
      <div className="gradient"></div>
      <div className="stars"></div>

      {children}
    </div>
  );
}

export default Background;