import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/home/Title';
import ChallengesSection from '../components/home/ChallengesSection';
import SolutionSection from '../components/home/SolutionsSection';
import Services from '../components/home/Services';
import Expertise from '../components/home/Expertise';
import Portfolio from '../components/home/Portfolio';

export default function Home({ navbar, footer, title, subtitle, ctaText, ctaLink, challengesTitle, challenges, solutionsTitle, solutions, servicesTitle, services, expertiseTitle, knowledgeItems, portfolioTitle, portfolioItems }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <Title title={title} subtitle={subtitle} ctaText={ctaText} ctaLink={ctaLink} />
      <ChallengesSection title={challengesTitle} challenges={challenges} />
      <SolutionSection title={solutionsTitle} solutions={solutions} />
      <Services title={servicesTitle} services={services} /> 
      <Expertise title={expertiseTitle} knowledgeItems={knowledgeItems} />
      <Portfolio title={portfolioTitle} portfolioItems={portfolioItems} />
      <Footer footer={footer} />
    </>
  );
}
export async function getStaticProps() {
  const homeFilePath = path.join(process.cwd(), 'content', 'home', 'index.md');
  const homeFileContent = fs.readFileSync(homeFilePath, 'utf8');
  const { data: homeData } = matter(homeFileContent);

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
      title: homeData.title || "Default Title", // Fallback falls undefined
      subtitle: homeData.subtitle || "Default Subtitle",
      ctaText: homeData.ctaText || "Default CTA Text",
      ctaLink: homeData.ctaLink || "/default-link",
      challengesTitle: homeData.challengesTitle || "Challenges", // Fallback-Wert für challengesTitle
      challenges: homeData.challenges || [], // Sicherstellen, dass challenges nicht undefined ist
      solutionsTitle: homeData.solutionsTitle || "Solutions",
      solutions: homeData.solutions || [],
      servicesTitle: homeData.servicesTitle || "Services",
      services: homeData.services || [],
      expertiseTitle: homeData.expertiseTitle || "Expertise",
      knowledgeItems: homeData.knowledgeItems || [],
      portfolioTitle: homeData.portfolioTitle || "Portfolio",
      portfolioItems: homeData.portfolioItems || [],
    },
  };
}