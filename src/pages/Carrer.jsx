import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaTrophy,
  FaHeartbeat,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaPhone,
  FaFileAlt,
  FaUpload,
  FaPaperPlane,
  FaLinkedin,
  FaGlobe
} from 'react-icons/fa';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '', resume: null });
  };

  const openPositions = [
    {
      title: "Clinical Research Associate",
      department: "Research & Development",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      description: "We are looking for a Clinical Research Associate to join our R&D team and support clinical trials for our neonatal nutrition products.",
      icon: <FaGraduationCap />
    },
    {
      title: "Medical Science Liaison",
      department: "Medical Affairs",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-5 years",
      description: "Seeking a Medical Science Liaison to build relationships with key opinion leaders in neonatology and pediatrics.",
      icon: <FaUsers />
    },
    {
      title: "Quality Assurance Manager",
      department: "Quality",
      location: "Bangalore",
      type: "Full-time",
      experience: "5-7 years",
      description: "Looking for an experienced QA Manager to oversee quality systems and ensure compliance with ISO and GMP standards.",
      icon: <FaTrophy />
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Bangalore",
      type: "Full-time",
      experience: "4-6 years",
      description: "Seeking a Marketing Manager to lead our brand strategy and product launches in the neonatal nutrition space.",
      icon: <FaGlobe />
    },
    {
      title: "Sales Representative",
      department: "Sales",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-3 years",
      description: "Looking for dynamic sales professionals to promote our products to hospitals and healthcare institutions.",
      icon: <FaBriefcase />
    },
    {
      title: "Regulatory Affairs Specialist",
      department: "Regulatory",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      description: "Seeking a Regulatory Affairs Specialist to manage product registrations and compliance with regulatory bodies.",
      icon: <FaFileAlt />
    }
  ];

  const perks = [
    { title: "Competitive Salary", icon: <FaTrophy />, color: "from-blue-600 to-blue-500" },
    { title: "Health Insurance", icon: <FaHeartbeat />, color: "from-blue-500 to-blue-400" },
    { title: "Learning & Development", icon: <FaGraduationCap />, color: "from-blue-600 to-blue-500" },
    { title: "Flexible Work Hours", icon: <FaClock />, color: "from-blue-500 to-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Career"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Join Our Team
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Build Your <span className="text-blue-200">Career</span> with Us
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join a team dedicated to transforming neonatal care in India. We're looking for passionate 
              individuals who want to make a difference in the lives of premature infants.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Perks Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Work With Us?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-3">We offer competitive benefits and a collaborative work environment</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${perk.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{perk.icon}</div>
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{perk.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaBriefcase className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Open Positions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Current <span className="text-blue-600">Opportunities</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Join our mission to bring world-class neonatal nutrition to India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <div className="text-white text-xl">{position.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-xs text-blue-600">{position.department}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                    <FaMapMarkerAlt className="text-blue-400 text-xs" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                    <FaClock className="text-blue-400 text-xs" />
                    <span>{position.type} • {position.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                  {position.description}
                </p>
                
                <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all hover:text-blue-700">
                  Apply Now <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Submit Your Application</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-3">Send us your resume and we'll get back to you</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-xl border border-blue-100"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-200"
              >
                <FaCheckCircle className="text-blue-600 text-5xl mx-auto mb-3" />
                <h3 className="text-xl font-bold text-blue-700">Application Submitted!</h3>
                <p className="text-blue-600 mt-2">Thank you for your interest. Our HR team will review your application and contact you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
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

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position Applying For *</label>
                    <div className="relative">
                      <FaBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all appearance-none"
                      >
                        <option value="">Select a position</option>
                        {openPositions.map((pos, idx) => (
                          <option key={idx} value={pos.title}>{pos.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all appearance-none"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">Fresher (0-1 years)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-7">5-7 years</option>
                      <option value="7+">7+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter / Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume (PDF/DOC) *</label>
                  <div className="relative">
                    <FaUpload className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Max file size: 5MB. Supported formats: PDF, DOC, DOCX</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-sm" /> Submit Application
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Email Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaEnvelope className="text-4xl mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-2">Can't find the right position?</h2>
            <p className="text-blue-100 mb-4">Send us your resume and we'll keep you in mind for future opportunities</p>
            <a href="mailto:customersupport@neoverse.in" className="text-xl font-semibold hover:underline break-all hover:text-blue-200 transition-colors">
              customersupport@neoverse.in
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;