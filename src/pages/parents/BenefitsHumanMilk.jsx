import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaShieldAlt, 
  FaLungs, 
  FaBaby,
  FaBrain,
  FaHandHoldingHeart,
  FaSmile,
  FaRibbon,
  FaWeight,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaLeaf,
  FaTint,
  FaVirus,
  FaAppleAlt,
  FaBookOpen,
  FaFlask
} from 'react-icons/fa';

const BenefitsHumanMilk = () => {
  const babyBenefits = [
    {
      title: "Improved Immune Function",
      description: "Human milk contains antibodies, white blood cells, and other immune factors that help to protect babies from infections. Breastfed babies are less likely to develop ear infections, respiratory infections, and diarrhea.",
      icon: <FaShieldAlt />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Reduced Risk of Allergies & Asthma",
      description: "Breast milk contains special proteins that help to promote the development of the baby's immune system. Breastfed babies are less likely to develop allergies and asthma.",
      icon: <FaLungs />,
      color: "from-green-600 to-green-500"
    },
    {
      title: "Reduced Risk of Obesity & Chronic Diseases",
      description: "Breastfed babies are less likely to become obese later in life. They are also less likely to develop chronic diseases such as type 2 diabetes and heart disease.",
      icon: <FaAppleAlt />,
      color: "from-orange-500 to-orange-400"
    },
    {
      title: "Improved Cognitive Development",
      description: "Breastfeeding has been shown to improve cognitive development in babies. Breastfed babies tend to perform better on intelligence tests and have better language skills.",
      icon: <FaBrain />,
      color: "from-purple-600 to-purple-500"
    },
    {
      title: "Stronger Emotional Bond",
      description: "Breastfeeding helps to strengthen the bond between mother and baby. It is a special time that mothers and babies can share.",
      icon: <FaHandHoldingHeart />,
      color: "from-pink-500 to-pink-400"
    }
  ];

  const maternalBenefits = [
    {
      title: "Reduced Risk of Postpartum Depression",
      description: "Breastfeeding can help to reduce the risk of postpartum depression.",
      icon: <FaSmile />,
      color: "from-teal-500 to-teal-400"
    },
    {
      title: "Reduced Risk of Breast & Ovarian Cancer",
      description: "Breastfeeding can help to reduce the risk of breast and ovarian cancer later in life.",
      icon: <FaRibbon />,
      color: "from-pink-600 to-pink-500"
    },
    {
      title: "Weight Loss",
      description: "Breastfeeding can help mothers to lose weight after childbirth.",
      icon: <FaWeight />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Delayed Return of Menstruation",
      description: "Breastfeeding can delay the return of menstruation, which can be helpful for mothers who are not ready to conceive again.",
      icon: <FaCalendarAlt />,
      color: "from-purple-500 to-purple-400"
    }
  ];

  const scientificFacts = [
    { fact: "Contains over 200 bioactive components", icon: <FaFlask /> },
    { fact: "Adapts to baby's changing needs", icon: <FaBaby /> },
    { fact: "Provides perfect nutritional balance", icon: <FaLeaf /> },
    { fact: "Contains live immune cells", icon: <FaVirus /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Mother and Baby"
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
              The Power of Nature
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Unlocking the Benefits of <span className="text-blue-300">Human Milk</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-200">
              Nourishing Infants, Enriching Lives: Exploring the Miracles of Mother's Milk
            </h2>
            <div className="flex justify-center gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm">🍼 100% Natural</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm">💪 Boosts Immunity</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm">🧠 Brain Development</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Scientific Facts Banner */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {scientificFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  {fact.icon}
                </div>
                <span className="text-sm font-medium">{fact.fact}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Human Milk Section - Left Text, Right Image */}
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
                <FaTint className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Why Human Milk?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Benefits of <span className="text-blue-600">Human Milk</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Human milk is the <strong className="text-slate-800">ideal food for infants</strong>. It is packed with nutrients that are 
                essential for their growth and development, and it also contains antibodies and other 
                immune factors that help to protect them from infections.
              </p>
              
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-4">
                <p className="text-slate-800 font-semibold">
                  🤱 Breastfeeding is the best way to provide your baby with all of the benefits of human milk.
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
                  alt="Happy mother breastfeeding"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[180px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaHeart className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Nature's Best</p>
                    <p className="text-xs text-gray-500">Perfect Nutrition</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits for Babies Section */}
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
              <FaBaby className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">For Little Ones</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Benefits of Human Milk <span className="text-blue-600">for Babies</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {babyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                    <div className="text-white text-2xl">{benefit.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Mothers Section */}
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
              <FaHeart className="text-pink-500 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">For Mothers</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Benefits of <span className="text-pink-500">Breastfeeding</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maternalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-md font-bold text-slate-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Breastfeeding Support Section - Left Content, Right Image */}
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
                <FaPhone className="text-green-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Get Support</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Are you facing challenges during <span className="text-green-600">breastfeeding?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-4 text-lg font-semibold">
                Breastfeeding support is just a call away!
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                NeoLacta introducing <strong className="text-green-600">India's first free breastfeeding helpline!</strong>
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Depending on your requirements, each call is assigned to a trained Lactation Consultant. 
                Our team of experts will deliver customized solutions, with the ultimate goal of achieving 
                the best results & customer satisfaction.
              </p>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200 text-center">
                <p className="text-2xl font-bold text-green-700 mb-2">📞 Call us now at</p>
                <a href="tel:18004192199" className="text-3xl md:text-4xl font-bold text-green-600 hover:text-green-700 transition-colors">
                  1800-419-2199
                </a>
                <p className="text-sm text-green-600 mt-2">Free Helpline | Mon-Sat: 9 AM - 6 PM</p>
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
                  src="https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Breastfeeding support"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-[180px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-md">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">24/7 Support</p>
                    <p className="text-xs text-gray-500">Trained Experts</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scientific Evidence Section */}
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
              <FaBookOpen className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Scientific Evidence</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Backed by <span className="text-blue-600">Science</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mx-auto mb-3 opacity-50" />
              <p className="text-slate-700 text-sm leading-relaxed">
                "WHO recommends exclusive breastfeeding for the first 6 months of life for optimal growth and development."
              </p>
              <p className="text-xs text-blue-600 mt-3 font-semibold">- World Health Organization</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200"
            >
              <FaQuoteLeft className="text-green-600 text-3xl mx-auto mb-3 opacity-50" />
              <p className="text-slate-700 text-sm leading-relaxed">
                "Breastfeeding reduces the risk of Sudden Infant Death Syndrome (SIDS) by 50%."
              </p>
              <p className="text-xs text-green-600 mt-3 font-semibold">- AAP</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200"
            >
              <FaQuoteLeft className="text-purple-600 text-3xl mx-auto mb-3 opacity-50" />
              <p className="text-slate-700 text-sm leading-relaxed">
                "Breastfeeding lowers the risk of breast cancer by 4.3% for every 12 months of breastfeeding."
              </p>
              <p className="text-xs text-purple-600 mt-3 font-semibold">- The Lancet</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-4xl text-pink-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Give Your Baby the Best Start in Life
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Every drop of human milk is precious. Whether you're breastfeeding your own baby or considering 
              donating to help other little ones, you're making a difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Learn More About Breastfeeding
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                Contact Lactation Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsHumanMilk;