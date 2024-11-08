import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import OurProjects from "./components/OurProjects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

// Scroll-to-top function
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

function App() {
  return (
    <div className="font-sans">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/ourProjects" element={<OurProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <Services />
      <AboutUs />
      <Projects />
    </main>
  );
}

export default App;
