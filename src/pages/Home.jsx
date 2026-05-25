import React, { useState } from 'react';
import { motion} from 'framer-motion';
import {
  FaQuoteLeft, FaWhatsapp, FaHeartbeat, FaMicroscope, FaGlobeAsia,
  FaArrowRight, FaTrophy, FaFlask, FaTimes, FaCheckCircle, FaBaby,
  FaShieldAlt, FaBookOpen, FaChartLine, FaHandHoldingHeart,
  FaStar, FaAward, FaRegSmile, FaNewspaper
} from 'react-icons/fa';
import { MdLocalHospital, MdVerified } from 'react-icons/md';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { scrollYProgress } = useScroll();

  // Hero Content
  const heroContent = {
    subtitle: "Welcome to Neoverse",
    title: "The Start Every Tiny Life Deserves",
    desc: "Global Science. Indian Hearts. Bridging the gap between global research and Indian NICUs.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    buttonText: "Explore Our Mission"
  };

  const stats = [
    { value: "10,000+", label: "Happy Families", icon: <FaRegSmile />, color: "from-blue-600 to-cyan-400" },
    { value: "500+", label: "Partner Hospitals", icon: <MdLocalHospital />, color: "from-cyan-400 to-cyan-300" },
    { value: "100%", label: "Science-Backed", icon: <FaMicroscope />, color: "from-blue-600 to-cyan-400" },
    { value: "24/7", label: "Expert Support", icon: <FaHeartbeat />, color: "from-cyan-400 to-cyan-300" }
  ];

  const standards = [
    {
      title: "World-Class Validation",
      description: "FDA GRAS confirmed ingredients trusted by global medical community. Our products meet international safety standards.",
      icon: <MdVerified />,
      color: "from-blue-600 to-cyan-400"
    },
    {
      title: "Precision Nutrition",
      description: "ESPGHAN 2022 compliant formulas for optimal preterm infant development. Every nutrient is carefully measured.",
      icon: <FaChartLine />,
      color: "from-cyan-400 to-cyan-300"
    },
    {
      title: "Indian Hearts",
      description: "Made in India with world-class standards for our little fighters. Bringing global science to Indian NICUs.",
      icon: <FaHandHoldingHeart />,
      color: "from-blue-600 to-cyan-400"
    }
  ];

  const products = [
    {
      id: 1,
      title: "NeoPepti HMF",
      shortDesc: "India's 1st extensively hydrolysed 100% whey protein based Human Milk Fortifier",
      icon: <FaFlask />,
      tag: "India's First",
      badge: "FDA GRAS",
      color: "from-blue-600 to-cyan-400",
      features: ["Hypoallergenic", "Easy Digestion", "Gut Safety", "Brain Development"],
      fullDescription: {
        intro: "Presenting India's 1st and only extensively hydrolysed 100% whey protein based Human Milk Fortifier - NeoPepti HMF.",
        internationalStandard: "Most international HMF are moving towards Extensively hydrolysed protein. NeoPepti HMF uses extensively hydrolysed whey protein which is FDA GRAS Confirmed.",
        advantages: [
          { title: "Hypoallergenic", description: "Lowers the risk of milk protein intolerance in premature babies", icon: <FaShieldAlt /> },
          { title: "Easier Digestion", description: "Absorbed almost instantly to reduce stress on delicate guts", icon: <FaBaby /> },
          { title: "Better Tolerance", description: "Moves through the stomach faster to reduce bloating and spitting up", icon: <FaCheckCircle /> },
          { title: "Gut Safety", description: "Gentler on the intestinal lining to help reduce the risk of NEC", icon: <FaHeartbeat /> }
        ],
        otherAdvantages: [
          "Brain Development: The only HMF in India with upgraded quantity ARA & DHA in the recommended 2:1 ratio as per ESPGHAN 2022",
          "Stronger Bones: Fortified with optimal Calcium and Phosphorus as per ESPGHAN 2022",
          "Pure & Safe: FDA (GRAS) confirmed ingredients with no maltodextrin",
          "Vegetarian: Formulated without fish oil"
        ]
      }
    },
    {
      id: 2,
      title: "NeoPro",
      shortDesc: "India's 1st probiotic specifically to decrease NEC in premature infants",
      icon: <FaMicroscope />,
      tag: "Breakthrough",
      badge: "Clinically Proven",
      color: "from-cyan-400 to-cyan-300",
      features: ["NEC Prevention", "Gut Health", "Immune Support", "Safe & Effective"],
      fullDescription: {
        intro: "India's first probiotic specifically designed to reduce Necrotizing Enterocolitis (NEC) in premature infants.",
        internationalStandard: "Backed by extensive clinical research showing significant reduction in NEC incidence among preterm babies.",
        advantages: [
          { title: "NEC Prevention", description: "Clinically proven to reduce the risk of NEC in premature infants", icon: <FaShieldAlt /> },
          { title: "Gut Health", description: "Promotes healthy gut microbiome development in preterm babies", icon: <FaBaby /> },
          { title: "Immune Support", description: "Strengthens the immune system of vulnerable infants", icon: <FaHeartbeat /> },
          { title: "Safe & Effective", description: "Extensively tested for safety in neonatal populations", icon: <FaCheckCircle /> }
        ],
        otherAdvantages: [
          "Specifically formulated for premature infants",
          "Clinically validated strains with proven efficacy",
          "Easy to administer in NICU settings",
          "Backed by international research"
        ]
      }
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Clinical Efficacy of Extensively Hydrolysed HMF in Preterm Infants",
      authors: "Dr. Priya Sharma, Dr. Rajesh Kumar",
      journal: "Journal of Neonatal Nutrition",
      year: "2024",
      type: "Research Paper",
      abstract: "A multicenter study demonstrating improved tolerance and growth outcomes in VLBW infants using NeoPepti HMF.",
      link: "#"
    },
    {
      id: 2,
      title: "Probiotic Supplementation for NEC Prevention: Indian Perspective",
      authors: "Dr. Amit Patel, Dr. Sunita Mehta",
      journal: "Indian Pediatrics",
      year: "2024",
      type: "Clinical Study",
      abstract: "Comprehensive analysis of probiotic efficacy in reducing NEC incidence across 10 Indian NICU centers.",
      link: "#"
    },
    {
      id: 3,
      title: "Nutritional Strategies for Optimal Brain Development in Preterms",
      authors: "Dr. Anjali Nair, Dr. Vikram Singh",
      journal: "International Journal of Neonatal Care",
      year: "2023",
      type: "Review Article",
      abstract: "Evidence-based review of ARA:DHA ratios and their impact on neurodevelopmental outcomes.",
      link: "#"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Neonatologist, Apollo Hospitals",
      content: "NeoPepti HMF has transformed our NICU outcomes. The extensively hydrolysed formula shows remarkable tolerance even in our most fragile preterm infants. We've seen reduced feeding intolerance and better growth parameters.",
      rating: 5
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Head of Pediatrics, Fortis Healthcare",
      content: "Finally, world-class neonatal nutrition made in India. The science behind Neoverse products is impressive, and the clinical results speak for themselves. Highly recommended for all NICUs.",
      rating: 5
    },
    {
      name: "Dr. Anjali Mehta",
      role: "Neonatologist, Cloudnine Hospitals",
      content: "The 2:1 ARA:DHA ratio in NeoPepti HMF is exactly what our preterms need for optimal brain development. A game-changer in neonatal nutrition.",
      rating: 5
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">

      {/* Hero Section - Responsive */}
      <div className="relative h-[75vh] sm:min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroContent.image}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-800/90" />
        </div>

        <div className="relative z-20 min-h-[90vh] sm:min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full py-12 sm:py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-cyan-400/30">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span className="text-cyan-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    {heroContent.subtitle}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.2] sm:leading-[1.1] mb-3 sm:mb-4 md:mb-6"
              >
                The Start Every
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Tiny Life Deserves
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-xl"
              >
                {heroContent.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-xl transition-all duration-300"
                  style={{ boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)' }}
                >
                  {heroContent.buttonText}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-1.5 sm:w-1 sm:h-2 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Stats Bar - Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-30 -mt-10 sm:-mt-12 md:-mt-16 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 border border-cyan-400/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-14 lg:w-14 lg:h-14 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">{stat.icon}</div>
              </div>
              <div className="text-base sm:text-xl md:text-2xl font-bold text-slate-800 mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-600/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                <FaHeartbeat className="text-blue-600 text-xs sm:text-sm" />
                <span className="text-blue-600 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 md:mb-6">
                The Start Every{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  Tiny Life Deserves
                </span>
              </h2>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mb-5 sm:mb-6 md:mb-8 rounded-full" />
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                At Neoverse, we believe a baby's birthplace shouldn't limit their access to world-class science.
                We bridge the gap between global research and Indian NICUs, bringing the latest evidence-based
                nutritional science directly to the bedside.
              </p>
              <div className="bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-cyan-400/20">
                <p className="text-slate-800 font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
                  "The first 1,000 days are critical. We translate complex international standards into simple,
                  life-changing outcomes, ensuring India's smallest fighters have the strength to grow, thrive,
                  and go home."
                </p>
                <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
                    <FaQuoteLeft className="text-white text-[10px] sm:text-xs md:text-sm" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-xs sm:text-sm md:text-base">Neoverse Medical Team</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">Neonatal Nutrition Specialists</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-6 sm:mt-8 lg:mt-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQZQfgY2ZddAAsiB0_Rl5zgvA3HuXu-4DMg&s"
                  alt="NICU Care"
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 lg:-bottom-6 lg:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3 md:p-4 lg:p-5 max-w-[150px] sm:max-w-[170px] md:max-w-[190px] lg:max-w-[220px] border border-cyan-400/30">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
                    <MdVerified className="text-white text-xs sm:text-sm md:text-base lg:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-[10px] sm:text-xs md:text-sm">FDA GRAS</p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-cyan-500">Confirmed Safe</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section - Responsive */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="text-white/30 text-3xl sm:text-4xl md:text-5xl mx-auto mb-2 sm:mb-3 md:mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white max-w-2xl mx-auto leading-relaxed px-2">
              "Bringing the world's best science to India's most precious lives."
            </p>
            <p className="text-white/80 mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base">- Neoverse Healthcare</p>
          </motion.div>
        </div>
      </section>

      {/* The Neoverse Standard - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600/5 via-white to-cyan-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4 shadow-sm border border-cyan-400/20">
              <FaAward className="text-blue-600 text-sm sm:text-base md:text-lg" />
              <span className="text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">The Neoverse Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Commitment to Excellence
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-cyan-400/40"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${standard.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white text-lg sm:text-xl md:text-2xl">{standard.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1.5 sm:mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {standard.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
                  {standard.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-blue-600/10 px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4">
              <FaFlask className="text-blue-600 text-sm sm:text-base md:text-lg" />
              <span className="text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Breakthrough Innovations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Premium Products
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
            <p className="text-gray-500 max-w-2xl mx-auto mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base px-2">
              India's first-of-its-kind products designed specifically for premature infants
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${product.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <div className="text-white text-lg sm:text-xl md:text-2xl">{product.icon}</div>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-block px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-[8px] sm:text-[10px] md:text-xs font-bold rounded-full">
                        {product.tag}
                      </span>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-400 mt-0.5 sm:mt-1">{product.badge}</div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1.5 sm:mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs bg-blue-600/10 text-blue-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(product)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 sm:py-2.5 md:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-1.5 sm:gap-2"
                  >
                    Learn More
                    <FaArrowRight className="text-[10px] sm:text-xs md:text-sm" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #38BDF8 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4">
              <FaStar className="text-cyan-400 text-sm sm:text-base md:text-lg" />
              <span className="text-cyan-400 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Doctor Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              What{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Leading Experts Say
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <FaQuoteLeft className="text-cyan-400 text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4 opacity-50" />
                <p className="text-white/80 text-[11px] sm:text-xs md:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-[10px] sm:text-xs md:text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-[10px] sm:text-xs md:text-sm">{testimonial.name}</p>
                    <p className="text-cyan-400 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-blue-600/10 px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4">
              <FaNewspaper className="text-blue-600 text-sm sm:text-base md:text-lg" />
              <span className="text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Research & Publications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4">
              Latest{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Scientific Publications
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
            <p className="text-gray-500 max-w-2xl mx-auto mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base px-2">
              Evidence-based research supporting our innovative neonatal nutrition solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <FaBookOpen className="text-white text-lg sm:text-xl md:text-2xl" />
                  </div>
                </div>
                <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2 mb-1.5 sm:mb-2 md:mb-3">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs bg-blue-600/10 text-blue-600 px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 rounded-full">
                      {pub.type}
                    </span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-400">{pub.year}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-800 mb-1 sm:mb-1.5 md:mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-500 mb-1 sm:mb-1.5 md:mb-2 line-clamp-1">{pub.authors}</p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-cyan-600 mb-1.5 sm:mb-2 md:mb-3">{pub.journal}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                    {pub.abstract}
                  </p>
                  <button className="text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm flex items-center gap-1 sm:gap-1.5 md:gap-2 group-hover:gap-1.5 sm:group-hover:gap-2 md:group-hover:gap-3 transition-all">
                    Read Full Paper <FaArrowRight className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12"
          >
            <button className="border-2 border-blue-600 text-blue-600 px-5 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-blue-600 hover:text-white transition-all duration-300">
              View All Publications
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400" />
        <div className="absolute inset-0 opacity-10"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 leading-relaxed px-2">
              Discover how Neoverse is transforming neonatal care in India through world-class science
              and compassionate innovation. Partner with us to make a difference.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-600 px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn Our Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Scientific Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Button - Responsive */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 z-50 bg-green-500 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-base sm:text-lg md:text-xl lg:text-2xl" />
      </motion.a>

      {/* Product Modal - Responsive */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3 md:p-4 overflow-y-auto"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.98)' }}
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative bg-white rounded-xl sm:rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-400 p-3 sm:p-4 md:p-5 lg:p-6 rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl z-10">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-white hover:rotate-90 transition-transform duration-300"
              >
                <FaTimes className="text-lg sm:text-xl md:text-2xl" />
              </button>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <div className="text-white text-lg sm:text-xl md:text-2xl">{selectedProduct.icon}</div>
                </div>
                <div>
                  <span className="inline-block px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 bg-white/20 rounded-full text-white text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-semibold mb-0.5 sm:mb-1 md:mb-2">
                    {selectedProduct.tag}
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white">{selectedProduct.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8">
              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <p className="text-slate-800 text-sm sm:text-base md:text-lg font-semibold mb-1.5 sm:mb-2 md:mb-3">{selectedProduct.fullDescription.intro}</p>
                <div className="bg-gradient-to-r from-blue-600/5 to-cyan-400/5 p-2.5 sm:p-3 md:p-4 rounded-xl border-l-4 border-blue-600">
                  <p className="text-slate-700/80 text-[11px] sm:text-xs md:text-sm leading-relaxed">
                    {selectedProduct.fullDescription.internationalStandard}
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2">
                  <FaCheckCircle className="text-blue-600" />
                  Key Advantages
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {selectedProduct.fullDescription.advantages.map((adv, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 sm:gap-2 md:gap-3 p-2 sm:p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-cyan-400/10 transition-all duration-300"
                    >
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-white text-sm sm:text-base md:text-lg">{adv.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">{adv.title}</h4>
                        <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm">{adv.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4 flex items-center gap-1.5 sm:gap-2">
                  <FaFlask className="text-blue-600" />
                  Other Advantages
                </h3>
                <div className="grid sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                  {selectedProduct.fullDescription.otherAdvantages.map((adv, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 md:p-3 bg-gray-50 rounded-lg">
                      <FaCheckCircle className="text-cyan-400 text-[10px] sm:text-xs md:text-sm flex-shrink-0" />
                      <span className="text-gray-600 text-[10px] sm:text-xs md:text-sm">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-2 sm:pt-3 md:pt-4 border-t border-gray-200">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Request More Information
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;