"use client";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">


        {/* Logo */}

        <h1 className="text-2xl font-bold text-black">
          Vibodha
        </h1>




        {/* Desktop Menu - Laptop */}

        <ul className="hidden md:flex gap-6 font-medium">

          <li>
            <a 
              href="#home"
              className="text-black hover:text-gray-500"
            >
              Home
            </a>
          </li>


          <li>
            <a 
              href="#about"
              className="text-black hover:text-gray-500"
            >
              About
            </a>
          </li>


          <li>
            <a 
              href="#education"
              className="text-black hover:text-gray-500"
            >
              Education
            </a>
          </li>


          <li>
            <a 
              href="#skills"
              className="text-black hover:text-gray-500"
            >
              Skills
            </a>
          </li>


          <li>
            <a 
              href="#projects"
              className="text-black hover:text-gray-500"
            >
              Projects
            </a>
          </li>


          <li>
            <a 
              href="#contact"
              className="text-black hover:text-gray-500"
            >
              Contact
            </a>
          </li>


        </ul>





        {/* Mobile Menu Button - Phone */}

        <button

          onClick={() => setOpen(!open)}

          className="md:hidden text-black text-3xl"

        >

          ☰

        </button>


      </div>






      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-white shadow-md px-6 py-4">


          <ul className="space-y-4 font-medium">


            <li>
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="block text-black hover:text-gray-500"
              >
                Home
              </a>
            </li>



            <li>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="block text-black hover:text-gray-500"
              >
                About
              </a>
            </li>



            <li>
              <a
                href="#education"
                onClick={() => setOpen(false)}
                className="block text-black hover:text-gray-500"
              >
                Education
              </a>
            </li>



            <li>
              <a
                href="#skills"
                onClick={() => setOpen(false)}
                className="block text-black hover:text-gray-500"
              >
                Skills
              </a>
            </li>



            <li>
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="block text-black hover:text-gray-500"
              >
                Projects
              </a>
            </li>



            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-black hover:text-gray-500"
              >
                Contact
              </a>
            </li>


          </ul>


        </div>

      )}


    </nav>
  );
}