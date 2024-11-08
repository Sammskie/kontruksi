// src/components/AboutUs.js
import React from 'react';
import constructionHeadImage from '../assets/abraham.jpg';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            With over 15 years of dedicated experience in the construction industry, we are committed to delivering reliable, high-quality services that meet and exceed client expectations. Our team of more than 30 skilled professionals brings expertise, dedication, and precision to every project.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From residential renovations to large-scale commercial builds, we approach each project with the same commitment to excellence, continuously striving for outstanding results. We take pride in our reputation for quality, efficiency, and integrity in everything we do.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center">
          <img
            src={constructionHeadImage}
            alt="Head of Construction"
            className="w-3/4 max-w-xs h-auto rounded-lg shadow-md object-contain mb-4"
          />
          <p className="text-lg font-semibold text-gray-800">Abraham Samsie</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
