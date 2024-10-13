import React from 'react';
import Image from 'next/image';

const ServicesSection = ({ services }) => {
  return (
    <section className="services-section">

      {services.map((service, index) => (
        <div key={index} className={`service-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.buttonLink} className="service-button">
              Mehr erfahren &gt;
            </a>
          </div>
          <div className="service-image-wrapper">
            <Image 
              src={service.image} 
              alt={service.title} 
              layout="fill" 
              objectFit="cover" 
              className="service-image" 
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
