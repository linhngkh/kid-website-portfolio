import React from "react";
import CarouselSlider from "./CarouselSlider";
import Profile from "./Profile";
import Contact from "./Contact";
import LogoSlider from "./LogoSlider";
import ParallaxText from "./ParallaxText";
const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <Profile />
      <Contact />
      <LogoSlider />
      <ParallaxText />
    </div>
  );
};

export default Home;
