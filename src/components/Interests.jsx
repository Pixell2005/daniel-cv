export default function Interests({ interests }) {
  return (
    <section className="relative bg-white mt-8 mx-auto w-[90%] max-w-3xl rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold border-b-4 border-blue-400 pb-2 mb-4">Interests</h2>
      <div className="flex flex-wrap justify-center gap-35">
        {interests.map((item, i) => (
          <div key={i} className="text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-24 rounded-full object-cover shadow-md mx-auto"
            />
            <p className="mt-2 font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
