import React from "react";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import ContactForm from "../components/contact/ContactForm";
// import Map from "../components/contact/Map";
import Footer from "../components/common/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <ContactForm />
        {/* <Map /> */}
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
