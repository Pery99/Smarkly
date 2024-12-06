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
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="/api/placeholder/1920/1080"
          alt="Business Background"
          className="w-full h-full object-cover opacity-30"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/70 to-purple-700/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Elevate Your Business Growth
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Cutting-edge lead generation and appointment setting strategies that
            transform your business potential into tangible success.
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center space-x-6 mb-8"
        >
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
            <FaRocket className="text-blue-300" />
            <span>High-Quality Leads</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
            <FaChartLine className="text-green-300" />
            <span>Growth Optimization</span>
          </div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white 
          py-3 px-8 rounded-full text-lg font-bold 
          shadow-lg hover:shadow-xl transition duration-300 
          transform hover:-translate-y-1"
        >
          Unlock Your Potential
        </motion.button>
      </div>

      {/* Subtle Animated Background Elements */}
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
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
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
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
