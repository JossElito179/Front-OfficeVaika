import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { useContext } from 'react';
import HeroSection from '../components/HeroSection';
import HeaderFO from '../components/HeaderF0';
import { ThemeProvider } from 'styled-components';
import ThemeContext from '../contexts/ThemeContext';
// import  axios  from "axios";
// import NewsletterSection from '../components/NewsletterSection';
// import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/type/TeamSection';
import GlobalStyles from '../styles/GlobalStyles';

function LandingPage() { 

  const { theme } = useContext(ThemeContext);
  
  return (
    <>
    <ThemeProvider theme={{ theme }}>
    <GlobalStyles />
      <HeaderFO />
      <HeroSection />
      {/* <ServicesSection /> */}
      <AboutSection />
      <TeamSection />
      {/* <NewsletterSection /> */}
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default LandingPage;
