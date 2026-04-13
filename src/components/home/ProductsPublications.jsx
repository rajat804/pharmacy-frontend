import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTint, 
  FaFlask, 
  FaPills, 
  FaArrowRight, 
  FaBookOpen,
  FaChartLine,
  FaBaby,
  FaHospitalUser,
  FaChevronRight,
  FaClipboardList,
  FaStar,
  FaGraduationCap
} from 'react-icons/fa';

const ProductsPublications = () => {
  const [activeTab, setActiveTab] = useState('products');

  const products = [
    {
      title: "Standardised & Pasteurised Human Milk",
      code: "PHBM 70",
      description: "Standardised, pasteurised, and ready-to-feed human milk for optimal neonatal nutrition.",
      icon: <FaTint className="text-4xl" />,
      features: ["Ready to feed", "Standardised composition", "Safety tested"],
      color: "from-[#1e3a5f] to-[#152c48]"
    },
    {
      title: "Lyophilised Human Milk",
      code: "N70 Prime | N70",
      description: "Freeze-dried human milk powder that preserves all nutritional benefits with extended shelf life.",
      icon: <FaFlask className="text-4xl" />,
      features: ["Extended shelf life", "Easy to store", "Preserves nutrients"],
      color: "from-[#152c48] to-[#0f2440]"
    },
    {
      title: "Human Milk-Derived Fortifiers",
      code: "MMF | MMF PLUS",
      description: "100% human milk-based fortifiers for enhanced growth and development of preterm infants.",
      icon: <FaPills className="text-4xl" />,
      features: ["Human milk based", "Enhanced nutrition", "Better tolerance"],
      color: "from-[#1e3a5f] to-[#152c48]"
    }
  ];

  const publications = [
    {
      title: "3-day lower NICU stay vs. bovine milk-based HMF",
      authors: "Kotha R, et al.",
      journal: "J. Pediatr. Neonatal Individ. Med. 2022;11(1)",
      description: "Higher weight gain and significantly lower feed intolerance vs. bovine-based HMF",
      icon: <FaChartLine />,
      impact: "Reduced Hospital Stay"
    },
    {
      title: "Adequate growth with no incidence of clinically significant adverse events",
      authors: "Pejavar RK, et al.",
      journal: "Indian J Child Health. 2020;7(1):33-35",
      description: "Demonstrated safe and effective growth outcomes in preterm infants",
      icon: <FaBaby />,
      impact: "Safe Growth"
    },
    {
      title: "100% Human Milk Diet Benefits in Preterm Infants",
      authors: "Senthilkumaran R, et al.",
      journal: "J. Trop. Pediatr. 2023;69(1)",
      description: "Comprehensive study on the advantages of exclusive human milk diet",
      icon: <FaHospitalUser />,
      impact: "Clinical Evidence"
    },
    {
      title: "Early fortification with human milk-derived fortifier led to quicker NICU discharge",
      authors: "Halkar MP, et al.",
      journal: "Perinatol. 2020;21: 57-63",
      description: "Early intervention with HMBF reduces hospitalization duration",
      icon: <FaClipboardList />,
      impact: "Early Discharge"
    },
    {
      title: "Premature infants intolerant to bovine milk-based HMF were rescued with human milk-derived fortifiers",
      authors: "Bharadwaj N, et al.",
      journal: "Indian J Pediatr. 2022;89(11):1131-1133",
      description: "Rescue therapy success in CMPA and intolerance cases",
      icon: <FaBookOpen />,
      impact: "Rescue Therapy"
    },
    {
      title: "Consensus of 100 neonatologists pan-India on Exclusive Human Milk Diet (EHMD)",
      authors: "Wazir S, et al.",
      journal: "J. Contemp. Pediatr. 2021;8:445-50",
      description: "National consensus on EHMD as optimal choice for preterm infants",
      icon: <FaGraduationCap />,
      impact: "Medical Consensus"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f5f7fa]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            How do you unlock the power of <br />
            <span className="text-[#1e3a5f]">human milk?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a5f] to-[#7ab3c8] mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md border border-[#e0e8f0] inline-flex">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'products'
                  ? 'bg-gradient-to-r from-[#1e3a5f] to-[#152c48] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#1e3a5f]'
              }`}
            >
              Our Products
            </button>
            <button
              onClick={() => setActiveTab('publications')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'publications'
                  ? 'bg-gradient-to-r from-[#1e3a5f] to-[#152c48] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#1e3a5f]'
              }`}
            >
              Indian Published Studies
            </button>
          </div>
        </div>

        {/* Products Section */}
        <AnimatePresence mode="wait">
          {activeTab === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-[#e0e8f0] hover:-translate-y-3 hover:border-[#1e3a5f]/20"
                >
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-br ${product.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="relative z-10">
                      <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {product.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-[#7ab3c8] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-[#7ab3c8] text-sm font-mono">{product.code}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                      {product.description}
                    </p>
                    <div className="space-y-2">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                          <div className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full group-hover:scale-125 transition-all"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 text-[#1e3a5f] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 group-hover:text-[#7ab3c8] transition-all">
                      Learn More <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Publications Section */}
          {activeTab === 'publications' && (
            <motion.div
              key="publications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Featured Study Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] rounded-3xl p-8 mb-10 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">Featured Study</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">Peer Reviewed</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#7ab3c8] transition-colors">
                      3-day lower NICU stay vs. bovine milk-based HMF
                    </h3>
                    <p className="text-[#7ab3c8] mb-2">
                      Higher weight gain and significantly lower feed intolerance vs. bovine-based HMF
                    </p>
                    <p className="text-sm text-white/70">Kotha R, et al. J. Pediatr. Neonatal Individ. Med. 2022;11(1)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-1 bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm">
                      -3 Days
                    </div>
                    <p className="text-sm text-[#7ab3c8]">Average NICU Stay Reduction</p>
                  </div>
                </div>
              </motion.div>

              {/* Publications Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {publications.slice(1).map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#e0e8f0] group hover:-translate-y-2 hover:border-[#1e3a5f]/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#e8eef5] to-[#dce5f0] rounded-xl flex items-center justify-center text-[#1e3a5f] text-xl group-hover:scale-110 group-hover:bg-[#1e3a5f] group-hover:text-white transition-all duration-300">
                        {pub.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-xs bg-[#e8eef5] text-[#1e3a5f] px-2 py-1 rounded-full group-hover:bg-[#1e3a5f] group-hover:text-white transition-all duration-300">
                            {pub.impact}
                          </span>
                        </div>
                        <h4 className="font-bold text-[#0a1628] mb-2 text-sm leading-tight group-hover:text-[#1e3a5f] transition-colors">
                          {pub.title}
                        </h4>
                        <p className="text-gray-600 text-xs mb-2 group-hover:text-gray-700 transition-colors">
                          {pub.description}
                        </p>
                        <p className="text-gray-400 text-xs font-mono group-hover:text-gray-500 transition-colors">
                          {pub.authors}
                        </p>
                        <p className="text-gray-400 text-xs mt-1 italic group-hover:text-gray-500 transition-colors">
                          {pub.journal}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#152c48] hover:from-[#152c48] hover:to-[#0f2440] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <FaBookOpen className="text-sm" />
                  View All Publications
                  <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#e8eef5] to-[#f0f4f9] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "150+", label: "NICU Nurses Surveyed" },
              { value: "100%", label: "Human Milk Diet Consensus" },
              { value: "100+", label: "Neonatologists Pan-India" },
              { value: "12+", label: "Published Studies" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="text-3xl font-bold text-[#1e3a5f] group-hover:text-[#7ab3c8] transition-all duration-300">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPublications;