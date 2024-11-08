import React from "react";
import { FaPaintRoller, FaTh, FaWrench, FaHammer, FaCogs, FaBuilding, FaBrush, FaTools } from "react-icons/fa";

function Services() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Service 1 - Painting */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaPaintRoller className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Painting</h3>
            <p className="text-gray-600">We provide high-quality painting services for homes and buildings, ensuring a fresh new look.</p>
          </div>

          {/* Service 2 - Tiling */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaTh className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tiling</h3>
            <p className="text-gray-600">Professional tiling services for floors, walls, and bathrooms to add elegance and style to your space.</p>
          </div>

          {/* Service 3 - Plumbing */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaWrench className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Plumbing</h3>
            <p className="text-gray-600">Reliable plumbing services for installation, repairs, and maintenance of water systems.</p>
          </div>

          {/* Service 4 - Carpentry */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaHammer className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Carpentry</h3>
            <p className="text-gray-600">Custom woodwork and carpentry services, from furniture to structural elements for your home or office.</p>
          </div>

          {/* Service 5 - Renovation */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaCogs className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Renovation</h3>
            <p className="text-gray-600">Renovate your property to match modern designs, including kitchen, bathroom, and full house renovations.</p>
          </div>

          {/* Service 6 - Building & Design */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaBuilding className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Building & Design</h3>
            <p className="text-gray-600">We handle construction and design of residential and commercial buildings from start to finish.</p>
          </div>

          {/* Service 7 - Roofing */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaBrush className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Roofing</h3>
            <p className="text-gray-600">Expert roofing services, from installations to repairs, ensuring safety and durability for your property.</p>
          </div>

          {/* Service 8 - Electrical Work */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaTools className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Electrical Work</h3>
            <p className="text-gray-600">Comprehensive electrical services, including wiring, lighting, and maintenance for both residential and commercial projects.</p>
          </div>
        </div>
      </div>
            {/* Tombol Lihat Semua */}
            <div className="text-center mt-10">
        <a href="/ourServices" className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold transition duration-300">
          See All Services
        </a>
      </div>
    </div>
  );
}

export default Services;
