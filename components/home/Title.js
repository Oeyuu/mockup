import React from 'react';

const Title = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <a href={ctaLink}>
        <button className="cta-button">{ctaText}</button>
      </a>
    </section>
  );
};

export default Title;
