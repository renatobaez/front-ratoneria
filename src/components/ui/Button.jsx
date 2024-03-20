function Button({ children, onClick }) {
  return (
    <button
      className="px-3 py-1.5 text-pdark duration-150 bg-porange rounded-lg hover:bg-pgrey active:shadow-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
