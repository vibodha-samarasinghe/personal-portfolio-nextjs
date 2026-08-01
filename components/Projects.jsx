export default function Projects() {

  const projects = [

    {
      title: "Personal Portfolio Website",
      image: "/Portfolio.png",
      description:
        "A professional portfolio website developed to showcase my profile, education, skills, certificates, and projects.",
      tech:
        "Next.js, Tailwind CSS, JavaScript",
      live:
        "https://personal-portfolio-nextjs-sigma.vercel.app",
      github:
        "https://github.com/vibodha-samarasinghe/personal-portfolio-nextjs"
    },


    {
      title: "UHKDU Inventory System - Team Invento",
      image: "/uhkdu1.png",
      description:
        "A University Hospital KDU inventory management system with product management, QR scanning, stock issuing, order tracking, and inventory monitoring.",
      tech:
        "Next.js, Node.js, MongoDB, QR Scanner",
      live:
        "https://uhkdu-inventory-system1.vercel.app",
      github:
        "https://github.com/vibodha-samarasinghe"
    },


    {
      title: "Remi Reminder Mobile Application(Android)",
      image: "/Remi.jpg",
      description:
        "A campus reminder application designed to manage exams, assignments, presentations, and important events.",
      tech:
        "React Native, JavaScript, Database",
      live:
        "",
      github:
        "https://github.com/vibodha-samarasinghe"
    },


    {
      title: "Learning Management System (LMS)",
      image:
        "/LMS.png",
      description:
        "An online learning management system developed to manage students, teachers, subjects, lessons, and assignments.",
      tech:
        "HTML, CSS, JavaScript, Database",
      live:
        "https://smart-ed-b7023.web.app",
      github:
        "https://github.com/vibodha-samarasinghe"
    }

  ];



  return (

    <section
      id="projects"
      className="
      min-h-screen
      px-6
      py-20
      bg-transparent
      "
    >


      <div className="max-w-6xl mx-auto">



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
          Projects
        </h2>





        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >



          {projects.map((project, index) => (

            <div

              key={index}

              className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              overflow-hidden
              shadow-2xl
              hover:bg-white/20
              hover:scale-105
              transition
              duration-300
              "

            >




              {/* Project Image */}

              <img

                src={project.image}

                alt={project.title}

                className="
                w-full
                h-56
                object-cover
                "

              />







              <div className="p-8">



                <h3
                  className="
                  text-2xl
                  font-bold
                  text-white
                  "
                >

                  {project.title}

                </h3>





                <p
                  className="
                  mt-4
                  text-gray-300
                  leading-relaxed
                  "
                >

                  {project.description}

                </p>







                <p
                  className="
                  mt-5
                  text-sm
                  text-blue-300
                  "
                >

                  Technologies: {project.tech}

                </p>







                {/* Links */}


                <div
                  className="
                  mt-6
                  space-y-3
                  text-sm
                  "
                >



                  {project.live && (

                    <p className="text-gray-300">

                      🔗 Live:
                      
                      <a

                        href={project.live}

                        target="_blank"

                        className="
                        ml-2
                        text-blue-300
                        hover:underline
                        "

                      >

                        {project.live}

                      </a>


                    </p>

                  )}






                  <p className="text-gray-300">


                    💻 GitHub:


                    <a

                      href={project.github}

                      target="_blank"

                      className="
                      ml-2
                      text-blue-300
                      hover:underline
                      "

                    >

                      {project.github}

                    </a>


                  </p>



                </div>





              </div>





            </div>


          ))}



        </div>



      </div>



    </section>


  );

}