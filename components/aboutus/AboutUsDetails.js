import React from 'react';
import Image from 'next/image';
import styles from './AboutUsDetails.module.css';

const AboutUsDetails = ({ highlights }) => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.highlightsContainer}>
        {highlights.map((highlight, index) => (
          <div key={index} className={styles.highlight}>
            <Image
              src={highlight.image}
              alt={`Highlight ${index + 1}`}
              width={200}
              height={200}
              className={styles.image}
            />
            <p className={styles.highlightDescription}>{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsDetails;
