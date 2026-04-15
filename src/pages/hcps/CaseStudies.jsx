import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeart, 
  FaFilePdf, 
  FaDownload, 
  FaEye,
  FaBookOpen,
  FaNewspaper,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaUserMd,
  FaChartLine,
  FaBaby,
  FaShieldAlt,
  FaFlask,
  FaTint,
  FaLeaf,
  FaHospitalUser,
  FaGlobeAsia,
  FaQuoteLeft,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaMicroscope,
  FaVial,
  FaClipboardList,
  FaFileAlt,
  FaExternalLinkAlt,
  FaWeight,
  FaHeartbeat,
  FaStethoscope
} from 'react-icons/fa';

const CaseStudies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Case Studies', icon: <FaBookOpen />, count: 7 },
    { id: 'mmfplus', name: 'NeoLact MMF Plus', icon: <FaFlask />, count: 2 },
    { id: 'mmf', name: 'NeoLact MMF', icon: <FaTint />, count: 3 },
    { id: 'neolact70', name: 'NeoLact 70', icon: <FaBaby />, count: 1 }
  ];

  const caseStudies = [
    // MMF Plus Case Series
    {
      id: 1,
      title: "MMF+ case series: (01) - 27 weeks 550gms ELBW baby achieving optimal growth through human milk-derived fortifiers",
      authors: "Dr. Rajeev Ranjan, M.D. Paediatrics (IMS-BHU)",
      location: "Varanasi",
      category: "mmfplus",
      product: "NeoLact MMF Plus",
      babyDetails: "27 weeks, 550gms ELBW baby",
      description: "An extremely low birth weight baby born at 27 weeks weighing just 550 grams achieved optimal growth through human milk-derived fortifiers.",
      publishedDate: "March 2024",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      keyOutcomes: ["Optimal growth achieved", "Excellent weight gain", "Good feed tolerance"],
      pdfUrl: "#"
    },
    {
      id: 2,
      title: "MMF+ case series: (02) - A 25.4 week 620gms ELBW baby achieving optimal growth through human milk-derived fortifiers",
      authors: "Dr. Tejas Deepak, Consultant Neonatologist",
      location: "Hyderabad",
      category: "mmfplus",
      product: "NeoLact MMF Plus",
      babyDetails: "25.4 weeks, 620gms ELBW baby",
      description: "Extremely premature baby born at 25.4 weeks weighing 620 grams showed remarkable growth with human milk-derived fortifiers.",
      publishedDate: "February 2024",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      keyOutcomes: ["Optimal growth trajectory", "Improved nutritional status", "Successful NICU discharge"],
      pdfUrl: "#"
    },

    // MMF Case Series
    {
      id: 3,
      title: "MMF case series: M01 - A 27-week, 800 g EUGR baby achieving optimal growth through human-milk derived fortifiers",
      authors: "Dr. Rakesh Kotha",
      location: "Hyderabad",
      category: "mmf",
      product: "NeoLact MMF",
      babyDetails: "27 weeks, 800g EUGR baby",
      description: "Extremely low birth weight baby with Extrauterine Growth Restriction (EUGR) achieved optimal growth with human milk-derived fortifiers.",
      publishedDate: "June 2020",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      keyOutcomes: ["Catch-up growth achieved", "Improved weight gain", "Better nutritional outcomes"],
      pdfUrl: "#"
    },
    {
      id: 4,
      title: "MMF case series: M02 - Human milk-derived fortifier (MMF) in a preterm baby demonstrating intolerance to bovine milk-based fortifiers",
      authors: "Dr. Anice Joy, Consultant Neonatologist",
      location: "Kochi",
      category: "mmf",
      product: "NeoLact MMF",
      babyDetails: "Preterm baby with bovine HMF intolerance",
      description: "Preterm baby showing intolerance to bovine milk-based fortifiers successfully treated with human milk-derived fortifier.",
      publishedDate: "July 9, 2020",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      keyOutcomes: ["Resolved feed intolerance", "Improved digestion", "Better growth parameters"],
      pdfUrl: "#"
    },
    {
      id: 5,
      title: "MMF case series: M03 - Remarkable weight gain of 33.25 grams/day achieved in an ELBW baby through fortification with human milk-derived fortifiers",
      authors: "Dr. Sunil Mohan, Consultant Neonatologist",
      location: "Hyderabad",
      category: "mmf",
      product: "NeoLact MMF",
      babyDetails: "ELBW baby",
      description: "Exceptional case showing weight gain of 33.25 grams per day in an extremely low birth weight baby using human milk-derived fortifiers.",
      publishedDate: "July 2020",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      keyOutcomes: ["33.25g/day weight gain", "Excellent growth velocity", "Successful outcomes"],
      pdfUrl: "#"
    },

    // NeoLact 70 Case Series
    {
      id: 6,
      title: "Experience sharing series: NeoLact 70 - Supplementation with human milk-derived NeoLact 70 bolsters immuno-nutritional needs in an ELBW baby",
      authors: "Dr. Sunil Gavahane, Consultant Neonatologist",
      location: "Aurangabad",
      category: "neolact70",
      product: "NeoLact 70",
      babyDetails: "ELBW baby",
      description: "Human milk-derived NeoLact 70 supplementation significantly improved immuno-nutritional status in an extremely low birth weight baby.",
      publishedDate: "October 2020",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      keyOutcomes: ["Improved immunity", "Enhanced nutrition", "Better clinical outcomes"],
      pdfUrl: "#"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesSearch = cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cs.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || cs.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { value: "7+", label: "Case Studies", icon: <FaClipboardList />, color: "from-blue-600 to-blue-500" },
    { value: "6+", label: "Expert Neonatologists", icon: <FaUserMd />, color: "from-pink-500 to-pink-400" },
    { value: "100%", label: "Success Rate", icon: <FaChartLine />, color: "from-green-600 to-green-500" },
    { value: "50+", label: "Babies Impacted", icon: <FaBaby />, color: "from-purple-600 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Case Studies"
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
              Clinical Evidence
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Unveiling Success: <span className="text-blue-300">Neolacta Product Case Studies</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-200">
              Real Solutions, Real Impact – Explore In-Depth Case Studies
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Discover how  100% human milk products have transformed outcomes for premature 
              and critically ill babies across India.
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
                className="text-center group cursor-pointer"
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

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md group">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search case studies by title, doctor, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-blue-100'
                }`}>
                  <div className={activeCategory === category.id ? 'text-white' : 'text-blue-600'}>
                    {category.icon}
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold text-sm ${activeCategory === category.id ? 'text-white' : 'text-slate-800'}`}>
                    {category.name}
                  </h3>
                  <p className={`text-xs ${activeCategory === category.id ? 'text-white/70' : 'text-gray-400'}`}>
                    {category.count} Case Studies
                  </p>
                </div>
                {activeCategory === category.id && (
                  <FaCheckCircle className="text-white text-lg" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Count */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredCaseStudies.length}</span> of {caseStudies.length} case studies
            </p>
            {activeCategory !== 'all' && (
              <button
                onClick={() => setActiveCategory('all')}
                className="text-blue-600 text-sm hover:underline flex items-center gap-1"
              >
                Clear filter <FaArrowRight className="text-xs" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCaseStudies.length > 0 ? (
                filteredCaseStudies.map((cs, index) => (
                  <motion.div
                    key={cs.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={cs.image} 
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          {cs.product}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <FaBaby className="text-white text-sm" />
                          <span className="text-white text-xs">{cs.babyDetails}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center">
                          <FaUserMd className="text-white text-sm" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-sm line-clamp-1">
                            {cs.authors.split(',')[0]}
                          </h3>
                          <p className="text-xs text-gray-400 flex items-center gap-1">
                            <FaGlobeAsia className="text-[10px]" /> {cs.location}
                          </p>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm">
                        {cs.title}
                      </h4>
                      
                      <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                        {cs.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {cs.keyOutcomes.map((outcome, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                            ✓ {outcome}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <FaCalendarAlt className="text-blue-400" />
                          <span>{cs.publishedDate}</span>
                        </div>
                        <a 
                          href={cs.pdfUrl}
                          className="text-blue-600 text-sm font-medium hover:gap-1 transition-all flex items-center gap-0"
                        >
                          View Case Study <FaArrowRight className="text-xs ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <FaBookOpen className="text-6xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No case studies found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Products at a Glance</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaFlask className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">NeoLact MMF Plus</h3>
              <p className="text-blue-600 text-sm">Mother's Milk Factor (Enhanced)</p>
              <p className="text-gray-600 text-xs mt-2">Higher protein formula for babies with increased nutritional needs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border border-green-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaTint className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">NeoLact MMF</h3>
              <p className="text-green-600 text-sm">Mother's Milk Factor</p>
              <p className="text-gray-600 text-xs mt-2">100% human milk-derived fortifier for optimal growth</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaBaby className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">NeoLact 70</h3>
              <p className="text-purple-600 text-sm">Lyophilized Human Milk</p>
              <p className="text-gray-600 text-xs mt-2">Shelf-stable human milk powder for immuno-nutritional support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Share Your Success Story
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Are you a neonatologist or healthcare professional with experience using NeoLacta products? 
              Submit your case study to help other clinicians make informed decisions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Submit Case Study
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Download All Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;