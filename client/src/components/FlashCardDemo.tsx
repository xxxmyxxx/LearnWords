import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MoveUp, X, Check } from "lucide-react";
import { flashCards } from "@/data/flashCards";

const FlashCardDemo: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const currentCard = flashCards[currentCardIndex];

  const nextCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowTranslation(false);
      setCurrentCardIndex((prev) => (prev + 1) % flashCards.length);
      setIsFlipping(false);
    }, 300);
  };

  const handleDontKnow = () => {
    setDirection('left');
    nextCard();
  };

  const handleKnow = () => {
    setDirection('right');
    nextCard();
  };

  const handleShowAnswer = () => {
    setShowTranslation(!showTranslation);
  };

  const handleAudio = () => {
    // Simulate audio playback
    const audio = document.getElementById('card-audio-element') as HTMLElement;
    if (audio) {
      audio.classList.add('text-primary');
      setTimeout(() => {
        audio.classList.remove('text-primary');
      }, 1000);
    }
  };

  const slideVariants = {
    enter: (direction: 'left' | 'right') => {
      return {
        x: direction === 'left' ? -300 : 300,
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => {
      return {
        x: direction === 'left' ? 300 : -300,
        opacity: 0
      };
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interactive Learning
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Swipe-based flash cards make learning vocabulary intuitive and efficient in any language.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Flash Card Demo */}
          <div className="flash-card-container w-full max-w-sm">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentCardIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden h-full"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{currentCard.language}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{currentCard.level}</span>
                  </div>
                  <div className="text-center py-8">
                    <h3 className="text-3xl font-bold mb-3 font-poppins">{currentCard.word}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm italic mb-6">{currentCard.hint}</p>
                    <AnimatePresence>
                      {showTranslation && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-xl text-primary mb-4"
                        >
                          {currentCard.translation}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button 
                      onClick={handleShowAnswer} 
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button 
                      id="card-audio-element"
                      onClick={handleAudio} 
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <MoveUp className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-slate-700 p-4 flex justify-between">
                  <motion.button 
                    onClick={handleDontKnow}
                    className="w-12 h-12 bg-red-100 dark:bg-red-900 text-red-500 dark:text-red-300 rounded-full flex items-center justify-center hover:bg-red-200 dark:hover:bg-red-800 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                  <motion.button 
                    onClick={handleKnow}
                    className="w-12 h-12 bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300 rounded-full flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800 transition"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Explanation text */}
          <div className="w-full max-w-sm md:max-w-md">
            <h3 className="text-xl font-semibold mb-4 font-poppins">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">View the word</h4>
                  <p className="text-gray-600 dark:text-gray-300">Each flash card shows a word in your target language</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Reveal if needed</h4>
                  <p className="text-gray-600 dark:text-gray-300">Tap the eye icon to see the translation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Mark your knowledge</h4>
                  <p className="text-gray-600 dark:text-gray-300">Swipe right if you know it, left if you don't</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Track your progress</h4>
                  <p className="text-gray-600 dark:text-gray-300">Words you know will appear less frequently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashCardDemo;
