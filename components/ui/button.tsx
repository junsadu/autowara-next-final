export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
      {...props}
    >
      {children}
    </button>
  );
}