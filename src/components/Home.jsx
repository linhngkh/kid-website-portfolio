import React, { useRef } from "react";
import CarouselSlider from "./CarouselSlider";
import Profile from "./Profile";
import Contact from "./Contact";
import LogoSlider from "./LogoSlider";
import ParallaxText from "./ParallaxText";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Home = () => {
  const parallax = useRef();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Parallax pages={5} style={{}} ref={parallax}>
        <ParallaxLayer
          offset={0.2}
          speed={2.5}
          onClick={() => ref.current.scrollTo(3)}
        >
          <CarouselSlider />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.3}
          speed={1.5}
          onClick={() => ref.current.scrollTo(0)}
        >
          <Profile />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>
          <ParallaxText />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5}>
          {" "}
          <LogoSlider />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
