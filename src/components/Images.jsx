import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

import image1 from "../assets/3G1A1424.jpeg";
import image2 from "../assets/3G1A1426.jpeg";
const Images = () => {
  const itemData = [image1, image2];

  return (
    <ImageList
      sx={{ width: 500, height: 450, padding: "50px" }}
      variant="woven"
      cols={2}
      gap={10}
    >
      {itemData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item}?w=248&fit=crop&auto=format`}
            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Images;
