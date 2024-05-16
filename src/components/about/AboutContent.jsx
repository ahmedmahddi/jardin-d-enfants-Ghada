// AboutContent.jsx
import React from "react";

const AboutContent = () => {
  return (
    <div className="p-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our History</h2>
        <p className="text-gray-600">
          Sunshine Daycare was founded in 1995 with the aim of providing
          high-quality childcare services to families in our community. Over the
          years, we have grown and expanded our facilities to accommodate more
          children and offer a wider range of programs.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Our Philosophy
        </h2>
        <p className="text-gray-600 mb-4">
          At Sunshine Daycare, we believe that every child is unique and
          deserves a safe, nurturing, and stimulating environment to grow and
          learn. Our experienced and caring staff is dedicated to fostering the
          physical, emotional, social, and cognitive development of each child
          through age-appropriate activities and a comprehensive curriculum.
        </p>
        <div className="flex items-center">
          <span className="text-2xl mr-2">🌟</span>
          <p className="text-gray-600">We value creativity and exploration.</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-2">🌈</span>
          <p className="text-gray-600">Each child is encouraged to blossom.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
