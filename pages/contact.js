import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import ContactCard from '../components/contact/ContactCard';
import ContactForm from '../components/contact/ContactForm';
import styles from '../styles/contact/ContactCard.module.css';

export default function ContactPage({ navbar, footer, title, description, image, contactForm, contactInfo }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <Title title={title} description={description} image={image} />
      <div className={styles.contactContainer}>
        <ContactCard contactInfo={contactInfo} />
        <ContactForm contactForm={contactForm} />
      </div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const contactFilePath = path.join(process.cwd(), 'content', 'contact', 'contact.md');
  const contactFileContent = fs.readFileSync(contactFilePath, 'utf8');
  const { data: contactData } = matter(contactFileContent);

  const navbarFilePath = path.join(process.cwd(), 'content', 'navbar.md');
  const navbarFileContent = fs.readFileSync(navbarFilePath, 'utf8');
  const { data: navbarData } = matter(navbarFileContent);

  const footerFilePath = path.join(process.cwd(), 'content', 'footer.md');
  const footerFileContent = fs.readFileSync(footerFilePath, 'utf8');
  const { data: footerData } = matter(footerFileContent);

  return {
    props: {
      navbar: navbarData.navbar,
      footer: footerData.footer,
      title: contactData.title,
      description: contactData.description,
      image: contactData.image,
      contactForm: contactData.contactForm,
      contactInfo: contactData.contactInfo,
    },
  };
}
