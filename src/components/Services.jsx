import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaYelp,
} from "react-icons/fa";
import { MdFolderSpecial } from "react-icons/md";

const platforms = [
  {
    name: "Facebook",
    icon: FaFacebook,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description:
      "Tap into Facebook's massive user base with targeted lead generation strategies.",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    description:
      "Leverage visual storytelling and influencer networks to attract high-quality leads.",
  },
  {
    name: "Google",
    icon: FaGoogle,
    color: "text-[#4285F4]",
    bgColor: "bg-[#E6F2FF]",
    description:
      "Optimize search and display advertising for maximum visibility and conversion.",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    color: "text-blue-800",
    bgColor: "bg-blue-100",
    description:
      "Connect with professional decision-makers through strategic B2B marketing.",
  },
  {
    name: "Twitter/X",
    icon: FaTwitter,
    color: "text-sky-600",
    bgColor: "bg-sky-100",
    description:
      "Engage in real-time conversations and trending topic marketing.",
  },
  {
    name: "Yelp",
    icon: FaYelp,
    color: "text-red-600",
    bgColor: "bg-red-100",
    description: "Boost local business visibility and reputation management.",
  },
  {
    name: "Directories",
    icon: MdFolderSpecial,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    description:
      "Maximize exposure across multiple online business directories.",
  },
];

const Services = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      {/* Subtle Background Shapes */}
      {/* <div className="absolute -top-20 -left-20 w-56 h-96 bg-[#2C3E50] rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" /> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-[#E6F2FF]">
          Our Lead Generation Platforms
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setSelectedPlatform(platform)}
            >
              <motion.div
                className={`${platform.bgColor} p-6 rounded-xl mb-4 shadow-lg hover:shadow-xl transition-all duration-300`}
                whileTap={{ scale: 0.95 }}
              >
                <platform.icon className={`text-5xl ${platform.color}`} />
              </motion.div>
              <h3 className="text-lg font-semibold text-[#E6F2FF]">
                {platform.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Platform Details Modal */}
        <AnimatePresence>
          {selectedPlatform && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPlatform(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`${selectedPlatform.bgColor} p-6 rounded-xl inline-block mb-6`}
                >
                  <selectedPlatform.icon
                    className={`text-7xl ${selectedPlatform.color}`}
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {selectedPlatform.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedPlatform.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Services;
