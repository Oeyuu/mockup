import React from 'react';
import Image from 'next/image';
import styles from '../../styles/services/ServicesSection.module.css';

const ServicesSection = ({ services }) => {
  return (
    <section className={styles['services-section']}>
      {services.map((service, index) => (
        <div
          key={index}
          className={`${styles['service-item']} ${
            index % 2 !== 0 ? styles.reverse : ''
          }`}
        >
          <div className={styles['service-content']}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.buttonLink} className={styles['service-button']}>
              Mehr erfahren &gt;
            </a>
          </div>
          <div className={styles['service-image-wrapper']}>
            <Image
              src={service.image}
              alt={service.title}
              layout="fill"
              objectFit="cover"
              className={styles['service-image']}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
