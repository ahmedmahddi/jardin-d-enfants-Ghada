// Path: src/components/PhotoGallery.js

import React from "react";

const PhotoGallery = () => {
  const galleryImages = [
    "/images/playground1.png",
    "/images/playground2.jpg",
    "/images/playground3.jpg",
    "/images/playground4.jpeg",
    // Add more images if needed
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-yellow-50 to-pink-50 rounded shadow-md max-h-screen overflow-auto">
      <h2 className="text-2xl font-bold text-orange mb-8 text-center">
        Gallerie
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
