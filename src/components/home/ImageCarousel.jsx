// ImageCarousel.jsx
import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/gallery-image-1.jpeg",
    "/images/gallery-image-2.jpeg",
    "/images/gallery-image-3.jpeg",
  ];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <Carousel
      className="container mx-auto px-4 py-8"
      activeIndex={currentIndex}
      nextFn={handleNext}
      prevFn={handlePrev}
      navigation={({ next, prev }) => (
        <div className="flex justify-between items-center">
          <button
            onClick={prev}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      )}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel ${index + 1}`}
          className="w-full h-96 object-cover"
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
