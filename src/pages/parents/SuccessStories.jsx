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
  FaMedal,
  FaAward,
  FaShieldAlt,
  FaSmile,
  FaLeaf,
  FaHospitalUser,
  FaChartLine,
  FaPlay,
  FaPause
} from 'react-icons/fa';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');

  const stories = [
    {
      id: 1,
      category: "donor",
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      role: "Super Mom Donor",
      babyName: "Aarav",
      babyAge: "4 months",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "When I learned that my excess milk could help save premature babies, I didn't think twice. Knowing that my little contribution helped a tiny warrior fight for life brings me immense joy. The NeoLacta team made the process so simple and comfortable. I've been donating for 3 months now and will continue as long as I can.",
      title: "A Journey of Compassion: How Donating Milk Changed My Life",
      milkDonated: "15+ Liters",
      babiesHelped: "8+",
      rating: 5,
      date: "March 2024"
    },
    {
      id: 2,
      category: "recipient",
      name: "Neha Gupta",
      location: "Delhi NCR",
      role: "Grateful Mother",
      babyName: "Myra",
      babyAge: "6 months",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "My daughter was born premature at 28 weeks. I couldn't produce enough milk due to stress and medical complications. Donor milk from NeoLacta saved her life. Today, she's a healthy, thriving baby girl. I'm forever grateful to the generous donors who helped us during our toughest time.",
      title: "From NICU to Healthy Baby: Our Miraculous Journey",
      milkReceived: "20+ Liters",
      hospitalStay: "45 days",
      rating: 5,
      date: "February 2024"
    },
    {
      id: 3,
      category: "recipient",
      name: "Dr. Anjali Mehta",
      location: "Bangalore, Karnataka",
      role: "Neonatologist & Mother",
      babyName: "Rohan",
      babyAge: "5 months",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "As a neonatologist, I've prescribed donor milk to countless babies. When my own son needed it, I experienced firsthand the miracle it provides. The quality and safety standards at NeoLacta gave me complete peace of mind. My son is now a healthy, active baby.",
      title: "A Doctor's Perspective: When My Own Baby Needed Donor Milk",
      milkReceived: "12+ Liters",
      weightGain: "2.5 kg",
      rating: 5,
      date: "January 2024"
    },
    {
      id: 4,
      category: "donor",
      name: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      role: "First-time Donor",
      babyName: "Kiara",
      babyAge: "3 months",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "I started donating when my baby was 2 months old. The satisfaction of helping another baby survive and thrive is indescribable. The doorstep pickup service made it so convenient. I've encouraged 5 of my friends to become donors too!",
      title: "Spreading Hope: My Experience as a First-Time Donor",
      milkDonated: "10+ Liters",
      babiesHelped: "5+",
      rating: 5,
      date: "December 2023"
    },
    {
      id: 5,
      category: "recipient",
      name: "Kavita Singh",
      location: "Lucknow, UP",
      role: "Proud Mother",
      babyName: "Arjun",
      babyAge: "8 months",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "My son had severe feeding intolerance to formula. Donor human milk was our last hope. Within weeks, he started gaining weight and thriving. Today, he's meeting all his developmental milestones. Thank you to all the selfless donors!",
      title: "From Feeding Intolerance to Thriving: Our Success Story",
      milkReceived: "25+ Liters",
      weightGain: "3.2 kg",
      rating: 5,
      date: "November 2023"
    },
    {
      id: 6,
      category: "donor",
      name: "Meera Iyer",
      location: "Chennai, Tamil Nadu",
      role: "Super Mom",
      babyName: "Advik",
      babyAge: "6 months",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      story: "Donating milk has been one of the most fulfilling experiences of my motherhood journey. Knowing that my milk is helping a premature baby grow healthy is priceless. The NeoLacta team is incredibly supportive.",
      title: "Making a Difference: My Journey as a Regular Donor",
      milkDonated: "18+ Liters",
      babiesHelped: "10+",
      rating: 5,
      date: "October 2023"
    }
  ];

  const filteredStories = filter === 'all' ? stories : stories.filter(story => story.category === filter);
  const featuredStory = filteredStories[currentIndex];

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredStories.length) % filteredStories.length);
  };

  const stats = [
    { value: "95,000+", label: "Babies Helped", icon: <FaBaby />, color: "from-blue-600 to-blue-500" },
    { value: "500+", label: "Active Donors", icon: <FaHandHoldingHeart />, color: "from-pink-500 to-pink-400" },
    { value: "50,000+", label: "Liters Donated", icon: <FaTint />, color: "from-green-600 to-green-500" },
    { value: "450+", label: "Hospitals Served", icon: <FaHospitalUser />, color: "from-purple-600 to-purple-500" }
  ];

  const categories = [
    { id: 'all', label: 'All Stories', icon: <FaHeart />, count: stories.length },
    { id: 'donor', label: 'Donor Stories', icon: <FaHandHoldingHeart />, count: stories.filter(s => s.category === 'donor').length },
    { id: 'recipient', label: 'Recipient Stories', icon: <FaBaby />, count: stories.filter(s => s.category === 'recipient').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Success Stories"
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
              Inspiring Stories
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Success <span className="text-pink-300">Stories</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-pink-200">
              Real Stories of Hope, Healing, and Human Milk Donation
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Every drop of donated milk tells a story of compassion. Read inspiring journeys of donors 
              and recipient families who have experienced the miracle of human milk donation.
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

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setFilter(cat.id);
                  setCurrentIndex(0);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 border border-gray-200'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                <span className={`text-xs ${filter === cat.id ? 'text-white/80' : 'text-gray-400'}`}>
                  ({cat.count})
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story Carousel */}
      {filteredStories.length > 0 && (
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
                <FaMedal className="text-yellow-500 text-lg" />
                <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">Featured Story</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Heartwarming <span className="text-pink-500">Journeys</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredStory.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Left Side - Donor/Recipient Info */}
                    <div className={`bg-gradient-to-br ${featuredStory.category === 'donor' ? 'from-pink-500 to-pink-400' : 'from-blue-600 to-blue-500'} text-white p-8 flex flex-col items-center text-center`}>
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                        <img 
                          src={featuredStory.image} 
                          alt={featuredStory.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold">{featuredStory.name}</h3>
                      <p className="text-white/80 text-sm">{featuredStory.location}</p>
                      <p className="text-white/90 text-xs mt-1">{featuredStory.role}</p>
                      
                      <div className="flex gap-1 mt-3">
                        {[...Array(featuredStory.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-300 text-sm" />
                        ))}
                      </div>
                      
                      <div className="mt-4 flex gap-4">
                        {featuredStory.category === 'donor' ? (
                          <>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{featuredStory.milkDonated}</div>
                              <div className="text-xs text-white/80">Milk Donated</div>
                            </div>
                            <div className="w-px h-10 bg-white/30"></div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{featuredStory.babiesHelped}</div>
                              <div className="text-xs text-white/80">Babies Helped</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{featuredStory.milkReceived}</div>
                              <div className="text-xs text-white/80">Milk Received</div>
                            </div>
                            <div className="w-px h-10 bg-white/30"></div>
                            <div className="text-center">
                              <div className="text-2xl font-bold">{featuredStory.weightGain || featuredStory.hospitalStay}</div>
                              <div className="text-xs text-white/80">{featuredStory.weightGain ? 'Weight Gain' : 'Hospital Stay'}</div>
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="mt-4 flex items-center gap-2 text-sm">
                        <FaBaby className="text-white/80" />
                        <span>Baby {featuredStory.babyName} • {featuredStory.babyAge}</span>
                      </div>
                    </div>
                    
                    {/* Right Side - Story */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <FaQuoteLeft className="text-pink-300 text-3xl mb-4 opacity-50" />
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{featuredStory.title}</h3>
                        <p className="text-gray-600 leading-relaxed italic">
                          "{featuredStory.story}"
                        </p>
                        <FaQuoteRight className="text-pink-300 text-3xl mt-4 opacity-50 float-right" />
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          <FaCalendarAlt className="text-pink-400" /> {featuredStory.date}
                        </p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              {filteredStories.length > 1 && (
                <>
                  <button 
                    onClick={prevStory}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <FaChevronLeft className="text-pink-500" />
                  </button>
                  <button 
                    onClick={nextStory}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <FaChevronRight className="text-pink-500" />
                  </button>
                </>
              )}
            </div>
            
            {/* Dots Indicator */}
            {filteredStories.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {filteredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === index ? 'w-8 bg-pink-500' : 'bg-gray-300 hover:bg-pink-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* All Stories Grid */}
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
              <FaHeart className="text-pink-500 text-lg" />
              <span className="text-slate-700 font-semibold text-sm uppercase tracking-wider">More Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Every Drop Tells a <span className="text-pink-500">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto rounded-full"></div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <img src={story.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-sm">{story.name}</h3>
                          <p className="text-white/70 text-xs">{story.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        story.category === 'donor' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {story.category === 'donor' ? 'Donor' : 'Recipient'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(story.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xs" />
                      ))}
                    </div>
                    
                    <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors">
                      {story.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-3 line-clamp-3">
                      {story.story}
                    </p>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <FaCalendarAlt className="text-pink-400" />
                        <span>{story.date}</span>
                      </div>
                      <button className="text-pink-500 text-sm font-medium hover:gap-1 transition-all flex items-center gap-0">
                        Read More <FaChevronRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Impact Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 md:p-10 text-white text-center shadow-xl"
          >
            <FaQuoteLeft className="text-pink-300 text-4xl mx-auto mb-4 opacity-60" />
            <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              "Every drop of donated milk is a gift of life. These success stories are a testament to the 
              power of compassion and the difference we can make when we come together."
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-0.5 bg-pink-300"></div>
              <span className="text-pink-300 font-semibold">NeoLacta Team</span>
              <div className="w-12 h-0.5 bg-pink-300"></div>
            </div>
          </motion.div>
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
              Want to Share Your Story?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Your journey can inspire other mothers and donors. Share your success story with us 
              and help spread hope and awareness about the power of human milk donation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                Share Your Story
              </button>
              <button className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                Become a Donor
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;