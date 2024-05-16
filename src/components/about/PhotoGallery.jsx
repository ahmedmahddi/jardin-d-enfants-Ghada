import React from "react";

const PhotoGallery = () => {
  const galleryImages = [
    "/images/gallery-image-1.jpeg",
    "/images/gallery-image-2.jpeg",
    "/images/gallery-image-3.jpeg",
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
