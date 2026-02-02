import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import CertificationsSection from "./sections/CertificationsSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <ExperienceSection />
      <CertificationsSection />
      <TechStack />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};
export default App;
