import React from "react";
import ModalButton from "./BuildUp/Body/Body";
import Footer from "./BuildUp/Footer";
import HeroSection from "./BuildUp/HeroSection";
import { HeroBg } from "./BuildUp/HeroSection/HeroElement";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <HeroSection />
      <ModalButton />
      <Footer />
    </div>
  );
}

export default Home;
