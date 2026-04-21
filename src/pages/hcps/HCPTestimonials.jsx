import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeart, 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaUserMd,
  FaBaby,
  FaTint,
  FaHandHoldingHeart,
  FaRegHeart,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaVideo,
  FaYoutube,
  FaMapMarkerAlt,
  FaSmile,
  FaLeaf,
  FaHospitalUser,
  FaChartLine,
  FaRegSmile,
  FaStethoscope,
  FaMicroscope,
  FaFlask,
  FaAward,
  FaClipboardList
} from 'react-icons/fa';

const HCPTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoTestimonials = [
    {
      id: 1,
      name: "Dr. Rajeev Ranjan",
      designation: "M.D. Paediatrics (IMS-BHU)",
      location: "Varanasi",
      specialty: "Neonatologist",
      experience: "15+ years",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
      testimonial: "Human milk-derived products have been a game-changer in my NICU practice. The MMF Plus has shown remarkable results in ELBW babies, with excellent weight gain and feed tolerance. I highly recommend these products to all neonatologists.",
      duration: "4:30",
      rating: 5,
      category: "neonatologist"
    },
    {
      id: 2,
      name: "Dr. Tejas Deepak",
      designation: "Consultant Neonatologist",
      location: "Hyderabad",
      specialty: "Neonatology",
      experience: "12+ years",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
      testimonial: "The clinical outcomes with 100% human milk fortifiers have been outstanding. We've seen reduced NEC rates and better growth parameters in our preterm infants. The product quality is exceptional.",
      duration: "5:15",
      rating: 5,
      category: "neonatologist"
    },
    {
      id: 3,
      name: "Dr. Anice Joy",
      designation: "Consultant Neonatologist",
      location: "Kochi",
      specialty: "Pediatric Nutrition",
      experience: "10+ years",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
      testimonial: "I've seen remarkable improvement in babies who were intolerant to bovine-based fortifiers after switching to NeoLacta MMF. The feed tolerance is excellent and growth outcomes are superior.",
      duration: "4:45",
      rating: 5,
      category: "neonatologist"
    }
  ];

  const writtenTestimonials = [
    {
      id: 4,
      name: "Dr. Rakesh Kotha",
      designation: "Consultant Neonatologist",
      location: "Hyderabad",
      specialty: "Neonatology",
      experience: "18+ years",
      testimonial: "Human milk-derived products have transformed our NICU's feeding protocol. The MMF case series we published demonstrated optimal growth in ELBW babies. I strongly recommend these products for all premature infants.",
      rating: 5,
      date: "March 2024",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      keyFinding: "Optimal growth achieved in ELBW babies"
    },
    {
      id: 5,
      name: "Dr. Sunil Mohan",
      designation: "Consultant Neonatologist",
      location: "Hyderabad",
      specialty: "Neonatology",
      experience: "20+ years",
      testimonial: "We achieved remarkable weight gain of 33.25 grams/day in an ELBW baby using NeoLacta MMF. The product is easy to use and has excellent clinical outcomes. A must-have in every NICU.",
      rating: 5,
      date: "February 2024",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      keyFinding: "33.25g/day weight gain achieved"
    },
    {
      id: 6,
      name: "Dr. Sunil Gavahane",
      designation: "Consultant Neonatologist",
      location: "Aurangabad",
      specialty: "Neonatology",
      experience: "14+ years",
      testimonial: "NeoLact 70 has been instrumental in meeting the immuno-nutritional needs of our ELBW babies. The shelf-stable format is convenient and the clinical results are impressive.",
      rating: 5,
      date: "January 2024",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      keyFinding: "Improved immuno-nutritional status"
    },
    {
      id: 7,
      name: "Dr. Priya Sharma",
      designation: "Senior Neonatologist",
      location: "Mumbai",
      specialty: "Neonatal Nutrition",
      experience: "16+ years",
      testimonial: "The 100% human milk diet approach with NeoLacta products has significantly reduced NEC incidence in our NICU. The products are of the highest quality and our parent satisfaction has improved dramatically.",
      rating: 5,
      date: "December 2023",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      keyFinding: "Reduced NEC incidence"
    },
    {
      id: 8,
      name: "Dr. Anjali Mehta",
      designation: "Pediatric Nutritionist",
      location: "Bangalore",
      specialty: "Pediatric Nutrition",
      experience: "12+ years",
      testimonial: "Products have excellent nutritional profiles. The growth charts of babies on their fortifiers show consistent improvement. I confidently recommend them to all my colleagues.",
      rating: 5,
      date: "November 2023",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      keyFinding: "Consistent growth improvement"
    },
    {
      id: 9,
      name: "Dr. Vikram Singh",
      designation: "Head of NICU",
      location: "Delhi NCR",
      specialty: "Neonatal Intensive Care",
      experience: "22+ years",
      testimonial: "The clinical evidence supporting products is robust. We've incorporated their human milk fortifiers into our standard protocol with excellent results. Highly recommended.",
      rating: 5,
      date: "October 2023",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      keyFinding: "Standard protocol integration"
    }
  ];

  const stats = [
    { value: "50+", label: "HCP Testimonials", icon: <FaUserMd />, color: "from-blue-600 to-blue-500" },
    { value: "25+", label: "Expert Neonatologists", icon: <FaStethoscope />, color: "from-blue-500 to-blue-400" },
    { value: "15+", label: "Published Case Studies", icon: <FaClipboardList />, color: "from-blue-600 to-blue-500" },
    { value: "100%", label: "Recommendation Rate", icon: <FaAward />, color: "from-blue-500 to-blue-400" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % writtenTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + writtenTestimonials.length) % writtenTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="HCP Testimonials"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Healthcare Professionals Speak
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              HCP <span className="text-blue-200">Testimonials</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-200">
              Trusted by Leading Neonatologists Across India
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Hear what healthcare professionals say about 100% human milk products and 
              their impact on neonatal care outcomes.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
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
                <div className="text-3xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaVideo className="text-red-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Video Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Experts <span className="text-blue-600">Share Their Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Leading neonatologists and healthcare professionals share their clinical experience with NeoLacta products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative cursor-pointer" onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeVideo === video.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-gray-900"
                    >
                      <iframe 
                        src={video.videoUrl} 
                        title={video.name}
                        className="w-full h-64 rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                      <FaUserMd className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{video.name}</h3>
                      <p className="text-xs text-blue-600">{video.designation}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-blue-400" /> {video.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(video.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    "{video.testimonial}"
                  </p>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                      {video.specialty}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {video.experience}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                    className="mt-4 text-blue-600 text-sm font-semibold hover:gap-2 transition-all flex items-center gap-1 hover:text-blue-700"
                  >
                    {activeVideo === video.id ? "Close Video" : "Watch Full Testimonial"} <FaChevronRight className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaHeart className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Written Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What <span className="text-blue-600">Neonatologists Say</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <FaQuoteLeft className="text-blue-300 text-2xl mb-3 opacity-50" />
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      <FaUserMd className="text-white text-xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-blue-600">{testimonial.designation}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-blue-400" /> {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <FaCalendarAlt className="text-blue-400" /> {testimonial.date}
                  </p>
                </div>
                
                {testimonial.keyFinding && (
                  <div className="mt-3 pt-2 border-t border-gray-50">
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                      Key Finding: {testimonial.keyFinding}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaAward className="text-yellow-500 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Featured Expert</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Spotlight: <span className="text-blue-600">Expert Opinion</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100"
              >
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 flex flex-col justify-center">
                    <FaQuoteLeft className="text-white/30 text-4xl mb-4" />
                    <p className="text-lg leading-relaxed italic">
                      "{writtenTestimonials[currentIndex].testimonial}"
                    </p>
                    <FaQuoteRight className="text-white/30 text-4xl mt-4 self-end" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                        {writtenTestimonials[currentIndex].image ? (
                          <img src={writtenTestimonials[currentIndex].image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <FaUserMd className="text-white text-3xl" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{writtenTestimonials[currentIndex].name}</h3>
                        <p className="text-sm text-blue-600">{writtenTestimonials[currentIndex].designation}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <FaMapMarkerAlt className="text-blue-400" /> {writtenTestimonials[currentIndex].location}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(writtenTestimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                        {writtenTestimonials[currentIndex].specialty}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {writtenTestimonials[currentIndex].experience}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-400" /> {writtenTestimonials[currentIndex].date}
                    </p>
                    {writtenTestimonials[currentIndex].keyFinding && (
                      <div className="mt-3 pt-2">
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          Key Finding: {writtenTestimonials[currentIndex].keyFinding}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50"
            >
              <FaChevronLeft className="text-blue-500" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50"
            >
              <FaChevronRight className="text-blue-500" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {writtenTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-blue-500' : 'bg-gray-300 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Evidence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
              <FaMicroscope className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Clinical Evidence</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why <span className="text-blue-600">Experts Trust NeoLacta</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <FaFlask className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">100% Human Milk</h3>
              <p className="text-gray-500 text-sm">Clinically proven human milk-derived products with superior outcomes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <FaChartLine className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Results</h3>
              <p className="text-gray-500 text-sm">Published case studies showing optimal growth and reduced complications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <FaHospitalUser className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted Nationwide</h3>
              <p className="text-gray-500 text-sm">Used in 450+ hospitals across India with excellent feedback</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-5xl text-blue-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Join Our Community of <span className="text-blue-600">Experts</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Share your clinical experience with NeoLacta products and help other healthcare professionals 
              make informed decisions for their patients.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1 transition-all duration-300">
                Share Your Testimonial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1">
                Request Product Information
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HCPTestimonials;