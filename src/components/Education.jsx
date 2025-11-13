export default function Education({ education }) {
  return (
    <section className="bg-white mt-8 mx-auto w-[90%] max-w-3xl rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold border-b-4 border-blue-400 pb-2 mb-4">Education</h2>
      <div className="space-y-4">
        {education.map((item, i) => (
          <div key={i}>
            <h4 className="font-semibold">{item.school}</h4>
            <p>{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
