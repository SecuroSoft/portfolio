import React from "react";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Section6 from "../components/Home/Section6";
import Section7 from "../components/Home/Section7";
import Section8 from "../components/Home/Section8";
import SendANote from "../components/Home/SendANote";
import Footer from "../components/Home/Footer";
import Subscribe from "../components/Home/Subscribe";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Subscribe /> */}
      <Section5 />
      <Section6 />
      <Section7 />
      {/* <Section8 /> */}
      <div className="footer-bg service-bg">
      {/* <SendANote /> */}
      <Footer />
      </div>
    </div>
  );
};

export default Home;
