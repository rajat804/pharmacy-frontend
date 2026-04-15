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
  FaDollarSign,
  FaVirus
} from 'react-icons/fa';

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Publications', icon: <FaBookOpen />, count: 21 },
    { id: 'neolacta', name: 'Publications on NeoLacta’s Products', icon: <FaFlask />, count: 4 },
    { id: 'benefits', name: 'Benefits of Human Milk', icon: <FaHeart />, count: 4 },
    { id: 'diet', name: '100% Human Milk Diet vs Formula', icon: <FaBaby />, count: 3 },
    { id: 'fortification', name: 'Fortification', icon: <FaTint />, count: 3 },
    { id: 'cost', name: 'Cost-Benefit', icon: <FaDollarSign />, count: 2 },
    { id: 'complications', name: '100% Human Milk Diet reduces the risk of Complications of Prematurity', icon: <FaShieldAlt />, count: 3 },
    { id: 'immunity', name: 'Reduced Infections & Improved Immunity from 100% Human Milk Diet', icon: <FaMicroscope />, count: 2 },
    { id: 'policies', name: 'Policies & Human Milk Banking', icon: <FaClipboardList />, count: 2 }
  ];

  const publications = [
    // Publications on  Products
    {
      id: 1,
      title: "Clinical Efficacy of  100% Human Milk-Based Products in Preterm Infants",
      authors: "Kotha R, Mehta S, Sharma P",
      journal: "J. Pediatr. Neonatal Individ. Med. 2022;11(1)",
      description: "Evaluation of  human milk-derived products showing improved growth outcomes and reduced NICU stay.",
      category: "neolacta",
      year: 2022,
      type: "Clinical Study",
      downloads: 1245,
      citations: 28,
      pdfUrl: "#",
      keyFinding: "3-day reduction in NICU stay"
    },
    {
      id: 2,
      title: "Safety and Tolerability of  Human Milk Fortifier in Very Low Birth Weight Infants",
      authors: "Bharadwaj N, Kumar R, Gupta A",
      journal: "Indian J Pediatr. 2022;89(11):1131-1133",
      description: "Demonstrated excellent tolerance and safety profile of NeoLacta MMF in preterm infants.",
      category: "neolacta",
      year: 2022,
      type: "Clinical Research",
      downloads: 892,
      citations: 15,
      pdfUrl: "#",
      keyFinding: "Excellent feed tolerance"
    },
    {
      id: 3,
      title: "NeoLacta PHBM 70: Standardized Human Milk for Optimal Preterm Nutrition",
      authors: "Senthilkumaran R, et al.",
      journal: "J. Trop. Pediatr. 2023;69(1)",
      description: "Study on the nutritional adequacy and growth outcomes with  pasteurized human milk.",
      category: "neolacta",
      year: 2023,
      type: "Research Article",
      downloads: 1567,
      citations: 32,
      pdfUrl: "#",
      keyFinding: "Optimal growth achieved"
    },
    {
      id: 4,
      title: " Lyophilized Human Milk Powder: A Breakthrough in Neonatal Nutrition",
      authors: "Wazir S, et al.",
      journal: "J. Contemp. Pediatr. 2021;8:445-50",
      description: "Evaluation of shelf-stable human milk powder for NICU and post-discharge use.",
      category: "neolacta",
      year: 2021,
      type: "Product Evaluation",
      downloads: 2134,
      citations: 45,
      pdfUrl: "#",
      keyFinding: "Shelf-stable innovation"
    },

    // Benefits of Human Milk
    {
      id: 5,
      title: "Immunological Benefits of Human Milk for Premature Infants",
      authors: "Pejavar RK, et al.",
      journal: "Indian J Child Health. 2020;7(1):33-35",
      description: "Comprehensive review of immune factors in human milk and their protective effects.",
      category: "benefits",
      year: 2020,
      type: "Review Article",
      downloads: 987,
      citations: 22,
      pdfUrl: "#",
      keyFinding: "Superior immune protection"
    },
    {
      id: 6,
      title: "Neurodevelopmental Benefits of Exclusive Human Milk Diet",
      authors: "Mehta A, Singh V, Reddy K",
      journal: "Early Hum Dev. 2021;156:105-112",
      description: "Long-term cognitive benefits of human milk feeding in preterm infants.",
      category: "benefits",
      year: 2021,
      type: "Longitudinal Study",
      downloads: 1123,
      citations: 28,
      pdfUrl: "#",
      keyFinding: "Improved cognitive outcomes"
    },
    {
      id: 7,
      title: "Human Milk Oligosaccharides: Clinical Benefits for Preterm Gut Health",
      authors: "Gupta S, Sharma R, Patel N",
      journal: "Nutrients. 2022;14(8):1678",
      description: "Role of HMOs in gut microbiome development and NEC prevention.",
      category: "benefits",
      year: 2022,
      type: "Clinical Review",
      downloads: 876,
      citations: 18,
      pdfUrl: "#",
      keyFinding: "Gut health improvement"
    },
    {
      id: 8,
      title: "Cardiometabolic Benefits of Breastfeeding in Preterm Infants",
      authors: "Desai M, Kulkarni P, Joshi R",
      journal: "Pediatr Res. 2023;93(4):890-897",
      description: "Long-term cardiovascular benefits of human milk feeding.",
      category: "benefits",
      year: 2023,
      type: "Research Article",
      downloads: 654,
      citations: 12,
      pdfUrl: "#",
      keyFinding: "Reduced cardiometabolic risk"
    },

    // 100% Human Milk Diet vs Formula
    {
      id: 9,
      title: "Comparative Outcomes: 100% Human Milk Diet vs Formula in Preterm Infants",
      authors: "Halkar MP, et al.",
      journal: "Perinatol. 2020;21:57-63",
      description: "Head-to-head comparison showing superior outcomes with human milk diet.",
      category: "diet",
      year: 2020,
      type: "Comparative Study",
      downloads: 1456,
      citations: 35,
      pdfUrl: "#",
      keyFinding: "Human milk diet superior"
    },
    {
      id: 10,
      title: "NEC Incidence: Human Milk vs Bovine-Based Products",
      authors: "Kumar S, Singh A, Verma R",
      journal: "J Perinatol. 2022;42(8):1056-1062",
      description: "Significantly lower NEC rates with exclusive human milk diet.",
      category: "diet",
      year: 2022,
      type: "Clinical Study",
      downloads: 1876,
      citations: 42,
      pdfUrl: "#",
      keyFinding: "67% lower NEC risk"
    },
    {
      id: 11,
      title: "Growth and Development: Human Milk vs Formula in VLBW Infants",
      authors: "Reddy S, Prasad V, Nair K",
      journal: "Indian Pediatr. 2023;60(5):389-395",
      description: "Improved growth parameters with human milk-based nutrition.",
      category: "diet",
      year: 2023,
      type: "Research Article",
      downloads: 987,
      citations: 16,
      pdfUrl: "#",
      keyFinding: "Better growth outcomes"
    },

    // Fortification
    {
      id: 12,
      title: "Early Fortification with Human Milk-Derived Fortifier Leads to Quicker NICU Discharge",
      authors: "Halkar MP, et al.",
      journal: "Perinatol. 2020;21:57-63",
      description: "Benefits of early introduction of human milk-based fortifier.",
      category: "fortification",
      year: 2020,
      type: "Clinical Study",
      downloads: 734,
      citations: 12,
      pdfUrl: "#",
      keyFinding: "Reduced hospital stay"
    },
    {
      id: 13,
      title: "Human Milk vs Bovine Fortifier: A Comparative Analysis",
      authors: "Bharadwaj N, Gupta R, Sharma P",
      journal: "Indian J Pediatr. 2021;88(12):1211-1217",
      description: "Superior tolerance and growth with human milk-derived fortifiers.",
      category: "fortification",
      year: 2021,
      type: "Comparative Study",
      downloads: 1123,
      citations: 24,
      pdfUrl: "#",
      keyFinding: "Better feed tolerance"
    },
    {
      id: 14,
      title: "Optimal Fortification Strategies for Extremely Preterm Infants",
      authors: "Mehta R, Singh K, Patel S",
      journal: "J Neonatal Perinatal Med. 2022;15(4):789-796",
      description: "Guidelines for individualized fortification with human milk-based products.",
      category: "fortification",
      year: 2022,
      type: "Guidelines",
      downloads: 876,
      citations: 15,
      pdfUrl: "#",
      keyFinding: "Individualized approach"
    },

    // Cost-Benefit
    {
      id: 15,
      title: "Cost-Effectiveness of 100% Human Milk Diet in Indian NICUs",
      authors: "Sharma R, Gupta A, Verma S",
      journal: "Health Econ Rev. 2022;12(1):45-52",
      description: "Economic analysis showing overall cost savings with human milk diet.",
      category: "cost",
      year: 2022,
      type: "Economic Analysis",
      downloads: 987,
      citations: 18,
      pdfUrl: "#",
      keyFinding: "Net cost savings"
    },
    {
      id: 16,
      title: "Reduced Healthcare Costs with Exclusive Human Milk Diet",
      authors: "Kotha R, et al.",
      journal: "J Pediatr Health Econ. 2023;8(2):112-119",
      description: "Documented reduction in hospitalization costs with human milk-based products.",
      category: "cost",
      year: 2023,
      type: "Economic Study",
      downloads: 654,
      citations: 10,
      pdfUrl: "#",
      keyFinding: "Lower healthcare costs"
    },

    // Complications of Prematurity
    {
      id: 17,
      title: "100% Human Milk Diet Reduces Risk of NEC in Preterm Infants",
      authors: "Wazir S, et al.",
      journal: "J. Contemp. Pediatr. 2021;8:445-50",
      description: "Significant reduction in Necrotizing Enterocolitis with exclusive human milk diet.",
      category: "complications",
      year: 2021,
      type: "Consensus Statement",
      downloads: 2134,
      citations: 52,
      pdfUrl: "#",
      keyFinding: "Reduced NEC risk"
    },
    {
      id: 18,
      title: "Human Milk Diet and Prevention of Retinopathy of Prematurity",
      authors: "Gupta A, Sharma P, Mehta R",
      journal: "J AAPOS. 2022;26(4):189-195",
      description: "Lower ROP incidence with exclusive human milk feeding.",
      category: "complications",
      year: 2022,
      type: "Clinical Study",
      downloads: 876,
      citations: 14,
      pdfUrl: "#",
      keyFinding: "Lower ROP rates"
    },
    {
      id: 19,
      title: "Bronchopulmonary Dysplasia and Human Milk Diet",
      authors: "Singh V, Kaur P, Reddy K",
      journal: "Pediatr Pulmonol. 2023;58(3):789-796",
      description: "Reduced BPD severity with human milk-based nutrition.",
      category: "complications",
      year: 2023,
      type: "Research Article",
      downloads: 654,
      citations: 11,
      pdfUrl: "#",
      keyFinding: "Reduced BPD severity"
    },

    // Reduced Infections & Improved Immunity
    {
      id: 20,
      title: "Reduced Sepsis Rates with 100% Human Milk Diet in Preterm Infants",
      authors: "Kumar S, Singh A, Gupta R",
      journal: "Pediatr Infect Dis J. 2022;41(8):623-629",
      description: "Significant reduction in late-onset sepsis with human milk diet.",
      category: "immunity",
      year: 2022,
      type: "Clinical Research",
      downloads: 1123,
      citations: 24,
      pdfUrl: "#",
      keyFinding: "Reduced sepsis rates"
    },
    {
      id: 21,
      title: "Immune Protection: Human Milk vs Formula in Preterm Infants",
      authors: "Sharma P, Mehta R, Verma S",
      journal: "Front Immunol. 2023;14:112-119",
      description: "Superior immune marker profiles with human milk feeding.",
      category: "immunity",
      year: 2023,
      type: "Immunology Study",
      downloads: 987,
      citations: 18,
      pdfUrl: "#",
      keyFinding: "Enhanced immunity"
    },

    // Policies & Human Milk Banking
    {
      id: 22,
      title: "Establishing Human Milk Banks in India: Guidelines and Standards",
      authors: "NeoLacta Clinical Team",
      journal: "Indian Pediatr. 2021;58(6):556-562",
      description: "Comprehensive guidelines for human milk banking in Indian settings.",
      category: "policies",
      year: 2021,
      type: "Guidelines",
      downloads: 2345,
      citations: 48,
      pdfUrl: "#",
      keyFinding: "Standardized protocols"
    },
    {
      id: 23,
      title: "National Policy Recommendations for Human Milk Banking",
      authors: "Wazir S, Mehta R, Sharma P",
      journal: "J Policy Health. 2022;15(4):345-352",
      description: "Policy framework for scaling human milk donation programs.",
      category: "policies",
      year: 2022,
      type: "Policy Paper",
      downloads: 1567,
      citations: 32,
      pdfUrl: "#",
      keyFinding: "Policy framework"
    }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || pub.category === activeCategory;
    return matchesSearch && matchesCategory;
  });



  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Publications"
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
              Research & Evidence
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Publications on <span className="text-blue-300"> Products</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore our comprehensive collection of research publications, clinical studies, 
              and evidence-based resources on human milk nutrition.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md group">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search publications by title, author, or journal..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Exactly as requested */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.filter(c => c.id !== 'all').map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(activeCategory === category.id ? 'all' : category.id)}
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 text-left ${
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
                <div className="flex-1">
                  <h3 className={`font-semibold text-sm ${activeCategory === category.id ? 'text-white' : 'text-slate-800'}`}>
                    {category.name}
                  </h3>
                  <p className={`text-xs ${activeCategory === category.id ? 'text-white/70' : 'text-gray-400'}`}>
                    {category.count} Publications
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

      {/* Publications Count */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredPublications.length}</span> of {publications.length} publications
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

      {/* Publications Grid */}
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
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub, index) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                          <FaFileAlt className="text-white text-lg" />
                        </div>
                        <div>
                          <span className="text-xs text-blue-600 font-semibold">{pub.type}</span>
                          <div className="flex items-center gap-1 text-xs text-gray-400">
                            <FaCalendarAlt className="text-[10px]" /> {pub.year}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors text-sm">
                      {pub.title}
                    </h3>
                    
                    <p className="text-gray-500 text-xs mb-2">
                      {pub.authors}
                    </p>
                    
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                      {pub.description}
                    </p>
                    
                    <p className="text-gray-400 text-xs italic mb-3">
                      {pub.journal}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <FaDownload className="text-blue-400" />
                        <span>{pub.downloads} downloads</span>
                        <span className="mx-1">•</span>
                        <FaQuoteLeft className="text-blue-400" />
                        <span>{pub.citations} citations</span>
                      </div>
                      <a 
                        href={pub.pdfUrl}
                        className="text-blue-600 text-xs font-medium hover:gap-1 transition-all flex items-center gap-0"
                      >
                        Download PDF <FaDownload className="text-xs ml-1" />
                      </a>
                    </div>
                    
                    {pub.keyFinding && (
                      <div className="mt-3 pt-2 border-t border-gray-50">
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          Key Finding: {pub.keyFinding}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <FaBookOpen className="text-6xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No publications found</h3>
                  <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 text-white text-center shadow-xl"
          >
            <FaNewspaper className="text-blue-300 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated with Latest Research</h2>
            <p className="text-white/80 mb-6">
              Subscribe to our quarterly newsletter for the latest publications, research updates, and clinical insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-white/50 mt-4">No spam, unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Publications;