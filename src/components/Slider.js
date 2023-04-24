import { Pagination, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/Slider.css";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      
      centeredSlides={true}
      grabCursor={true}
      speed={500}
      loop={true}
      width={`1500`}
      slidesPerView={3}
      pagination={{ 
        clickable: true
      }}
      
      modules={[Pagination]}
      className="swiper_container"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <div className="card">
            <img src={slide.image} alt={slide.alt} />
            <div className="content">
              <h5>{slide.title}</h5>
              <p>{slide.subtitle}</p>
              <a href={slide.link} target="_blank">
                Ver más
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
