import React from "react";
import { Container, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSlider = () => {
  return (
    <Container maxWidth="lg">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        beforeChange={function (nextSlide, _ref2) {
          var currentSlide = _ref2.currentSlide;
          _ref2.onMove;
          return (
            "previous slide is " + currentSlide + " nextSlide is " + nextSlide
          );
        }}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Box
          sx={{
            width: "300px",
            height: "300px",
            objectFit: "contain",
          }}
        >
          <img src="/src/assets/3G1A1424.jpeg" />
          <img src="/src/assets/3G1A1426.jpeg" />
          <img src="/src/assets/B51F8D43-DDED-4F45-AE0D-4D06211CD3DA.jpeg" />
        </Box>
      </Carousel>
    </Container>
  );
};

export default CarouselSlider;
