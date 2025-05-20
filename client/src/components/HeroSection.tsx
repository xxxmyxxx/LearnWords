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
              {/* A stylized mockup of the app showing a flash card interface */}
              {/* Removed animation */}
              <motion.div 
                className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-6 max-w-xs"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col space-y-1">
                    <span className="inline-block w-3 h-3 rounded-full bg-[#2ECC71]"></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-[#F1C40F]"></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-[#E74C3C]"></span>
                    <span className="inline-block w-3 h-3 rounded-full bg-[#4A90E2]"></span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Learn Words</div>
                </div>
                <div className="bg-primary bg-opacity-10 dark:bg-opacity-20 rounded-2xl p-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">Elma</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Biliyorsan sağa kaydır</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <motion.button 
                    className="bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </motion.button>
                  <motion.button 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    </svg>
                  </motion.button>
                  <motion.button 
                    className="bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Secondary decorative element */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-full w-16 h-16 flex items-center justify-center text-accent-foreground font-bold shadow-lg">
                <div className="text-center">
                  <div className="text-xs">Learn</div>
                  <div className="text-sm">32</div>
                  <div className="text-xs">Languages</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 text-center">
          <motion.div 
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-primary mb-1">32</div>
            <div className="text-gray-600 dark:text-gray-300">Languages</div>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-secondary mb-1">10k+</div>
            <div className="text-gray-600 dark:text-gray-300">Words</div>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="text-3xl font-bold text-accent mb-1">100k+</div>
            <div className="text-gray-600 dark:text-gray-300">Users</div>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="text-3xl font-bold text-red-500 mb-1">4.8</div>
            <div className="text-gray-600 dark:text-gray-300">App Rating</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
