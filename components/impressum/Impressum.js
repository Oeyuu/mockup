import React from 'react';
import styles from '../../styles/impressum/Impressum.module.css';

const Impressum = ({ registration, vatId, content }) => {
  return (
    <div className={styles.impressum}>
      {content.map((block, index) => (
        <div key={index} className={styles.contentBlock}>
          {block.subheader && <h3 className={styles.subheader}>{block.subheader}</h3>}
          {block.text && <p className={styles.text}>{block.text}</p>}
        </div>
      ))}
      <div className={styles.info}>
        {registration.court && registration.number && (
          <p>
            <strong>Handelsregister:</strong> {registration.court}, {registration.number}
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
