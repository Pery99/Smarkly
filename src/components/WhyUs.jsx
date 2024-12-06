import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChartLine,
  FaCogs,
  FaUserCog,
  FaHandshake,
  FaTrophy,
  FaInfoCircle,
} from "react-icons/fa";

const reasons = [
  {
    title: "Results-Driven Model",
    description: "You only pay for the leads and appointments we deliver.",
    longDescription:
      "Our performance-based pricing model ensures that you invest only in tangible results. We align our success directly with yours, providing a transparent and risk-mitigated approach to lead generation.",
    icon: FaChartLine,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    title: "Platform Expertise",
    description:
      "Tailored strategies across multiple platforms to meet your audience.",
    longDescription:
      "We leverage deep insights and cutting-edge techniques across diverse digital platforms, ensuring your message reaches the right audience at the right time with precision and impact.",
    icon: FaCogs,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
  },
  {
    title: "Customized Solutions",
    description: "Every approach is tailored to your industry and goals.",
    longDescription:
      "We don't believe in one-size-fits-all. Our team crafts bespoke strategies that are meticulously designed to address the unique challenges and opportunities of your specific business ecosystem.",
    icon: FaUserCog,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
  },
  {
    title: "End-to-End Service",
    description:
      "We handle everything from lead generation to appointment setting.",
    longDescription:
      "Our comprehensive service eliminates the complexity of lead management. From initial contact to scheduled appointment, we manage the entire customer acquisition journey with professional precision.",
    icon: FaHandshake,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
  },
  {
    title: "Proven Success",
    description: "Trusted by businesses to deliver measurable growth.",
    longDescription:
      "Our track record speaks volumes. With a portfolio of successful campaigns and satisfied clients across multiple industries, we bring proven methodologies and a commitment to driving tangible business growth.",
    icon: FaTrophy,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
  },
];

const WhyUs = () => {
  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <section
      id="why-us"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Subtle Background Shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Why Choose Smarkly?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`${reason.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedReason(reason)}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className={`bg-gradient-to-br ${reason.color} p-3 rounded-full mr-4 shadow-md`}
                  whileTap={{ scale: 0.9 }}
                >
                  <reason.icon className="text-3xl text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {reason.title}
                </h3>
                <FaInfoCircle className="ml-2 text-gray-500 opacity-50" />
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Reason Modal */}
        <AnimatePresence>
          {selectedReason && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedReason(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`${selectedReason.bgColor} rounded-2xl p-8 max-w-md w-full shadow-2xl`}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={`bg-gradient-to-br ${selectedReason.color} p-4 rounded-xl inline-block mb-6 shadow-lg`}
                >
                  <selectedReason.icon className="text-5xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {selectedReason.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedReason.longDescription}
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

export default WhyUs;
