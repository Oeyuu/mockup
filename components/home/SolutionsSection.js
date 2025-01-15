import React from 'react';
import Image from 'next/image';
import styles from '../../styles/home/SolutionsSection.module.css'; 

const SolutionSection = ({ title, solutions }) => {
  return (
    <section className={styles['solution-section']}>
      <h2>{title}</h2>

      {solutions.map((solution, index) => (
        <div
          key={index}
          className={`${styles['solution-item']} ${
            index % 2 !== 0 ? styles.reverse : ''
          }`}
        >
          <Image 
            src={solution.image} 
            alt={solution.title} 
            width={350} 
            height={250} 
            className={styles['solution-image']} 
          />
          <div className={styles['solution-content']}>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              {solution.points.map((pointObj, i) => (
                <li key={i}>{pointObj.point}</li> 
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SolutionSection;
