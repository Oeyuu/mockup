import React from 'react';
import Image from 'next/image';
import styles from '../../styles/aboutus/ValuesSection.module.css';

const ValuesSection = ({ values }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{values.title}</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src={values.graphic}
            alt="Unsere Werte Grafik"
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
