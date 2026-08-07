import "./Card.css";

function Card({ children }) {
  return (
    <div className="magic-card">
      {children}
    </div>
  );
}

export default Card;