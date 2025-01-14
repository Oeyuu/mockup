import React from 'react';
import Image from 'next/image';

const AboutUsDetails = ({ highlights }) => {
  return (
    <section className="about-us">
      <div className="highlights-container">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight">
            <Image
              src={highlight.image}
              alt={`Highlight ${index + 1}`}
              width={200}
              height={200}
              className="highlight-image"
            />
            <p className="highlight-description">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsDetails;
