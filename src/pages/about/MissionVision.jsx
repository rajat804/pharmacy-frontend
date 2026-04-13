import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaGlobeAsia, 
  FaEye, 
  FaBullseye,
  FaHeartbeat,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaLeaf,
  FaStar,
  FaChartLine,
  FaUsers,
  FaBaby,
  FaAward,
  FaQuoteLeft,
  FaArrowRight,
  FaRegLightbulb,
  FaTarget,
  FaCompass
} from 'react-icons/fa';
import { FaHospitalUser } from "react-icons/fa6";

const MissionVision = () => {
  const missionPoints = [
    {
      title: "Accessible Nutrition",
      description: "Ensure every premature baby in India has access to safe, 100% human milk-derived nutrition regardless of their location or economic status.",
      icon: <FaHandHoldingHeart />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Clinical Excellence",
      description: "Provide clinically proven products that deliver measurable improvements in neonatal outcomes and reduce hospital stays.",
      icon: <FaHeartbeat />,
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "Quality Assurance",
      description: "Maintain the highest standards of safety and quality through ISO 22000:2018 and GMP certification.",
      icon: <FaShieldAlt />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Education & Support",
      description: "Empower parents and healthcare professionals with knowledge and resources for optimal infant nutrition.",
      icon: <FaLeaf />,
      color: "from-slate-500 to-slate-400"
    }
  ];

  const visionPoints = [
    {
      title: "Global Leadership",
      description: "To be recognized as a global leader in human milk-derived products and neonatal nutrition solutions.",
      icon: <FaGlobeAsia />,
      stat: "Global Standards",
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Zero Compromise",
      description: "A future where no premature baby is deprived of optimal nutrition due to lack of mother's milk.",
      icon: <FaStar />,
      stat: "100% Access",
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "Continuous Innovation",
      description: "Pioneering breakthrough products that transform neonatal care and improve outcomes.",
      icon: <FaRegLightbulb />,
      stat: "Innovation First",
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Trusted Partner",
      description: "Becoming the most trusted partner for hospitals, neonatologists, and parents across India.",
      icon: <FaUsers />,
      stat: "500+ Hospitals",
      color: "from-slate-500 to-slate-400"
    }
  ];

  const goals = [
    { year: "2025", title: "Expand to 1000+ Hospitals", progress: 60, icon: <FaHospitalUser />, color: "from-blue-600 to-blue-500" },
    { year: "2026", title: "Launch 3 New Products", progress: 40, icon: <FaRocket />, color: "from-slate-600 to-slate-500" },
    { year: "2027", title: "Impact 1,00,000+ Babies", progress: 25, icon: <FaBaby />, color: "from-blue-500 to-blue-400" },
    { year: "2028", title: "International Expansion", progress: 10, icon: <FaGlobeAsia />, color: "from-slate-500 to-slate-400" }
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
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Our Purpose
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Mission & <span className="text-blue-300">Vision</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Guided by our unwavering commitment to provide 100% human milk nutrition to every premature baby, 
              we strive to create a healthier future for India's tiniest citizens.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Mission Section */}
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
              <FaTarget className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What Drives Us <span className="text-blue-600">Every Day</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              Our mission is the foundation of everything we do - guiding our decisions, 
              driving our innovation, and inspiring our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                  <div className="text-white text-2xl">{point.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {point.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-slate-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Mission Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-10 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <FaQuoteLeft className="text-blue-600 text-4xl mx-auto mb-4 opacity-50" />
            <p className="text-xl md:text-2xl text-slate-800 font-medium max-w-3xl mx-auto leading-relaxed">
              "To provide safe, clinically proven, 100% human milk-derived nutrition to every premature 
              and at-risk baby in India, ensuring they have the best possible start in life."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-blue-600"></div>
              <span className="text-blue-600 font-semibold">Our Guiding Light</span>
              <div className="w-12 h-0.5 bg-blue-600"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
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
              <FaCompass className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              The Future We're <span className="text-blue-600">Building</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6">
              Our vision represents the impact we aspire to create and the legacy we want to leave 
              for generations of babies to come.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${point.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {point.icon}
                    </div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 group-hover:text-gray-600 transition-colors">
                    {point.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                      {point.stat}
                    </span>
                    <FaArrowRight className="text-blue-600 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 md:p-10 text-center text-white shadow-xl"
          >
            <FaQuoteLeft className="text-blue-300 text-4xl mx-auto mb-4 opacity-60" />
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
              "To be India's most trusted partner in neonatal nutrition, setting global standards for 
              human milk-derived products and making optimal nutrition accessible to every baby."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-blue-300"></div>
              <span className="text-blue-300 font-semibold">Our North Star</span>
              <div className="w-12 h-0.5 bg-blue-300"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Strategic Goals</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Our roadmap to achieving our mission and vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${goal.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                    <div className="text-white text-xl">{goal.icon}</div>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{goal.year}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {goal.title}
                </h3>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${goal.color} rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Commitments */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Commitments</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Promises we make to every baby, parent, and healthcare partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "Every product undergoes rigorous safety testing and quality checks.",
                icon: <FaShieldAlt />,
                color: "from-blue-600 to-blue-500"
              },
              {
                title: "Clinical Evidence",
                description: "All products backed by peer-reviewed research and clinical studies.",
                icon: <FaChartLine />,
                color: "from-slate-600 to-slate-500"
              },
              {
                title: "Compassionate Care",
                description: "Treating every donor and recipient with dignity and respect.",
                icon: <FaHandHoldingHeart />,
                color: "from-blue-500 to-blue-400"
              }
            ].map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${commitment.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                  <div className="text-3xl text-white">{commitment.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {commitment.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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
              { value: "50,000+", label: "Babies Impacted", icon: <FaBaby />, color: "from-blue-600 to-blue-500" },
              { value: "500+", label: "Hospital Partners", icon: <FaHospitalUser />, color: "from-slate-600 to-slate-500" },
              { value: "100%", label: "Human Milk Products", icon: <FaHeartbeat />, color: "from-blue-500 to-blue-400" },
              { value: "12+", label: "Research Publications", icon: <FaAward />, color: "from-slate-500 to-slate-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Be Part of Our Journey
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Together, we can ensure every premature baby gets the nutrition they deserve.
              Join us in our mission to nurture lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Partner With Us
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;