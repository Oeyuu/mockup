import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import AboutUsDetails from '../components/aboutus/AboutUsDetails';

export default function AboutUsPage({ navbar, footer, title, description, image, highlightDescription, highlights }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <Title title={title} description={description} image={image} />
      <AboutUsDetails highlightDescription={highlightDescription} highlights={highlights} />
      <div className="divider"></div>
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  // AboutUs-Daten laden
  const aboutUsFilePath = path.join(process.cwd(), 'content', 'aboutus', 'aboutus.md');
  const aboutUsFileContent = fs.readFileSync(aboutUsFilePath, 'utf8');
  const { data: aboutUsData } = matter(aboutUsFileContent);

  // Navbar-Daten laden
  const navbarFilePath = path.join(process.cwd(), 'content', 'navbar.md');
  const navbarFileContent = fs.readFileSync(navbarFilePath, 'utf8');
  const { data: navbarData } = matter(navbarFileContent);

  // Footer-Daten laden
  const footerFilePath = path.join(process.cwd(), 'content', 'footer.md');
  const footerFileContent = fs.readFileSync(footerFilePath, 'utf8');
  const { data: footerData } = matter(footerFileContent);

  return {
    props: {
      navbar: navbarData.navbar,
      footer: footerData.footer,
      title: aboutUsData.title,
      description: aboutUsData.description,
      image: aboutUsData.image,
      highlightDescription: aboutUsData['highlight-description'], // highlight-description extrahieren
      highlights: aboutUsData.highlights,
    },
  };
}
