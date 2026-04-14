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
  FaEnvelope,
  FaPhone,
  FaUser,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaMedal,
  FaAward,
  FaShieldAlt
} from 'react-icons/fa';

const DonorTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
    alert('Thank you for your interest! Our counselor will contact you soon.');
  };

  const featuredTestimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      role: "Super Mom Donor",
      babyName: "Aarav",
      babyAge: "4 months",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      testimonial: "When I learned that my excess milk could help save premature babies, I didn't think twice. Knowing that my little contribution helped a tiny warrior fight for life brings me immense joy. The NeoLacta team made the process so simple and comfortable. I've been donating for 3 months now and will continue as long as I can.",
      rating: 5,
      milkDonated: "15+ Liters",
      babiesHelped: "8+"
    },
    {
      id: 2,
      name: "Neha Gupta",
      location: "Delhi NCR",
      role: "Proud Donor",
      babyName: "Myra",
      babyAge: "6 months",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      testimonial: "As a mother, I understand the importance of breast milk for a baby's growth. When I had surplus milk, donating it felt like the right thing to do. The screening process was thorough but easy. The doorstep pickup facility is amazing! I'm grateful to be part of this noble cause.",
      rating: 5,
      milkDonated: "20+ Liters",
      babiesHelped: "12+"
    },
    {
      id: 3,
      name: "Dr. Anjali Mehta",
      location: "Bangalore, Karnataka",
      role: "Doctor & Donor",
      babyName: "Rohan",
      babyAge: "5 months",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      testimonial: "Being a neonatologist, I've seen firsthand how donor milk saves lives. When I became a mother, I knew I wanted to donate. NeoLacta's professional approach and commitment to safety impressed me. Every drop counts, and I'm proud to be a Super Mom donor.",
      rating: 5,
      milkDonated: "12+ Liters",
      babiesHelped: "6+"
    }
  ];

  const allTestimonials = [
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      role: "First-time Donor",
      testimonial: "The entire process from registration to first donation was seamless. The counseling team answered all my questions patiently. I feel blessed to help tiny babies get the nutrition they deserve.",
      rating: 5,
      date: "March 2024"
    },
    {
      id: 5,
      name: "Kavita Singh",
      location: "Lucknow, UP",
      role: "Regular Donor",
      testimonial: "Donating milk has been one of the most fulfilling experiences of my motherhood journey. Knowing that my milk is helping a premature baby grow healthy is priceless.",
      rating: 5,
      date: "February 2024"
    },
    {
      id: 6,
      name: "Meera Iyer",
      location: "Chennai, Tamil Nadu",
      role: "Super Mom",
      testimonial: "NeoLacta's donor program is well-organized and donor-friendly. The medical team is supportive, and the pickup service is prompt. Highly recommend every eligible mother to donate.",
      rating: 5,
      date: "January 2024"
    },
    {
      id: 7,
      name: "Richa Agarwal",
      location: "Jaipur, Rajasthan",
      role: "Proud Mother",
      testimonial: "My journey as a donor started when my baby was 2 months old. The satisfaction of helping another baby survive and thrive is indescribable. Thank you NeoLacta for this opportunity.",
      rating: 5,
      date: "December 2023"
    },
    {
      id: 8,
      name: "Shweta Patil",
      location: "Pune, Maharashtra",
      role: "Donor Ambassador",
      testimonial: "I've encouraged 5 of my friends to become donors too! The more we spread awareness, the more babies we can save. NeoLacta's team is doing incredible work.",
      rating: 5,
      date: "November 2023"
    },
    {
      id: 9,
      name: "Divya Bhatia",
      location: "Chandigarh",
      role: "Super Mom Donor",
      testimonial: "The screening process made me confident about the safety standards. The team is professional and caring. I'm honored to be part of this life-saving mission.",
      rating: 5,
      date: "October 2023"
    }
  ];

  const stats = [
    { value: "500+", label: "Active Donors", icon: <FaUserCircle />, color: "from-blue-600 to-blue-500" },
    { value: "95,000+", label: "Babies Helped", icon: <FaBaby />, color: "from-pink-500 to-pink-400" },
    { value: "50,000+", label: "Liters Donated", icon: <FaTint />, color: "from-blue-500 to-blue-400" },
    { value: "100%", label: "Safe & Screened", icon: <FaShieldAlt />, color: "from-green-500 to-green-400" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Donor Testimonials"
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
              Donor <span className="text-pink-300">Testimonials</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-pink-200">
              Hear from Our Super Moms
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Real stories from real mothers who have made a difference in the lives of premature babies.
              Their generosity and compassion inspire us every day.
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
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
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
              <FaMedal className="text-yellow-500 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Featured Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Heartwarming <span className="text-pink-500">Donor Stories</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
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
                  {/* Left Side - Donor Info */}
                  <div className="bg-gradient-to-br from-pink-500 to-pink-400 text-white p-8 flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                      <img 
                        src={featuredTestimonials[currentIndex].image} 
                        alt={featuredTestimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold">{featuredTestimonials[currentIndex].name}</h3>
                    <p className="text-pink-100 text-sm">{featuredTestimonials[currentIndex].location}</p>
                    <p className="text-pink-200 text-xs mt-1">{featuredTestimonials[currentIndex].role}</p>
                    
                    <div className="flex gap-2 mt-3">
                      {[...Array(featuredTestimonials[currentIndex].rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-300 text-sm" />
                      ))}
                    </div>
                    
                    <div className="mt-4 flex gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{featuredTestimonials[currentIndex].milkDonated}</div>
                        <div className="text-xs text-pink-100">Milk Donated</div>
                      </div>
                      <div className="w-px h-10 bg-pink-300"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{featuredTestimonials[currentIndex].babiesHelped}</div>
                        <div className="text-xs text-pink-100">Babies Helped</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <FaBaby className="text-pink-200" />
                      <span>Donating for {featuredTestimonials[currentIndex].babyAge}</span>
                    </div>
                  </div>
                  
                  {/* Right Side - Testimonial */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <FaQuoteLeft className="text-pink-300 text-3xl mb-4 opacity-50" />
                      <p className="text-gray-600 leading-relaxed italic">
                        "{featuredTestimonials[currentIndex].testimonial}"
                      </p>
                      <FaQuoteRight className="text-pink-300 text-3xl mt-4 opacity-50 float-right" />
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-400">
                        - {featuredTestimonials[currentIndex].name}, Super Mom Donor
                      </p>
                    </div>
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
            {featuredTestimonials.map((_, index) => (
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

      {/* All Testimonials Grid */}
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
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">More Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Voices of <span className="text-pink-500">Compassion</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-400 rounded-full flex items-center justify-center shadow-md">
                    <FaUserCircle className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-pink-500">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <FaCalendarAlt className="text-pink-400" /> {testimonial.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Donors Love NeoLacta */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Donors <span className="text-pink-500">Love NeoLacta</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
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
                <FaHandHoldingHeart className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Simple Process</h3>
              <p className="text-gray-500 text-sm">Easy registration and doorstep pickup. No need to visit any center.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <FaShieldAlt className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-500 text-sm">Thorough screening and professional medical oversight for donor safety.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <FaHeart className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Life-Changing Impact</h3>
              <p className="text-gray-500 text-sm">Know exactly how your donation is helping save tiny lives.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-pink-50 px-6 py-2 rounded-full mb-4">
              <FaRegHeart className="text-pink-500 text-lg" />
              <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider">Join the Movement</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ready to Become a <span className="text-pink-500">Super Mom?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              Join hundreds of other compassionate mothers who are making a difference.
              Fill out the form and our counselor will reach out to you.
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
              <div className="grid md:grid-cols-2 gap-5">
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
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400/20 transition-all"
                    placeholder="Tell us why you want to donate..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Become a Donor
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            Every testimonial shared is from a real NeoLacta donor. Their stories inspire us to continue our mission 
            of providing 100% human milk nutrition to every baby in need.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonorTestimonials;