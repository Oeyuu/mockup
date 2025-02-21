import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../../styles/home/Portfolio.module.css'; 

const Portfolio = ({ title, portfolioItems }) => {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles['h2']}>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles['portfolio-item']}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className={styles['portfolio-image']}
                style={{ borderRadius: '15px' }}
              />
              <div className={styles['portfolio-content']}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
