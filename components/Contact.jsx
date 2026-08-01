"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const [status, setStatus] = useState("");



  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      });


      const data = await response.json();


      if (data.success) {

        setStatus("Message sent successfully! ✅");


        setFormData({
          name: "",
          email: "",
          message: ""
        });


      } else {

        setStatus("Failed to send message ❌");

      }


    } catch (error) {

      console.log(error);

      setStatus("Something went wrong ❌");

    }

  };





  return (

    <section
      id="contact"
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



      <div className="max-w-4xl w-full">



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
          Contact Me
        </h2>




        <div
          className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-6
          md:p-10
          shadow-2xl
          "
        >



          <p
            className="
            text-center
            text-gray-300
            mb-8
            "
          >
            Feel free to contact me for collaborations or opportunities.
          </p>





          {/* Contact Details */}

          <div
            className="
            text-center
            space-y-3
            text-gray-300
            mb-10
            "
          >

            <p>
              📧 vibodhayws@gmail.com
            </p>

            <p>
              📱 +94 711186456
            </p>

            <p>
              📍 Madawala Ulpotha, Matale, Sri Lanka
            </p>

          </div>






          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >



            <input

              type="text"

              name="name"

              placeholder="Your Name"

              value={formData.name}

              onChange={handleChange}

              className="
              w-full
              p-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              placeholder-gray-400
              outline-none
              focus:border-white
              "

              required

            />





            <input

              type="email"

              name="email"

              placeholder="Your Email"

              value={formData.email}

              onChange={handleChange}

              className="
              w-full
              p-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              placeholder-gray-400
              outline-none
              focus:border-white
              "

              required

            />







            <textarea

              name="message"

              placeholder="Your Message"

              rows={5}

              value={formData.message}

              onChange={handleChange}

              className="
              w-full
              p-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              placeholder-gray-400
              outline-none
              focus:border-white
              "

              required

            />







            <button

              type="submit"

              className="
              px-8
              py-3
              rounded-xl
              bg-white
              text-black
              font-semibold
              hover:bg-gray-200
              transition
              "

            >

              Send Message

            </button>



          </form>






          {status && (

            <p className="mt-5 text-center text-gray-300">

              {status}

            </p>

          )}







          {/* Social Links */}


          <div
            className="
            mt-10
            flex
            justify-center
            gap-8
            text-white
            "
          >


            <a

              href="https://github.com/vibodha-samarasinghe"

              target="_blank"

              className="
              flex
              items-center
              gap-2
              hover:text-gray-300
              transition
              "

            >

              <FaGithub size={28}/>

              GitHub

            </a>





            <a

              href="YOUR_LINKEDIN_LINK"

              target="_blank"

              className="
              flex
              items-center
              gap-2
              hover:text-gray-300
              transition
              "

            >

              <FaLinkedin size={28}/>

              LinkedIn

            </a>


          </div>




        </div>


      </div>


    </section>


  );

}