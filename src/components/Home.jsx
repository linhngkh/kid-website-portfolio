import React from "react";
import CarouselSlider from "./CarouselSlider";
import Profile from "./Profile";
import Contact from "./Contact";
import LogoSlider from "./LogoSlider";
import ParallaxText from "./ParallaxText";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Home = () => {
  return (
    <div style={{}}>
      <Parallax pages={4} style={{}}>
        <ParallaxLayer offset={0} speed={1.5} factor={1}>
          <CarouselSlider />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1.5} factor={0.5}>
          <Profile />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} factor={0.6}>
          <ParallaxText />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.5} factor={0.9}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} factor={1}>
          {" "}
          <LogoSlider />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
