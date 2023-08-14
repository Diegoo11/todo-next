function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hover:animate-shake"
    >
      {children}
    </button>
  );
}

export default Button;
