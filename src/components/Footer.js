// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        {/* Bagian Atas Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Tentang Kami */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are a construction company with over 15 years of experience, committed to providing high-quality services and excellent results for every project.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Buildings</li>
              <li>Renovation and Repairs</li>
              <li>Custom Projects</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Email: <a href="mailto:samsiekontruksi@gmail.com" className="text-blue-400 hover:underline">samsiekontruksi@gmail.com</a>
            </p>
            <p className="text-gray-400">Whatsapp Phone: +6285-7921-92082</p>
            <p className="text-gray-400">Address: Jln, Poh Gading. Gg, Astina. Dawas, Kuta utara, Badung, Bali.</p>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-gray-600 mb-6" />

        {/* Hak Cipta dan Kredit */}
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} Samsie Construction Company. All rights reserved.
        </div>
        <div className="text-center text-gray-500 mt-2">
          Website created by 
          <a href="https://www.instagram.com/_suryasam" className="text-yellow-400 hover:underline ml-1">
            Suryasam
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
