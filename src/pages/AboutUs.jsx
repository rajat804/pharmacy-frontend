import React from 'react';
import { motion} from 'framer-motion';
import {
  FaQuoteLeft, FaHeartbeat, FaMicroscope, FaGlobeAsia,
  FaTrophy, FaFlask, FaCheckCircle, FaBaby,
  FaShieldAlt, FaChartLine, FaHandHoldingHeart,
  FaStar, FaAward, FaRegSmile, FaUsers, FaHospitalUser,
  FaLeaf, FaRocket, FaEye, FaBullseye, FaCalendarAlt,
  FaUserMd, FaClipboardList, FaBrain, FaBone,
  FaStethoscope, FaSyringe, FaVial, FaLungs
} from 'react-icons/fa';
import { MdScience, MdLocalHospital, MdVerified, MdHealthAndSafety, MdBiotech } from 'react-icons/md';

const AboutUs = () => {
  // const { scrollYProgress } = useScroll();
  // const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Company Stats
  const stats = [
    { value: "2018", label: "Year Founded", icon: <FaCalendarAlt />, color: "from-blue-600 to-cyan-400" },
    { value: "50,000+", label: "Babies Benefited", icon: <FaBaby />, color: "from-cyan-400 to-cyan-300" },
    { value: "500+", label: "Partner Hospitals", icon: <MdLocalHospital />, color: "from-blue-600 to-cyan-400" },
    { value: "100%", label: "Science-Backed", icon: <FaMicroscope />, color: "from-cyan-400 to-cyan-300" }
  ];

  // Core Values
  const coreValues = [
    {
      title: "Innovation",
      description: "Continuously pushing boundaries in neonatal nutrition with cutting-edge research.",
      icon: <FaRocket />,
      color: "from-blue-600 to-cyan-400"
    },
    {
      title: "Compassion",
      description: "Every tiny life matters. We care deeply about every baby's future.",
      icon: <FaHandHoldingHeart />,
      color: "from-cyan-400 to-cyan-300"
    },
    {
      title: "Excellence",
      description: "World-class standards for Indian NICUs. No compromise on quality.",
      icon: <FaTrophy />,
      color: "from-blue-600 to-cyan-400"
    },
    {
      title: "Integrity",
      description: "Transparent, ethical, and scientifically rigorous in everything we do.",
      icon: <FaShieldAlt />,
      color: "from-cyan-400 to-cyan-300"
    }
  ];

  // Milestones
  const milestones = [
    { year: "2018", title: "Company Founded", description: "Neoverse established with a vision to transform neonatal care in India." },
    { year: "2019", title: "First Product Launch", description: "Launched India's first extensively hydrolysed HMF - NeoPepti HMF." },
    { year: "2021", title: "FDA GRAS Certification", description: "Achieved FDA GRAS certification for our flagship products." },
    { year: "2023", title: "500+ Hospitals", description: "Partnered with over 500 hospitals across India." },
    { year: "2024", title: "International Recognition", description: "Recognized globally for innovation in neonatal nutrition." }
  ];

  // Leadership Team
  const leadership = [
    {
      name: "Dr. Anjali Sharma",
      role: "Founder & CEO",
      qualification: "MD, Neonatology",
      bio: "20+ years of experience in neonatal care. Former Head of NICU at Apollo Hospitals.",
      icon: <FaUserMd />
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Scientific Officer",
      qualification: "PhD, Nutrition Sciences",
      bio: "Leading researcher in preterm infant nutrition with multiple international publications.",
      icon: <FaMicroscope />
    },
    {
      name: "Priya Mehta",
      role: "Head of Operations",
      qualification: "MBA, Healthcare Management",
      bio: "Expert in healthcare operations and quality management systems.",
      icon: <FaClipboardList />
    }
  ];

  // Certifications
  const certifications = [
    { name: "FDA GRAS", description: "Generally Recognized as Safe", icon: <MdVerified /> },
    { name: "ISO 22000", description: "Food Safety Management", icon: <MdHealthAndSafety /> },
    { name: "GMP Certified", description: "Good Manufacturing Practices", icon: <FaCheckCircle /> },
    { name: "ESPGHAN 2022", description: "European Society Compliance", icon: <FaChartLine /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      
      {/* Hero Section - Updated with Medical/Lab Image */}
      <div className="relative min-h-[60vh] sm:min-h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4033140/pexels-photo-4033140.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Medical Laboratory Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-800/90" />
        </div>

        <div className="relative z-20 min-h-[60vh] sm:min-h-[70vh] flex items-center">
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
                  <span className="text-cyan-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Science Meets Compassion</span>
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6"
              >
                Advancing Neonatal
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Science Every Day
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl"
              >
                Where cutting-edge laboratory research meets clinical excellence. Our state-of-the-art facilities 
                and dedicated medical professionals work tirelessly to bring breakthrough neonatal nutrition to India.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-30 -mt-12 sm:-mt-16 max-w-6xl mx-auto px-4 sm:px-6"
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

      {/* Our Story Section */}
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
                <span className="text-blue-600 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 md:mb-6">
                The Journey of{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  Neoverse
                </span>
              </h2>
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mb-5 sm:mb-6 md:mb-8 rounded-full" />
              
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Neoverse was founded with a simple yet powerful vision: every premature baby in India deserves 
                access to world-class nutritional science. We recognized a critical gap between global research 
                and what was available in Indian NICUs.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Our journey began in 2018 when a team of passionate neonatologists, researchers, and healthcare 
                professionals came together to bridge this gap. We traveled to leading NICUs across the world, 
                studied international best practices, and brought that knowledge back to India.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Today, Neoverse stands as India's most trusted name in neonatal nutrition, partnering with over 
                500 hospitals and impacting more than 50,000 tiny lives. But our journey has just begun.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-6 sm:mt-8 lg:mt-0"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Medical Research Lab"
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 lg:-bottom-6 lg:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-3 md:p-4 lg:p-5 max-w-[150px] sm:max-w-[170px] md:max-w-[190px] lg:max-w-[220px] border border-cyan-400/30">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center">
                    <FaMicroscope className="text-white text-xs sm:text-sm md:text-base lg:text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-[10px] sm:text-xs md:text-sm">State-of-the-Art Lab</p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-cyan-500">FDA Approved Facility</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600/5 via-white to-cyan-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-cyan-400/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaBullseye className="text-white text-xl sm:text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                To bridge the gap between global research and Indian NICUs by bringing the latest evidence-based 
                nutritional science directly to the bedside of every premature baby in India.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-cyan-400/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaEye className="text-white text-xl sm:text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                A future where no premature baby's birthplace limits their access to world-class nutrition. 
                Every tiny life gets the start it deserves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-blue-600/10 px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4">
              <FaStar className="text-blue-600 text-sm sm:text-base md:text-lg" />
              <span className="text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Our Core Values</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4">
              What Drives{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Everything We Do
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-cyan-400/40 text-center"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <div className="text-white text-xl sm:text-2xl md:text-3xl">{value.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1.5 sm:mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
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
              <FaTrophy className="text-cyan-400 text-sm sm:text-base md:text-lg" />
              <span className="text-cyan-400 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Key{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400 hidden sm:block lg:block"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-6 sm:mb-8 md:mb-10 lg:mb-12 ${
                  index % 2 === 0 ? 'lg:pr-12 lg:text-right lg:ml-0 lg:mr-auto' : 'lg:pl-12 lg:ml-auto lg:mr-0'
                } lg:w-1/2`}
                style={{ marginLeft: index % 2 === 0 ? '0' : 'auto', marginRight: index % 2 === 0 ? 'auto' : '0' }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-2 md:left-3 lg:left-auto top-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center z-10"
                  style={{ [index % 2 === 0 ? 'right' : 'left']: '-12px' }}>
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 ml-8 sm:ml-10 md:ml-12 lg:ml-0 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">{milestone.year}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">{milestone.title}</h3>
                  <p className="text-white/70 text-xs sm:text-sm md:text-base">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 bg-blue-600/10 px-3 sm:px-4 md:px-5 lg:px-6 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4">
              <FaUsers className="text-blue-600 text-sm sm:text-base md:text-lg" />
              <span className="text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-cyan-400/40 text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <div className="text-white text-3xl sm:text-4xl md:text-5xl">{member.icon}</div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-cyan-600 text-xs sm:text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mb-2 sm:mb-3">{member.qualification}</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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
              <span className="text-blue-600 font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Certifications & Compliance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Commitment to Quality
              </span>
            </h2>
            <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <div className="text-white text-xl sm:text-2xl md:text-3xl">{cert.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400" />
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
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
              Partner with us to transform neonatal care in India. Together, we can ensure every tiny life gets the start it deserves.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Partner With Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;