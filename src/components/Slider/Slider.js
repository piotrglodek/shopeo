import React from 'react';
// Swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// components
import { CustomNextButton, CustomPrevButton } from './slider.components';
import { Arrow } from '../../styled_components';
import { Product } from '../';
// installation Swiper components
SwiperCore.use([Navigation]);

function Slider(props) {
  const { category, shoes } = props;
  const swiperSliders = shoes
    .filter((shoe) => shoe.category.name === category)
    .map((shoe) => (
      <SwiperSlide key={shoe.id}>
        <Product shoe={shoe} />
      </SwiperSlide>
    ));

  return (
    <Swiper
      spaceBetween={20}
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
      <CustomPrevButton className='swiper-button-prev'>
        <Arrow.LeftIcon />
      </CustomPrevButton>
      <CustomNextButton className='swiper-button-next'>
        <Arrow.RightIcon />
      </CustomNextButton>
      {swiperSliders}
    </Swiper>
  );
}

export default Slider;
