import React from "react";
import EnrollmentForm from "../components/enrollment/EnrollmentForm";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
const Enrollment = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Enrollment</h2>
          <p className="text-lg">Enroll your child in our program today.</p>
          <EnrollmentForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Enrollment;
