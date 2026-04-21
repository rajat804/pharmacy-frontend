import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTrophy, 
  FaAward, 
  FaMedal, 
  FaStar,
  FaCertificate,
  FaRibbon,
  FaGem,
  FaHeartbeat,
  FaShieldAlt,
  FaFlask,
  FaGlobeAsia,
  FaQuoteLeft,
  FaCalendarAlt,
  FaBuilding,
  FaUsers,
  FaBaby,
  FaChartLine,
  FaRegGem
} from 'react-icons/fa';
import AboutCta from './AboutCta';

const AwardsRecognitions = () => {
  const majorAwards = [
    {
      title: "Best Neonatal Innovation Award",
      organization: "Indian Academy of Pediatrics",
      year: "2023",
      description: "Recognized for breakthrough innovation in human milk-derived fortifiers for premature babies.",
      icon: <FaTrophy />,
      color: "from-blue-600 to-blue-500",
      impact: "Industry First"
    },
    {
      title: "ISO 22000:2018 Excellence",
      organization: "Bureau of Indian Standards",
      year: "2022",
      description: "First and only human milk facility in India to achieve this prestigious certification.",
      icon: <FaCertificate />,
      color: "from-blue-500 to-blue-400",
      impact: "Pioneer Award"
    },
    {
      title: "Healthcare Innovation Award",
      organization: "FICCI",
      year: "2023",
      description: "For pioneering work in neonatal nutrition and human milk banking in India.",
      icon: <FaRegGem />,
      color: "from-blue-600 to-blue-500",
      impact: "Game Changer"
    },
    {
      title: "Excellence in Quality",
      organization: "Quality Council of India",
      year: "2024",
      description: "For maintaining highest quality standards in human milk processing.",
      icon: <FaMedal />,
      color: "from-blue-500 to-blue-400",
      impact: "Quality First"
    }
  ];

  const recognitions = [
    {
      title: "Top 10 Healthcare Startups",
      organization: "Forbes India",
      year: "2023",
      description: "Recognized among India's most innovative healthcare startups.",
      icon: <FaStar />
    },
    {
      title: "Women's Health Champion",
      organization: "Ministry of Health",
      year: "2022",
      description: "For contribution to maternal and child health in India.",
      icon: <FaHeartbeat />
    },
    {
      title: "Best Employer in Healthcare",
      organization: "Great Place to Work",
      year: "2023",
      description: "Certified for exceptional workplace culture and employee satisfaction.",
      icon: <FaBuilding />
    },
    {
      title: "Innovation in Pediatrics",
      organization: "Indian Medical Association",
      year: "2024",
      description: "For developing India's first lyophilized human milk product.",
      icon: <FaFlask />
    }
  ];

  const certifications = [
    {
      name: "ISO 22000:2018",
      organization: "International Organization for Standardization",
      year: "2018",
      description: "Food Safety Management System",
      icon: <FaCertificate />
    },
    {
      name: "GMP Certified",
      organization: "World Health Organization",
      year: "2019",
      description: "Good Manufacturing Practices",
      icon: <FaShieldAlt />
    },
    {
      name: "ISO 9001:2015",
      organization: "International Organization for Standardization",
      year: "2020",
      description: "Quality Management System",
      icon: <FaAward />
    },
    {
      name: "NABL Accreditation",
      organization: "National Accreditation Board",
      year: "2021",
      description: "Laboratory Testing Standards",
      icon: <FaRibbon />
    }
  ];

  const milestones = [
    { year: "2018", achievement: "First ISO 22000 certified human milk facility in India", icon: <FaCertificate /> },
    { year: "2019", achievement: "Received GMP certification from WHO", icon: <FaShieldAlt /> },
    { year: "2020", achievement: "Launched India's first lyophilized human milk", icon: <FaFlask /> },
    { year: "2021", achievement: "Recognized by Ministry of Health", icon: <FaHeartbeat /> },
    { year: "2022", achievement: "Expanded to 100+ hospitals nationwide", icon: <FaBuilding /> },
    { year: "2023", achievement: "Forbes Top 10 Healthcare Startup", icon: <FaStar /> },
    { year: "2024", achievement: "Impacted 50,000+ premature babies", icon: <FaBaby /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-48 h-48 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Our Pride
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Awards & <span className="text-blue-200">Recognitions</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by leading healthcare institutions, 
              industry bodies, and government organizations across India.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Major Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaTrophy className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Major Awards</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Celebrating <span className="text-blue-600">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              These prestigious awards recognize our dedication to innovation, quality, and impact 
              in neonatal healthcare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {majorAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg flex-shrink-0`}>
                    <div className="text-white text-2xl">{award.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {award.title}
                      </h3>
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-200">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-blue-600 text-sm font-semibold mb-2">{award.organization}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{award.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white px-2 py-1 rounded-full">
                        {award.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
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
              <FaStar className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Industry Recognitions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Industry <span className="text-blue-600">Recognitions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              We are proud to be recognized by leading organizations for our contributions to healthcare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {recognitions.map((recognition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                  <div className="text-white text-2xl">{recognition.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {recognition.title}
                </h3>
                <p className="text-blue-600 text-xs font-semibold mb-2">{recognition.organization}</p>
                <p className="text-gray-500 text-xs mb-2">{recognition.description}</p>
                <span className="text-xs text-gray-400">{recognition.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaCertificate className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Certifications</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Quality <span className="text-blue-600">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              Our certifications demonstrate our commitment to maintaining the highest standards of quality and safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <div className="text-white text-xl">{cert.icon}</div>
                </div>
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{cert.organization}</p>
                <p className="text-xs text-gray-400 mb-2">{cert.description}</p>
                <span className="text-xs text-blue-600 font-semibold">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Milestones */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey of Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              A timeline of our key achievements and milestones
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-300 to-blue-400 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 md:text-right">
                    <div className="bg-white rounded-2xl p-4 hover:shadow-lg hover:shadow-blue-200/30 transition-all duration-300 group border border-gray-100">
                      <p className="text-sm text-blue-600 font-semibold mb-1">{milestone.year}</p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">{milestone.achievement}</p>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center z-10 shadow-md border-2 border-white hover:scale-110 transition-transform">
                    <div className="text-white text-lg">{milestone.icon}</div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { value: "12+", label: "National Awards", icon: <FaTrophy />, color: "from-blue-600 to-blue-500" },
              { value: "8+", label: "International Recognitions", icon: <FaGlobeAsia />, color: "from-blue-500 to-blue-400" },
              { value: "4", label: "Major Certifications", icon: <FaCertificate />, color: "from-blue-600 to-blue-500" },
              { value: "100%", label: "Quality Compliance", icon: <FaChartLine />, color: "from-blue-500 to-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <FaQuoteLeft className="text-blue-200 text-4xl mx-auto mb-4 opacity-60" />
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              "These awards belong to every donor who selflessly gives, every healthcare partner 
              who trusts us, and every baby who inspires us to do better every day."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-blue-200"></div>
              <span className="text-blue-200 font-semibold">Our Gratitude</span>
              <div className="w-12 h-0.5 bg-blue-200"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <AboutCta />
    </div>
  );
};

export default AwardsRecognitions;