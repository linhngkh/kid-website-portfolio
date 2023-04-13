import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

import image1 from "../../assets/dancer/IMG_1339.jpeg";
import image2 from "../../assets/dancer/IMG_1352.jpeg";
import image3 from "../../assets/dancer/IMG_1357.jpeg";
import image4 from "../../assets/dancer/IMG_3887.jpeg";
import image5 from "../../assets/dancer/IMG_3916.jpeg";
import image6 from "../../assets/dancer/IMG_4919.jpeg";
import image7 from "../../assets/dancer/IMG_4967.jpeg";
import image8 from "../../assets/dancer/IMG_5773.jpeg";
import image9 from "../../assets/dancer/IMG_8049.jpeg";
import image10 from "../../assets/dancer/IMG_8117.jpeg";
import image11 from "../../assets/dancer/IMG_8751.jpeg";
import image12 from "../../assets/dancer/IMG_9453.jpeg";

const Dancer = () => {
  const itemData = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  return (
    <ImageList
      sx={{ width: 1000, height: 1000 }}
      variant="masonry"
      cols={4}
      gap={7}
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
