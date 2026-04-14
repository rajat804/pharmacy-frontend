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
  FaQuoteLeft,
  FaCertificate,
  FaMicroscope,
  FaClock,
  FaFire,
  FaVial,
  FaListOl,
  FaExclamationTriangle
} from 'react-icons/fa';
import { FaDroplet } from "react-icons/fa6";

const NeolactN70Prime = () => {
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
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "Retains Immunoglobulins & HMOs",
      description: "Preserves natural immune factors and human milk oligosaccharides.",
      icon: <FaShieldAlt />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Zero Maltodextrin",
      description: "No synthetic additives or starches – 100% pure human milk.",
      icon: <FaLeaf />,
      color: "from-slate-500 to-slate-400"
    }
  ];

  const nutritionalInfo = [
    { nutrient: "Energy", value: "70 kcal", per: "100 ml" },
    { nutrient: "Protein", value: "1.5 g", per: "100 ml" },
    { nutrient: "Lipids", value: "3.6 g", per: "100 ml" },
    { nutrient: "Carbohydrates", value: "7.2 g", per: "100 ml" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="NeoLact N70 Prime Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Premium Product
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              NeoLact <span className="text-blue-300">N70 Prime</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Lyophilised Human Milk Powder – Premium nutrition for premature infants
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Nutrition for Infants Section - Left Text, Right Image */}
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
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Nutrition for Infants</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Complete & Optimum <br />
                <span className="text-blue-600">Newborn Nutrition</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Human milk is complete and optimum nutrition for all newborn babies as it provides all the 
                nutrients required for the healthy growth and development.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mother's milk is an essential part of a healthy early childhood and it supports both the 
                physical and neuro-cognitive development of the baby.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each sachet of <strong className="text-slate-800">NeoLact 70 Prime</strong> contains <strong className="text-slate-800">0.75 g human milk</strong> for 
                reconstitution with boiled and cooled drinking water. This product provides minimum 
                <strong className="text-slate-800"> 70 kcal/100 ml</strong> along with essential proteins and lipids to meet the 
                nutritional requirements of a premature baby.
              </p>
              <div className="mt-4 bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <p className="text-slate-800 text-sm">
                  💙 NeoLact 70 Prime can be used when mother's own milk is not available, or the baby 
                  needs extra calories for growth.
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
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Baby Nutrition"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaHeartbeat className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Premium Formula</p>
                    <p className="text-xs text-gray-500">70 kcal/100 ml</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              Why Choose <span className="text-blue-600">NeoLact N70 Prime?</span>
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

          {/* Shelf Stable Badge */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-slate-100 to-white rounded-2xl p-4 border border-gray-200 inline-flex items-center gap-3 shadow-md">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                <FaTemperatureHigh className="text-white text-lg" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">Shelf Stable at Room Temperature</p>
                <p className="text-xs text-gray-500">No refrigeration required for storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-20 bg-white">
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
                <h3 className="text-xl font-bold text-amber-800 mb-3">Important Note</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-amber-700">
                    <FaCheckCircle className="text-amber-600 text-sm mt-0.5" />
                    <span>Always maintain hygienic condition while preparing and handling human milk.</span>
                  </li>
                  <li className="flex items-start gap-2 text-amber-700">
                    <FaCheckCircle className="text-amber-600 text-sm mt-0.5" />
                    <span>Use freshly prepared feeds each time.</span>
                  </li>
                  <li className="flex items-start gap-2 text-amber-700">
                    <FaCheckCircle className="text-amber-600 text-sm mt-0.5" />
                    <span>Always mix with clean sterile water as per guidelines before feeding the baby.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Guidelines Section */}
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
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Usage Guidelines</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How to Use <span className="text-blue-600">NeoLact N70 Prime</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Sterilize Container", instruction: "Feeding container should always be sterilised by placing in boiling water.", icon: <FaFlask /> },
              { step: "02", title: "Boil Water", instruction: "Boil drinking water for 5 minutes and allow to cool till it reaches lukewarm temperature.", icon: <FaTemperatureHigh /> },
              { step: "03", title: "Add Powder", instruction: "Transfer the entire content of one sachet (0.75 g) into a clean container.", icon: <FaVial /> },
              { step: "04", title: "Add Water", instruction: "Measure and pour 5 mL of clean lukewarm water into the same container.", icon: <FaDroplet /> },
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
                className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-blue-600 text-lg">{item.icon}</div>
                      <h3 className="font-semibold text-slate-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.instruction}</p>
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
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Nutritional Information</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 mt-3">Per 100 ml prepared feed (1 sachet + 5 ml water)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <table className="w-full">
              <thead className="bg-gradient-to-r from-slate-700 to-slate-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Nutrient</th>
                  <th className="py-4 px-6 text-left font-semibold">Value</th>
                  <th className="py-4 px-6 text-left font-semibold">Per</th>
                </tr>
              </thead>
              <tbody>
                {nutritionalInfo.map((item, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}>
                    <td className="py-3 px-6 text-slate-700 font-medium">{item.nutrient}</td>
                    <td className="py-3 px-6 text-gray-600">{item.value}</td>
                    <td className="py-3 px-6 text-gray-500">{item.per}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">* 1 sachet = 0.75 g powder</p>
          </div>
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
              Ready to Order NeoLact N70 Prime?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Contact us today to place an order or request more information about our premium product.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Enquire Now
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300">
                Request a Sample
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NeolactN70Prime;