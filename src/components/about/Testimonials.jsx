// Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "My child has thrived at Sunshine Daycare. The staff is caring and nurturing, and the programs are excellent.",
      author: "John Doe, Parent",
    },
    {
      id: 2,
      text: "I highly recommend Sunshine Daycare. They provide a safe and stimulating environment for children to learn and grow.",
      author: "Jane Smith, Parent",
    },
    // Add more testimonials here
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Testimonials</h2>
      {testimonials.map(testimonial => (
        <div
          key={testimonial.id}
          className="bg-white rounded-lg p-6 mb-4 shadow-md"
        >
          <p className="text-gray-600 mb-2">{testimonial.text}</p>
          <p className="text-gray-500 font-bold">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
