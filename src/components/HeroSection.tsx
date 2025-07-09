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
              <div className="w-72 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Learn Words App</h3>
                  <p className="text-gray-600 dark:text-gray-400">Available on mobile devices</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        

      </div>
    </section>
  );
};

export default HeroSection;
