export default function Skills() {

  const skills = [

    // Data Analysis
    "Data Analysis",
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Data Visualization",
    "Statistics",
    "MySQL",


    // Full Stack Development
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Java",
    "Spring Boot",
    "MongoDB",
    "REST API",


    // Tools
    "Git & GitHub"

  ];


  return (

    <section
      id="skills"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      py-20
      bg-transparent
      "
    >

      <div className="max-w-5xl w-full">


        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-white
          text-center
          mb-10
          "
        >
          Skills
        </h2>



        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-6
          "
        >

          {skills.map((skill, index) => (

            <div
              key={index}
              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              p-6
              text-center
              text-white
              shadow-2xl
              hover:bg-white/20
              hover:scale-105
              transition
              duration-300
              "
            >

              <h3
                className="
                text-lg
                md:text-xl
                font-semibold
                "
              >
                {skill}
              </h3>

            </div>

          ))}

        </div>


      </div>


    </section>

  );

}