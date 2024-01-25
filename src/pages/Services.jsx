import React from "react";
import Section1 from "../components/Services/Section1";
import SendANote from "../components/Home/SendANote";
import Footer from "../components/Home/Footer";
import Section2 from "../components/Services/Section2";
import Section3 from "../components/Services/Section3";

const Services = () => {
  return (
    <div className="overflow-hidden">
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="footer-bg service-bg">
        <SendANote />
        <Footer />
      </div>
    </div>
  );
};

export default Services;
