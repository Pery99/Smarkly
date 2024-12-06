import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-100 text-gray-800 py-4 px-6 flex justify-between items-center shadow-sm relative z-50"
    >
      <motion.div
        className="flex items-center space-x-3"
        whileHover={{ scale: 1.05 }}
      >
        <FaRocket className="text-blue-600 text-2xl" />
        <motion.h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Smarkly
        </motion.h1>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {menuLinks.map((link) => (
            <motion.li
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <motion.button
        onClick={toggleMobileMenu}
        whileTap={{ scale: 0.9 }}
        className="md:hidden z-50 relative text-2xl focus:outline-none"
      >
        {isMobileMenuOpen ? (
          <FaTimes className="text-gray-800" />
        ) : (
          <FaBars className="text-gray-800 " />
        )}
      </motion.button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            {/* <motion.button
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              className="md:hidden z-60 relative text-2xl focus:outline-none"
            >
              <FaTimes className="text-gray-800" />
            </motion.button> */}
            <ul className="flex flex-col h-full justify-center items-center space-y-8">
              {menuLinks.map((link) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:
                      menuLinks.findIndex((l) => l.href === link.href) * 0.1,
                  }}
                >
                  <a
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
