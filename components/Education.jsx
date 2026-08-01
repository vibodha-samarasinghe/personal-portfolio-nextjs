"use client";

import { useState } from "react";


export default function Education() {

  const [showAL, setShowAL] = useState(false);
  const [showOL, setShowOL] = useState(false);


  return (

    <section
      id="education"
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
          Education
        </h2>




        {/* University */}


        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-6
          shadow-2xl
          mb-6
          hover:bg-white/20
          transition
          flex
          items-center
          gap-6
          "
        >


          {/* KDU Logo */}

          <img
            src="/KDU.png"
            alt="KDU Logo"
            className="
            w-16
            h-16
            md:w-20
            md:h-20
            rounded-full
            object-contain
            bg-black
            p-1
            border
            border-white/20
            shadow-lg
            "
          />



          <div>

            <h3
              className="
              text-xl
              md:text-2xl
              font-bold
              text-white
              "
            >
              Bachelor of Information and Communication Technology (BICT)
            </h3>


            <p className="mt-3 text-gray-300">
              General Sir John Kotelawala Defence University (KDU)
            </p>


            <p className="mt-2 text-gray-400">
              Faculty of Technology | ICT Undergraduate
            </p>

          </div>


        </div>






        {/* A/L */}


        <div
          onClick={() => setShowAL(!showAL)}
          className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-6
          shadow-2xl
          mb-6
          cursor-pointer
          hover:bg-white/20
          transition
          flex
          items-center
          gap-6
          "
        >



          {/* SSBV Logo */}

          <img
            src="/SSBV.png"
            alt="SSBV Logo"
            className="
            w-16
            h-16
            md:w-20
            md:h-20
            rounded-full
            object-contain
            bg-black
            p-1
            border
            border-white/20
            shadow-lg
            "
          />



          <div className="flex-1">


            <h3 className="text-xl md:text-2xl font-bold text-white">
              G.C.E Advanced Level (A/L)
            </h3>


            <p className="mt-3 text-gray-300">
              Sri Sangamitta Girls' College,Matale
            </p>


            <p className="mt-2 text-gray-400">
              Click to view results
            </p>



            {showAL && (

              <div
                className="
                mt-4
                p-4
                rounded-xl
                bg-black/30
                border
                border-white/10
                "
              >

                <p className="text-white font-semibold">
                  Results: C - 2 | S - 1
                </p>

              </div>

            )}


          </div>


        </div>








        {/* O/L */}


        <div
          onClick={() => setShowOL(!showOL)}
          className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-6
          shadow-2xl
          cursor-pointer
          hover:bg-white/20
          transition
          flex
          items-center
          gap-6
          "
        >



          {/* SSBV Logo */}

          <img
            src="/SSBV.png"
            alt="SSBV Logo"
            className="
            w-16
            h-16
            md:w-20
            md:h-20
            rounded-full
            object-contain
            bg-black
            p-1
            border
            border-white/20
            shadow-lg
            "
          />



          <div className="flex-1">


            <h3 className="text-xl md:text-2xl font-bold text-white">
              G.C.E Ordinary Level (O/L)
            </h3>


            <p className="mt-3 text-gray-300">
              Sri Sangamitta Girls' College,Matale
            </p>


            <p className="mt-2 text-gray-400">
              Click to view results
            </p>




            {showOL && (

              <div
                className="
                mt-4
                p-4
                rounded-xl
                bg-black/30
                border
                border-white/10
                "
              >

                <p className="text-white font-semibold">
                  Results: A - 3 | B - 2 | C - 4
                </p>

              </div>

            )}



          </div>


        </div>



      </div>


    </section>

  );
}