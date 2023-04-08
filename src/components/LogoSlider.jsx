import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CardMedia, Card, CardContent } from "@mui/material";
import logo1 from "../assets/logoslider/logo-1.png";
import logo2 from "../assets/logoslider/logo-2.png";
import logo3 from "../assets/logoslider/logo-3.png";

const items = [logo1, logo2, logo2];

const LogoSlider = () => {
  return (
    <AnimatePresence wait>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default LogoSlider;
