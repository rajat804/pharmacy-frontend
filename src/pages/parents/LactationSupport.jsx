import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaHandHoldingHeart, 
  FaBaby, 
  FaPhone,
  FaEnvelope,
  FaUser,
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaLeaf,
  FaTint,
  FaShieldAlt,
  FaSmile,
  FaVideo,
  FaHeadset,
  FaWhatsapp,
  FaCalendarAlt,
  FaBookOpen,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaHospitalUser, 
  FaGlobe
} from 'react-icons/fa';

const LactationSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
    alert('Thank you! Our lactation consultant will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const supportServices = [
    {
      title: "Free Breastfeeding Helpline",
      description: "Get immediate expert advice on breastfeeding challenges, latching issues, and milk supply concerns.",
      icon: <FaPhone />,
      contact: "1800-419-2199",
      timing: "Mon-Sat: 9 AM - 6 PM",
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Video Consultation",
      description: "Connect with certified lactation consultants via video call for personalized guidance from home.",
      icon: <FaVideo />,
      contact: "Book Online",
      timing: "By Appointment",
      color: "from-green-600 to-green-500"
    },
    {
      title: "WhatsApp Support",
      description: "Quick messaging support for urgent queries about breastfeeding and infant nutrition.",
      icon: <FaWhatsapp />,
      contact: "+91-9876543210",
      timing: "Mon-Sat: 9 AM - 6 PM",
      color: "from-teal-500 to-teal-400"
    },
    {
      title: "In-Person Counseling",
      description: "Face-to-face consultation with our lactation experts at partner hospitals.",
      icon: <FaChalkboardTeacher />,
      contact: "Schedule Visit",
      timing: "By Appointment",
      color: "from-purple-600 to-purple-500"
    }
  ];

  const commonIssues = [
    {
      issue: "Low Milk Supply",
      solution: "Our consultants help identify causes and provide techniques to increase milk production naturally.",
      icon: <FaTint />,
      color: "from-blue-500 to-blue-400"
    },
    {
      issue: "Latching Difficulties",
      solution: "Expert guidance on proper positioning and latching techniques for comfortable feeding.",
      icon: <FaBaby />,
      color: "from-pink-500 to-pink-400"
    },
    {
      issue: "Sore Nipples",
      solution: "Tips and remedies to relieve pain and prevent further discomfort during breastfeeding.",
      icon: <FaHeart />,
      color: "from-red-500 to-red-400"
    },
    {
      issue: "Engorgement",
      solution: "Effective methods to reduce breast fullness and maintain comfortable feeding schedule.",
      icon: <FaShieldAlt />,
      color: "from-purple-500 to-purple-400"
    },
    {
      issue: "Returning to Work",
      solution: "Guidance on pumping, storing breast milk, and maintaining supply while working.",
      icon: <FaBriefcase />,
      color: "from-orange-500 to-orange-400"
    },
    {
      issue: "Premature Baby Feeding",
      solution: "Specialized support for feeding premature babies and establishing milk supply.",
      icon: <FaBaby />,
      color: "from-teal-500 to-teal-400"
    }
  ];

  const expertTeam = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Lactation Consultant",
      experience: "15+ years",
      icon: <FaUser />,
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "Ms. Neha Gupta",
      role: "Certified Lactation Educator",
      experience: "10+ years",
      icon: <FaGraduationCap />,
      color: "from-pink-500 to-pink-400"
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Pediatric Nutritionist",
      experience: "12+ years",
      icon: <FaBookOpen />,
      color: "from-green-600 to-green-500"
    }
  ];

  const stats = [
    { value: "50,000+", label: "Mothers Supported", icon: <FaUsers />, color: "from-blue-600 to-blue-500" },
    { value: "100%", label: "Satisfaction Rate", icon: <FaSmile />, color: "from-green-600 to-green-500" },
    { value: "24/7", label: "Online Resources", icon: <FaGlobe />, color: "from-purple-600 to-purple-500" },
    { value: "500+", label: "Partner Hospitals", icon: <FaHospitalUser />, color: "from-pink-500 to-pink-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Mother breastfeeding"
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
              Expert Support
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Lactation <span className="text-blue-300">Support</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-200">
              Empowering Mothers on Their Breastfeeding Journey
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get expert guidance, personalized solutions, and compassionate support for all your 
              breastfeeding concerns. Our certified lactation consultants are here to help you succeed.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaHeadset className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How We Can <span className="text-blue-600">Help You</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 text-center group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm text-center mb-3">{service.description}</p>
                <div className="text-center">
                  <p className="text-blue-600 font-semibold text-lg">{service.contact}</p>
                  <p className="text-xs text-gray-400 mt-1">{service.timing}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaBaby className="text-pink-500 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Common Challenges</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              We Help With <span className="text-pink-500">Every Challenge</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${issue.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                    <div className="text-white text-xl">{issue.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1 group-hover:text-pink-600 transition-colors">
                      {issue.issue}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {issue.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaUsers className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Our Experts</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Meet Our <span className="text-blue-600">Lactation Consultants</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertTeam.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${expert.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-3xl">{expert.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {expert.name}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{expert.role}</p>
                <p className="text-gray-400 text-xs">Experience: {expert.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 md:p-10 text-white text-center shadow-xl"
          >
            <FaQuoteLeft className="text-blue-300 text-4xl mx-auto mb-4 opacity-60" />
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              "The lactation support team at NeoLacta was incredibly helpful. They answered all my questions 
              patiently and helped me overcome my breastfeeding challenges. My baby is now thriving!"
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-blue-300 font-semibold">- Priya Sharma, New Mother</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
                <FaHeadset className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Need <span className="text-blue-600">Lactation Support?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our certified lactation consultants are here to help you with any breastfeeding challenges. 
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaPhone className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Free Helpline</p>
                    <p className="font-semibold text-slate-800">1800-419-2199</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp Support</p>
                    <p className="font-semibold text-slate-800">+91-9876543210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <FaClock className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Support Hours</p>
                    <p className="font-semibold text-slate-800">Monday - Saturday: 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Request a Callback</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
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

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="Tell us about your breastfeeding concerns..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Request Support
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Free Educational Resources</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 text-center border border-blue-200"
            >
              <FaBookOpen className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Breastfeeding Guide</h3>
              <p className="text-gray-600 text-sm">Download our comprehensive guide to successful breastfeeding</p>
              <button className="mt-3 text-blue-600 text-sm font-semibold hover:underline">Download PDF →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 text-center border border-green-200"
            >
              <FaVideo className="text-3xl text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm">Watch expert videos on latching, positioning, and pumping</p>
              <button className="mt-3 text-green-600 text-sm font-semibold hover:underline">Watch Now →</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5 text-center border border-purple-200"
            >
              <FaCalendarAlt className="text-3xl text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 mb-2">Webinars</h3>
              <p className="text-gray-600 text-sm">Join our free monthly webinars on infant nutrition</p>
              <button className="mt-3 text-purple-600 text-sm font-semibold hover:underline">Register →</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Don't Struggle Alone — We're Here to Help!
            </h2>
            <p className="text-blue-100 mb-6">
              Call our free helpline or request a callback for personalized lactation support
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:18004192199" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Call Now: 1800-419-2199
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LactationSupport;