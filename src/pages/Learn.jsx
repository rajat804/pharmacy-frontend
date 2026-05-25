import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBaby, FaMicroscope, FaHeartbeat, FaBrain,
  FaBone, FaLungs, FaShieldAlt, FaCheckCircle,
  FaQuoteLeft, FaRegSmile, FaTrophy, FaAward,
  FaBookOpen, FaFlask, FaStethoscope,
  FaHospitalUser, FaUserMd
} from 'react-icons/fa';
import { MdScience, MdVerified, MdLocalHospital, MdHealthAndSafety } from 'react-icons/md';

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* Hero Section */}
      <div className="relative min-h-[40vh] sm:min-h-[45vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Learn with Neoverse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-800/90" />
        </div>

        <div className="relative z-20 min-h-[40vh] sm:min-h-[45vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full py-12 sm:py-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-cyan-400/30">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span className="text-cyan-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Knowledge Hub</span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6"
              >
                Learn with
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Neoverse
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl"
              >
                Understanding neonatal nutrition and the science behind specialized care for premature infants.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section - Why NeoPepti HMF */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-600/10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <FaBaby className="text-blue-600 text-sm sm:text-base" />
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Educational Resource</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6">
              Why NeoPepti HMF?
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-cyan-400/20 overflow-hidden mb-8 sm:mb-12"
          >
            <div className="p-6 sm:p-8 md:p-10">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                NeoPepti HMF is specially designed for babies in the NICU, particularly those who need specialized nutrition for optimal growth and development.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <FaBaby className="text-cyan-500 text-xl sm:text-2xl" />
                  Key Indications
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white text-xs sm:text-sm" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                      <strong className="text-slate-800">Born before 32 weeks</strong> who need help catching up on mineral absorption
                    </span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheckCircle className="text-white text-xs sm:text-sm" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg">
                      <strong className="text-slate-800">Weighing under 1.8 kg</strong> who require more calories than plain breast milk provides
                    </span>
                  </li>
                </ul>
              </div>

              {/* Important Medical Insight */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-5 sm:p-6 md:p-8 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaQuoteLeft className="text-amber-600 text-sm sm:text-base" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-800 mb-2 sm:mb-3">Important Medical Insight</h3>
                    <p className="text-amber-700 text-sm sm:text-base md:text-lg leading-relaxed">
                      However, only Breastmilk is not enough for catch up growth of extremely preterm infants. 
                      Mother's milk is good enough to provide the required carbohydrate and fats but lacks the 
                      right amount of protein for linear and brain growth. Hence additional protein is needed 
                      to be added to breast milk to meet the caloric and protein requirement of these babies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why This Matters */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <FaHeartbeat className="text-cyan-500 text-xl sm:text-2xl" />
                  Why This Matters
                </h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  The first few weeks of life are critical for brain development and overall growth. 
                  Preterm infants have higher nutritional demands that cannot be met by breast milk alone.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <FaBrain className="text-white text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Brain Development</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Optimized protein content for linear and brain growth</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <FaBone className="text-white text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Stronger Bones</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Essential minerals for bone development and catch-up growth</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <FaFlask className="text-white text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Balanced Nutrition</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Complete nutritional profile for optimal growth</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <FaShieldAlt className="text-white text-lg sm:text-xl" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Easy Digestibility</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Gentle on sensitive developing guts</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
              Key Benefits of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                NeoPepti HMF
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Specially formulated for preterm infants born before 32 weeks",
                "Provides essential minerals for proper absorption and bone health",
                "Supports catch-up growth with optimal caloric density",
                "Bridges the protein gap in breast milk for linear growth",
                "Promotes brain development with balanced nutrition",
                "Easy to digest and gentle on developing digestive systems"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <FaCheckCircle className="text-cyan-500 text-sm sm:text-base flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scientific Backing Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <MdScience className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">Scientifically Backed</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                NeoPepti HMF is developed based on international guidelines and clinical research, 
                ensuring that every nutrient serves a purpose in supporting the critical early development 
                of premature infants.
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "When should NeoPepti HMF be used?",
                  a: "NeoPepti HMF is recommended for preterm infants born before 32 weeks or weighing under 1.8 kg who need additional nutrition beyond what breast milk provides."
                },
                {
                  q: "Is breast milk alone sufficient for preterm babies?",
                  a: "While breast milk provides essential carbohydrates and fats, it lacks adequate protein for optimal linear and brain growth in extremely preterm infants. Additional protein supplementation is necessary."
                },
                {
                  q: "How does NeoPepti HMF support brain development?",
                  a: "NeoPepti HMF provides optimized protein content and essential nutrients that are crucial for brain development during the critical early weeks of life."
                },
                {
                  q: "Is NeoPepti HMF easy to digest?",
                  a: "Yes, NeoPepti HMF is specially formulated to be gentle on developing digestive systems, making it well-tolerated by premature infants."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3 flex items-start gap-2">
                    <FaQuoteLeft className="text-cyan-500 text-sm sm:text-base flex-shrink-0 mt-1" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pl-5 sm:pl-6 md:pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400" />
<div
  className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  }}
/>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Have More Questions?
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 leading-relaxed px-2">
              Our team of neonatal nutrition experts is here to help you understand how NeoPepti HMF 
              can benefit your smallest patients.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Our Experts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Learn;