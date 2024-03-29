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
        <ParallaxLayer offset={0} speed={1.0} factor={1}>
          <CarouselSlider />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1.0} factor={1}>
          <Profile />
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={1.0}>
          <ParallaxText />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.5} factor={1}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1.5}>
          {" "}
          <LogoSlider />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
