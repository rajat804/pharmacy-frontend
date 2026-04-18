import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: ["customersupport@neoverse.in"],
      emailLink: "mailto:customersupport@neoverse.in",
      color: "from-blue-600 to-blue-500",
      isLink: true,
      linkType: "email"
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: ["+91-1800-419-2199", "+91-9876543210"],
      phoneLink: "tel:18004192199",
      color: "from-green-600 to-green-500",
      isLink: true,
      linkType: "phone"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: ["+91-9876543210"],
      whatsappLink: "https://wa.me/919876543210",
      color: "from-teal-500 to-teal-400",
      isLink: true,
      linkType: "whatsapp"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Corporate Office",
      details: ["Neoverse Lifesciences Pvt. Ltd.", "Bangalore, Karnataka, India - 560001"],
      color: "from-purple-600 to-purple-500",
      isLink: false
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  // Helper function to get the correct link based on card type
  const getCardLink = (info) => {
    if (!info.isLink) return null;
    if (info.linkType === 'email') return info.emailLink;
    if (info.linkType === 'phone') return info.phoneLink;
    if (info.linkType === 'whatsapp') return info.whatsappLink;
    return null;
  };

  // Helper function to render card content
  const renderCard = (info, index) => {
    const link = getCardLink(info);
    const CardContent = (
      <div className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 cursor-pointer">
        <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
          <div className="text-white text-2xl">{info.icon}</div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
          {info.title}
        </h3>
        {info.details.map((detail, i) => (
          <p key={i} className="text-gray-500 text-sm">
            {detail}
          </p>
        ))}
      </div>
    );

    if (link) {
      return (
        <a
          key={index}
          href={link}
          target={info.linkType === 'whatsapp' ? '_blank' : '_self'}
          rel="noopener noreferrer"
        >
          {CardContent}
        </a>
      );
    }

    return <div key={index}>{CardContent}</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Contact <span className="text-blue-300">Us</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have questions about our products or services? Our team is here to help you.
              Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => renderCard(info, index))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Send us a Message</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                <p className="text-gray-500 text-sm mt-3">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-6 text-center border border-green-200"
                >
                  <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-green-700">Message Sent!</h3>
                  <p className="text-green-600 mt-2">Thank you for reaching out. We'll contact you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
                      <div className="relative">
                        <FaComment className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                          placeholder="Enter subject"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-sm" /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Working Hours & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Working Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Working Hours</h2>
                </div>
                <div className="space-y-3">
                  {workingHours.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-semibold text-slate-800">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Support Email Highlight */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 text-white text-center">
                <FaEnvelope className="text-4xl mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
                <p className="text-blue-100 mb-3">For urgent inquiries, email us anytime</p>
                <a href="mailto:customersupport@neoverse.in" className="text-xl font-semibold hover:underline break-all">
                  customersupport@neoverse.in
                </a>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.566496253!2d77.490853!3d12.953847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="rounded-xl"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Connect With Us</h2>
            <p className="text-gray-500 mb-6">Follow us on social media for updates and news</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF className="text-gray-600 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaTwitter className="text-gray-600 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedinIn className="text-gray-600 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-gray-600 hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;