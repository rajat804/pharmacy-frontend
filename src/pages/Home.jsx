import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaQuoteLeft, FaChevronRight, FaWhatsapp, FaHeartbeat, FaShieldAlt, FaFlask, FaBaby, FaMicroscope, FaGlobeAsia, FaArrowRight, FaCheckCircle, FaLeaf, FaTrophy, FaHandHoldingHeart, FaUsers, FaHospitalUser } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    subtitle: "Welcome to Neoverse",
    title: "The Start Every Tiny Life Deserves",
    desc: "Global Science. Indian Hearts. Bridging the gap between global research and Indian NICUs.",
    image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    buttonText: "Explore Our Mission"
  },
  {
    subtitle: "Precision Nutrition",
    title: "Science-Backed Care for Precious Lives",
    desc: "Bringing the world's best science to India's most precious lives.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    buttonText: "Our Products"
  },
  {
    subtitle: "A Healthier Tomorrow",
    title: "Building Foundation for a Stronger Generation",
    desc: "We translate complex international standards into simple, life-changing outcomes.",
    image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    buttonText: "Learn Our Story"
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setCurrentSlide(slides[swiper.realIndex]);
  };

  const stats = [
    { value: "1,000+", label: "Days of Critical Care", icon: <FaHeartbeat />, color: "from-blue-600 to-blue-500" },
    { value: "100%", label: "Science-Backed", icon: <FaMicroscope />, color: "from-slate-600 to-slate-500" },
    { value: "Global", label: "Standards", icon: <FaGlobeAsia />, color: "from-blue-500 to-blue-400" },
    { value: "Indian", label: "Hearts", icon: <FaHeartbeat />, color: "from-slate-500 to-slate-400" }
  ];

  const standards = [
    {
      title: "World-Class Validation",
      description: "We only bring science to India that is already trusted by the global medical community.",
      icon: <FaGlobeAsia />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Precision Nutrition",
      description: "Tailored scientific approaches designed specifically for the unique needs of preterm infants.",
      icon: <FaFlask />,
      color: "from-slate-600 to-slate-500"
    },
    {
      title: "A Healthier Tomorrow",
      description: "We aren't just improving stats; we are building the foundation for a stronger generation.",
      icon: <FaLeaf />,
      color: "from-blue-500 to-blue-400"
    }
  ];

  const products = [
    {
      title: "NeoPepti HMF",
      description: "India's first and only extensively hydrolysed whey protein HMF (internationally most HMF are extensively hydrolysed whey, which are not available in India)",
      icon: <FaFlask />,
      tag: "India's First",
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "NeoPro",
      description: "The first Probiotic in India which is specifically introduced to decrease NEC in premature infants",
      icon: <FaMicroscope />,
      tag: "Breakthrough",
      color: "from-slate-600 to-slate-500"
    }
  ];

  // Pharmaceutical/Medical themed images
  const medicalImages = {
    heroBg: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    missionImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQZQfgY2ZddAAsiB0_Rl5zgvA3HuXu-4DMg&s",
    productImage: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    labImage: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
  };

  


  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">

      {/* Hero Section with Swiper */}
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
        {/* Background Image with Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Swiper for Controls Only */}
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pointer-events-auto">
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-blue-300 font-semibold text-sm md:text-base tracking-wider mb-3 uppercase">
                    {currentSlide.subtitle}
                  </p>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.2] mb-5">
                    {currentSlide.title}
                  </h1>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                    {currentSlide.desc}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold py-3.5 px-10 rounded-full text-base md:text-lg shadow-xl transition-all duration-300 cursor-pointer hover:shadow-2xl"
                  >
                    {currentSlide.buttonText}
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="custom-prev absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/95 hover:bg-slate-700 text-slate-600 hover:text-white p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer pointer-events-auto group">
          <FaChevronLeft className="text-xl md:text-2xl group-hover:scale-110 transition-transform" />
        </button>
        <button className="custom-next absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/95 hover:bg-slate-700 text-slate-600 hover:text-white p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer pointer-events-auto group">
          <FaChevronRight className="text-xl md:text-2xl group-hover:scale-110 transition-transform" />
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20b859] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 pointer-events-auto group"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-2xl md:text-3xl group-hover:scale-110 transition-transform" />
        </a>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>

      {/* Mission Section */}
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
                <FaHeartbeat className="text-blue-600 text-sm" />
                <span className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                The Start Every <span className="text-blue-600">Tiny Life Deserves</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Neoverse, we believe a baby's birthplace shouldn't limit their access to world-class science.
                We bridge the gap between global research and Indian NICUs, bringing the latest evidence-based
                nutritional science directly to the bedside.
              </p>
              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-4">
                <p className="text-slate-800 font-semibold">
                  The first 1,000 days are critical. We translate complex international standards into simple,
                  life-changing outcomes, ensuring India's smallest fighters have the strength to grow, thrive,
                  and go home.
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
                  src={medicalImages.missionImage}
                  alt="NICU Medical Care"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaQuoteLeft className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Global Science</p>
                    <p className="text-xs text-gray-500">Indian Hearts</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="text-blue-300 text-4xl mx-auto mb-4 opacity-60" />
            <p className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto leading-relaxed">
              "Bringing the world's best science to India's most precious lives."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Neoverse Standard Section */}
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
              <FaTrophy className="text-yellow-500 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">The Neoverse Standard</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Our <span className="text-blue-600">Commitment to Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${standard.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{standard.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {standard.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {standard.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
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
              <FaFlask className="text-blue-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Our Innovations</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Breakthrough <span className="text-blue-600">Products</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              India's first-of-its-kind products designed specifically for premature infants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                    <div className="text-white text-2xl">{product.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        {product.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <button className="mt-4 text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Discover how Neoverse is transforming neonatal care in India through world-class science
              and compassionate innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Learn Our Story
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-600 hover:text-white transition-all duration-300">
                Our Scientific Partners
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;