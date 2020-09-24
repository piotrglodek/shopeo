import React from 'react';
// Swiper core and components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// installation Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Slider(props) {
  const {
    config: { swiperConfig, swiperSlideConfig },
  } = props;
  return (
    <Swiper>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}

export default Slider;
