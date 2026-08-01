"use client";

export default function Hero() {

  return (
    <section
      id="home"
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-transparent
      px-6
      pt-24
      "
    >

      <div className="text-center max-w-5xl">


        {/* Internship Badge */}

        <div
          className="
          inline-block
          mb-6
          px-5
          py-2
          rounded-full
          bg-green-500/10
          border
          border-green-400/30
          text-green-300
          backdrop-blur-xl
          text-sm
          "
        >
          🚀 Available for Internship
        </div>




        {/* Profile Image */}

        <div
          className="
          relative
          w-32
          h-32
          md:w-44
          md:h-44
          mx-auto
          "
        >


          {/* Glow */}

          <div
            className="
            absolute
            inset-0
            rounded-full
            bg-blue-500
            blur-3xl
            opacity-40
            "
          ></div>




          {/* Glass Image */}

          <div
            className="
            relative
            w-full
            h-full
            rounded-full
            overflow-hidden
            border
            border-white/20
            shadow-2xl
            backdrop-blur-xl
            "
          >

            <img
              src="/profile.jpeg"
              alt="Vibodha Profile"
              className="
              w-full
              h-full
              object-cover
              object-top
              "
            />

          </div>


        </div>





        {/* Name */}

        <h1
          className="
          mt-8
          text-3xl
          md:text-6xl
          font-bold
          text-white
          "
        >

          Vibodha Yasasvi Walallavita Samarasinghe

        </h1>






        {/* Role */}

        <p
          className="
          mt-5
          text-lg
          md:text-xl
          text-gray-300
          "
        >

          BICT Undergraduate | KDU | ICT Student

        </p>







        {/* Description */}

        <p
          className="
          mt-4
          text-gray-400
          max-w-2xl
          mx-auto
          "
        >

          Passionate about Data Analysis, Full-Stack Development,
          Web Technologies, and creating innovative real-world applications.

        </p>







        {/* Buttons */}

        <div
          className="
          mt-10
          flex
          flex-col
          md:flex-row
          justify-center
          gap-4
          "
        >




          {/* Projects Button */}

          <a
            href="#projects"
            className="
            px-7
            py-3
            rounded-xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            hover:bg-white/20
            transition
            duration-300
            "
          >

            View Projects

          </a>







          {/* Contact Button */}

          <a
            href="#contact"
            className="
            px-7
            py-3
            rounded-xl
            bg-blue-500/20
            backdrop-blur-xl
            border
            border-blue-400/40
            text-white
            shadow-lg
            hover:bg-blue-500/40
            transition
            duration-300
            "
          >

            Contact Me

          </a>



        </div>



      </div>


    </section>
  );
}