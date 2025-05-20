import React, { useState } from "react";
import { motion } from "framer-motion";
import { languages } from "@/data/languages";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Languages: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedLanguages = showAll ? languages : languages.slice(0, 20);

  return (
    <section id="languages" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            32 Languages Available
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn vocabulary in any of these languages with our comprehensive flash card collections.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {displayedLanguages.map((lang, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4 text-center hover:shadow-md transition"
              variants={item}
            >
              <div className="text-2xl mb-1">{lang.flag}</div>
              <div className="font-medium dark:text-white">{lang.name}</div>
            </motion.div>
          ))}
          
          {!showAll && (
            <motion.button
              className="col-span-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center hover:bg-gray-50 dark:hover:bg-slate-800 transition mt-2"
              onClick={() => setShowAll(true)}
              variants={item}
            >
              <span className="text-primary font-medium">Show 12 more languages</span>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;
