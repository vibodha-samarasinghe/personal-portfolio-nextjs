export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-transparent"
    >

      <div
        className="
        max-w-5xl
        w-full
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-8
        md:p-12
        shadow-2xl
        "
      >

        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
          text-white
          mb-8
          text-center
          "
        >
          About Me
        </h2>



        <div
          className="
          bg-black/30
          backdrop-blur-lg
          border
          border-white/10
          rounded-2xl
          p-6
          md:p-8
          "
        >

          <p
            className="
            text-lg
            leading-relaxed
            text-gray-300
            "
          >

            I am Vibodha Yasasvi Walallavita Samarasinghe,
            a BICT undergraduate at General Sir John Kotelawala
            Defence University (KDU).

            <br />
            <br />

            I am passionate about software development,
            web technologies, database systems, and creating
            real-world applications. I enjoy learning new
            technologies and improving my programming skills.

          </p>

        </div>


      </div>


    </section>
  );
}