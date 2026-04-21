import React from 'react';
import { NavLink } from 'react-router-dom';
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
        { name: "About Us", path: "/about" },
        { name: "Our Story", path: "/about/our-story" },
        { name: "Mission & Vision", path: "/about/mission-vision" },
        { name: "Quality & Safety", path: "/about/quality-safety" },
        { name: "Awards & Recognition", path: "/about/awards" },
        { name: "Careers", path: "/career" }
      ]
    },
    products: {
      title: "Products",
      links: [
        { name: "PHBM 70", path: "/products/phbm70" },
        { name: "Neolact N70", path: "/products/n70" },
        { name: "Neolact N70 Prime", path: "/products/n70-prime" },
        { name: "Neolact MMF", path: "/products/mmf" },
        { name: "Neolact MMF PLUS", path: "/products/mmf-plus" },
        { name: "Neolact SOS", path: "/products/sos" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "For Parents", path: "/parents" },
        { name: "For HCPs", path: "/hcps" },
        { name: "Publications", path: "/hcps/publications" },
        { name: "Case Studies", path: "/hcps/case-studies" },
        { name: "Blogs", path: "/learn/blogs" },
        { name: "Press Releases", path: "/learn/press" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Customer Support", path: "/support/customer" },
        { name: "Request Information", path: "/support/request" },
        { name: "Become a Donor", path: "/donor/become-donor" },
        { name: "FAQ for Parents", path: "/parents/faq" },
        { name: "FAQ for Donors", path: "/donor/faq" }
      ]
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com/neolacta", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com/neolacta", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/neolacta", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com/neolacta", label: "Instagram" },
    { icon: <FaYoutube />, href: "https://youtube.com/neolacta", label: "YouTube" }
  ];

  const quickStats = [
    { icon: <FaHeartbeat />, value: "50,000+", label: "Babies Benefited" },
    { icon: <FaHospitalUser />, value: "500+", label: "Hospitals Served" },
    { icon: <FaTrophy />, value: "ISO 22000", label: "Certified" },
    { icon: <FaShieldAlt />, value: "100%", label: "Human Milk" }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top Section with Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 pb-8 border-b border-blue-400/20">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white text-3xl font-bold">N</span>
              </div>
              <div>
                <p className="text-[11px] text-blue-200 -mt-1 tracking-wide uppercase font-semibold">nurturing lives</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 max-w-xs leading-relaxed">
              India's only ISO 22000:2018 and GMP-certified human milk facility dedicated to supporting optimal nutrition for premature babies.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl text-blue-300 mb-2 flex justify-center group-hover:text-blue-200 transition-colors duration-300 group-hover:scale-110 transform">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{stat.value}</div>
                <div className="text-xs text-blue-200/70 group-hover:text-blue-100 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.values(footerLinks).map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4 text-blue-200 relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-sm text-blue-100 hover:text-white transition-all duration-300 flex items-center gap-1 group ${
                          isActive ? 'text-white font-medium' : ''
                        }`
                      }
                    >
                      <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 text-blue-300" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pt-4 border-t border-blue-400/20">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-blue-100 group">
                <div className="bg-blue-700/50 p-2 rounded-xl group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaPhone className="text-blue-200" />
                </div>
                <div>
                  <p className="font-semibold text-white">Toll Free Helpline</p>
                  <p className="hover:text-blue-200 transition-colors cursor-pointer">1800 - 419 - 2199</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-blue-100 group">
                <div className="bg-blue-700/50 p-2 rounded-xl group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaEnvelope className="text-blue-200" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="hover:text-blue-200 transition-colors cursor-pointer">customersupport@neoverse.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-blue-100 group">
                <div className="bg-blue-700/50 p-2 rounded-xl group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaMapMarkerAlt className="text-blue-200" />
                </div>
                <div>
                  <p className="font-semibold text-white">Corporate Office</p>
                  <p>NeoLacta Lifesciences Pvt. Ltd.</p>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-blue-100 group">
                <div className="bg-blue-700/50 p-2 rounded-xl group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <FaClock className="text-blue-200" />
                </div>
                <div>
                  <p className="font-semibold text-white">Support Hours</p>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Stay Updated</h3>
            <p className="text-sm text-blue-100 mb-4">
              Subscribe to our newsletter for latest updates, clinical insights, and parenting tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-blue-400/30 text-white placeholder-blue-200/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
              />
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 hover:scale-105">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-blue-200/50">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-blue-100 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 text-blue-200 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-blue-200/60 text-center md:text-left hover:text-blue-100 transition-colors">
              © {currentYear} NeoLacta Lifesciences. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <NavLink to="/privacy-policy" className="text-blue-200/60 hover:text-blue-100 transition-all duration-300 text-xs hover:scale-105">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms-of-use" className="text-blue-200/60 hover:text-blue-100 transition-all duration-300 text-xs hover:scale-105">
                Terms of Use
              </NavLink>
              <NavLink to="/cookie-policy" className="text-blue-200/60 hover:text-blue-100 transition-all duration-300 text-xs hover:scale-105">
                Cookie Policy
              </NavLink>
              <NavLink to="/sitemap" className="text-blue-200/60 hover:text-blue-100 transition-all duration-300 text-xs hover:scale-105">
                Sitemap
              </NavLink>
            </div>
          </div>
          <div className="text-center mt-4 text-blue-200/40 text-xs">
            <p className="hover:text-blue-200/60 transition-colors">💙 Dedicated to nurturing premature lives with 100% human milk</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;