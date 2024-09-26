import React from 'react';
import Image from 'next/image';

const SolutionSection = ({ title, solutions }) => {
  return (
    <section className="solution-section">
      <h2>{title}</h2>

      {solutions.map((solution, index) => (
        <div key={index} className={`solution-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
          <Image 
            src={solution.image} 
            alt={solution.title} 
            width={350} 
            height={250} 
            className="solution-image" 
          />
          <div className="solution-content">
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              {solution.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SolutionSection;
