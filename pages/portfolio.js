import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import PortfolioSection from '../components/portfolio/PortfolioSection';
import ServicesListing from '../components/portfolio/ServicesListing';
import Tools from '../components/services/Tools';
import References from '../components/portfolio/References';

export default function PortfolioPage({ navbar, footer, title, description,image, portfolioSection, services, category, tools, references }) {

  return (
    <>
      <Navbar navbar={navbar} />
      <Title title={title} description={description} image={image} />
      <PortfolioSection portfolioSection={portfolioSection} />
      <ServicesListing services={services} />
      <Tools category={category} tools={tools} />
      <References references={references} />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const portfolioFilePath = path.join(process.cwd(), 'content', 'portfolio', 'portfolio.md');
  const portfolioFileContent = fs.readFileSync(portfolioFilePath, 'utf8');
  const { data: portfolioData } = matter(portfolioFileContent);

  const servicesFilePath = path.join(process.cwd(), 'content', 'services', 'services.md');
  const servicesFileContent = fs.readFileSync(servicesFilePath, 'utf8');
  const { data: serviceData } = matter(servicesFileContent);

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
      title: portfolioData.title,
      description: portfolioData.description,
      image: portfolioData.image,
      portfolioSection: portfolioData.portfolioSection,
      services: serviceData.services,
      category: portfolioData.category,
      tools: portfolioData.tools,
      references: portfolioData.references,
    },
  };
}
