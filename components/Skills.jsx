export default function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "C++",
    "Python",
    "Spring Boot",
    "MySQL",
    "SQL",
    "Git & GitHub"
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white"
    >

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-black text-center mb-10">
          Skills
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-2xl text-center shadow-lg hover:bg-gray-800 transition"
            >

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}