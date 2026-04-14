import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaHandHoldingHeart, 
  FaBaby, 
  FaUsers,
  FaShieldAlt, 
  FaCheckCircle, 
  FaTimesCircle,
  FaClipboardList,
  FaFlask,
  FaTint,
  FaUserMd,
  FaGlobeAsia,
  FaQuoteLeft,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaMapMarkerAlt,
  FaStar,
  FaAward,
  FaRegHeart,
  FaStepForward,
  FaVial,
  FaSyringe,
  FaFileMedical
} from 'react-icons/fa';

const DonorGuidelines = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
    alert('Thank you for your interest! Our counseling team will contact you soon.');
  };

  const steps = [
    {
      step: "STEP 1",
      title: "Donor Consent Form",
      description: "A Donor consent form is obtained as this is a voluntary process.",
      icon: <FaClipboardList />,
      color: "from-blue-600 to-blue-500"
    },
    {
      step: "STEP 2",
      title: "Fill Donor Form",
      description: "Fill up the Donor Form with the help of our counseling team. This will help us to understand your overall family health history. Post reviewing your application our medical expert team will get in touch with you for the next step.",
      icon: <FaFileMedical />,
      color: "from-slate-600 to-slate-500"
    },
    {
      step: "STEP 3",
      title: "Medical Screening",
      description: "Once your medical screening is approved, we will arrange for a one-time blood sample collection. We will get the sample tested as per guidelines (all costs are covered by us). Once your blood testing has been completed, we will notify you about the results. Once approved, you become a qualified donor.",
      icon: <FaFlask />,
      color: "from-blue-500 to-blue-400"
    },
    {
      step: "STEP 4",
      title: "Start Donating",
      description: "You can start collecting milk and inform us. Our pickup team will come to collect the milk from your doorstep.",
      icon: <FaTint />,
      color: "from-slate-500 to-slate-400"
    }
  ];

  const qualifyConditions = [
    "A lactating woman in good health having enough milk after feeding her own baby satisfactorily and baby is thriving well.",
    "Not regularly on medications or herbal supplements (with exception of prenatal vitamins, human insulin, thyroid replacement hormones, nasal sprays, asthma inhalers, topical treatments, eye drops, progestin-only or low dose estrogen birth control products).",
    "Willing to undergo blood testing for screening of infections.",
    "You are generally healthy.",
    "You do not smoke and consume alcohol."
  ];

  const notQualifyConditions = [
    "Positive blood test result for HIV, Hepatitis B or C or syphilis.",
    "Herself or has a sexual partner suffering from HBV, HIV, HCV & venereal diseases.",
    "You have a family history or increased risk for Creutzfeld-Jakob Disease (Mad Cow disease).",
    "Taking radioactive / other drugs / mega doses of vitamins Uses illegal drugs / alcohol / 3 caffeinated drinks / day.",
    "Has mastitis/fungal infection of the nipple or areola.",
    "Active herpes simplex/varicella zoster infections in the mammary/thoracic region."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Donor Selection"
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
                Guiding Principles
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
                Donor Selection <br />
                <span className="text-blue-300">at Neolacta</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-200">
                Nurturing with Purpose: Ensuring Safe and Compassionate Donation Practices
              </h2>
              <div className="flex flex-wrap gap-4 mt-6">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  Become a Donor
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaHeart className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">95,000+</p>
                    <p className="text-xs text-gray-500">Babies Helped</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Pre-qualifying Details Section */}
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
              <FaCheckCircle className="text-green-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Pre-qualifying Details</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Do You <span className="text-blue-600">Qualify?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center mb-8">
            <FaUserMd className="text-5xl text-blue-600 mx-auto mb-4" />
            <p className="text-xl text-slate-800 font-semibold">
              You are a healthy nursing mother with an excess supply of breast milk and your baby is less than six months of age, 
              <span className="text-blue-600"> you qualify to become a donor.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
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
              <FaStepForward className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Donation Process</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              How to Become a <span className="text-blue-600">Donor</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{step.icon}</div>
                </div>
                <div className="text-center">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Guidelines Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Qualify as Donor */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-green-800">Qualifying as a Donor</h2>
              </div>
              <ul className="space-y-3">
                {qualifyConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 text-sm mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Do Not Qualify as Donor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                  <FaTimesCircle className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-red-800">Do Not Qualify as a Donor</h2>
              </div>
              <ul className="space-y-3">
                {notQualifyConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaTimesCircle className="text-red-600 text-sm mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-5xl text-pink-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              NeoLacta through its <span className="text-pink-300 font-semibold">"SaveBabies SuperMom Program"</span> has been able to help 
              <span className="text-4xl font-bold text-pink-300 mx-2">95,000+</span> babies lives who were deprived of their own mothers milk 
              owing to reasons such as sickness, medical contraindications, inadequate lactation, surrogacy/IVF and many more.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/20">
                <p className="text-2xl font-bold text-pink-300">95,000+</p>
                <p className="text-sm text-white/70">Lives Impacted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ready to Make a Difference?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              Are you considering donating your excess breast milk to newborns who need it? 
              Submit the form to be a part of this unique initiative.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <div className="relative">
                  <FaClipboardList className="absolute left-3 top-4 text-gray-400 text-sm" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
                    placeholder="Tell us why you want to donate..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonorGuidelines;