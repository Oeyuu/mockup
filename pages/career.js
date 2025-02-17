import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import CareerInfo from '../components/career/CareerInfo';
import Values from '../components/career/Values';

export default function CareerPage({ navbar, footer, title, description, image,careerInfo, values}) {
  return (
    <>
      <Navbar navbar={navbar} />
      <Title title={title} description={description} image={image} />
      <CareerInfo careerInfo={careerInfo} />
      <Values values={values} />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const careerFilePath = path.join(process.cwd(), 'content', 'career', 'career.md');
  const careerFileContent = fs.readFileSync(careerFilePath, 'utf8');
  const { data: careerData } = matter(careerFileContent);

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
      title: careerData.title,
      description: careerData.description,
      image: careerData.image,
      careerInfo: careerData.careerInfo,
      values: careerData.values,
    },
  };
}
