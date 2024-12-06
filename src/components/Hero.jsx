import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gray-900 text-white py-24 px-6"
    >
      {/* Background Gradient and Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 animate-gradient-xy"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow tracking-tight leading-tight">
            Empower Your Business Growth
          </h2>
          <p className="text-xl text-gray-200/80 max-w-2xl mx-auto leading-relaxed">
            Harness the power of cutting-edge lead generation and optimization
            strategies to take your business to the next level.
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center space-x-6 mb-8 flex-wrap gap-4"
        >
          {[
            {
              icon: FaRocket,
              text: "High-Quality Leads",
              color: "text-blue-300",
            },
            {
              icon: FaChartLine,
              text: "Growth Optimization",
              color: "text-green-300",
            },
          ].map((feature, idx) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={idx}
              className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <feature.icon className={`${feature.color} text-lg`} />
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 15px rgba(100, 200, 255, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white 
          py-3 px-8 rounded-full text-lg font-bold 
          shadow-lg hover:shadow-2xl transition duration-300 
          transform hover:-translate-y-1"
        >
          Unlock Your Potential
        </motion.button>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
