import React from "react";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import { testimonials } from "@/data/testimonials";

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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

const Testimonials: React.FC = () => {
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
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of satisfied learners who have accelerated their language skills with Learn Words.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm"
              variants={item}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <StarHalf className="h-4 w-4 fill-current" />
                  )}
                </div>
                <div className="ml-2 text-gray-500 dark:text-gray-400 text-sm">{testimonial.rating.toFixed(1)}</div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className={`w-10 h-10 ${testimonial.avatarBg} bg-opacity-20 dark:bg-opacity-30 rounded-full flex items-center justify-center ${testimonial.avatarColor} font-bold`}>
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <div className="font-medium dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.status}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
