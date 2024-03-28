// eslint-disable-next-line react/prop-types
function Button({ children, onClick }) {
  return (
    <button
      className="font-bold bg-porange text-[18px] rounded-sm p-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
