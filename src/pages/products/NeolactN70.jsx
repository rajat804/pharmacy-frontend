import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaShieldAlt, 
  FaFlask, 
  FaTemperatureHigh,
  FaTint,
  FaBaby,
  FaHeartbeat,
  FaLeaf,
  FaArrowRight,
  FaQuoteLeft,
  FaCertificate,
  FaMicroscope,
  FaClock,
  FaFire,
  FaVial,
  FaYoutube,
  FaListOl
} from 'react-icons/fa';
import { FaDroplet } from "react-icons/fa6";

const NeolactN70 = () => {
  const benefits = [
    {
      title: "Optimised Calorific Density",
      description: "Delivers minimum 70 kcal/100 ml without compromising feed volumes.",
      icon: <FaFire />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Natural Source of LCPUFA",
      description: "Essential long-chain polyunsaturated fatty acids for brain development.",
      icon: <FaBaby />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Retains Immunoglobulins & HMOs",
      description: "Preserves natural immune factors and human milk oligosaccharides.",
      icon: <FaShieldAlt />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Zero Maltodextrin",
      description: "No synthetic additives or starches – 100% pure human milk.",
      icon: <FaLeaf />,
      color: "from-blue-500 to-blue-400"
    }
  ];

  const nutritionalInfo = [
    { nutrient: "Energy", value: "70 kcal", per: "100 ml" },
    { nutrient: "Protein", value: "1.5 g", per: "100 ml" },
    { nutrient: "Lipids", value: "3.6 g", per: "100 ml" },
    { nutrient: "Carbohydrates", value: "7.2 g", per: "100 ml" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="NeoLact N70 Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Premium Product
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              NeoLact <span className="text-blue-200">N70</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Lyophilised Human Milk Powder – Complete nutrition for premature infants
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Nutrition for Infants Section - Left Text, Right Image */}
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
                <FaBaby className="text-blue-600 text-sm" />
                <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">Nutrition for Infants</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Complete & Optimum <br />
                <span className="text-blue-600">Newborn Nutrition</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Human milk is complete and optimum nutrition for all newborn babies as it provides all the 
                nutrients required for the healthy growth and development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mother's milk is an essential part of a healthy early childhood and it supports both the 
                physical and neuro-cognitive development of the baby.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Baby Nutrition"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaHeartbeat className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Optimal Growth</p>
                    <p className="text-xs text-blue-600">Neuro-cognitive support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Description - Left Image, Right Text */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="NeoLact N70 Product"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaCertificate className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Premium Quality</p>
                    <p className="text-xs text-blue-600">Lyophilised Technology</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
                <FaFlask className="text-blue-600 text-sm" />
                <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">Product Description</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                About <span className="text-blue-600">NeoLact N70</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Each NeoLact 70 sachet is packed with <strong className="text-gray-800">1.55 g of high-quality human milk</strong>, 
                  ready to be reconstituted with boiled and cooled drinking water.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  NeoLact 70 is specially formulated to deliver a minimum of <strong className="text-gray-800">70 kcal/100 ml</strong>, 
                  supplemented with vital proteins and lipids, ensuring it meets the precise nutritional needs of premature babies.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  An ideal choice when a mother's own milk is unavailable or when the baby requires extra calories 
                  to support healthy growth.
                </p>
                
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <p className="text-gray-800 font-semibold">
                    💙 Elevate your premature baby's nutrition with NeoLact 70, the ultimate solution for providing 
                    essential calories, proteins, and lipids in the absence of mother's milk or for enhanced growth requirements.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits & Mixing Guidelines - Left YouTube Video, Right Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - YouTube Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
                <FaYoutube className="text-red-600 text-sm" />
                <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">Mixing Guidelines</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">How to Prepare NeoLact N70</h3>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                  title="How to prepare NeoLact N70"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-500 text-sm mt-3 text-center group-hover:text-blue-600 transition-colors">
                Watch our step-by-step guide on preparing NeoLact N70
              </p>
            </motion.div>

            {/* Right Side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
                <FaCheckCircle className="text-blue-600 text-sm" />
                <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">Key Benefits</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose NeoLact N70?</h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group p-3 rounded-xl hover:bg-blue-50 transition-all duration-300">
                    <div className={`w-10 h-10 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                      <div className="text-white text-lg">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shelf Stable Badge */}
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-4 border border-blue-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
                    <FaTemperatureHigh className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Shelf Stable at Room Temperature</p>
                    <p className="text-xs text-blue-600">No refrigeration required for storage</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines Section */}
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
              <FaListOl className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Usage Guidelines</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How to Use <span className="text-blue-600">NeoLact N70</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Sterilize Container", instruction: "Feeding container should always be sterilised by placing in boiling water.", icon: <FaFlask /> },
              { step: "02", title: "Boil Water", instruction: "Boil drinking water for 5 minutes and allow to cool till it reaches lukewarm temperature.", icon: <FaTemperatureHigh /> },
              { step: "03", title: "Add Powder", instruction: "Transfer the entire content of one sachet (1.55 g) into a clean container.", icon: <FaVial /> },
              { step: "04", title: "Add Water", instruction: "Measure and pour 10 mL of clean lukewarm water into the same container.", icon: <FaDroplet /> },
              { step: "05", title: "Shake Well", instruction: "Close the container and shake well to dissolve the powder completely.", icon: <FaFlask /> },
              { step: "06", title: "Use Immediately", instruction: "Use the prepared feed immediately. Leftover feed if any, should be discarded.", icon: <FaClock /> },
              { step: "07", title: "Multiple Sachets", instruction: "Use multiple sachets and proportionate quantity of water for higher feed volumes.", icon: <FaCheckCircle /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-blue-600 text-lg group-hover:scale-110 transition-transform">{item.icon}</div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-600 transition-colors">{item.instruction}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Information Table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Nutritional Information</h2>
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
                  <th className="py-4 px-6 text-left font-semibold">Nutrient</th>
                  <th className="py-4 px-6 text-left font-semibold">Value</th>
                  <th className="py-4 px-6 text-left font-semibold">Per</th>
                </tr>
              </thead>
              <tbody>
                {nutritionalInfo.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'} border-b border-blue-100 transition-colors hover:bg-blue-50`}>
                    <td className="py-3 px-6 text-gray-700 font-medium">{item.nutrient}</td>
                    <td className="py-3 px-6 text-gray-600">{item.value}</td>
                    <td className="py-3 px-6 text-gray-500">{item.per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
              Ready to Order <span className="text-blue-600">NeoLact N70?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Contact us today to place an order or request more information about our products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300">
                Enquire Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1">
                Request a Sample
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeolactN70;