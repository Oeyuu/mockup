import React, { useState } from 'react';
import styles from '../../styles/contact/ContactForm.module.css';

const ContactForm = ({ contactForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          receiverEmail: contactForm.receiverEmail, // Empfänger aus Markdown
        }),
      });
      if (response.ok) {
        alert('Ihre Nachricht wurde erfolgreich gesendet!');
        setFormData({ email: '', phone: '', message: '' });
      } else {
        alert('Fehler beim Senden der Nachricht.');
      }
    } catch (error) {
      console.error('Fehler:', error);
      alert('Es gab ein Problem beim Senden der Nachricht.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.title}>{contactForm.formTitle}</div>
      <input
        type="email"
        name="email"
        placeholder={contactForm.emailPlaceholder}
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder={contactForm.phonePlaceholder}
        value={formData.phone}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <textarea
        name="message"
        placeholder={contactForm.messagePlaceholder}
        value={formData.message}
        onChange={handleChange}
        className={styles.textarea}
        required
      ></textarea>
      <button type="submit" className={styles.button}>
        {contactForm.buttonText}
      </button>
    </form>
  );
};

export default ContactForm;
