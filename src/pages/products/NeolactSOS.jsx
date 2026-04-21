import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaShieldAlt, 
  FaFlask, 
  FaTemperatureHigh,
  FaBaby,
  FaHeartbeat,
  FaLeaf,
  FaFileDownload,
  FaClock,
  FaExclamationTriangle,
  FaSyringe,
  FaVial,
  FaWeight,
  FaUserMd,
  FaBookOpen,
  FaChartLine,
  FaTable,
  FaInfoCircle
} from 'react-icons/fa';

const NeolactSOS = () => {
  const dosageData = [
    { weight: "< 1.5 kg", dose: "0.2 ml", maxDoses: "4" },
    { weight: "1.5 - 2 kg", dose: "0.3 ml", maxDoses: "4" },
    { weight: "2 - 2.5 kg", dose: "0.5 ml", maxDoses: "4" },
    { weight: "2.5 - 3 kg", dose: "1.0 ml", maxDoses: "4" },
    { weight: "≥ 3 kg (up to 6 month)", dose: "2.0 ml", maxDoses: "6" }
  ];

  const benefits = [
    {
      title: "Optimal Pain Relief",
      description: "Standardised to provide effective analgesic effect for procedural pain.",
      icon: <FaHeartbeat />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Sterile Formulation",
      description: "Ensures maximum safety for your little one.",
      icon: <FaShieldAlt />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Single-Use",
      description: "Designed for caregiver compliance and hygiene.",
      icon: <FaVial />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Clinically Proven",
      description: "Backed by 2016 Cochrane systematic review.",
      icon: <FaChartLine />,
      color: "from-blue-500 to-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      
      {/* Hero Section with Custom Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="NeoLact SOS Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="text-4xl mb-2">💉</div>
                <h3 className="text-blue-200 text-sm uppercase tracking-wider mb-2">Every prick • Every injection • Every tube</h3>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">PAIN is <span className="text-blue-200">real</span>.</h2>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
                Neolact<span className="text-blue-200">®</span> <span className="text-blue-200">SOS</span>
              </h1>
              <p className="text-xl text-white/80 mb-3">24% w/v Sucrose Oral Solution</p>
              <p className="text-md text-white/60 mb-6">Sucrose 24% w/v Oral Solution (Sterile)</p>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm">Oral Solution for Pediatric Use Only</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-2xl opacity-50"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
                      <FaSyringe className="text-white text-5xl mx-auto" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Neolact® SOS</h2>
                  <p className="text-white/80 text-sm">24% w/v Sucrose Oral Solution</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-200">24%</div>
                      <div className="text-xs text-white/60">Sucrose w/v</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-200">2ml</div>
                      <div className="text-xs text-white/60">Single-use</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-200">Sterile</div>
                      <div className="text-xs text-white/60">Formulation</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Scientific Evidence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
                <FaBookOpen className="text-blue-600 text-sm" />
                <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">Scientific Evidence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Sucrose 24% w/v <br />
                <span className="text-blue-600">Oral Solution</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mb-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <p className="text-gray-800 font-semibold text-lg mb-2">📖 Cochrane Systematic Review 2016</p>
                <p className="text-gray-600 leading-relaxed">
                  A 2016 Cochrane systematic review found that <strong className="text-blue-600">24% w/v Sucrose</strong> is an ideal and 
                  effective analgesic for procedural pain relief in babies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-blue-50/20 to-white p-8 hover:shadow-blue-200/30 transition-all duration-300">
                <div className="text-center">
                  <FaChartLine className="text-blue-600 text-6xl mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Clinically Proven Efficacy</h3>
                  <p className="text-gray-500 text-sm">Trusted by healthcare professionals worldwide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Neolact SOS Section - Left Text, Right Image */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
                <FaInfoCircle className="text-blue-600 text-sm" />
                <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">Why Neolact® SOS?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-blue-600">Neolact® SOS?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 mb-6 hover:shadow-md transition-all duration-300">
                <p className="text-blue-800 font-semibold">
                  ⚕️ Babies often endure painful procedures, on average <strong className="text-blue-900">12 times a day</strong>.
                </p>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Neolact® SOS is a sterile, single-use, <strong className="text-gray-800">2 ml standardised solution</strong> designed for 
                prophylactic analgesia in babies.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                It is an oral solution intended for use by health professionals only and <strong className="text-gray-800">not intended for home use</strong>.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300 text-sm">
                  <FaFileDownload className="text-sm" />
                  Download Product Data Card
                </button>
                <button className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 bg-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1">
                  <FaFileDownload className="text-sm" />
                  Download Patient Information Leaflet
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-blue-50/20 to-white p-8 group">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="NeoLact SOS Product"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[180px] border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaSyringe className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Single-use</p>
                    <p className="text-xs text-blue-600">2ml Sterile</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <FaCheckCircle className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Key Benefits</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-blue-600">Neolact® SOS?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Composition & Storage */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-blue-100 shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <FaFlask className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Composition</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600"><strong className="text-gray-800">Sucrose IP</strong> - 24.0% w/v</p>
                <p className="text-gray-600"><strong className="text-gray-800">Methylparaben IP</strong> - 0.022% w/v <span className="text-gray-400 text-xs">(As preservative)</span></p>
                <p className="text-gray-600"><strong className="text-gray-800">Potassium Sorbate IP</strong> - 0.073% w/v <span className="text-gray-400 text-xs">(As preservative)</span></p>
                <p className="text-gray-600"><strong className="text-gray-800">Sterile Aqueous Vehicle</strong> q.s.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-blue-100 shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center shadow-md">
                  <FaTemperatureHigh className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Storage</h3>
              </div>
              <p className="text-gray-600">
                Store below <strong className="text-gray-800">30°C</strong>. Protect from light and heat. 
                <strong className="text-gray-800"> Do not freeze</strong>.
              </p>
              <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                <p className="text-blue-700 text-sm">
                  💡 The combipack pouch of 7 ampoules once opened, can be stored at room temperature below 30°C.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dosage Guide Table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaTable className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Dosage Guide</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Recommended <span className="text-blue-600">Dosage</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-blue-100"
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Infant Weight</th>
                  <th className="py-4 px-6 text-left font-semibold">Dose per Procedure</th>
                  <th className="py-4 px-6 text-left font-semibold">Max Doses/Day</th>
                </tr>
              </thead>
              <tbody>
                {dosageData.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'} border-b border-blue-100 transition-colors hover:bg-blue-50`}>
                    <td className="py-3 px-6 text-gray-700 font-medium">{item.weight}</td>
                    <td className="py-3 px-6 text-gray-600">{item.dose}</td>
                    <td className="py-3 px-6 text-gray-600">{item.maxDoses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Directions for Use */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaClock className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Directions for Use</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How to <span className="text-blue-600">Use</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300">
              <ol className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Tear one <strong>twist tip ampoule</strong> from the combipack pouch.</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">To open the twist tip ampoule, <strong>twist off the cap</strong>.</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Introduce the tip of the twist tip ampoule into the infant's mouth and administer dose onto the <strong>anterior portion</strong> and dispense solution slowly.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contraindications & Caution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <FaExclamationTriangle className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Contraindications</h3>
              </div>
              <p className="text-blue-700 leading-relaxed">
                Babies with <strong>swallowing problems</strong>, <strong>Cardiorespiratory instability</strong> or any other 
                <strong> major digestive pathology</strong> requiring to keep an empty stomach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center shadow-md">
                  <FaInfoCircle className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Caution</h3>
              </div>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5" />
                  <span>The product should be used under the direction of a Physician.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5" />
                  <span>It is not to be injected.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5" />
                  <span>Use a fresh twist tip ampoule for each dose.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5" />
                  <span>Contents of a twist tip ampoule once opened should be used immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 text-sm mt-0.5" />
                  <span>Unopened twist tip ampoule should be stored in the pouch.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Order <span className="text-blue-600">Neolact® SOS?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Contact us today to place an order or request more information about our pain relief solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300">
                Enquire Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1">
                Download Product Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeolactSOS;