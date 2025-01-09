"use client"; // Add this at the top to indicate this component should only run on the client side

import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope ,FaBullhorn,FaBug,FaVideo ,FaCogs,FaPalette,FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";


// Dynamically import the component that uses useInView hook


export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 bg-black bg-opacity-60 shadow-lg py-4 z-50 transition duration-500 ease-in-out">
        <motion.nav 
          className="container mx-auto flex justify-between items-center px-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <div className="flex items-center hover:scale-110 transition-transform duration-300">
            <Image
              src="/logo.jpeg"
              alt="Sparklab Creative Logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
              Sparklab Creative
            </h1>
          </div>
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-lg">
            {["home", "about", "services", "projects", "contact"].map((section) => (
              <motion.li 
                key={section}
                className="relative group text-gray-300 hover:text-blue-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <a href={`#${section}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </header>

      {/* Hero Section with Background Image */}
      <section
        id="home"
        className="h-screen bg-cover bg-center text-white flex flex-col items-center justify-center relative"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div> {/* Overlay */}
        
        <motion.h2
          className="text-5xl font-extrabold text-blue-400 mb-4 z-10"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          Welcome to Sparklab Creative
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl z-10"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Providing top-notch graphic designing, web development, video editing, logo making, 3D animation, and more.
        </motion.p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gray-900 text-center bg-opacity-90"
      >
        <h3 className="text-4xl font-bold text-blue-400 mb-6">About Us</h3>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Sparklab Creative is a passionate team of designers and developers dedicated to delivering exceptional digital experiences. We specialize in custom web design, branding, animations, and more.
        </p>
      </section>

      {/* Services Section */}
      <section
  id="services"
  className="py-20 bg-gray-800 text-center bg-opacity-90"
>
  <h3 className="text-4xl font-bold text-blue-400 mb-6">Our Services</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Web Development */}
    <div className="service-card bg-gray-700 p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <FaLaptopCode size={40} className="mb-4 text-blue-400" />
      <h4 className="text-2xl font-bold mb-4">Web Development</h4>
      <p>We create responsive and modern websites with a focus on user experience and performance.</p>
    </div>

    {/* Graphic Design */}
    <div className="service-card bg-gray-700 p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <FaPalette size={40} className="mb-4 text-blue-400" />
      <h4 className="text-2xl font-bold mb-4">Graphic Design</h4>
      <p>Our designs are crafted to visually communicate your brand’s message and create lasting impressions.</p>
    </div>

    {/* 3D Animation */}
    <div className="service-card bg-gray-700 p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <FaCogs size={40} className="mb-4 text-blue-400" />
      <h4 className="text-2xl font-bold mb-4">3D Animation</h4>
      <p>Bring your ideas to life with stunning 3D animation that engages and captivates your audience.</p>
    </div>

    {/* Video Editing */}
    <div className="service-card bg-gray-700 p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <FaVideo size={40} className="mb-4 text-blue-400" />
      <h4 className="text-2xl font-bold mb-4">Video Editing</h4>
      <p>Enhance your videos with professional editing that tells your story and connects with your audience.</p>
    </div>

    {/* Code Debugging */}
    <div className="service-card bg-gray-700 p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <FaBug size={40} className="mb-4 text-blue-400" />
      <h4 className="text-2xl font-bold mb-4">Code Debugging</h4>
      <p>Our team helps you find and fix bugs quickly to improve the functionality of your code.</p>
    </div>

    {/* Digital Marketing */}
    <div className="service-card bg-gray-700 p-8 rounded-lg shadow-lg text-white transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <FaBullhorn size={40} className="mb-4 text-blue-400" />
      <h4 className="text-2xl font-bold mb-4">Digital Marketing</h4>
      <p>We help you grow your brand through innovative strategies across digital platforms.</p>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section
  id="projects"
  className="py-20 bg-gray-900 text-center bg-opacity-90"
>
  <h3 className="text-4xl font-bold text-blue-400 mb-6">Our Projects</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Project 1 */}
    <div className="project-card bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <Image src="/1.png" alt="Project 1" width={500} height={400} className="w-full h-auto rounded-lg" />
      <h5 className="mt-4 text-xl font-bold text-blue-400">Project 1</h5>
      <p className="text-gray-300">A description of project 1, showcasing design and functionality.</p>
    </div>

    {/* Project 2 */}
    <div className="project-card bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <Image src="/2.png" alt="Project 2" width={500} height={400} className="w-full h-auto rounded-lg" />
      <h5 className="mt-4 text-xl font-bold text-blue-400">Project 2</h5>
      <p className="text-gray-300">Project 2 combines cutting-edge technology and user experience design.</p>
    </div>

    {/* Project 3 */}
    <div className="project-card bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-600">
      <Image src="/3.png" alt="Project 3" width={500} height={400} className="w-full h-auto rounded-lg" />
      <h5 className="mt-4 text-xl font-bold text-blue-400">Project 3</h5>
      <p className="text-gray-300">This project highlights our capabilities in web development and branding.</p>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-center bg-opacity-70">
        <h3 className="text-4xl font-bold text-blue-400 mb-6">Contact Us</h3>
        <p className="text-lg text-gray-300 mb-8">Have any questions or need support? We&#39;re here to help!</p>


        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com/share/1AzUrvPcG3/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-blue-600 hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/sparklab_creative?igsh=Z2d5Z3dkdXU2NTd2" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-pink-500 hover:text-pink-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/company/sparklab-creative/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-700 hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://wa.me/03062617874" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="text-green-500 hover:text-green-400 transition duration-300" />
          </a>
          <a href="mailto:sparklabc@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={30} className="text-gray-500 hover:text-gray-400 transition duration-300" />
          </a>
        </div>

        <form action="mailto:sparklabc@gmail.com" method="get" className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-400 text-white py-3 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
            Send Message
          </button>
        </form>

      
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-6 text-center">
        <p>&copy; 2025 Sparklab Creative. All rights reserved.</p>
      </footer>
    </div>
  );
}
