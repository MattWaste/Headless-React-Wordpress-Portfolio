import {Swiper, SwiperSlide} from "swiper/react";
import '/Users/matthewwest/Local Sites/mawtestsite/app/public/wp-content/themes/brads-boilerplate-theme-tailwind//node_modules/swiper/swiper.css';
import '/Users/matthewwest/Local Sites/mawtestsite/app/public/wp-content/themes/brads-boilerplate-theme-tailwind/node_modules/swiper/modules/navigation.css';

import { Navigation } from 'swiper/modules';

export const Slider = ({ slides }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]}  slidesPerView={1} className="mySwiper">
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt={slide.title}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

