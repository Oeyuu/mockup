import React from 'react';
import Image from 'next/image';

const ChallengesSection = ({ title, challenges }) => {
  return (
    <section className="challenges-section">
      <h2>{title}</h2>
      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <div className="challenge-header">
              <div className="challenge-icon">
                <Image src={challenge.icon} alt={challenge.title} width={100} height={100} />
              </div>
              <h3 className="challenge-title">{challenge.title}</h3>
            </div>
            <p className="challenge-description">{challenge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
