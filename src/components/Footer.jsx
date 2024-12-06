import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "text-blue-600 hover:text-blue-700" },
    { icon: FaTwitter, href: "#", color: "text-sky-500 hover:text-sky-600" },
    { icon: FaLinkedin, href: "#", color: "text-blue-800 hover:text-blue-900" },
    {
      icon: FaInstagram,
      href: "#",
      color: "text-pink-600 hover:text-pink-700",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Lead Generation",
    "Appointment Setting",
    "B2B Marketing",
    "Digital Strategy",
    "Platform Optimization",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <motion.h3
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
          >
            Smarkly Agency
          </motion.h3>
          <p className="text-white/80 mb-4">
            Creating opportunities for lasting business growth through
            innovative lead generation strategies.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} transition-all duration-300`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.href}
                  className="text-white/80 hover:text-white hover:underline transition-all"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#"
                  className="text-white/80 hover:text-white hover:underline transition-all"
                >
                  {service}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:info@smarkly.com"
                className="hover:underline text-white/80 hover:text-white"
              >
                info@smarkly.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-400" />
              <a
                href="tel:+1234567890"
                className="hover:underline text-white/80 hover:text-white"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-400" />
              <span className="text-white/80">
                123 Business Lane, Suite 456
              </span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                <FaPaperPlane />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-6 border-t border-white/20">
        <p className="text-white/70">
          &copy; {currentYear} Smarkly Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
