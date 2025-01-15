import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../styles/home/Services.module.css';

const Services = ({ services }) => {
  return (
    <section className={styles['single-item-section']}>
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
            <div className={styles['single-item-slide']}>
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <h1 className={styles['single-item-title']}>{service.title}</h1>
              <p className={styles['single-item-description']}>{service.description}</p>
              <a href={service.buttonLink}>
                <button className={styles['single-item-button']}>Mehr erfahren &gt;</button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
