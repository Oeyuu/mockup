import React from 'react';
import Image from 'next/image';

const AboutUsDetails = ({ highlightDescription, highlights }) => {
  return (
    <section className="about-us">
      <p className="highlight-description">{highlightDescription}</p>

      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight">
            {/* Bild */}
            <div className="highlight-image-container">
              <Image
                src={highlight.image}
                alt={`Highlight ${index + 1}`}
                width={100}
                height={100}
                className="highlight-image"
              />
            </div>
            {/* Text */}
            <div className="highlight-description-container">
              <p className="highlight-description">{highlight['image-description']}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsDetails;
