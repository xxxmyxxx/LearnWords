import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Volume2, Save, RefreshCw, X, Check, ChevronUp, ChevronDown } from "lucide-react";
import { 
  availableCardSets, 
  englishTurkishCards, 
  FlashCard 
} from "@/data/flashCards";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FlashCardDemo: React.FC = () => {
  const [selectedLanguagePair, setSelectedLanguagePair] = useState<string>("English-Türkçe");
  const [currentCards, setCurrentCards] = useState<FlashCard[]>(englishTurkishCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);
  const [showSheet, setShowSheet] = useState(false);
  const [sheetMode, setSheetMode] = useState<"save" | "category">("category");
  const [stackPosition, setStackPosition] = useState([0, -5, -10]); // Position of cards in the stack
  
  const audioRef = useRef<HTMLDivElement>(null);

  // Reset card index when language changes
  useEffect(() => {
    const cards = availableCardSets[selectedLanguagePair as keyof typeof availableCardSets];
    if (cards) {
      setCurrentCards(cards);
      setCurrentCardIndex(0);
    }
  }, [selectedLanguagePair]);

  // Current card from the selected deck
  const currentCard = currentCards[currentCardIndex];
  
  // Card flip toggle
  const handleCardClick = () => {
    setFlipped(!flipped);
  };
  
  // Play audio for the word
  const handlePlayAudio = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent flipping card
    // Simulate audio playback
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.classList.add('text-primary');
      setTimeout(() => {
        audioElement.classList.remove('text-primary');
      }, 1000);
    }
  };
  
  // Save to personal collection
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent flipping card
    setSheetMode("save");
    setShowSheet(true);
  };
  
  // Process swipe in different directions
  const handleSwipeAction = (direction: string) => {
    setSwipeDirection(direction);
    
    // Wait for animation to complete before changing card
    setTimeout(() => {
      // Move to next card
      setCurrentCardIndex((prev) => (prev + 1) % currentCards.length);
      // Reset for next card
      setSwipeDirection(null);
      setFlipped(false);
    }, 300);
  };
  
  // Swipe handlers 
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipeAction("left"),
    onSwipedRight: () => handleSwipeAction("right"),
    onSwipedUp: () => handleSwipeAction("up"),
    onSwipedDown: () => {
      handleSwipeAction("down");
      // Open bottom sheet on down swipe
      setTimeout(() => {
        setSheetMode("category");
        setShowSheet(true);
      }, 300);
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });
  
  // Animation variants based on swipe direction
  const cardVariants = {
    initial: { 
      scale: 1, 
      x: 0, 
      y: 0, 
      rotateY: flipped ? 180 : 0,
      zIndex: 10
    },
    flipped: { 
      scale: 1, 
      x: 0, 
      y: 0, 
      rotateY: flipped ? 180 : 0,
      zIndex: 10
    },
    leftExit: { 
      x: -300, 
      opacity: 0, 
      rotateZ: -10,
      transition: { duration: 0.3 } 
    },
    rightExit: { 
      x: 300, 
      opacity: 0, 
      rotateZ: 10,
      transition: { duration: 0.3 } 
    },
    upExit: { 
      y: -300, 
      opacity: 0,
      transition: { duration: 0.3 } 
    },
    downExit: { 
      y: 300, 
      opacity: 0,
      transition: { duration: 0.3 } 
    }
  };
  
  const getCardVariant = () => {
    if (swipeDirection === "left") return "leftExit";
    if (swipeDirection === "right") return "rightExit";
    if (swipeDirection === "up") return "upExit";
    if (swipeDirection === "down") return "downExit";
    return flipped ? "flipped" : "initial";
  };
  
  // Status indicators based on swipe direction
  const renderStatusIndicator = () => {
    if (swipeDirection === "left") {
      return (
        <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded-full">
          <X className="h-6 w-6" />
        </div>
      );
    } else if (swipeDirection === "right") {
      return (
        <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
          <Check className="h-6 w-6" />
        </div>
      );
    } else if (swipeDirection === "up") {
      return (
        <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
          <Save className="h-6 w-6" />
        </div>
      );
    } else if (swipeDirection === "down") {
      return (
        <div className="absolute bottom-4 left-4 bg-yellow-500 text-white p-2 rounded-full">
          <RefreshCw className="h-6 w-6" />
        </div>
      );
    }
    return null;
  };

  // Display stack of cards (main and background cards)
  const renderCardStack = () => {
    return (
      <div className="relative h-[450px] w-full max-w-[280px] mx-auto">
        {/* Background Cards (Stacked) */}
        {[1, 2].map((_, index) => (
          <div 
            key={`bg-card-${index}`}
            className="absolute top-0 left-0 right-0 mx-auto rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-gray-700"
            style={{
              zIndex: 1 - index,
              transform: `translateY(${stackPosition[index + 1]}px) scale(${1 - (index * 0.05)})`,
              opacity: 0.7 - (index * 0.2),
              height: '450px',
              width: '280px'
            }}
          />
        ))}
        
        {/* Main Card (Interactive) */}
        <motion.div
          {...swipeHandlers}
          className="absolute top-0 left-0 right-0 mx-auto w-[280px] h-[450px] bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden perspective-1000 cursor-pointer"
          animate={getCardVariant()}
          variants={cardVariants}
          transition={{ 
            rotateY: { duration: 0.5 },
            default: { duration: 0.3 }
          }}
          onClick={handleCardClick}
          style={{ 
            transformStyle: "preserve-3d",
          }}
        >
          {/* Card Front */}
          <motion.div 
            className={`absolute w-full h-full p-6 flex flex-col ${flipped ? "backface-hidden" : ""}`}
            style={{ 
              zIndex: flipped ? 0 : 1,
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">{currentCard.language.target}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{currentCard.level}</span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold mb-2 font-poppins">{currentCard.word}</h3>
              <div className="flex items-center justify-center mb-8">
                <div 
                  ref={audioRef}
                  onClick={handlePlayAudio}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary transition cursor-pointer"
                >
                  <Volume2 className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full h-1 bg-yellow-400 mb-5 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 px-4">{currentCard.hint.target}</p>
            </div>
          </motion.div>
          
          {/* Card Back */}
          <motion.div 
            className={`absolute w-full h-full p-6 flex flex-col ${flipped ? "" : "backface-hidden"}`}
            style={{ 
              transform: "rotateY(180deg)",
              zIndex: flipped ? 1 : 0,
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">{currentCard.language.target}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{currentCard.level}</span>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold mb-1 font-poppins">{currentCard.word}</h3>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-3">{currentCard.translationNative}</p>
              <div className="flex items-center justify-center mb-8">
                <div 
                  onClick={handlePlayAudio}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary transition cursor-pointer"
                >
                  <Volume2 className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full h-1 bg-yellow-400 mb-5 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 mb-2 px-4">{currentCard.hint.target}</p>
              <p className="text-gray-500 dark:text-gray-400 italic px-4">{currentCard.hint.native}</p>
            </div>
          </motion.div>
          
          {renderStatusIndicator()}
        </motion.div>
      </div>
    );
  };
  
  // Bottom sheet for categories
  const renderBottomSheet = () => {
    return (
      <Sheet open={showSheet} onOpenChange={setShowSheet}>
        <SheetContent side="bottom" className="rounded-t-xl max-h-[60vh]">
          <SheetHeader>
            <SheetTitle className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-full mr-2">
                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
              </div>
              Kategori Seçin
            </SheetTitle>
          </SheetHeader>
          
          <div className="mt-6">
            <p className="text-center text-gray-600 mb-4">
              "{currentCard.word}" kelimesini eklemek istediğiniz kategoriyi seçin
            </p>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" onClick={() => setShowSheet(false)}>
                <div className="p-1.5 bg-amber-100 rounded-full mr-2">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"></path>
                  </svg>
                </div>
                Yeni Kategori Ekle
              </Button>
              
              <Button variant="outline" className="w-full justify-between" onClick={() => setShowSheet(false)}>
                <div className="flex items-center">
                  <div className="p-1.5 bg-amber-100 rounded-full mr-2">
                    <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                    </svg>
                  </div>
                  Günlük Konuşma
                </div>
                <span className="text-sm text-gray-500">4 kelime</span>
                <ChevronUp className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
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
            Etkileşimli Öğrenme
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Kaydırmalı flash kartlar, herhangi bir dilde kelime dağarcığını öğrenmeyi sezgisel ve verimli hale getirir.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Language selector */}
          <div className="w-full max-w-xs mb-6 md:mb-0">
            <Select 
              value={selectedLanguagePair}
              onValueChange={setSelectedLanguagePair}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Dil Seçin" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(availableCardSets).map((langPair) => (
                  <SelectItem key={langPair} value={langPair}>
                    {langPair}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Card Stack */}
          <div className="w-full flex justify-center">
            {renderCardStack()}
            {renderBottomSheet()}
          </div>
          
          {/* Instructions */}
          <div className="w-full max-w-sm md:max-w-md">
            <h3 className="text-xl font-semibold mb-4 font-poppins">Nasıl Çalışır?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Kartı Görüntüle</h4>
                  <p className="text-gray-600 dark:text-gray-300">Kelimeyi görmek için karta dokunun</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Çeviri için Çevir</h4>
                  <p className="text-gray-600 dark:text-gray-300">Çeviriyi görmek için karta tıklayın</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Kaydırarak İşaretle</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="text-green-500 font-medium">Sağa</span>: Biliyorum, 
                    <span className="text-red-500 font-medium"> Sola</span>: Bilmiyorum,<br/>
                    <span className="text-blue-500 font-medium">Yukarı</span>: Kaydet, 
                    <span className="text-yellow-500 font-medium"> Aşağı</span>: Tekrar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">İlerlemeyi Takip Et</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bildiğiniz kelimeler daha az sıklıkta karşınıza çıkacak</p>
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
