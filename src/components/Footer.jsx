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
  FaHandHoldingHeart,
  FaBaby,
  FaNewspaper,
  FaUsers,
  FaUserMd,
  FaBookOpen,
  FaQuestionCircle,
  FaLeaf
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
        { name: "Careers", path: "/support/careers" }
      ]
    },
    products: {
      title: "Products",
      links: [
        { name: "PHBM 70", path: "/products/pasteurised" },
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
        { name: "Contact Us", path: "/support/contact" },
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
    <footer className="bg-[#0a2e24] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top Section with Logo and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 pb-8 border-b border-white/10">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1a6d4c] to-[#0f5a3e] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-bold">N</span>
              </div>
              <div>
                <span className="font-bold text-2xl tracking-tighter">neolacta</span>
                <p className="text-[10px] text-[#b8e6d4] -mt-1 tracking-wide">nurturing lives</p>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              India's only ISO 22000:2018 and GMP-certified human milk facility dedicated to supporting optimal nutrition for premature babies.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl text-[#b8e6d4] mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.values(footerLinks).map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4 text-[#b8e6d4] relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#1a6d4c] to-transparent rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-sm text-white/70 hover:text-[#b8e6d4] transition-colors duration-300 flex items-center gap-1 group ${
                          isActive ? 'text-[#b8e6d4]' : ''
                        }`
                      }
                    >
                      <FaArrowRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 pt-4 border-t border-white/10">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b8e6d4]">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <FaPhone className="text-[#1a6d4c] mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Toll Free Helpline</p>
                  <p className="hover:text-[#b8e6d4] transition-colors">1800 - 419 - 2199</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <FaEnvelope className="text-[#1a6d4c] mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="hover:text-[#b8e6d4] transition-colors">info@neolacta.com</p>
                  <p className="hover:text-[#b8e6d4] transition-colors">support@neolacta.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <FaMapMarkerAlt className="text-[#1a6d4c] mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Corporate Office</p>
                  <p>NeoLacta Lifesciences Pvt. Ltd.</p>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <FaClock className="text-[#1a6d4c] mt-0.5" />
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
            <h3 className="text-lg font-semibold mb-4 text-[#b8e6d4]">Stay Updated</h3>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter for latest updates, clinical insights, and parenting tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#1a6d4c] focus:ring-2 focus:ring-[#1a6d4c]/20 transition-all"
              />
              <button className="bg-gradient-to-r from-[#1a6d4c] to-[#0f5a3e] px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/40">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-white/70 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-[#1a6d4c] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-white/50 text-center md:text-left">
              © {currentYear} NeoLacta Lifesciences. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <NavLink to="/privacy-policy" className="text-white/50 hover:text-[#b8e6d4] transition-colors text-xs">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms-of-use" className="text-white/50 hover:text-[#b8e6d4] transition-colors text-xs">
                Terms of Use
              </NavLink>
              <NavLink to="/cookie-policy" className="text-white/50 hover:text-[#b8e6d4] transition-colors text-xs">
                Cookie Policy
              </NavLink>
              <NavLink to="/sitemap" className="text-white/50 hover:text-[#b8e6d4] transition-colors text-xs">
                Sitemap
              </NavLink>
            </div>
          </div>
          <div className="text-center mt-4 text-white/30 text-xs">
            <p>💚 Dedicated to nurturing premature lives with 100% human milk</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;