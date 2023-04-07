import React from "react";
import { Container, Box, Button, Paper } from "@mui/material";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// import index css
import "../index.css";
// import images from assets
import slider_image_1 from "../assets/banner/banner-2.jpeg";
import slider_image_2 from "../assets/banner/banner-1.jpeg";

const CarouselSlider = () => {
  return (
    <Container
      sx={{
        padding: "2rem 1rem",
        margin: "0 auto",
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* all image sliders  */}
        <SwiperSlide>
          <img src={slider_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image_2} alt="slide_image" />
        </SwiperSlide>
        {/* slide controll with next and prev button */}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </Container>
  );
};

export default CarouselSlider;
