import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Info } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const HeroSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Learn <span className="text-primary">Languages</span> with Flash Cards
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
              Master vocabulary in 32 languages through interactive flash cards, competitions, and personalized learning paths.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => scrollToElement("download")}
              >
                <Download className="mr-2 h-4 w-4" /> Download Now
              </Button>
              <Button
                variant="outline"
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => scrollToElement("features")}
              >
                <Info className="mr-2 h-4 w-4" /> Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src={import.meta.env.BASE_URL + "attached_assets/front.png"} 
                alt="Learn Words App Screenshot" 
                className="rounded-2xl shadow-xl h-auto max-w-xs object-contain"
              />
            </div>
          </motion.div>
        </div>
        

      </div>
    </section>
  );
};

export default HeroSection;
