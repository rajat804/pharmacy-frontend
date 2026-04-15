import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeart, 
  FaQuestion, 
  FaChevronDown, 
  FaChevronUp,
  FaTint,
  FaShieldAlt,
  FaUserMd,
  FaBaby,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaFileMedical,
  FaFlask,
  FaTemperatureHigh,
  FaHandHoldingHeart,
  FaStar,
  FaRegHeart,
  FaClipboardList,
  FaVial,
  FaSyringe,
  FaHospitalUser,
  FaGlobeAsia,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle
} from 'react-icons/fa';

const FAQParents = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your question! Our support team will contact you soon.');
    setFormData({ name: '', email: '', phone: '', question: '' });
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "About Donor Human Milk",
      icon: <FaTint />,
      color: "from-blue-600 to-blue-500",
      questions: [
        {
          q: "What is Pasteurized donor human milk (PHBM)?",
          a: "Pasteurized Donor Human Milk (PHBM) is 100% human milk that has been collected from screened, healthy lactating mothers, pasteurized to eliminate potential pathogens while preserving nutritional and immunological properties. It is the next best alternative when mother's own milk is unavailable for premature or ill infants."
        },
        {
          q: "Why does Neolacta Pasteurize the milk?",
          a: "Neolacta pasteurizes donor human milk to ensure the highest safety standards. Pasteurization eliminates harmful bacteria and viruses while preserving the essential nutrients, antibodies, and immune factors that make human milk so beneficial for babies. This process ensures that every drop of milk is safe for vulnerable premature infants."
        },
        {
          q: "Is it safe to give Pasteurized milk to my baby?",
          a: "Yes, absolutely! Pasteurized donor human milk from NeoLacta is completely safe for babies. Our milk undergoes rigorous safety protocols including donor screening, pasteurization, and multiple quality checks. It is approved by neonatologists and used in NICUs across India. The pasteurization process eliminates pathogens while retaining the nutritional benefits of human milk."
        }
      ]
    },
    {
      title: "NeoLacta Products",
      icon: <FaFlask />,
      color: "from-pink-500 to-pink-400",
      questions: [
        {
          q: "What is PHBM 70 cals pasteurized human breast milk?",
          a: "PHBM 70 is a standardised, pasteurised human milk product that provides 70 kcal per 100 ml. It is ready-to-feed and specifically designed for premature babies who need optimal nutrition. Each batch is standardised to ensure consistent nutritional content, making it ideal for NICU use when mother's own milk is unavailable."
        },
        {
          q: "What is Mother's milk factor (MMF)?",
          a: "Mother's Milk Factor (MMF) is a 100% human milk-derived fortifier. It is added to mother's milk or donor milk to increase protein, calorie, and nutrient content for premature babies who have higher nutritional needs. MMF helps premature babies 'catch up' on growth by providing essential proteins and calories without compromising feed volumes."
        }
      ]
    },
    {
      title: "Availability & Access",
      icon: <FaGlobeAsia />,
      color: "from-green-600 to-green-500",
      questions: [
        {
          q: "Where are  products available?",
          a: " products are available across all major towns and cities pan-India. They are used in over 450+ leading mother & child care hospitals and NICUs. For individual families, products can be accessed through partner hospitals or by contacting our customer support team for guidance on availability in your area."
        },
        {
          q: "What are the criteria for receiving the donor's milk?",
          a: "Donor milk is primarily prioritized for premature babies, critically ill infants in NICUs, and babies whose mothers cannot produce enough milk due to medical reasons. A prescription from a neonatologist or pediatrician is required. The milk is allocated based on medical urgency and clinical need to ensure it reaches the most vulnerable babies first."
        },
        {
          q: "I am an individual mother who has less supply of breast milk, can I get donor milk for my baby?",
          a: "Yes, in cases where a mother has insufficient milk supply despite adequate breastfeeding support, donor milk may be considered. However, it requires a prescription from your pediatrician or neonatologist. They will assess your baby's medical needs and determine if donor milk is appropriate. NeoLacta works with hospitals to ensure donor milk reaches babies who need it most."
        }
      ]
    },
    {
      title: "Formula vs Human Milk",
      icon: <FaBaby />,
      color: "from-orange-500 to-orange-400",
      questions: [
        {
          q: "Why can't I give formula to my baby?",
          a: "While formula can provide basic nutrition, it cannot replicate the complex benefits of human milk. Human milk contains over 200 bioactive components including antibodies, enzymes, hormones, and immune cells that formula lacks. For premature babies, human milk: reduces risk of NEC (a life-threatening intestinal condition), provides better immune protection, supports optimal brain development, and is easier to digest. Formula is made from bovine (cow) milk proteins which can cause allergies, indigestion, and other complications in vulnerable infants. However, if human milk is absolutely unavailable, formula may be used under medical guidance."
        }
      ]
    },
    {
      title: "Safety & Quality",
      icon: <FaShieldAlt />,
      color: "from-purple-600 to-purple-500",
      questions: [
        {
          q: "How is donor milk screened for safety?",
          a: "Donor milk undergoes rigorous screening including: detailed health questionnaire, medical history review, lifestyle assessment, and blood tests for infectious diseases (HIV, Hepatitis B/C, Syphilis). Only healthy, screened donors are approved. The milk is then pasteurized and tested for safety before distribution."
        },
        {
          q: "What quality certifications does NeoLacta have?",
          a: "NeoLacta is ISO 22000:2018 and GMP certified - the only human milk facility in India with these certifications. We follow strict quality control protocols at every stage from donor screening to product delivery."
        },
        {
          q: "How is the milk pasteurized?",
          a: "We use Holder pasteurization method (62.5°C for 30 minutes) which eliminates pathogens while preserving the nutritional and immunological properties of human milk. This is the globally accepted standard for human milk pasteurization."
        }
      ]
    },
    {
      title: "Using NeoLacta Products",
      icon: <FaClipboardList />,
      color: "from-teal-500 to-teal-400",
      questions: [
        {
          q: "How do I use PHBM 70?",
          a: "PHBM 70 comes ready-to-feed. Simply warm to body temperature (37°C) using a bottle warmer or warm water bath. Do not microwave. Use within 24 hours of thawing and discard any unused portion after feeding."
        },
        {
          q: "How do I use MMF (Mother's Milk Factor)?",
          a: "Mix 1 gram sachet with 25 ml of mother's milk or PHBM 70. Stir well until completely dissolved. Use immediately. For higher volumes, use multiples of this ratio. Do not add water or microwave."
        },
        {
          q: "How should I store these products?",
          a: "PHBM 70: Store frozen at -20°C. Thaw in refrigerator. MMF: Store in a cool, dry place away from sunlight. Do not refrigerate. Once opened, use immediately."
        }
      ]
    }
  ];

  const stats = [
    { value: "95,000+", label: "Babies Helped", icon: <FaBaby />, color: "from-blue-600 to-blue-500" },
    { value: "450+", label: "Hospitals Served", icon: <FaHospitalUser />, color: "from-pink-500 to-pink-400" },
    { value: "100%", label: "Human Milk Products", icon: <FaTint />, color: "from-green-600 to-green-500" },
    { value: "24/7", label: "Parent Support", icon: <FaClock />, color: "from-purple-600 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="FAQ Parents"
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
              Frequently Asked Questions
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              FAQ for <span className="text-blue-300">Parents</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-200">
              Everything You Need to Know About Donor Human Milk
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about donor human milk, NeoLacta products, safety, 
              and how to access these life-saving resources for your baby.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Banner */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <FaCheckCircle className="text-green-600" />
              <span className="text-sm text-slate-700">100% Human Milk</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <FaShieldAlt className="text-blue-600" />
              <span className="text-sm text-slate-700">ISO 22000 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <FaTint className="text-pink-500" />
              <span className="text-sm text-slate-700">Pasteurized & Safe</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <FaBaby className="text-purple-600" />
              <span className="text-sm text-slate-700">Trusted by Neonatologists</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories and Questions */}
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
              <FaQuestion className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Find detailed answers to common questions about donor human milk, NeoLacta products, and infant nutrition
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${category.color} px-6 py-4 flex items-center gap-3`}>
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <div className="text-white text-xl">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {category.questions.map((item, qIndex) => (
                    <div key={qIndex} className="px-6">
                      <button
                        onClick={() => toggleAccordion(`${catIndex}-${qIndex}`)}
                        className="w-full py-4 text-left flex items-center justify-between group hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors pr-4 text-sm">
                          {item.q}
                        </span>
                        {openIndex === `${catIndex}-${qIndex}` ? (
                          <FaChevronUp className="text-blue-500 flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openIndex === `${catIndex}-${qIndex}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pb-4"
                          >
                            <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l-2 border-blue-200">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Quick Reference <span className="text-blue-600">Guide</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Benefits of Human Milk</h3>
              <ul className="text-sm text-green-700 space-y-1 text-left">
                <li>✓ Boosts immune system</li>
                <li>✓ Reduces NEC risk</li>
                <li>✓ Supports brain development</li>
                <li>✓ Easy to digest</li>
                <li>✓ Protects against infections</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaFlask className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">NeoLacta Products</h3>
              <ul className="text-sm text-blue-700 space-y-1 text-left">
                <li>✓ PHBM 70 - Ready-to-feed</li>
                <li>✓ MMF - Human milk fortifier</li>
                <li>✓ N70 - Lyophilized powder</li>
                <li>✓ SOS - Sucrose solution</li>
                <li>✓ 100% Human milk based</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-purple-800 mb-2">Safety Certifications</h3>
              <ul className="text-sm text-purple-700 space-y-1 text-left">
                <li>✓ ISO 22000:2018</li>
                <li>✓ GMP Certified</li>
                <li>✓ Screened Donors</li>
                <li>✓ Pasteurized</li>
                <li>✓ Quality Tested</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still Have Questions? - Contact Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaRegHeart className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Still Have Questions?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              We're Here to <span className="text-blue-600">Help</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              Didn't find the answer you were looking for? Reach out to our parent support team.
              We're happy to answer any additional questions you may have.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Question *</label>
                <div className="relative">
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    rows="4"
                    required
                    className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                    placeholder="Type your question here..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Submit Question
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <FaPhone className="text-3xl text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-blue-800 mb-2">Call Our Parent Helpline</h3>
              <p className="text-2xl font-bold text-blue-600">1800 - 419 - 2199</p>
              <p className="text-sm text-blue-600 mt-2">Mon-Sat: 9 AM - 6 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <FaEnvelope className="text-3xl text-pink-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-pink-800 mb-2">Email Us</h3>
              <p className="text-lg font-semibold text-pink-600">parentsupport@neolacta.com</p>
              <p className="text-sm text-pink-600 mt-2">We respond within 24 hours</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQParents;