import React, { useEffect, useState } from 'react';
import { FaCity, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const FactsAndFigures = ({ facts }) => {
  const icons = {
    city: <FaCity size={50} />,
    calendar: <FaCalendarAlt size={50} />,
    "check-circle": <FaCheckCircle size={50} />,
  };

  const [currentValues, setCurrentValues] = useState(facts.map(() => 0));

  useEffect(() => {
    const intervals = facts.map((fact, index) => {
      if (fact.value) {
        const increment = fact.value / 100; // Geschwindigkeit der Animation
        return setInterval(() => {
          setCurrentValues((prev) =>
            prev.map((val, i) => (i === index && val < fact.value ? val + increment : val))
          );
        }, 20); // Zeitintervall
      }
      return null;
    });

    return () => intervals.forEach((interval) => interval && clearInterval(interval));
  }, [facts]);

  return (
    <section className="facts-and-figures">
      <div className="facts-container">
        {facts.map((fact, index) => (
          <div key={index} className="fact">
            <div className="icon">{icons[fact.icon]}</div>
            <h3 className="fact-title">{fact.title}</h3>
            {fact.value ? (
              <p className="fact-value">
                {Math.min(currentValues[index], fact.value).toFixed(0)}
                {fact.suffix}
              </p>
            ) : (
              <p className="fact-description">{fact.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FactsAndFigures;
