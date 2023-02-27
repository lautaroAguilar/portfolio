import { Navigation, Pagination, Scrollbar, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/Slider.css";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, FreeMode]}
      spaceBetween={0}
      slidesPerView={2}
      scrollbar={true}
      freeMode={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <a href={slide.link} target="_blank">
            <img src={slide.image} alt={slide.alt} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
