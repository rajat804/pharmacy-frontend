import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaFilePdf, 
  FaDownload, 
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaBaby,
  FaShieldAlt,
  FaBrain,
  FaLungs,
  FaHeartbeat,
  FaHospitalUser,
  FaChartLine,
  FaExclamationTriangle,
  FaQuoteLeft,
  FaArrowRight,
  FaLeaf,
  FaTint,
  FaFlask
} from 'react-icons/fa';

const MakeRightChoice = () => {
  const pdfResources = [
    {
      title: "NeoLact MMF - 100% Human Milk Derived Fortifier",
      description: "Learn about the only 100% human milk-derived fortifier for premature babies.",
      url: "https://www.neolacta.com/wp-content/uploads/2023/12/neolacta-mmf-1.pdf",
      icon: <FaFlask />,
      color: "from-blue-600 to-blue-500",
      fileSize: "PDF • 1.2 MB"
    },
    {
      title: "Make the Right Choice for Your Baby",
      description: "Understanding why bovine milk products may cause complications.",
      url: "https://www.neolacta.com/wp-content/uploads/2023/12/MAKE-THE-RIGHT-CHOICE-FOR-BABY.pdf",
      icon: <FaBaby />,
      color: "from-pink-500 to-pink-400",
      fileSize: "PDF • 0.8 MB"
    },
    {
      title: "The Risks of Bovine Milk Products",
      description: "Detailed analysis of NEC, Sepsis and other complications.",
      url: "https://www.neolacta.com/wp-content/uploads/2023/12/MAKE-THE-RIGHT-CHOICE-FOR-BABY-2.pdf",
      icon: <FaExclamationTriangle />,
      color: "from-orange-500 to-orange-400",
      fileSize: "PDF • 1.0 MB"
    },
    {
      title: "Benefits of Exclusive Human Milk Diet",
      description: "How human milk diet leads to higher IQ and stronger immunity.",
      url: "https://www.neolacta.com/wp-content/uploads/2023/12/MAKE-THE-RIGHT-CHOICE-FOR-BABY-3.pdf",
      icon: <FaBrain />,
      color: "from-green-500 to-green-400",
      fileSize: "PDF • 0.9 MB"
    }
  ];

  const bovineRisks = [
    { risk: "Allergies", icon: <FaExclamationTriangle />, color: "from-red-500 to-red-400" },
    { risk: "Indigestion", icon: <FaHeartbeat />, color: "from-orange-500 to-orange-400" },
    { risk: "Life-threatening diseases", icon: <FaHospitalUser />, color: "from-red-600 to-red-500" },
    { risk: "Hospital re-admissions", icon: <FaHospitalUser />, color: "from-orange-600 to-orange-500" },
    { risk: "Lower intelligence", icon: <FaBrain />, color: "from-red-400 to-red-300" }
  ];

  const riskStats = [
    { condition: "NEC", increase: "12%", color: "from-red-600 to-red-500" },
    { condition: "SURGICAL NEC", increase: "21%", color: "from-red-700 to-red-600" },
    { condition: "SEPSIS", increase: "18%", color: "from-orange-600 to-orange-500" }
  ];

  const humanMilkBenefits = [
    { benefit: "Higher IQ", icon: <FaBrain />, color: "from-blue-600 to-blue-500" },
    { benefit: "Stronger Immunity", icon: <FaShieldAlt />, color: "from-green-600 to-green-500" },
    { benefit: "Lower risk of Diabetes", icon: <FaHeartbeat />, color: "from-blue-500 to-blue-400" },
    { benefit: "Lower risk of Obesity", icon: <FaLeaf />, color: "from-green-500 to-green-400" },
    { benefit: "Lower risk of Asthma", icon: <FaLungs />, color: "from-cyan-500 to-cyan-400" },
    { benefit: "Lower risk of Hypertension", icon: <FaHeart />, color: "from-pink-500 to-pink-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Baby"
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
              Important Decision
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Make the <span className="text-blue-300">'RIGHT CHOICE'</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">
              for Your Baby
            </h2>
            <div className="inline-block bg-red-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-red-400/50">
              <p className="text-xl font-bold text-red-300">Say 'NO' to bovine milk products</p>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* PDF Resources Section */}
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
              <FaFilePdf className="text-red-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Resources</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Informational <span className="text-blue-600">PDF Resources</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Download these resources to learn more about making the right choice for your baby's nutrition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {pdfResources.map((pdf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${pdf.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                    <div className="text-white text-2xl">{pdf.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {pdf.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">{pdf.description}</p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <span className="text-xs text-gray-400">{pdf.fileSize}</span>
                      <div className="flex gap-2">
                        <a
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                        >
                          <FaEye className="text-xs" /> Preview
                        </a>
                        <a
                          href={pdf.url}
                          download
                          className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                        >
                          <FaDownload className="text-xs" /> Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bovine Milk Risks Section */}
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
                <FaTimesCircle className="text-red-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">The Problem</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Bovine Milk-Derived Products <br />
                <span className="text-red-600">May Cause Complications</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mb-6"></div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {bovineRisks.map((risk, index) => (
                  <div key={index} className={`bg-gradient-to-br ${risk.color} text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2`}>
                    {risk.icon}
                    <span className="text-sm font-medium">{risk.risk}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 rounded-2xl p-5 border border-red-200">
                <p className="text-red-800 text-sm leading-relaxed">
                  <strong className="font-bold">Did You Know?</strong> Protein and other ingredients of infant formula 
                  are vastly different from human milk, which may result in allergy, indigestion or even 
                  life-threatening diseases such as NEC (swelling in babies' intestines, which may require surgery).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Risk Increase Statistics</h3>
              <div className="space-y-4">
                {riskStats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 font-medium">{stat.condition}</span>
                      <span className={`text-${stat.color.split('-')[1]}-600 font-bold`}>+{stat.increase}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.increase }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                      ></motion.div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      For every 10% increase in bovine milk, risk increases manifold
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  ⚠️ Say <strong className="text-red-600">'No'</strong> to bovine milk products
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Human Milk Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Happy baby"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
                <FaCheckCircle className="text-green-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">The Solution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Exclusive <span className="text-green-600">Human Milk Diet</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 mb-6"></div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {humanMilkBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 group">
                    <div className={`w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <div className="text-white text-sm">{benefit.icon}</div>
                    </div>
                    <span className="text-slate-600 text-sm group-hover:text-green-600 transition-colors">
                      {benefit.benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 rounded-2xl p-5 border border-green-200 mt-4">
                <p className="text-green-800 text-sm leading-relaxed">
                  <strong className="font-bold">The 'choice' that you make Today</strong> defines the Tomorrow of your baby.
                  Exclusive Human Milk Diet lowers your baby's risk of chronic diseases.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our <span className="text-blue-600">Impact</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              When mother's own milk (MOM) is not available,  range of 100% human milk-based products has benefited
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">95,000+</div>
              <p className="text-slate-700 font-semibold">Babies Benefited</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200"
            >
              <div className="text-5xl font-bold text-green-600 mb-2">450+</div>
              <p className="text-slate-700 font-semibold">Hospitals Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* World-Class Facility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-10 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">World-Class Processing Facility</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="font-semibold">ISO 22000</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="font-semibold">GMP Certified</span>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              An ISO 22000-2005 and GMP certified company committed to quality and safety
            </p>
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
              Make the Informed Choice Today
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Download our informational PDFs to learn more about why 100% human milk products 
              are the right choice for your baby's health and development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Download All Resources
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MakeRightChoice;