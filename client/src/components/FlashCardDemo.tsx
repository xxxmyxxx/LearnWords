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
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScoreTracker from "./ScoreTracker";

// Directional guide component for visual cues
const SwipeGuide: React.FC<{ direction: string; active: boolean }> = ({ direction, active }) => {
  const getPosition = () => {
    switch (direction) {
      case "left": return "left-2 top-1/2 -translate-y-1/2";
      case "right": return "right-2 top-1/2 -translate-y-1/2";
      case "up": return "top-2 left-1/2 -translate-x-1/2";
      case "down": return "bottom-2 left-1/2 -translate-x-1/2";
      default: return "";
    }
  };
  
  const getIcon = () => {
    switch (direction) {
      case "left": return <X className="h-5 w-5" />;
      case "right": return <Check className="h-5 w-5" />;
      case "up": return <Save className="h-5 w-5" />;
      case "down": return <RefreshCw className="h-5 w-5" />;
      default: return null;
    }
  };
  
  const getColor = () => {
    switch (direction) {
      case "left": return "bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-300";
      case "right": return "bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300";
      case "up": return "bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300";
      case "down": return "bg-yellow-100 text-yellow-500 dark:bg-yellow-900 dark:text-yellow-300";
      default: return "";
    }
  };
  
  return (
    <motion.div 
      className={`absolute ${getPosition()} ${getColor()} p-2 rounded-full opacity-60 pointer-events-none ${active ? 'scale-110' : ''}`}
      animate={{ opacity: active ? 0.9 : 0.6, scale: active ? 1.1 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {getIcon()}
    </motion.div>
  );
};

const FlashCardDemo: React.FC = () => {
  // Language preferences
  const [targetLanguage, setTargetLanguage] = useState<string>("English");
  const [nativeLanguage, setNativeLanguage] = useState<string>("Türkçe");
  const [languagePair, setLanguagePair] = useState<string>("English-Türkçe");
  
  // Card states
  const [currentCards, setCurrentCards] = useState<FlashCard[]>(englishTurkishCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);
  const [activeSwipeGuide, setActiveSwipeGuide] = useState<string | null>(null);
  const [showSheet, setShowSheet] = useState(false);
  const [sheetVisible, setSheetVisible] = useState(false); // Added for tracking if bottom sheet is shown
  const [stackPosition, setStackPosition] = useState([0, -5, -10]); // Position of cards in the stack
  
  // Counters
  const [greenScore, setGreenScore] = useState(0);
  const [redScore, setRedScore] = useState(0);
  const [orangeScore, setOrangeScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  
  const audioRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Update language pair when either language changes
  useEffect(() => {
    const newPair = `${targetLanguage}-${nativeLanguage}`;
    setLanguagePair(newPair);
    
    // If this pair exists in our sets
    if (availableCardSets[newPair as keyof typeof availableCardSets]) {
      setCurrentCards(availableCardSets[newPair as keyof typeof availableCardSets]);
      setCurrentCardIndex(0);
      setFlipped(false);
    }
  }, [targetLanguage, nativeLanguage]);

  // Current card from the selected deck
  const currentCard = currentCards[currentCardIndex];
  
  // Card flip toggle
  const handleCardClick = () => {
    if (!isDragging.current) {
      setFlipped(!flipped);
    }
  };
  
  // Handle touch/mouse start to track if we're dragging
  const handleDragStart = () => {
    isDragging.current = true;
  };
  
  // Handle touch/mouse end to reset dragging state
  const handleDragEnd = () => {
    setTimeout(() => {
      isDragging.current = false;
    }, 100);
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
  
  // Process swipe in different directions
  const handleSwipeAction = (direction: string) => {
    setSwipeDirection(direction);
    
    // Update score counters based on direction
    switch (direction) {
      case "right":
        setGreenScore(prev => prev + 1);
        break;
      case "left":
        setRedScore(prev => prev + 1);
        break;
      case "down":
        setOrangeScore(prev => prev + 1);
        // Immediately open bottom sheet on down swipe
        setShowSheet(true);
        break;
      case "up":
        setBlueScore(prev => prev + 1);
        break;
    }
    
    // Wait for animation to complete before changing card
    setTimeout(() => {
      // Move to next card
      setCurrentCardIndex((prev) => (prev + 1) % currentCards.length);
      // Reset for next card
      setSwipeDirection(null);
      setFlipped(false);
    }, 400);
  };
  
  // Swipe handlers 
  const swipeHandlers = useSwipeable({
    onSwipeStart: () => handleDragStart(),
    onSwiped: () => handleDragEnd(),
    onSwipedLeft: () => handleSwipeAction("left"),
    onSwipedRight: () => handleSwipeAction("right"),
    onSwipedUp: () => handleSwipeAction("up"),
    onSwipedDown: () => handleSwipeAction("down"),
    preventScrollOnSwipe: true,
    trackMouse: true,
    delta: 10, // Minimum swipe distance
    swipeDuration: 500, // Maximum time of swipe
  });
  
  // Show the swipe guide when hovering in a direction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    
    // Determine which edge is closest
    const isHorizontalCloser = Math.abs(distX) > Math.abs(distY);
    
    if (isHorizontalCloser) {
      if (distX > 50) setActiveSwipeGuide("right");
      else if (distX < -50) setActiveSwipeGuide("left");
      else setActiveSwipeGuide(null);
    } else {
      if (distY > 50) setActiveSwipeGuide("down");
      else if (distY < -50) setActiveSwipeGuide("up");
      else setActiveSwipeGuide(null);
    }
  };
  
  const handleMouseLeave = () => {
    setActiveSwipeGuide(null);
  };
  
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
          className="absolute top-0 left-0 right-0 mx-auto w-[280px] h-[450px] bg-white dark:bg-slate-800 rounded-2xl shadow-md overflow-hidden perspective-1000 cursor-pointer select-none"
          animate={getCardVariant()}
          variants={cardVariants}
          transition={{ 
            rotateY: { duration: 0.5 },
            default: { duration: 0.3 }
          }}
          onClick={handleCardClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
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
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold mb-6 font-poppins">{currentCard.word}</h3>
              <div className="w-full h-1 bg-yellow-400 mb-5 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 px-4">{currentCard.hint.target}</p>
            </div>
          </motion.div>
          
          {/* Card Back */}
          <motion.div 
            className={`absolute w-full h-full p-6 flex flex-col ${flipped ? "" : "backface-hidden"}`}
            style={{ 
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div>
                <h3 className="text-3xl font-bold mb-1 font-poppins">{currentCard.word}</h3>
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">{currentCard.translationNative}</p>
                <div className="w-full h-1 bg-yellow-400 mb-5 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300 mb-2 px-4">{currentCard.hint.target}</p>
                <p className="text-gray-500 dark:text-gray-400 italic px-4">{currentCard.hint.native}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Swipe Direction Guides */}
          <SwipeGuide direction="left" active={activeSwipeGuide === "left"} />
          <SwipeGuide direction="right" active={activeSwipeGuide === "right"} />
          <SwipeGuide direction="up" active={activeSwipeGuide === "up"} />
          <SwipeGuide direction="down" active={activeSwipeGuide === "down"} />
          
          {renderStatusIndicator()}
        </motion.div>
      </div>
    );
  };
  
  // Bottom sheet for categories
  const renderBottomSheet = () => {
    return (
      <Sheet open={showSheet} onOpenChange={setShowSheet}>
        <SheetContent 
          side="bottom" 
          className="rounded-t-xl"
          style={{ 
            maxWidth: "280px", 
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <SheetHeader>
            <SheetTitle className="flex items-center">
              <div className="p-2 bg-amber-100 rounded-full mr-2">
                <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
              </div>
              Select Category
            </SheetTitle>
            <SheetDescription>
              Choose a category to add "{currentCard.word}"
            </SheetDescription>
          </SheetHeader>
          
          <div className="mt-6">
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" onClick={() => setShowSheet(false)}>
                <div className="p-1.5 bg-amber-100 rounded-full mr-2">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"></path>
                  </svg>
                </div>
                Add New Category
              </Button>
              
              <Button variant="outline" className="w-full justify-between" onClick={() => setShowSheet(false)}>
                <div className="flex items-center">
                  <div className="p-1.5 bg-amber-100 rounded-full mr-2">
                    <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                    </svg>
                  </div>
                  Daily Conversation
                </div>
                <span className="text-sm text-gray-500">4 words</span>
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
            Interactive Learning
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Swipeable flash cards make learning vocabulary in any language intuitive and efficient.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Language selectors */}
          <div className="w-full max-w-xs mb-6 md:mb-0 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Target Language</label>
              <Select 
                value={targetLanguage}
                onValueChange={setTargetLanguage}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Target" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Native Language</label>
              <Select 
                value={nativeLanguage}
                onValueChange={setNativeLanguage}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Native" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                  <SelectItem value="Türkçe">Turkish</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Score Tracker */}
            <ScoreTracker 
              greenScore={greenScore}
              redScore={redScore}
              orangeScore={orangeScore}
              blueScore={blueScore}
            />
          </div>
          
          {/* Card Stack */}
          <div className="w-full flex justify-center">
            {renderCardStack()}
            {renderBottomSheet()}
          </div>
          
          {/* Instructions */}
          <div className="w-full max-w-sm md:max-w-md">
            <h3 className="text-xl font-semibold mb-4 font-poppins">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">View the Card</h4>
                  <p className="text-gray-600 dark:text-gray-300">Tap on the card to see the word</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Flip for Translation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Click on the card to see the translation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Swipe to Mark</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="text-green-500 font-medium">Right</span>: I know, 
                    <span className="text-red-500 font-medium"> Left</span>: Don't know,<br/>
                    <span className="text-blue-500 font-medium">Up</span>: Save, 
                    <span className="text-yellow-500 font-medium"> Down</span>: Repeat
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary bg-opacity-10 dark:bg-opacity-20 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1 dark:text-white">Track Your Progress</h4>
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
