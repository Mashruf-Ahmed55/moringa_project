// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import { sliderImg } from '@/constants';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export const IamgeSwaiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto group">
      {/* Custom Prev Button */}
      <div
        className={`swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-2 z-10 p-2 rounded-full bg-black/60 text-white transition-all duration-300 cursor-pointer hidden group-hover:flex ${
          activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <FaArrowLeft />
      </div>

      {/* Custom Next Button */}
      <div className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-2 z-10 p-2 rounded-full bg-black/60 text-white transition-all duration-300 cursor-pointer hidden group-hover:flex">
        <FaArrowRight />
      </div>

      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          swiper.on('slideChange', () => {
            setActiveIndex(swiper.realIndex);
          });
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        modules={[Navigation]}
        className="mySwiper rounded-lg overflow-hidden"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-200 h-48 flex items-center justify-center font-bold text-xl">
              Slide {i + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const MobileImageSawiper = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      {sliderImg.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="w-96 h-[600px] md:h-[600px] overflow-hidden flex justify-center items-center">
            <img
              src={item.src}
              alt={item.alt}
              className="object-contain rounded-2xl"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
