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
import MetaTags from "@/components/MetaTags";

const Home: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Learn Words - Master Vocabulary in 30+ Languages"
        description="Learn vocabulary efficiently with interactive flashcards, spaced repetition, and personalized learning. Support for 30+ languages including English, Spanish, French, German, and more."
        keywords="vocabulary learning, flashcards, language learning, spaced repetition, multilingual, education app"
        canonical="https://www.learnwords.store"
        language="en"
      />
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
    </>
  );
};

export default Home;
