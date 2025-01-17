import React from 'react';
import Image from 'next/image';
import styles from '../../styles/aboutus/ValuesSection.module.css';

const ValuesSection = ({ values }) => {
  return (
    <section className={styles['values-section']}>
      <h2 className={styles['section-title']}>{values.title}</h2>
      <div className={styles['values-content']}>
        <div className={styles['values-graphic']}>
          <Image
            src={values.graphic}
            alt="Unsere Werte Grafik"
            width={400}
            height={400}
            className={styles['graphic-image']}
          />
        </div>
        <div className={styles['values-text']}>
          <p>{values.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
