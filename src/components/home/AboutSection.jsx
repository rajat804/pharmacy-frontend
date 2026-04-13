import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, 
  FaShieldAlt, 
  FaTrophy, 
  FaHandHoldingHeart,
  FaFlask,
  FaHospitalUser,
  FaBaby,
  FaLeaf,
  FaStar,
  FaAward,
  FaQuoteLeft,
  FaChartLine,
  FaRegLightbulb
} from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    { value: "50,000+", label: "Babies Benefited", icon: <FaBaby className="text-3xl" />, color: "from-blue-600 to-blue-500" },
    { value: "500+", label: "Hospitals Served", icon: <FaHospitalUser className="text-3xl" />, color: "from-slate-600 to-slate-500" },
    { value: "1,00,000+", label: "Lives Supported", icon: <FaHeartbeat className="text-3xl" />, color: "from-blue-500 to-blue-400" },
    { value: "ISO 22000", label: "Certified Facility", icon: <FaShieldAlt className="text-3xl" />, color: "from-slate-500 to-slate-400" }
  ];

  const values = [
    {
      title: "Quality & Safety",
      description: "ISO 22000:2018 and GMP-certified human milk facility in India with rigorous safety protocols.",
      icon: <FaShieldAlt className="text-4xl" />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Clinical Excellence",
      description: "Clinically evidenced products trusted by leading neonatologists across India.",
      icon: <FaFlask className="text-4xl" />,
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "Compassionate Care",
      description: "Dedicated to supporting premature and at-risk sick babies with optimal nutrition.",
      icon: <FaHandHoldingHeart className="text-4xl" />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Innovation",
      description: "Segment-first products including lyophilised human milk and human milk-derived fortifiers.",
      icon: <FaRegLightbulb className="text-4xl" />,
      color: "from-slate-500 to-slate-400"
    }
  ];

  const milestones = [
    { year: "2018", title: "ISO 22000 Certified", description: "First human milk facility in India to achieve this certification" },
    { year: "2020", title: "Launched Lyophilised Milk", description: "Segment-first lyophilised human milk product" },
    { year: "2022", title: "100+ Hospitals", description: "Trusted by over 100 mother & child care hospitals" },
    { year: "2024", title: "Pan-India Presence", description: "Available across all major towns and cities" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
            <FaHeartbeat className="text-blue-600 text-lg" />
            <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Nurturing Lives Through<br />
            <span className="text-blue-600">100% Human Milk</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            We develop 100% human milk-derived products using proprietary technologies intended for babies 
            who do not have access to their mother's milk. We are the only ISO 22000:2018 and GMP-certified 
            human milk facility in India.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-md`}>
                <div className="text-white text-2xl">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Baby Care"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-500 rounded-full flex items-center justify-center shadow-md">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Award Winning</p>
                  <p className="text-xs text-gray-500">Excellence in Neonatal Care</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Dedicated to Supporting <br />
              <span className="text-blue-600">Premature Babies</span>
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Our product portfolio includes segment-first products such as lyophilised human milk and 
              human milk-derived fortifiers which are designed to meet specific nutritional challenges 
              faced by premature babies in their early life.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              These clinically evidenced products are used across many of the best mother & child care 
              hospitals and are available across all major towns and cities pan-INDIA. Having access to 
              these products assists healthcare professionals in optimizing the right nutritional choices 
              for babies in the NICU.
            </p>
            
            {/* Features List */}
            <div className="space-y-3">
              {[
                "100% Human milk-derived products",
                "ISO 22000:2018 & GMP certified facility",
                "Clinically evidenced and proven results",
                "Trusted by leading neonatologists"
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-all">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-3">Our Core Values</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full mb-3"></div>
            <p className="text-gray-500">What drives us every day to make a difference</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                  <div className="text-white">{value.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-10 text-white shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold mb-2">Our Journey</h3>
            <p className="text-blue-300">Milestones that define our commitment</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-400/30"></div>
                )}
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  {milestone.year.slice(-2)}
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {milestone.title}
                </h4>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-3">
            Consult our panel of Lactation Experts
          </h3>
          <p className="text-gray-500 mb-6">
            Get expert guidance for your breastfeeding journey
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Contact Our Experts
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Helpline Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-blue-600 font-semibold text-sm">One number, multiple benefits</p>
              <h4 className="text-3xl font-bold text-slate-800">1800 - 419 - 2199</h4>
              <p className="text-gray-500 text-sm mt-2">Free Breastfeeding Helpline</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">✓ Childbirth education program</span>
              <span className="flex items-center gap-1">✓ Postpartum counseling program</span>
              <span className="flex items-center gap-1">✓ Certified lactation experts</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;