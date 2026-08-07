import "./Button.css";

function Button({ children, onClick }) {
  return (
    <button
      className="magic-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;