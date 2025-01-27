import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import ContactCard from '../components/contact/ContactCard';
import Impressum from '../components/impressum/Impressum';
import styles from '../styles/impressum/Impressum.module.css';

export default function impressumPage({ navbar, footer, title, description, image,contactInfo, impressum
 }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <Title title={title} description={description} image={image} />
      <div className={styles.impressumContainer}>
        <ContactCard contactInfo={contactInfo} />
       
        <Impressum {...impressum} />
      </div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const impressumFilePath = path.join(process.cwd(), 'content', 'impressum', 'impressum.md');
  const impressumFileContent = fs.readFileSync(impressumFilePath, 'utf8');
  const { data: impressumData } = matter(impressumFileContent);

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
      title: impressumData.title,
      description: impressumData.description,
      image: impressumData.image,
      contactInfo: impressumData.contactInfo,
      impressum: impressumData.impressum,
    },
  };
}
