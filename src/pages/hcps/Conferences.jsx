import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeart, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers,
  FaMicrophone,
  FaVideo,
  FaBuilding,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaUserTie,
  FaBookOpen,
  FaNewspaper,
  FaSearch,
  FaFilter,
  FaGlobeAsia,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRegCalendar,
  FaRegClock,
  FaTicketAlt,
  FaBell,
  FaEnvelope,
  FaPhone,
  FaUser
} from 'react-icons/fa';

const Conferences = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const upcomingConferences = [
    {
      id: 1,
      title: "National Neonatology Conference 2024",
      theme: "Advancing Neonatal Nutrition and Care",
      date: "November 15-17, 2024",
      location: "Mumbai, Maharashtra",
      venue: "Jio World Convention Centre",
      speakers: ["Dr. Rakesh Sharma", "Dr. Priya Mehta", "Dr. Sunil Gavahane"],
      type: "Physical",
      status: "upcoming",
      registrationDeadline: "October 30, 2024"
    },
    {
      id: 2,
      title: "International Human Milk Banking Symposium",
      theme: "Global Perspectives on Donor Human Milk",
      date: "December 5-6, 2024",
      location: "Bangalore, Karnataka",
      venue: "The Leela Palace",
      speakers: ["Dr. Sarah Johnson", "Dr. Rajesh Kumar", "Dr. Anjali Nair"],
      type: "Hybrid",
      status: "upcoming",
      registrationDeadline: "November 20, 2024"
    },
    {
      id: 3,
      title: "Asia Pacific Pediatric Nutrition Congress",
      theme: "Optimal Nutrition for Every Child",
      date: "January 10-12, 2025",
      location: "Singapore",
      venue: "Marina Bay Sands",
      speakers: ["Dr. James Wilson", "Dr. Meera Iyer", "Prof. David Chen"],
      type: "International",
      status: "upcoming",
      registrationDeadline: "December 20, 2024"
    }
  ];

  const pastConferences = [
    {
      id: 4,
      title: "Indian Academy of Pediatrics Annual Conference 2023",
      date: "December 10-12, 2023",
      location: "Delhi NCR",
      contribution: "NeoLacta presented research on 100% Human Milk Diet outcomes",
      highlights: ["Keynote on Human Milk Fortification", "Panel Discussion on NEC Prevention", "Poster Presentation on MMF Plus"],
      year: 2023
    },
    {
      id: 5,
      title: "World Prematurity Day Symposium 2023",
      date: "November 17, 2023",
      location: "Hyderabad, Telangana",
      contribution: "Sponsored session on Donor Human Milk Programs",
      highlights: ["Expert Talk by Dr. Rakesh Kotha", "Case Study Presentations", "Donor Milk Awareness Campaign"],
      year: 2023
    },
    {
      id: 6,
      title: "South Asian Neonatal Forum 2023",
      date: "September 5-7, 2023",
      location: "Chennai, Tamil Nadu",
      contribution: "Launch of MMF Plus clinical data",
      highlights: ["Clinical Trial Results", "Panel on Fortification Strategies", "Workshop on Human Milk Banking"],
      year: 2023
    },
    {
      id: 7,
      title: "International Conference on Pediatric Nutrition 2022",
      date: "December 2-4, 2022",
      location: "Bangalore, Karnataka",
      contribution: "Presented research on Lyophilized Human Milk",
      highlights: ["Research Presentation", "Networking Session", "Industry Partner Meet"],
      year: 2022
    }
  ];

  const stats = [
    { value: "15+", label: "Conferences Attended", icon: <FaGlobeAsia />, color: "from-blue-600 to-blue-500" },
    { value: "50+", label: "Research Presentations", icon: <FaMicrophone />, color: "from-blue-500 to-blue-400" },
    { value: "100+", label: "Expert Speakers Met", icon: <FaUserTie />, color: "from-blue-600 to-blue-500" },
    { value: "25+", label: "Partner Institutions", icon: <FaUsers />, color: "from-blue-500 to-blue-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Conferences"
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
              Events & Gatherings
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold mb-4">
              Conferences & <span className="text-blue-200">Events</span>
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore the leading conferences and events dedicated to advancing neonatal care and nutrition. 
              Stay updated on latest contributions to the field and engage with experts at upcoming conferences.
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

      {/* Coming Soon Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full mb-4">
              <FaBell className="text-blue-600 text-xl animate-pulse" />
              <span className="text-blue-800 font-semibold">New Conference Announcements Coming Soon!</span>
            </div>
            <p className="text-gray-600">
              We're constantly updating our conference calendar. Subscribe to get notified about upcoming events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 inline-flex">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FaCalendarAlt className="inline mr-2" /> Upcoming Conferences
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FaClock className="inline mr-2" /> Past Conferences
              </button>
            </div>
          </div>

          {/* Upcoming Conferences */}
          {activeTab === 'upcoming' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingConferences.map((conf, index) => (
                  <motion.div
                    key={conf.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
                      <div className="flex justify-between items-start">
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{conf.type}</span>
                        <FaRegCalendar className="text-white/70" />
                      </div>
                      <h3 className="text-xl font-bold mt-3 mb-1 line-clamp-2">{conf.title}</h3>
                      <p className="text-blue-100 text-sm">{conf.theme}</p>
                    </div>
                    
                    <div className="p-5">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaCalendarAlt className="text-blue-500 text-sm" />
                          <span className="text-sm">{conf.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-blue-500 text-sm" />
                          <span className="text-sm">{conf.location}</span>
                        </div>
                        <div className="flex items-start gap-2 text-gray-600">
                          <FaBuilding className="text-blue-500 text-sm mt-0.5" />
                          <span className="text-sm">{conf.venue}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 font-semibold mb-2">Key Speakers:</p>
                        <div className="flex flex-wrap gap-1">
                          {conf.speakers.map((speaker, idx) => (
                            <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                              {speaker}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-xl p-3 mb-4">
                        <p className="text-xs text-blue-700">
                          <FaClock className="inline mr-1" /> Registration Deadline: {conf.registrationDeadline}
                        </p>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-0.5 transition-all duration-300">
                        Register Now →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Past Conferences */}
          {activeTab === 'past' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {pastConferences.map((conf, index) => (
                  <motion.div
                    key={conf.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 border border-gray-100 hover:-translate-y-2"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {conf.year}
                        </span>
                      </div>
                      <FaCheckCircle className="text-green-500 text-xl" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {conf.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <FaCalendarAlt className="text-blue-500" />
                      <span>{conf.date}</span>
                      <span className="mx-1">•</span>
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span>{conf.location}</span>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-blue-800 font-semibold mb-2"> Contribution:</p>
                      <p className="text-sm text-blue-700">{conf.contribution}</p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-2">Event Highlights:</p>
                      <div className="flex flex-wrap gap-2">
                        {conf.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full group-hover:bg-green-100 transition-colors">
                            ✓ {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Our Contributions Section */}
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
              <FaMicrophone className="text-blue-600 text-lg" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Our Contributions</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">Global Presence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              We actively participate in leading conferences worldwide, sharing research and insights on human milk nutrition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaBookOpen className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Research Presentations</h3>
              <p className="text-2xl font-bold text-blue-600">25+</p>
              <p className="text-xs text-gray-500">Scientific Papers Presented</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Expert Panels</h3>
              <p className="text-2xl font-bold text-blue-600">15+</p>
              <p className="text-xs text-gray-500">Panel Discussions Moderated</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaChalkboardTeacher className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Workshops</h3>
              <p className="text-2xl font-bold text-blue-600">10+</p>
              <p className="text-xs text-gray-500">Educational Workshops Conducted</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Notified Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-3xl p-8 md:p-10 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <FaBell className="text-blue-200 text-5xl mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Get Notified About Upcoming Events</h2>
            <p className="text-white/80 mb-6">
              Subscribe to our conference newsletter to receive updates about upcoming conferences, 
              webinars, and events in the field of neonatal nutrition.
            </p>
            
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2"
              >
                <FaCheckCircle /> Subscribed Successfully!
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button type="submit" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  Subscribe Now
                </button>
              </form>
            )}
            <p className="text-xs text-white/50 mt-4">No spam, unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Interested in Partnering?</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 mb-6">
              If you're organizing a conference and would like NeoLacta to participate as a speaker, 
              sponsor, or exhibitor, please reach out to us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-1">
                Contact Conference Team
              </button>
              <button className="border-2 border-blue-600 text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1">
                Download Conference Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Conferences;