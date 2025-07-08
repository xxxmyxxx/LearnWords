import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Trophy, 
  LineChart, 
  Book, 
  Check
} from "lucide-react";

const features = [
  {
    title: "Learn",
    description: "Swipe through flash cards to quickly learn new words and phrases in your target language.",
    icon: GraduationCap,
    iconBg: "bg-primary",
    benefits: [
      "Swipe mechanics for intuitive learning",
      "Audio pronunciation guides",
      "Categorized word collections"
    ]
  },
  {
    title: "Competition",
    description: "Challenge friends or learners worldwide in real-time vocabulary competitions.",
    icon: Trophy,
    iconBg: "bg-accent",
    benefits: [
      "Real-time multiplayer mode",
      "Leaderboards and rankings",
      "Achievement badges and rewards"
    ]
  },
  {
    title: "Progress",
    description: "Track your learning journey with detailed statistics and visual progress indicators.",
    icon: LineChart,
    iconBg: "bg-destructive",
    benefits: [
      "Daily and weekly learning goals",
      "Visual progress charts",
      "Mastery level indicators"
    ]
  },
  {
    title: "My Words",
    description: "Create and manage your personal collection of words to focus on what matters most to you.",
    icon: Book,
    iconBg: "bg-secondary",
    benefits: [
      "Custom word lists and favorites",
      "Word search functionality",
      "Export and share options"
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Features
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore the four main sections of Learn Words that make language learning effective, engaging, and personalized.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              variants={item}
            >
              <div className={`w-14 h-14 ${feature.iconBg} bg-opacity-20 dark:bg-opacity-20 rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className={`text-${feature.iconBg.split('-')[1]} text-xl`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {feature.benefits.map((benefit, bIndex) => (
                  <li key={bIndex} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
