import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

import image1 from "../../assets/dancer/IMG_1339.jpeg";

const Dancer = () => {
  const itemData = [image1];
  return (
    <ImageList
      sx={{ width: 1000, height: 1000 }}
      variant="masonry"
      cols={4}
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

export default Dancer;
