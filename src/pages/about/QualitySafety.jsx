import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaCheckCircle, 
  FaFlask, 
  FaClipboardList,
  FaMicroscope,
  FaTemperatureHigh,
  FaTint,
  FaVial,
  FaCertificate,
  FaAward,
  FaHandHoldingHeart,
  FaLeaf,
  FaStar,
  FaArrowRight,
  FaQuoteLeft,
  FaUserMd,
  FaBuilding,
  FaGlobeAsia,
  FaChartLine
} from 'react-icons/fa';
import { FaHospitalUser } from "react-icons/fa6";

const QualitySafety = () => {
  const certifications = [
    {
      name: "ISO 22000:2018",
      description: "Food Safety Management System certification ensuring highest standards of food safety.",
      icon: <FaCertificate />,
      year: "2018",
      color: "from-blue-700 to-blue-500"
    },
    {
      name: "GMP Certified",
      description: "Good Manufacturing Practices certification for pharmaceutical and food products.",
      icon: <FaShieldAlt />,
      year: "2019",
      color: "from-slate-600 to-slate-500"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management System certification for consistent quality standards.",
      icon: <FaAward />,
      year: "2020",
      color: "from-blue-600 to-blue-400"
    }
  ];

  const safetyProtocols = [
    {
      title: "Donor Screening",
      description: "Comprehensive health screening and medical history verification for all donors.",
      icon: <FaUserMd />,
      steps: ["Medical History Review", "Blood Tests", "Lifestyle Assessment", "Ongoing Monitoring"]
    },
    {
      title: "Milk Processing",
      description: "State-of-the-art pasteurization and processing under sterile conditions.",
      icon: <FaFlask />,
      steps: ["Pooling & Testing", "Pasteurization", "Homogenization", "Sterile Packaging"]
    },
    {
      title: "Quality Testing",
      description: "Multiple quality checks at every stage of production.",
      icon: <FaMicroscope />,
      steps: ["Microbial Testing", "Nutritional Analysis", "Safety Verification", "Batch Certification"]
    },
    {
      title: "Cold Chain Management",
      description: "Temperature-controlled storage and transportation throughout the supply chain.",
      icon: <FaTemperatureHigh />,
      steps: ["Real-time Monitoring", "Temperature Logging", "Emergency Protocols", "Audit Trails"]
    }
  ];

  const qualityChecks = [
    { parameter: "Microbiological Safety", standard: "Zero Pathogens", status: "100% Compliant", icon: <FaMicroscope />, color: "from-blue-600 to-blue-400" },
    { parameter: "Nutritional Value", standard: "ISO Standards", status: "Verified", icon: <FaTint />, color: "from-slate-600 to-slate-500" },
    { parameter: "Chemical Residue", standard: "Below Detection Limits", status: "Clean", icon: <FaVial />, color: "from-blue-500 to-blue-300" },
    { parameter: "Temperature Control", standard: "-20°C to -80°C", status: "Maintained", icon: <FaTemperatureHigh />, color: "from-slate-500 to-slate-400" }
  ];

  const facilities = [
    {
      name: "Class 10000 Clean Room",
      description: "Ultra-clean environment for processing and packaging",
      icon: <FaBuilding />
    },
    {
      name: "Automated Processing Line",
      description: "State-of-the-art equipment for consistent quality",
      icon: <FaFlask />
    },
    {
      name: "Quality Control Laboratory",
      description: "In-house testing for immediate quality verification",
      icon: <FaClipboardList />
    },
    {
      name: "Cold Storage Facility",
      description: "24/7 temperature-controlled storage units",
      icon: <FaTemperatureHigh />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-48 h-48 bg-silver-400 rounded-full blur-3xl"></div>
        </div>
        {/* Silver wave pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Our Promise
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Quality & <span className="text-blue-300">Safety</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Every drop of human milk that passes through our facility undergoes rigorous quality checks 
              and safety protocols to ensure the highest standards of purity and nutrition.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaCertificate className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Recognized for <span className="text-blue-600">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              Our certifications reflect our unwavering commitment to maintaining the highest standards 
              of quality and safety in every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 bg-gradient-to-br from-slate-600 to-slate-500 text-white px-3 py-1 rounded-bl-2xl text-sm font-semibold">
                  {cert.year}
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                  <div className="text-white text-2xl">{cert.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols Section */}
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
              <FaShieldAlt className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Safety Protocols</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Multi-Layer <span className="text-blue-600">Safety Framework</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              Our comprehensive safety protocols ensure that every product meets the highest standards 
              of purity and safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {safetyProtocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-md">
                    <div className="text-white text-2xl">{protocol.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {protocol.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{protocol.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {protocol.steps.map((step, stepIdx) => (
                        <span key={stepIdx} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-100">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Checks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Rigorous <span className="text-blue-600">Quality Testing</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              Every batch undergoes comprehensive testing to ensure safety, purity, and nutritional integrity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {qualityChecks.map((check, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${check.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{check.icon}</div>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{check.parameter}</h3>
                <p className="text-xs text-gray-500 mb-2">{check.standard}</p>
                <span className="inline-block text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {check.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">World-Class Facilities</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-white/80 max-w-2xl mx-auto mt-4">
              Our state-of-the-art facility is designed to maintain the highest standards of safety and quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white text-2xl">{facility.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{facility.name}</h3>
                <p className="text-white/70 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-10 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <FaQuoteLeft className="text-blue-600 text-4xl mx-auto mb-4 opacity-50" />
            <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-2xl mx-auto leading-relaxed">
              "Quality is not just a standard we meet—it's a promise we keep to every baby, 
              every parent, and every healthcare partner who trusts us."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-blue-600"></div>
              <span className="text-blue-600 font-semibold">Our Quality Commitment</span>
              <div className="w-12 h-0.5 bg-blue-600"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { value: "100%", label: "Quality Compliance", icon: <FaChartLine />, color: "from-blue-600 to-blue-500" },
              { value: "24/7", label: "Monitoring", icon: <FaTemperatureHigh />, color: "from-slate-600 to-slate-500" },
              { value: "0", label: "Safety Incidents", icon: <FaShieldAlt />, color: "from-blue-500 to-blue-400" },
              { value: "500+", label: "Daily Tests", icon: <FaMicroscope />, color: "from-slate-500 to-slate-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Learn More About Our Quality Standards
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Download our quality manual or schedule a facility tour to see our safety protocols firsthand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Download Quality Report
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300">
                Schedule a Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QualitySafety;