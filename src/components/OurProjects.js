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
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';
import image17 from '../assets/image17.jpg';
import image18 from '../assets/image18.jpg';
import image19 from '../assets/image19.jpg';
import image20 from '../assets/image20.jpg';
import image21 from '../assets/image21.jpg';
import image22 from '../assets/image22.jpg';
import image23 from '../assets/image23.jpg';
import image24 from '../assets/image24.jpg';
import image25 from '../assets/image25.jpg';
import image26 from '../assets/image26.jpg';
import image27 from '../assets/image27.jpg';
import image28 from '../assets/image28.jpg';
import image29 from '../assets/image29.jpg';
import image30 from '../assets/image30.jpg';
import image31 from '../assets/image31.jpg';
import image32 from '../assets/image32.jpg';
import image33 from '../assets/image33.jpg';
import image34 from '../assets/image34.jpg';
import image35 from '../assets/image35.jpg';
import image36 from '../assets/image36.jpg';
import image37 from '../assets/image37.jpg';
import image38 from '../assets/image38.jpg';
import image39 from '../assets/image39.jpg';
import image40 from '../assets/image40.jpg'; 
import image41 from '../assets/image41.jpg';
import image42 from '../assets/image42.jpg';
import image43 from '../assets/image43.jpg';
import image44 from '../assets/image44.jpg';
import image45 from '../assets/image45.jpg';

const Projects = () => {
  // Array gambar untuk ditampilkan
  const projectImages = [
    image1, image2, image3, image4, image5, image6, image7, image8,
    image9, image10, image11, image12, image13, image14, image15, image16,
    image17, image18, image19, image20, image21, image22, image23, image24,
    image25, image26, image27, image28, image29, image30, image31, image32,
    image33, image34, image35, image36, image37, image38, image39, image40, 
    image41, image42, image43, image44, image45
  ];

  return (
    <div>
      {/* Banner Header Section */}
      <div className="relative py-32 bg-gray-900">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Konten banner */}
        <div className="relative container mx-auto text-center px-4 text-white">
          <h2 className="text-5xl font-extrabold mb-4">Our Projects</h2>
          <p className="text-xl mb-8">
            Explore some of our finest work and projects. We take pride in delivering exceptional results on every project.
          </p>
        </div>
      </div>

      {/* Grid Foto Proyek */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 px-4 py-12 bg-gray-100">
        {projectImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <img src={image} alt={`Project ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;
