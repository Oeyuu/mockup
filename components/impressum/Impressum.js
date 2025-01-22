import React from 'react';
import styles from '../../styles/impressum/Impressum.module.css';

const Impressum = ({ registration, court, number, vatId, headertext, subheader, text, subtext }) => {
  return (
    <div className={styles.impressum}>
      {headertext && <h2 className={styles.title}>{headertext}</h2>}
      {subheader && <h3 className={styles.subheader}>{subheader}</h3>}
      {text && <p>{text}</p>}
      {subtext && <p className={styles.subtext}>{subtext}</p>}
      <div className={styles.info}>
        {court && number && (
          <p>
            <strong>Handelsregister:</strong> {court}, {number}
          </p>
        )}
        {vatId && (
          <p>
            <strong>Umsatzsteuer-ID:</strong> {vatId}
          </p>
        )}
      </div>
    </div>
  );
};

export default Impressum;
