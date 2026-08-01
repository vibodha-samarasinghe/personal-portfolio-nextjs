export default function Certificates() {

  const certificates = [

    {
      title: "Power BI for Beginners",
      issuer: "Coursera",
      date: "31 July 2026",
      code: "Certificate Code: 10540665",
      image: "/Power BI.png",
      link: "https://simpli-web.app.link/e/ZHDCfyi0e5b"
    },


    {
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      date: "31 July 2026",
      code: "Online Project Certificate",
      image: "/BA.png",
      link: "https://coursera.org/share/bed4ebd66c67b7f3f741d2908d48acc7"
    },


    {
      title: "Fundamentals of ATFCM [NMO-FMP-1]",
      issuer: "EUROCONTROL",
      date: "20 July 2026",
      code: "e-Learning Course",
      image: "/eurocontrol.png",
      link: "https://learningzone.eurocontrol.int/ilp/pages/personalarea.jsf?menuId=1404&locale=en-GB#!/users/@self/contents/completed?limit=10"
    }

  ];



  return (

    <section
      id="certificates"
      className="
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
          Certificates
        </h2>




        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >



          {certificates.map((certificate, index) => (

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
              hover:scale-105
              transition
              duration-300
              "
            >



              {/* Certificate Image */}

              <img
                src={certificate.image}
                alt={certificate.title}
                className="
                w-full
                h-56
                object-cover
                "
              />





              <div className="p-6">


                <h3
                  className="
                  text-xl
                  font-bold
                  text-white
                  "
                >
                  {certificate.title}
                </h3>



                <p
                  className="
                  mt-3
                  text-gray-300
                  "
                >
                  {certificate.issuer}
                </p>



                <p
                  className="
                  mt-2
                  text-sm
                  text-gray-400
                  "
                >
                  {certificate.date}
                </p>



                <p
                  className="
                  mt-2
                  text-sm
                  text-gray-400
                  "
                >
                  {certificate.code}
                </p>





                <a
                  href={certificate.link}
                  target="_blank"
                  className="
                  inline-block
                  mt-5
                  px-5
                  py-2
                  rounded-xl
                  bg-blue-500/20
                  border
                  border-blue-400/30
                  text-blue-300
                  hover:bg-blue-500/40
                  transition
                  "
                >
                  View Certificate →
                </a>



              </div>


            </div>


          ))}



        </div>


      </div>


    </section>

  );

}