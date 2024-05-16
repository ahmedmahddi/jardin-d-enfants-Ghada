import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>©️ 2024 Daycare Center. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-white ml-2"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-white ml-2"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-300 hover:text-white ml-2"
          >
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
