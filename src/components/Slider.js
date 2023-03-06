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

          <div className="card" >
            <img src={slide.image} alt={slide.alt} />
            <div className="content">
              <h5>{slide.title}</h5>
              <p>{slide.subtitle}</p>
              <a href={slide.link} target="_blank">Ver más</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
