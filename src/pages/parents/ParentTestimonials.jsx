import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeart, 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaUserCircle,
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
  FaRegSmile
} from 'react-icons/fa';

const ParentTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoTestimonials = [
    {
      id: 1,
      name: "Mr. Ramesh Patil",
      location: "Nashik, Maharashtra",
      babyName: "Baby Patil",
      babyAge: "6 months",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
      story: "We are excited to share the remarkable progress of Mr. Ramesh Patil's baby from Nashik, Maharashtra, who was born at just 6.5 months. Thanks to  100% human milk products, our little warrior gained strength and is now thriving. The quality and care provided by NeoLacta gave us peace of mind during our most challenging times.",
      duration: "3:45",
      rating: 5,
      category: "premature"
    },
    {
      id: 2,
      name: "Mrs. Priya & Mr. Rajesh Mehta",
      location: "Mumbai, Maharashtra",
      babyName: "Aarav Mehta",
      babyAge: "8 months",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
      story: "When Aarav was born prematurely, we were devastated. But  donor milk program gave us hope. Today, our son is healthy and meeting all his milestones. We can't thank the donors and the NeoLacta team enough for their incredible support.",
      duration: "4:20",
      rating: 5,
      category: "premature"
    },
    {
      id: 3,
      name: "Dr. Sneha & Mr. Vikram Reddy",
      location: "Hyderabad, Telangana",
      babyName: "Kiara Reddy",
      babyAge: "5 months",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop",
      story: "As a doctor, I knew the importance of human milk for premature babies. When my daughter needed it, NeoLacta was there. Their products are of the highest quality, and their support team is exceptional.",
      duration: "5:10",
      rating: 5,
      category: "premature"
    }
  ];

  const writtenTestimonials = [
    {
      id: 4,
      name: "Mrs. Kavita Singh",
      location: "Lucknow, Uttar Pradesh",
      babyName: "Arjun Singh",
      babyAge: "9 months",
      testimonial: "Our baby was born at 32 weeks and had severe feeding intolerance.  human milk fortifier was a game-changer. Within weeks, Arjun started gaining weight and became more active. Today, he's a happy, healthy baby who has exceeded all growth expectations.",
      rating: 5,
      date: "March 2024",
      role: "Proud Mother",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Mrs. Neha Gupta",
      location: "Delhi NCR",
      babyName: "Myra Gupta",
      babyAge: "7 months",
      testimonial: "The journey was tough, but NeoLacta made it easier. Their donor milk saved my daughter's life. She was in the NICU for 45 days, and the donor milk helped her gain strength. Now she's a thriving baby who brings joy to our family every day.",
      rating: 5,
      date: "February 2024",
      role: "Grateful Mother",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 6,
      name: "Mr. & Mrs. Sharma",
      location: "Jaipur, Rajasthan",
      babyName: "Twin Babies",
      babyAge: "6 months",
      testimonial: "Having twins prematurely was overwhelming.  products ensured both our babies got optimal nutrition. The doorstep delivery and excellent customer support made our journey smoother. Highly recommend NeoLacta to all parents of preemies.",
      rating: 5,
      date: "January 2024",
      role: "Parents of Twins",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Mrs. Anjali Nair",
      location: "Chennai, Tamil Nadu",
      babyName: "Aditya Nair",
      babyAge: "10 months",
      testimonial: "The human milk fortifier from NeoLacta helped my son catch up on his growth. He was born at 2 kg and within 3 months, he reached normal weight. The product is easy to use and gave us confidence in his nutrition.",
      rating: 5,
      date: "December 2023",
      role: "Thankful Mother",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Dr. Meera & Mr. Rajiv Iyer",
      location: "Bangalore, Karnataka",
      babyName: "Rohan Iyer",
      babyAge: "8 months",
      testimonial: "As healthcare professionals, we understand the science behind human milk.  products are top-notch. Our son responded beautifully to the fortifier, and we're grateful for the excellent support team.",
      rating: 5,
      date: "November 2023",
      role: "Doctor Parents",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 9,
      name: "Mrs. Pooja Desai",
      location: "Ahmedabad, Gujarat",
      babyName: "Krish Desai",
      babyAge: "5 months",
      testimonial: "The donor milk program at NeoLacta is a blessing. When I couldn't produce enough milk, they provided high-quality donor milk for my premature baby. Krish is now healthy and growing well. Forever grateful!",
      rating: 5,
      date: "October 2023",
      role: "Happy Mother",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  const stats = [
    { value: "95,000+", label: "Babies Helped", icon: <FaBaby />, color: "from-blue-600 to-blue-500" },
    { value: "98%", label: "Parent Satisfaction", icon: <FaSmile />, color: "from-pink-500 to-pink-400" },
    { value: "450+", label: "Hospitals Served", icon: <FaHospitalUser />, color: "from-green-600 to-green-500" },
    { value: "100%", label: "Natural & Safe", icon: <FaLeaf />, color: "from-purple-600 to-purple-500" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % writtenTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + writtenTestimonials.length) % writtenTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Parent Testimonials"
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
            <span className="text-pink-300 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Real Stories
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Love in <span className="text-pink-300">Every Drop:</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-200">
              Parent Testimonials
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Heartfelt Narratives of Parenthood, Nourished by  Care
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
                <div className="text-3xl font-bold text-slate-800 mb-1 group-hover:text-pink-600 transition-colors">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
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
              <FaVideo className="text-red-600 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Video Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Watch Their <span className="text-pink-500">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              Hear directly from parents about their experience with  products and support
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
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                      <FaUserCircle className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{video.name}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-pink-400" /> {video.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(video.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {video.story}
                  </p>
                  
                  <button 
                    onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                    className="mt-4 text-pink-500 text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    {activeVideo === video.id ? "Close Video" : "Read More"} <FaChevronRight className="text-xs" />
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
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaHeart className="text-pink-500 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Written Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              What <span className="text-pink-500">Parents Say</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <FaQuoteLeft className="text-pink-300 text-2xl mb-3 opacity-50" />
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    ) : (
                      <FaUserCircle className="text-white text-2xl" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-pink-400" /> {testimonial.location}
                    </p>
                    <p className="text-xs text-pink-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <FaCalendarAlt className="text-pink-400" /> {testimonial.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full mb-4 shadow-sm border border-gray-200">
              <FaRegSmile className="text-pink-500 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Featured Story</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              A Journey of <span className="text-pink-500">Hope & Healing</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-400 text-white p-8 flex flex-col justify-center">
                    <FaQuoteLeft className="text-white/30 text-4xl mb-4" />
                    <p className="text-lg leading-relaxed italic">
                      "{writtenTestimonials[currentIndex].testimonial}"
                    </p>
                    <FaQuoteRight className="text-white/30 text-4xl mt-4 self-end" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                        {writtenTestimonials[currentIndex].image ? (
                          <img src={writtenTestimonials[currentIndex].image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <FaUserCircle className="text-white text-3xl" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800">{writtenTestimonials[currentIndex].name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <FaMapMarkerAlt className="text-pink-400" /> {writtenTestimonials[currentIndex].location}
                        </p>
                        <p className="text-sm text-pink-500">{writtenTestimonials[currentIndex].role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(writtenTestimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm">
                      Baby: {writtenTestimonials[currentIndex].babyName} • Age: {writtenTestimonials[currentIndex].babyAge}
                    </p>
                    <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                      <FaCalendarAlt className="text-pink-400" /> {writtenTestimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft className="text-pink-500" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight className="text-pink-500" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {writtenTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-pink-500' : 'bg-gray-300 hover:bg-pink-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaHeart className="text-5xl text-pink-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Share Your Story
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Your experience can inspire other parents on their journey. Share your testimonial with us 
              and help spread hope and awareness about the power of human milk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translateY-1">
                Share Your Testimonial
              </button>
              <button className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParentTestimonials;