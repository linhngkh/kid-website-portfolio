import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CardMedia, Card, CardContent } from "@mui/material";
import logo1 from "../assets/logoslider/logo-1.png";
import logo2 from "../assets/logoslider/logo-2.png";
import logo3 from "../assets/logoslider/logo-3.png";

const items = [logo1, logo2, logo3];

const LogoSlider = () => {
  // create a cuurent index with inital value = 0
  const [currentIndex, setCurrentIndex] = useState(0);
  // create a handle change for current index
  const handleIndexChange = () => {
    setCurrentIndex((index) => (index === items.length - 1 ? 0 : index + 1));
  };
  // side effect to change index every 4000 milliseconds
  useEffect(() => {
    const intervalIndex = setInterval(handleIndexChange, 4000);
    return () => clearInterval(intervalIndex);
  }, []);

  const marquee = items.map((item, index) => (
    <AnimatePresence key={index} wait>
      {currentIndex === index && (
        <motion.img
          key={index}
          src={item}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "-100%", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ repeat: Infinity, duration: 5 }}
          style={{ position: "absolute" }}
        />
      )}
    </AnimatePresence>
  ));

  return (
    <div
      style={{
        position: "relative",
        height: "300px",
        maxWidth: "300px",
        margin: "0 auto",
        top: "-30px",
      }}
    >
      {marquee}
    </div>
  );
};

export default LogoSlider;
