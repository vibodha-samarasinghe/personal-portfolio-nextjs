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
      className="py-20 px-6 bg-gray-100"
    >


      <div className="max-w-3xl mx-auto">



        <h2 className="text-4xl font-bold text-black text-center mb-10">
          Contact Me
        </h2>




        <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg">



          <p className="text-center text-gray-300 mb-6">

            Feel free to contact me for collaborations or opportunities.

          </p>





          {/* Contact Details */}

          <div className="text-center space-y-3 text-gray-300 mb-8">


            <p>
                Email: vibodhayws@gmail.com
            </p>


            <p>
                Phone: +94 711186456
            </p>


            <p>
                Address: Madawala ulpotha,Matale,Sri Lanka.
            </p>


          </div>






          {/* Contact Form */}

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

              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"

              required

            />





            <input

              type="email"

              name="email"

              placeholder="Your Email"

              value={formData.email}

              onChange={handleChange}

              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"

              required

            />







            <textarea

              name="message"

              placeholder="Your Message"

              rows="5"

              value={formData.message}

              onChange={handleChange}

              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500"

              required

            ></textarea>






            <button

              type="submit"

              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"

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

          <div className="mt-8 flex justify-center gap-6">



            <a

              href="https://github.com/vibodha-samarasinghe"

              target="_blank"

              className="flex items-center gap-2 hover:text-gray-300"

            >

              <FaGithub size={28} />

              GitHub

            </a>





            <a

              href="YOUR_LINKEDIN_LINK"

              target="_blank"

              className="flex items-center gap-2 hover:text-gray-300"

            >

              <FaLinkedin size={28} />

              LinkedIn

            </a>



          </div>




        </div>



      </div>



    </section>

  );

}