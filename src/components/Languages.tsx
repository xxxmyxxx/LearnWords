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
  const [showAllMobile, setShowAllMobile] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const mobileLimit = 8;
  const displayedLanguages = isMobile && !showAllMobile ? languages.slice(0, mobileLimit) : languages;

  return (
    <section id="languages" className="py-16 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Learn in 32 Languages
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn vocabulary in a wide range of languages from popular world languages to regional dialects.
          </motion.p>
        </div>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {displayedLanguages.map((lang, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col items-center"
              variants={item}
            >
              <span 
                className="text-2xl mb-2"
                role="img"
                aria-label={`${lang.name} flag`}
              >
                {lang.flag}
              </span>
              <span className="font-medium dark:text-gray-200 text-center text-sm">{lang.name}</span>
            </motion.div>
          ))}
        </motion.div>
        {/* Mobilde daha fazlası için buton */}
        <div className="sm:hidden flex justify-center mt-6">
          {!showAllMobile && languages.length > mobileLimit && (
            <button
              className="bg-primary text-white rounded-lg px-6 py-2 text-center hover:bg-primary/90 transition font-medium"
              onClick={() => setShowAllMobile(true)}
            >
              Daha fazlası için tıklayın
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Languages;
