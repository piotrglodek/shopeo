import React from 'react';
// Swiper core and components
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// components
import {
  SwiperArrowNextButton,
  SwiperArrowPrevButton,
  SwiperNextArrow,
  SwiperPrevArrow,
} from './slider.components';
import { Product } from '../';

// installation Swiper components
SwiperCore.use([Navigation]);

function Slider(props) {
  const { shoes, title } = props;
  const swiperSliders = shoes
    .filter((shoe) => shoe.category.name === title)
    .map((shoe) => (
      <SwiperSlide key={shoe.id}>
        <Product shoe={shoe} />
      </SwiperSlide>
    ));

  return (
    <Swiper
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      grabCursor
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1480: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperArrowPrevButton className='swiper-button-prev'>
        <SwiperPrevArrow />
      </SwiperArrowPrevButton>
      <SwiperArrowNextButton className='swiper-button-next'>
        <SwiperNextArrow />
      </SwiperArrowNextButton>
      {swiperSliders}
    </Swiper>
  );
}

export default Slider;
