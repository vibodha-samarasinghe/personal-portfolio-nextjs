export default function Projects() {

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A professional portfolio website developed to showcase my profile, education, skills, and projects.",
      tech:
        "Next.js, Tailwind CSS"
    },

    {
      title: "Smart Inventory Management System",
      description:
        "A web-based system designed to manage products, monitor stock levels, and improve inventory operations for businesses.",
      tech:
        "Java, Spring Boot, MySQL"
    },

    {
      title: "Hotel Booking System",
      description:
        "A hotel management system that allows users to view rooms, make bookings, and manage reservation details efficiently.",
      tech:
        "HTML, CSS, Java, MySQL"
    },

    {
      title: "Learning Management System (LMS)",
      description:
        "An online learning platform designed to manage students, teachers, subjects, lessons, and assignments.",
      tech:
        "HTML, CSS, JavaScript, Database"
    }
  ];


  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white"
    >

      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold text-black text-center mb-10">
          Projects
        </h2>


        <div className="grid md:grid-cols-2 gap-8">


          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg hover:bg-gray-800 transition"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>


              <p className="mt-4 text-gray-300">
                {project.description}
              </p>


              <p className="mt-5 text-sm text-gray-400">
                Technologies: {project.tech}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}