import React from 'react';
import Image from 'next/image';

const TitleSection = ({ title, description, image }) => {
  return (
    <section className="title-section">
      <div className="title-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="title-image">
        <Image src={image} alt={title} layout="responsive" width={600} height={400} />
      </div>
    </section>
  );
};

export default TitleSection;
