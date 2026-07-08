"use client";

export default function Hero() {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-6 pt-24"
    >

      <div className="text-center max-w-4xl">


        {/* Profile Image */}

        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto overflow-hidden border-4 border-black shadow-lg">

          <img
            src="/profile.jpeg"
            alt="Vibodha Profile"
            className="w-full h-full object-cover object-top"
          />

        </div>



        {/* Name */}

        <h1 className="mt-6 text-3xl md:text-6xl font-bold text-black">

          Vibodha Yasasvi Walallavita Samarasinghe

        </h1>




        {/* Description */}

        <p className="mt-4 text-lg md:text-xl text-gray-700">

          BICT Undergraduate | KDU | ICT Student

        </p>



        <p className="mt-3 text-gray-500">

          Passionate about Software Development, Web Technologies
          and Building Real-World Applications.

        </p>





        {/* Buttons */}

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">


          <a
            href="/0138_CV.pdf"
            download
            className="px-6 py-3 bg-gray-700 text-white rounded-xl hover:bg-black transition"
          >

            Download CV

          </a>




          <a
            href="#contact"
            className="px-6 py-3 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition"
          >

            Contact Me

          </a>


        </div>

      </div>

    </section>
  );
}
