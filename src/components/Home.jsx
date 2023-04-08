import React from "react";
import CarouselSlider from "./CarouselSlider";
import Profile from "./Profile";
import Contact from "./Contact";
import LogoSlider from "./LogoSlider";
const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <Profile />

      <Contact />
      <LogoSlider />
    </div>
  );
};

export default Home;
