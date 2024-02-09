import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HeaderFO from '../components/HeaderF0';
// import NewsletterSection from '../components/NewsletterSection';
// import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/type/TeamSection';

function LandingPage() { 
  return (
    <>
      <HeaderFO />
      <HeroSection />
      {/* <ServicesSection /> */}
      <AboutSection />
      <TeamSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </>
  );
}

export default LandingPage;
