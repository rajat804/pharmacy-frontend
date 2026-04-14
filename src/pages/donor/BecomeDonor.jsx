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
  FaClipboardList,
  FaStar,
  FaAward,
  FaRegHeart
} from 'react-icons/fa';

const BecomeDonor = () => {
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
    alert('Thank you for your interest! Our counselor will contact you soon.');
  };

  const statistics = [
    { value: "3.5M+", label: "Premature Babies Born Annually", icon: <FaBaby />, color: "from-blue-600 to-blue-500" },
    { value: "13%", label: "of Births in India", icon: <FaGlobeAsia />, color: "from-slate-600 to-slate-500" },
    { value: "6-35%", label: "Neonatal Mortality Rate", icon: <FaHeart />, color: "from-blue-500 to-blue-400" },
    { value: "1,000+", label: "Lives Impacted", icon: <FaUsers />, color: "from-slate-500 to-slate-400" }
  ];

  const reasonsToDonate = [
    {
      title: "Support Struggling Mothers",
      description: "A majority of mothers who deliver prematurely struggle to produce sufficient milk. You can support them during this crucial time.",
      icon: <FaHandHoldingHeart />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Human Milk is Panacea",
      description: "Human milk is like panacea – not just for your baby – but also for the premature and ill babies who don't have access to Human milk.",
      icon: <FaShieldAlt />,
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "Simple Process",
      description: "Donation is a very simple process. We come to your doorstep to collect the milk from the comfort of your home.",
      icon: <FaTint />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Screening for Safety",
      description: "Simple screening process to certify you are healthy to donate. All precautionary measures as per guidelines are maintained.",
      icon: <FaUserMd />,
      color: "from-slate-500 to-slate-400"
    }
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
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-pink-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
                Become a Donor
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
                Nourish a <span className="text-pink-300">New Beginning</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-200">
                Become a Lifesaving Donor
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Be a donor: ensuring every baby receives the gift of human milk
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Start Your Journey
                </button>
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                  Learn More
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Happy mother with baby"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                    <FaHeart className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Save a Life</p>
                    <p className="text-xs text-gray-500">Be a Donor Today</p>
                  </div>
                </div>
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
                <FaRegHeart className="text-pink-500 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Why Choose to Donate?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Every Drop Can <span className="text-pink-500">Save a Life</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                A majority of mothers who deliver prematurely struggle to produce sufficient milk. 
                You can support them during this crucial time by donating milk while they are recouping 
                and working on building their own supply.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Human milk is like panacea – not just for your baby – but also for the premature and ill 
                babies who don't have access to Human milk.
              </p>
              
              <div className="bg-pink-50 rounded-2xl p-5 border border-pink-100 mt-4">
                <p className="text-slate-800">
                  💖 If you are currently nursing your little one and having surplus milk after feeding your child, 
                  you may want to consider donating it. A donation is a very simple process where you don't have 
                  to visit any collection center to handover the extra milk. It can be done from the comfort of 
                  your home as we will come to your doorstep to collect the milk.
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
                  src="https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Donor mother"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screening Process Section */}
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
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Screening process"
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
                <FaShieldAlt className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Donor Screening</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Simple & Safe <span className="text-blue-600">Screening Process</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Before you become an approved donor, you are required to go through a simple screening process 
                that will certify you are healthy to donate. As this milk is given to a sick baby we ensure all 
                precautionary measures as per guidelines are maintained so that these babies have the best chance 
                at survival and wellbeing.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We have made our donor program as simple as possible and we will help you answer any queries 
                that you might have along the way. If you are interested in this noble initiative which can touch 
                the lives of millions of babies, kindly fill in a few basic details and our counselors will get 
                in touch with you.
              </p>
              
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 mt-4">
                <p className="text-slate-800 font-semibold">
                  🌟 Save a life – <span className="text-blue-600">Be a donor</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reasons to Donate Section */}
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
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Reasons to Donate</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why <span className="text-pink-500">Donate?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsToDonate.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{reason.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">The Need is Urgent</h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
            <p className="text-white/80 max-w-2xl mx-auto mt-4">
              Every year, millions of premature babies need your help
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 border border-white/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-white/80 text-sm max-w-2xl mx-auto">
              The rate of neonatal mortality in India is 6 to 35 percent per 1,000 live birth in different states 
              with the first month mortality varying from 6 out of 1,000 in Kerala to 20 out of 1,000 in Telangana 
              and 35 out of 1,000 in Madhya Pradesh.
            </p>
            <div className="mt-4 bg-white/10 rounded-2xl p-4 inline-block">
              <p className="text-pink-200 font-semibold">
                ✨ Your excess milk can make a world of difference to these fragile infant's health and wellbeing!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
                <FaStar className="text-pink-500 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Become a Supermom</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                "Become a <span className="text-pink-500">Supermom</span>"
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mb-6"></div>
              
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                    <FaAward className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pink-700">Join Our Community</h3>
                    <p className="text-pink-600 text-sm">Every drop of milk can save a tiny life</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  If you are interested in becoming a donor, we request you to kindly fill the form and we will get in touch with you.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <FaHeart className="text-pink-500" /> Donor Registration
                </h3>
                
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
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
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
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
                      className="mt-1 w-4 h-4 text-pink-600 rounded border-gray-300 focus:ring-pink-500"
                    />
                    <label className="text-sm text-gray-600">
                      I accept <span className="text-pink-600 font-semibold">Privacy Terms and Conditions</span> *
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-5xl text-pink-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
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

export default BecomeDonor;