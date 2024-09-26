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

export default function Home({ navbar, title, subtitle, ctaText, ctaLink, challengesTitle, challenges, solutionTitle, solutions, services, expertiseTitle, knowledgeItems, portfolioTitle, portfolioItems, footerData }) {  // Make sure footerData is passed here
  return (
    <>
      <Navbar navbar={navbar} />
      <Title title={title} subtitle={subtitle} ctaText={ctaText} ctaLink={ctaLink} />
      <ChallengesSection title={challengesTitle} challenges={challenges} />
      <SolutionSection title={solutionTitle} solutions={solutions} />
      <Services services={services} /> 
      <Expertise title={expertiseTitle} knowledgeItems={knowledgeItems} />
      <Portfolio title={portfolioTitle} portfolioItems={portfolioItems} />
      <Footer
        logo={footerData.logo}         // Pass the footer data correctly
        links={footerData.links}
        overview={footerData.overview}
        contact={footerData.contact}
        socialMedia={footerData.socialMedia}
      />
    </>
  );
}
export async function getStaticProps() {
  const homeFilePath = path.join(process.cwd(), 'content', 'home', 'index.md');
  const homeFileContent = fs.readFileSync(homeFilePath, 'utf8');
  const { data: homeData } = matter(homeFileContent);

  const challengesFilePath = path.join(process.cwd(), 'content', 'home', 'challenges.md');
  const challengesFileContent = fs.readFileSync(challengesFilePath, 'utf8');
  const { data: challengesData } = matter(challengesFileContent);

  const solutionFilePath = path.join(process.cwd(), 'content', 'home', 'solution.md');
  const solutionFileContent = fs.readFileSync(solutionFilePath, 'utf8');
  const { data: solutionData } = matter(solutionFileContent);

  const servicesFilePath = path.join(process.cwd(), 'content', 'home', 'services.md');
  const servicesFileContent = fs.readFileSync(servicesFilePath, 'utf8');
  const { data: servicesData } = matter(servicesFileContent);

  const expertiseFilePath = path.join(process.cwd(), 'content', 'home', 'expertise.md');
  const expertiseFileContent = fs.readFileSync(expertiseFilePath, 'utf8');
  const { data: expertiseData } = matter(expertiseFileContent);

  const portfolioFilePath = path.join(process.cwd(), 'content', 'home', 'portfolio.md');
  const portfolioFileContent = fs.readFileSync(portfolioFilePath, 'utf8');
  const { data: portfolioData } = matter(portfolioFileContent);

  const footerFilePath = path.join(process.cwd(), 'content', 'footer.md');
  const footerFileContent = fs.readFileSync(footerFilePath, 'utf8');
  const { data: footerData } = matter(footerFileContent);

  return {
    props: {
      navbar: homeData.navbar,
      title: homeData.title,
      subtitle: homeData.subtitle,
      ctaText: homeData.ctaText,
      ctaLink: homeData.ctaLink,
      challengesTitle: challengesData.title,
      challenges: challengesData.challenges,
      solutionTitle: solutionData.title,
      solutions: solutionData.solutions,
      services: servicesData.services,
      expertiseTitle: expertiseData.title,
      knowledgeItems: expertiseData.knowledgeItems,
      portfolioTitle: portfolioData.title,
      portfolioItems: portfolioData.portfolioItems,
      footerData,  // Pass the footer data here
    },
  };
}
