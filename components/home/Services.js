import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = ({ services }) => {
  return (
    <section className="single-item-section">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="single-item-slide">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <h1 className="single-item-title">{service.title}</h1>
              <p className="single-item-description">{service.description}</p>
              <a href={service.buttonLink}>
                <button className="single-item-button">Mehr erfahren &gt;</button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
