import React from "react";

function Banner() {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center"
      style={{ backgroundImage: `url(${require('../assets/banner.jpg')})` }}
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center w-full text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Your Best Construction Partner
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We provide professional and reliable construction services.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-md text-lg"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default Banner;
