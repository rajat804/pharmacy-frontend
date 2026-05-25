import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-removebg.png';

import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaHeartbeat,
  FaShieldAlt,
  FaTrophy,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock,
} from 'react-icons/fa';
import { FaHospitalUser } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: {
      title: "Company",
      links: [
        {name: "Home", path:"/"},
        {name: "About Us", path:"/about-us"},
        {name: "Learn", path:"/learn"},
        {name: "Contact", path:"/contact"},
        {name: "Coming Soon", path:"/comming-soon"},
      ]
    },
    products: {
      title: "Products",
      links: [
        {name: "NeoPepti HMF", path: '/products/neopepti-hmf'},
        {name: "NeoPro", path: "/products/neopro"},
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Customer Support", path: "/support/customer" },
        { name: "Request Information", path: "/support/request" },
        { name: "Become a Partner", path: "/partner" },
        { name: "FAQ", path: "/faq" }
      ]
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com/neoverse", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com/neoverse", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/neoverse", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com/neoverse", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://youtube.com/neoverse", label: "YouTube" }
  ];

  const quickStats = [
    { icon: <FaHeartbeat />, value: "50,000+", label: "Babies Benefited" },
    { icon: <FaHospitalUser />, value: "500+", label: "Hospitals Served" },
    { icon: <FaTrophy />, value: "ISO 22000", label: "Certified" },
    { icon: <FaShieldAlt />, value: "100%", label: "Science-Backed" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
        
        {/* Top Section with Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-10 pb-6 sm:pb-8 border-b border-cyan-400/20">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <NavLink to="/" className="flex">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 sm:h-12 w-auto object-contain brightness-110 contrast-125"
                />
              </NavLink>
            </div>
            <p className="text-sm text-cyan-100 max-w-xs leading-relaxed">
              Global Science. Indian Hearts. Bridging the gap between global research and Indian NICUs.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl sm:text-3xl text-cyan-400 mb-2 flex justify-center group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110 transform">
                  {stat.icon}
                </div>
                <div className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-cyan-200/70 group-hover:text-cyan-100 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 sm:mb-12">
          {Object.values(footerLinks).map((section, idx) => (
            <div key={idx}>
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-cyan-300 relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-10 sm:w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-xs sm:text-sm text-cyan-100 hover:text-white transition-all duration-300 flex items-center gap-1 group ${
                          isActive ? 'text-white font-medium' : ''
                        }`
                      }
                    >
                      <FaArrowRight className="text-[8px] sm:text-[10px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 text-cyan-400" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 sm:mb-12 pt-4 sm:pt-6 border-t border-cyan-400/20">
          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-cyan-300">Get in Touch</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-cyan-100 group">
                <div className="bg-cyan-700/30 p-1.5 sm:p-2 rounded-xl group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaPhone className="text-cyan-300 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Toll Free Helpline</p>
                  <p className="hover:text-cyan-300 transition-colors cursor-pointer text-xs sm:text-sm">1800 - 419 - 2199</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-cyan-100 group">
                <div className="bg-cyan-700/30 p-1.5 sm:p-2 rounded-xl group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaEnvelope className="text-cyan-300 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Email Us</p>
                  <p className="hover:text-cyan-300 transition-colors cursor-pointer text-xs sm:text-sm">customersupport@neoverse.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-cyan-100 group">
                <div className="bg-cyan-700/30 p-1.5 sm:p-2 rounded-xl group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaMapMarkerAlt className="text-cyan-300 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Corporate Office</p>
                  <p className="text-xs sm:text-sm">Neoverse Lifesciences Pvt. Ltd.</p>
                  <p className="text-xs sm:text-sm">Bangalore, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-cyan-100 group">
                <div className="bg-cyan-700/30 p-1.5 sm:p-2 rounded-xl group-hover:bg-gradient-to-br group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaClock className="text-cyan-300 text-sm sm:text-base" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">Support Hours</p>
                  <p className="text-xs sm:text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-xs sm:text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-cyan-300">Stay Updated</h3>
            <p className="text-xs sm:text-sm text-cyan-100 mb-4">
              Subscribe to our newsletter for latest updates, clinical insights, and parenting tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 border border-cyan-400/30 text-white placeholder-cyan-200/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] sm:text-xs text-cyan-200/50">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-xs sm:text-sm text-cyan-100 mb-3">Follow Us</p>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 text-cyan-300 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
            <div className="text-cyan-200/60 text-center md:text-left hover:text-cyan-100 transition-colors">
              © {currentYear} Neoverse Lifesciences. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <NavLink to="/privacy-policy" className="text-cyan-200/60 hover:text-cyan-100 transition-all duration-300 text-[10px] sm:text-xs hover:scale-105">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms-of-use" className="text-cyan-200/60 hover:text-cyan-100 transition-all duration-300 text-[10px] sm:text-xs hover:scale-105">
                Terms of Use
              </NavLink>
              <NavLink to="/cookie-policy" className="text-cyan-200/60 hover:text-cyan-100 transition-all duration-300 text-[10px] sm:text-xs hover:scale-105">
                Cookie Policy
              </NavLink>
              <NavLink to="/sitemap" className="text-cyan-200/60 hover:text-cyan-100 transition-all duration-300 text-[10px] sm:text-xs hover:scale-105">
                Sitemap
              </NavLink>
            </div>
          </div>
          <div className="text-center mt-4 text-cyan-200/40 text-[10px] sm:text-xs">
            <p className="hover:text-cyan-200/60 transition-colors">✨ Bringing the world's best science to India's most precious lives.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;