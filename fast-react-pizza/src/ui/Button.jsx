function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className="bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block tracking-widest rounded-full
                 hover:bg-yellow-300 transition-all duration-500 disabled:cursor-not-allowed
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
    >
      {children}
    </button>
  );
}

export default Button;
