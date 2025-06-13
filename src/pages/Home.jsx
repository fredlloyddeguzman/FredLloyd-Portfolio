import { Star } from "lucide-react";
import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMe } from "../Components/AboutMe";

export const Home = () => {
  return (
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
      {/*Footer*/}

    </div>
  );
}