import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Mon enfant s'est épanoui à la garderie Sunshine. Le personnel est attentionné et bienveillant, et les programmes sont excellents.",
      author: "John Doe, Parent",
      rating: 4.9,
    },
    {
      id: 2,
      text: "Je recommande vivement la garderie Sunshine. Ils offrent un environnement sûr et stimulant pour que les enfants apprennent et grandissent.",
      author: "Jane Smith, Parent",
      rating: 4.9,
    },
    {
      id: 3,
      text: "Les activités proposées sont variées et éducatives. Mon fils adore y aller chaque jour!",
      author: "Marc Dupont, Parent",
      rating: 4.8,
    },
    {
      id: 4,
      text: "La garderie Sunshine a un personnel formidable qui se soucie vraiment des enfants. Ma fille a beaucoup appris ici.",
      author: "Marie Leblanc, Parent",
      rating: 5.0,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12 w-screen">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange">Témoignages</h2>
        </section>
        <div className="max-w-7xl mx-auto px-8 p-8">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="flex items-center justify-center"
              >
                <div className="flex flex-col items-center p-6 bg-lightPink rounded-lg shadow-lg max-w-xl mx-auto text-center">
                  <h5 className="mb-2 text-lg font-bold text-dark-blue">
                    {testimonial.author}
                  </h5>
                  <p className="mb-4 font-medium text-dark-blue">
                    {testimonial.text}
                  </p>
                  <ul className="flex justify-center mb-0">
                    {[...Array(Math.round(testimonial.rating))].map(
                      (_, index) => (
                        <li key={index}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 text-blue"
                          >
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
