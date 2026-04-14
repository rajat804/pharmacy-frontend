import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaHandHoldingHeart, 
  FaBaby, 
  FaUsers,
  FaShieldAlt,
  FaTint,
  FaLeaf,
  FaUserMd,
  FaHospitalUser,
  FaGlobeAsia,
  FaQuoteLeft,
  FaCheckCircle,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaMapMarkerAlt,
  FaClipboardList
} from 'react-icons/fa';

const WhyDonate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    privacyAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const donorBenefits = [
    {
      title: "Donor Mother",
      description: "Brings in a sense of satisfaction as her milk is not only benefitting her own baby but also other critically ill neonates.",
      subtext: "Promotes donor mother's well being as she can avoid conditions like engorgement and mastitis due to abundant supply.",
      icon: <FaHeart />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Recipient Mother",
      description: "Relieves the mother that the baby is receiving optimal feeding.",
      subtext: "Reduced stress helps her build her own supply to breastfeed her baby. Reduced guilt and pressure of giving formula milk.",
      icon: <FaHandHoldingHeart />,
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "Neonates",
      description: "Reduced neonatal infections & other illnesses.",
      subtext: "Achieve optimal health, growth & development.",
      icon: <FaBaby />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Community",
      description: "Increased awareness of breastfeeding and its benefits.",
      subtext: "Reduced annual health cost. Improved neonatal health leads to a healthier future. Reduced carbon footprint and pollution due to formula manufacturing.",
      icon: <FaUsers />,
      color: "from-slate-500 to-slate-400"
    }
  ];

  const needForDonorMilk = [
    "Unavailability of mother's own milk",
    "Pasteurised donor milk as the next best option",
    "Unique properties of human milk",
    "Human milk customizes its nutritional content to match infants' evolving needs with an optimal blend of proteins, fats, and essential nutrients",
    "Rich in antibodies and immune factors, human milk uniquely shields infants from infections, bolstering their developing immune system"
  ];

  const benefitsOfDonorMilk = [
    "Essential for critically ill or premature infants",
    "Helps resist infections and decrease the incidence of serious diseases",
    "Components supporting the developing immune system like proteins, carbohydrates lipids, vitamins and trace minerals"
  ];

  const impactOfDonation = [
    "Importance of screened donor milk for critically ill babies",
    "Antibodies and protective molecules absent in synthetic food supplements",
    "Contribution to reducing infant mortality rates",
    "Enhancing the health and well-being of the next generation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Mother and Baby"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
                Donate Breast Milk
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
                Nourishing <span className="text-blue-300">Lives Together</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-200">
                The Power of Breast Milk Donation
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Share the gift of life: donate breast milk for preterm angels
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Become a Donor
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Mother holding baby"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Why Choose to Donate Section */}
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
                <FaHeart className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Why Choose to Donate?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                The Power of <span className="text-blue-600">Breast Milk Donation</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We firmly believe that a mother's breast milk is unparalleled in providing essential nutrition for infants. 
                Respected global healthcare authorities such as the <strong className="text-slate-800">World Health Organization (WHO)</strong> and the 
                <strong className="text-slate-800"> United Nations International Children's Emergency Fund (UNICEF)</strong> unanimously advocate 
                for exclusive breastfeeding during the initial six months of a baby's life.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Our donor mothers embody health and vitality, caring for their own infants while generously contributing 
                their surplus milk to support other babies. These selfless donors prioritize the nutritional well-being 
                of every child, ensuring that no little one goes without the nourishment they need.
              </p>
              
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-4">
                <p className="text-slate-800 font-semibold">
                  🤱 Join us in this compassionate journey of sharing, where healthy lactating mothers come together 
                  to make a meaningful difference in the lives of infants in need. Your contribution can make a lasting 
                  impact, creating a healthier and brighter future for these precious little ones.
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
                  alt="Happy mother and baby"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[180px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaShieldAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">WHO & UNICEF</p>
                    <p className="text-xs text-gray-500">Recommended</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Need for Donor Milk Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                  src="https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Premature baby care"
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
                <FaTint className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Need for Donor Milk</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Why <span className="text-blue-600">Donor Milk</span> is Essential?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              
              <div className="space-y-3">
                {needForDonorMilk.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                    <span className="text-gray-600 group-hover:text-slate-700 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <p className="text-slate-800 text-sm">
                  <strong className="text-blue-600">✨ Human milk customizes</strong> its nutritional content to match infants' 
                  evolving needs with an optimal blend of proteins, fats, and essential nutrients. Rich in antibodies 
                  and immune factors, human milk uniquely shields infants from infections, bolstering their developing 
                  immune system.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits of Donor Human Milk */}
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
              <FaLeaf className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Benefits</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Benefits of <span className="text-blue-600">Donor Human Milk</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefitsOfDonorMilk.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact of Human Milk Donation */}
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
              <FaGlobeAsia className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Impact</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Impact of <span className="text-blue-600">Human Milk Donation</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactOfDonation.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <FaHospitalUser className="text-white text-xl" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Donating Human Milk - Detailed Section */}
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
              <FaHandHoldingHeart className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Benefits of Donating</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Benefits of <span className="text-blue-600">Donating Human Milk</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donorBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {benefit.description}
                </p>
                <p className="text-gray-500 text-xs leading-relaxed italic">
                  {benefit.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
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
                <FaHeart className="text-pink-500 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Become a Donor</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Donate Your Excess Breast Milk, <br />
                <span className="text-pink-500">Be a Super Mom</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mb-6"></div>
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                    <FaHeart className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-700">Every Drop Counts</h3>
                    <p className="text-pink-600 text-sm">Your donation can save a tiny life</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Join our community of Super Moms who are making a difference in the lives of premature babies 
                  across India. Your excess breast milk can provide essential nutrition to those who need it most.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Become a Donor</h3>
                
                <div className="space-y-4">
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
                    <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400 text-sm" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="2"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="Enter your address"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <div className="relative">
                      <FaClipboardList className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-600">
                      I accept <span className="text-blue-600 font-semibold">Privacy Terms and Conditions</span> *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </div>
              </form>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Join hundreds of other Super Moms who are saving lives through breast milk donation.
              Your contribution can give a premature baby a fighting chance at life.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Start Your Donation Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyDonate;