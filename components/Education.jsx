"use client";

import { useState } from "react";

export default function Education() {

  const [showAL, setShowAL] = useState(false);
  const [showOL, setShowOL] = useState(false);

  return (
    <section
      id="education"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-black text-center mb-10">
          Education
        </h2>


        {/* University */}
        <div className="bg-gray-800 text-white rounded-2xl p-8 shadow-lg mb-6">

          <h3 className="text-2xl font-bold">
            Bachelor of Information and Communication Technology (BICT)
          </h3>

          <p className="mt-3 text-gray-300">
            General Sir John Kotelawala Defence University (KDU)
          </p>

          <p className="mt-2 text-gray-300">
            Faculty of Technology | ICT Undergraduate
          </p>

        </div>


        {/* A/L */}
        <div
          onClick={() => setShowAL(!showAL)}
          className="bg-gray-800 text-white rounded-2xl p-8 shadow-lg mb-6 cursor-pointer hover:bg-gray-700 transition"
        >

          <h3 className="text-2xl font-bold">
            G.C.E Advanced Level (A/L)
          </h3>

          <p className="mt-3 text-gray-300">
            Click to view results
          </p>

          {showAL && (
            <p className="mt-3 text-white font-semibold">
              Results: C - 2 | S - 1
            </p>
          )}

        </div>


        {/* O/L */}
        <div
          onClick={() => setShowOL(!showOL)}
          className="bg-gray-800 text-white rounded-2xl p-8 shadow-lg cursor-pointer hover:bg-gray-700 transition"
        >

          <h3 className="text-2xl font-bold">
            G.C.E Ordinary Level (O/L)
          </h3>

          <p className="mt-3 text-gray-300">
            Click to view results
          </p>

          {showOL && (
            <p className="mt-3 text-white font-semibold">
              Results: A - 3 | B - 2 | C - 4
            </p>
          )}

        </div>


      </div>
    </section>
  );
}