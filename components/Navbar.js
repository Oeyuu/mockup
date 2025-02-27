import { useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ navbar }) => {
  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = document.querySelector(`.${styles.navbar}`);
      const linksElement = document.querySelector(`.${styles.links}`);
      const contact_buttonElement = document.querySelector(`.${styles.contact_button}`);
      if (window.scrollY > 50) {

        navbarElement.classList.add(styles.scrolled);
        linksElement.classList.add(styles.scrolled);
        contact_buttonElement.classList.add(styles.scrolled);
      } else {
        navbarElement.classList.remove(styles.scrolled);
        linksElement.classList.remove(styles.scrolled);
        contact_buttonElement.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/img/teclify-logo.png" alt="Teclify Logo" />
        </a>
      </div>
      <ul className={styles.links}>
        {navbar.links.map((link, index) => (
          <li key={index} className={styles.link_item}>
            <a href={link.href}>
              {link.name}
              {link.dropdown && <span className="dropdown-icon">▼</span>}
            </a>
            {link.dropdown && (
              <ul className={styles.dropdown}>
                {link.dropdown.map((item, i) => (
                  <li key={i}>
                    <a href={item.href}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <a href={navbar.contactButton.href}>
        <button className={styles.contact_button}>
          {navbar.contactButton.label}
        </button>
      </a>
    </nav>
  );
};

export default Navbar;