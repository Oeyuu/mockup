import React from 'react';
import Image from 'next/image';

const Footer = ({ logo, links, overview, contact, socialMedia }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Image src={logo} alt="Teclify Logo" width={150} height={50} />
          <div className="footer-section">
            <ul>
              <li><a href={links.impressum}>Impressum</a></li>
              <li><a href={links.datenschutz}>Datenschutz</a></li>
            </ul> 
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Übersicht</h4>
            <ul>
              {overview.map((item, index) => (
                <li key={index}><a href={item.link}>{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              {contact.map((item, index) => (
                <li key={index}><a href={item.link}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Folge uns</h4>
            <ul className="social-media">
              {socialMedia.map((item, index) => (
                <li key={index}><a href={item.link}>{item.platform}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Teclify. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
