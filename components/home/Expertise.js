import React, { useState } from 'react';
import Image from 'next/image';

const Expertise = ({ title, knowledgeItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedTerm, setSearchedTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchedTerm(searchTerm);
    }
  };

  return (
    <section className="knowledge-section">
      <h2>{title}</h2>
      <div className="knowledge-grid">
        {knowledgeItems.map((item, index) => (
          <div key={index} className="knowledge-card">
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={50}
              height={50}
              className="knowledge-icon"
            />
            <h3>{item.title}</h3>
            <a href="#expertise" className="knowledge-link">→</a>
          </div>
        ))}
      </div>

      <p className="search-hint">
        Suchst du nach einer bestimmten Programmiersprache oder einer Technologie? Du kannst hier nachschauen, ob wir diese Expertise mitbringen.
      </p>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Technologie suchen..."
          className="search-input"
        />
        <button type="submit" className="search-button">→</button>
      </form>

      {searchedTerm && (
        <div className="search-results">
          <h3>Ergebnisse für: "{searchedTerm}"</h3>
        </div>
      )}
    </section>
  );
};

export default Expertise;
