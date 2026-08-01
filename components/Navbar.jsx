"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Education", path: "#education" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Certificates", path: "#certificates" },
    { name: "Contact", path: "#contact" }
  ];



  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/40
      backdrop-blur-xl
      border-b
      border-white/20
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-6
        py-4
        "
      >



        {/* Logo */}

        <h1
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          Vibodha
        </h1>






        {/* Desktop Menu */}

        <ul
          className="
          hidden
          md:flex
          gap-7
          "
        >

          {links.map((link, index) => (

            <li key={index}>

              <a
                href={link.path}
                className="
                text-gray-200
                hover:text-white
                transition
                duration-300
                "
              >

                {link.name}

              </a>

            </li>

          ))}

        </ul>








        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-white
          text-3xl
          "
        >

          ☰

        </button>


      </div>








      {/* Mobile Menu */}

      {open && (

        <div
          className="
          md:hidden
          bg-black/70
          backdrop-blur-xl
          border-t
          border-white/20
          px-6
          py-5
          "
        >


          <ul
            className="
            space-y-4
            "
          >


            {links.map((link, index) => (

              <li key={index}>

                <a
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="
                  block
                  text-gray-200
                  hover:text-white
                  transition
                  "
                >

                  {link.name}

                </a>


              </li>

            ))}



          </ul>



        </div>

      )}



    </nav>

  );
}