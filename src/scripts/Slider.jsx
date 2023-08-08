import {Swiper, SwiperSlide} from "swiper/react";
import '/Users/matthewwest/Local Sites/mawtestsite/app/public/wp-content/themes/brads-boilerplate-theme-tailwind/node_modules/swiper/swiper-bundle.min.css';

export default function Slider({ slides }){
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )

}