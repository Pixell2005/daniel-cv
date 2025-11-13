export default function Header({ page, title }) {
  return (
    <header className="text-center bg-gradient-to-r from-blue-500 to-indigo-400 text-white py-10 rounded-b-2xl shadow-md">
      <h1 className="text-3xl font-bold">{page}</h1>
      <p className="opacity-90 mt-2 text-lg">{title}</p>
    </header>
  );
}
