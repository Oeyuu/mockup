import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesSection from '../components/services/ServiceSection';

export default function ServicesPage({ navbar, footer, title, services }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <ServicesSection title={title} services={services} />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const servicesFilePath = path.join(process.cwd(), 'content', 'services', 'services.md');
  const servicesFileContent = fs.readFileSync(servicesFilePath, 'utf8');
  const { data: servicesData } = matter(servicesFileContent);

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
      title: servicesData.title,
      services: servicesData.services,
    },
  };
}
