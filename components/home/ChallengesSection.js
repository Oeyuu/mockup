import React from 'react';
import Image from 'next/image';
import styles from '../../styles/home/ChallengesSection.module.css';

const ChallengesSection = ({ title, challenges }) => {
  return (
    <section className={styles['challenges-section']}>
      <h2 className={styles['section-title']}>{title}</h2>
      <div className={styles['challenges-grid']}>
        {challenges.map((challenge, index) => (
          <div key={index} className={styles['challenge-card']}>
            <div className={styles['challenge-header']}>
              <div className={styles['challenge-icon']}>
                <Image src={challenge.icon} alt={challenge.title} width={100} height={100} />
              </div>
              <h3 className={styles['challenge-title']}>{challenge.title}</h3>
            </div>
            <p className={styles['challenge-description']}>{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
