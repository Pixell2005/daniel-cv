export default function Skills({ skills, experience }) {
  return (
    <section className="bg-white mt-8 mx-auto w-[90%] max-w-3xl rounded-2xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold border-b-4 border-blue-400 pb-2 mb-4">Skills</h2>
      <ul className="list-disc pl-6 space-y-1">
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>

      <h3 className="mt-6 text-xl font-semibold">Experience</h3>
      <ol className="list-decimal pl-6 space-y-1">
        {experience.map((exp, i) => <li key={i}>{exp}</li>)}
      </ol>
    </section>
  );
}
