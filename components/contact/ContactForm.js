import React from 'react';
import styles from '../../styles/contact/ContactForm.module.css';

const ContactForm = ({ contactForm }) => {
  return (
    <form className={styles.form}>
      <div className={styles.title}>{contactForm.formTitle}</div>
      <input
        type="email"
        placeholder={contactForm.emailPlaceholder}
        className={styles.input}
      />
      <textarea
        placeholder={contactForm.messagePlaceholder}
        className={styles.textarea}
      ></textarea>
      <button type="submit" className={styles.button}>
        {contactForm.buttonText}
      </button>
    </form>
  );
};

export default ContactForm;
