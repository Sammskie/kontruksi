// src/components/Projects.js
import React from 'react';

// Import gambar-gambar dari folder assets
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';

const Projects = () => {
  // Array gambar untuk ditampilkan
  const projectImages = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className="projects-section p-8 bg-gray-100 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Projects</h2>
      
      {/* Grid Foto Proyek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projectImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src={image} alt={`Project ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>

      {/* Tombol Lihat Semua */}
      <div className="text-center mt-10">
        <a href="/ourProjects" className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold transition duration-300">
          See All Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
