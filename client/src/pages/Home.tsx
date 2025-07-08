import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Languages from "@/components/Languages";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Legal from "@/components/Legal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Languages />
        <Testimonials />
        <Download />
        <Legal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
