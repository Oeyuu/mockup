import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeTitle from '../components/home/HomeTitle';
import ChallengesSection from '../components/home/ChallengesSection';
import SolutionSection from '../components/home/SolutionsSection';
import Tools from '../components/services/Tools';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';

export default function Home({ navbar, footer, title, subtitle, ctaText, ctaLink, challengesTitle, challenges, solutionsTitle, solutions, servicesTitle, services, portfolioTitle, portfolioItems, category,tools }) {
  return (
    <>
      <Navbar navbar={navbar} />
      <HomeTitle title={title} subtitle={subtitle} ctaText={ctaText} ctaLink={ctaLink} />
      <ChallengesSection title={challengesTitle} challenges={challenges} />
      <SolutionSection title={solutionsTitle} solutions={solutions} />
      <Services title={servicesTitle} services={services} /> 
      <Tools category={category} tools={tools} />
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
      title: homeData.title || "Default Title",
      subtitle: homeData.subtitle || "Default Subtitle",
      ctaText: homeData.ctaText || "Default CTA Text",
      ctaLink: homeData.ctaLink || "/default-link",
      challengesTitle: homeData.challengesTitle || "Challenges", 
      challenges: homeData.challenges || [],
      solutionsTitle: homeData.solutionsTitle || "Solutions",
      solutions: homeData.solutions || [],
      servicesTitle: homeData.servicesTitle || "Services",
      services: homeData.services || [],
      portfolioTitle: homeData.portfolioTitle || "Portfolio",
      portfolioItems: homeData.portfolioItems || [],
      category: homeData.category,
      tools: homeData.tools,
    },
  };
}