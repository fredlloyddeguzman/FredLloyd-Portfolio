import { Star } from "lucide-react";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMe } from "../Components/AboutMe";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";
import { Contact } from "../Components/Contact";
import { ToasterProvider } from "../Components/ui/Toaster";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <>
    <ToasterProvider />
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
     
      {/*Theme Toggle*/}
      <ThemeToggle />
      {/*bg eect*/}
      <StarBackground />
      {/*Navbar*/}
        <Navbar />
      {/*Main Content*/}
        <HeroSection/>
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <Contact />
      {/*Footer*/}
      <Footer />

    </div>
    </>
  );
}