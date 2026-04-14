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
  FaQuoteLeft,
  FaCertificate,
  FaMicroscope,
  FaClock,
  FaFire,
  FaVial,
  FaListOl,
  FaExclamationTriangle,
  FaFileDownload,
  FaYoutube,
  FaUserMd,
  FaVirus,
  FaBacterium,
  FaLungs,
  FaHeart,
  FaWeight
} from 'react-icons/fa';

const NeolactMMFPLUS = () => {
  const benefits = [
    {
      title: "2.2x Higher Proteins",
      description: "Enhanced protein content to meet higher nutritional needs of premature babies.",
      icon: <FaFire />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Immunoglobulins",
      description: "Provides natural antibodies for immune protection.",
      icon: <FaShieldAlt />,
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "Human Milk Oligosaccharides",
      description: "Supports gut health and beneficial bacteria growth.",
      icon: <FaMicroscope />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Lactoferrins",
      description: "Natural antimicrobial and anti-inflammatory properties.",
      icon: <FaHeartbeat />,
      color: "from-slate-500 to-slate-400"
    }
  ];

  const conditions = [
    { name: "Broncho-pulmonary Dysplasia", icon: <FaLungs />, color: "from-blue-600 to-blue-500" },
    { name: "Cardiac anomalies", icon: <FaHeart />, color: "from-slate-600 to-slate-500" },
    { name: "Refractory Weight gain", icon: <FaWeight />, color: "from-blue-500 to-blue-400" }
  ];

  const protections = [
    { name: "NEC Protection", icon: <FaShieldAlt />, color: "from-blue-600 to-blue-500" },
    { name: "Sepsis Protection", icon: <FaVirus />, color: "from-slate-600 to-slate-500" },
    { name: "Other Complications", icon: <FaBacterium />, color: "from-blue-500 to-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="NeoLact MMF PLUS Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
                Premium Fortifier
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                NeoLact <span className="text-blue-300">MMF PLUS</span>
              </h1>
              <p className="text-xl text-white/80 mb-6">Mother's Milk Factor made from 100% Human Milk</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20">Higher Protein Formula</span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20">2.2x More Proteins</span>
                <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20">100% Human Milk</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <span className="text-white text-4xl font-bold">MMF+</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">NeoLact MMF PLUS</h2>
                  <p className="text-white/80 text-sm">Mother's Milk Factor (Higher Nutritional Needs)</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-300">2.2x</div>
                      <div className="text-xs text-white/60">Higher Proteins</div>
                    </div>
                    <div className="w-px h-8 bg-white/20"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-300">100%</div>
                      <div className="text-xs text-white/60">Human Milk</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Main Content Section - Left Text, Right Image */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
                <FaBaby className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Specialized Nutrition</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Meeting Higher <span className="text-blue-600">Nutritional Needs</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Premature babies have special nutritional needs. Compared to term babies, premature babies 
                need more energy to grow. Premature babies grow at a rapid pace and therefore need more 
                protein, minerals and other nutrients. They would need to consume more breast milk than 
                their tiny stomach could hold in order to get the proper nutrition.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                These additional nutrients if are not given, may cause growth deficits which are difficult 
                to compensate at later stages of life. Hence, doctors may decide to add a fortifier to your 
                breast milk for your premature infant's feedings.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                This is especially true for babies diagnosed with the following conditions:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {conditions.map((condition, index) => (
                  <div key={index} className={`bg-gradient-to-br ${condition.color} text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-sm`}>
                    {condition.icon}
                    <span>{condition.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <p className="text-slate-800 text-sm leading-relaxed">
                  These conditions indicate overall catabolic status and require higher nutritional intakes 
                  to compensate for the increased nutritional expenditure. <strong>MMF PLUS provides 2.2 times 
                  higher Proteins</strong> to help meet these enhanced nutritional needs.
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
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="NeoLact MMF PLUS Product"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaCertificate className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">2.2x Protein</p>
                    <p className="text-xs text-gray-500">Enhanced Formula</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NeoLact MMF PLUS Section - Left Image, Right Text */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8">
                <img 
                  src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Baby Nutrition"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
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
                <FaUserMd className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Premium Fortifier</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                NeoLact MMF PLUS <br />
                <span className="text-blue-600">(Mother's Milk Factor)</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                NeoLact MMF PLUS (Mother's Milk Factor) is made exclusively from 100% human milk. It provides 
                higher proteins and calories to meet the unique nutritional requirements of babies with 
                specific conditions.
              </p>
              
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-4">
                <FaFileDownload className="text-sm" />
                Download Product Data Card
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaYoutube className="text-red-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Video Resource</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Learn About <span className="text-blue-600">NeoLact MMF PLUS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl aspect-video"
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
              title="NeoLact MMF PLUS Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <FaCheckCircle className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Key Benefits</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose <span className="text-blue-600">NeoLact MMF PLUS?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Protection Section */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Provides Multiple Benefits Unique to Human Milk</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {protections.map((protection, index) => (
                <div key={index} className={`bg-gradient-to-br ${protection.color} text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2`}>
                  {protection.icon}
                  <span className="font-semibold">{protection.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-green-50 rounded-2xl p-4 border border-green-200 inline-block">
              <p className="text-slate-800 font-semibold">✓ Maltodextrin-free ensures excellent feed tolerance when compared to bovine milk-based HMFs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & Storage */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                  <FaFlask className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Ingredients</h3>
              </div>
              <p className="text-gray-600">
                Made from <strong className="text-blue-600">100% human milk</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-500 rounded-xl flex items-center justify-center">
                  <FaTemperatureHigh className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Storage</h3>
              </div>
              <p className="text-gray-600">
                Store in a cool and dry place away from sunlight. <strong className="text-slate-800">Do not refrigerate/freeze</strong>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mixing Guidelines */}
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
              <FaListOl className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Mixing Guidelines</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How to Mix <span className="text-blue-600">NeoLact MMF PLUS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl mb-4 shadow-md">
                <span className="text-white text-3xl font-bold">1g</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Standard Mix</h3>
              <p className="text-gray-600 text-lg mb-2">
                Mix <strong className="text-blue-600">1 gm sachet</strong> with <strong className="text-blue-600">25 mL mother's milk</strong>
              </p>
              <p className="text-sm text-gray-500">For higher volume feeds use multiples of mixing guidelines.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
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
              <FaClock className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Usage Guidelines</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How to <span className="text-blue-600">Use</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-md">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span className="text-gray-600">Pour the <strong>recommended volume of breast milk</strong> into a sterile container.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span className="text-gray-600">Add the <strong>entire contents of the sachet</strong> into the container.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span className="text-gray-600"><strong>Stir well</strong> to ensure powder is completely dissolved before feeding.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span className="text-gray-600">Make a note of the <strong>time of feed preparation</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <span className="text-gray-600">Use the feed <strong>within 8 hours of preparation</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">6</span>
                  </div>
                  <span className="text-gray-600">If excess feed is leftover, keep in <strong>NICU temperature (22 to 26 degrees)</strong> and use within 8 hours.</span>
                </li>
              </ol>
              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-amber-700 text-sm font-medium">
                  ⚠️ Do not store either the sachets / mixed feed in the refrigerator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Instructions */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200 shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <FaExclamationTriangle className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">Special Instructions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-amber-700">
                    <FaCheckCircle className="text-amber-600 text-sm mt-0.5" />
                    <span>Always maintain hygienic condition while preparing and handling human milk.</span>
                  </li>
                  <li className="flex items-start gap-2 text-amber-700">
                    <FaCheckCircle className="text-amber-600 text-sm mt-0.5" />
                    <span>Do not add water.</span>
                  </li>
                  <li className="flex items-start gap-2 text-amber-700">
                    <FaCheckCircle className="text-amber-600 text-sm mt-0.5" />
                    <span>Do not microwave the product.</span>
                  </li>
                </ul>
              </div>
            </div>
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
              Ready to Order NeoLact MMF PLUS?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Contact us today to place an order or request more information about our premium human milk fortifier.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Enquire Now
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeolactMMFPLUS;