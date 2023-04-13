import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
// image collection
import image1 from "../../assets/model/3G1A1424.jpeg";
import image2 from "../../assets/model/3G1A1426.jpeg";
import image3 from "../../assets/model/dress.jpeg";
import image4 from "../../assets/model/IMG_0346.jpeg";
import image5 from "../../assets/model/IMG_0404.jpeg";
import image6 from "../../assets/model/IMG_0460.jpeg";
import image7 from "../../assets/model/IMG_0991.jpeg";
import image8 from "../../assets/model/IMG_2802.jpeg";
import image9 from "../../assets/model/IMG_3611.jpeg";
import image10 from "../../assets/model/IMG_3711.jpeg";
import image11 from "../../assets/model/IMG_4079.jpeg";
import image12 from "../../assets/model/IMG_4815.jpeg";
import image13 from "../../assets/model/IMG_5564.jpeg";
import image14 from "../../assets/model/IMG_5599.jpeg";
import image15 from "../../assets/model/IMG_5600.jpeg";
import image16 from "../../assets/model/IMG_5913.jpeg";
import image17 from "../../assets/model/IMG_5955.jpeg";
import image18 from "../../assets/model/IMG_5957.jpeg";
import image19 from "../../assets/model/IMG_6066.jpeg";
import image20 from "../../assets/model/IMG_6720.jpeg";
import image21 from "../../assets/model/IMG_6721.jpeg";
import image22 from "../../assets/model/IMG_7395.jpeg";
import image23 from "../../assets/model/IMG_7638.jpeg";

const Model = () => {
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
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image22,
    image21,
    image23,
  ];
  return (
    <ImageList
      sx={{ width: 1000, height: 1000 }}
      variant="quilted"
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

export default Model;
