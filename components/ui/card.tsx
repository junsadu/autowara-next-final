export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-2xl shadow-sm bg-white">{children}</div>;
}