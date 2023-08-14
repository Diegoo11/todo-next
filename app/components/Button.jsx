function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
