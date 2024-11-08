import React from "react";
import { FaPaintRoller, FaTh, FaWrench, FaHammer, FaCogs, FaBuilding, FaBrush, FaTools, FaHardHat, FaDraftingCompass, FaPlug, FaFan, FaSolarPanel, FaGlobe, FaWindowRestore, FaDoorOpen } from "react-icons/fa";

const OurServices = () => {
  return (
    <section id="our-services" className="our-services-section bg-gray-100">
      
      {/* Banner Header Section */}
      <div className="relative py-32 bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center px-4 text-white">
          <h2 className="text-5xl font-extrabold mb-4">Our Services</h2>
          <p className="text-xl mb-8">
            We offer a wide range of construction and renovation services tailored to meet the unique needs of each project.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaPaintRoller className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Painting</h3>
            <p className="text-gray-600">We provide high-quality painting services for homes and buildings, ensuring a fresh new look.</p>
          </div>

          {/* Service 2 - Tiling */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaTh className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Tiling</h3>
            <p className="text-gray-600">Professional tiling services for floors, walls, and bathrooms to add elegance and style to your space.</p>
          </div>

          {/* Service 3 - Plumbing */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaWrench className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Plumbing</h3>
            <p className="text-gray-600">Reliable plumbing services for installation, repairs, and maintenance of water systems.</p>
          </div>

          {/* Service 4 - Carpentry */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaHammer className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Carpentry</h3>
            <p className="text-gray-600">Custom woodwork and carpentry services, from furniture to structural elements for your home or office.</p>
          </div>

          {/* Service 5 - Renovation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaCogs className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Renovation</h3>
            <p className="text-gray-600">Renovate your property to match modern designs, including kitchen, bathroom, and full house renovations.</p>
          </div>

          {/* Service 6 - Building & Design */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaBuilding className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Building & Design</h3>
            <p className="text-gray-600">We handle construction and design of residential and commercial buildings from start to finish.</p>
          </div>

          {/* Service 7 - Roofing */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaBrush className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Roofing</h3>
            <p className="text-gray-600">Expert roofing services, from installations to repairs, ensuring safety and durability for your property.</p>
          </div>

          {/* Service 8 - Electrical Work */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaTools className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Electrical Work</h3>
            <p className="text-gray-600">Comprehensive electrical services, including wiring, lighting, and maintenance for both residential and commercial projects.</p>
          </div>

          {/* Service 9 - Construction Management */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaHardHat className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Construction Management</h3>
            <p className="text-gray-600">Professional project management to ensure your construction is completed on time and on budget.</p>
          </div>

          {/* Service 10 - Architectural Services */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaDraftingCompass className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Architectural Services</h3>
            <p className="text-gray-600">Expert architectural planning and design to bring your vision to life with precision and creativity.</p>
          </div>

          {/* Service 11 - HVAC Services */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaFan className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">HVAC Services</h3>
            <p className="text-gray-600">Comprehensive heating, ventilation, and air conditioning solutions for comfort and efficiency.</p>
          </div>

          {/* Service 12 - Solar Panel Installation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaSolarPanel className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Solar Panel Installation</h3>
            <p className="text-gray-600">Eco-friendly solar energy solutions to reduce your carbon footprint and energy costs.</p>
          </div>

          {/* Service 13 - Landscaping */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaGlobe className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Landscaping</h3>
            <p className="text-gray-600">Transform outdoor spaces with professional landscaping services for a beautiful, sustainable environment.</p>
          </div>

          {/* Service 14 - Window Installation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaWindowRestore className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Window Installation</h3>
            <p className="text-gray-600">Quality window installation and replacement services for improved energy efficiency and style.</p>
          </div>

          {/* Service 15 - Door Installation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaDoorOpen className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Door Installation</h3>
            <p className="text-gray-600">Expert installation of doors for enhanced security, functionality, and aesthetics.</p>
          </div>

          {/* Service 16 - Electrical Upgrades */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaPlug className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Electrical Upgrades</h3>
            <p className="text-gray-600">Upgrade your electrical systems to meet modern safety and efficiency standards.</p>
          </div>

        </div>
        </div>
    </section>
  );
};

export default OurServices;
