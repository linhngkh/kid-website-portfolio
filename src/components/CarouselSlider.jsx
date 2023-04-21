import React from "react";
import { Container } from "@mui/material";
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
import slider_image_3 from "../assets/banner/banner-3.jpg";
import slider_image_4 from "../assets/banner/banner-4.jpg";
import slider_image_5 from "../assets/banner/banner-5.jpeg";
import slider_image_6 from "../assets/banner/banner-6.jpeg";
import slider_image_7 from "../assets/banner/banner-7.jpeg";
import slider_image_8 from "../assets/banner/banner-8.jpeg";
import slider_image_9 from "../assets/banner/banner-9.jpeg";

const imageSliders = [
  slider_image_3,
  slider_image_2,
  slider_image_6,
  slider_image_7,
  slider_image_1,
  slider_image_4,
  slider_image_5,
  slider_image_8,
  slider_image_9,
];
const CarouselSlider = () => {
  return (
    <Container
      sx={{
        margin: "20px auto",
        width: "1000px",
        paddingBottom: "10px",
        boxShadow: "0 8px 8px -4px gray",
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
        {imageSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="slide_image" />
          </SwiperSlide>
        ))}
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
