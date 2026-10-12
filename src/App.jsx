import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Portfolio from "./components/Portfolio.jsx";
import ImageModal from "./components/ImageModal.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";

export default function App() {
  // The artwork currently open in the modal (null = closed)
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Portfolio onSelect={setSelectedArt} />
      <ImageModal art={selectedArt} onClose={() => setSelectedArt(null)} />
      <CTA />
      <Footer />
      <FloatingButtons />
    </>
  );
}
