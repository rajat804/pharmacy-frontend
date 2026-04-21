import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaHandHoldingHeart, 
  FaUsers, 
  FaGlobeAsia,
  FaQuoteLeft,
  FaAward,
  FaRocket,
  FaShieldAlt,
  FaFlask,
  FaBaby,
  FaLeaf,
  FaArrowRight,
  FaCalendarAlt,
  FaStar,
  FaChartLine,
  FaCompass,
  FaRegLightbulb
} from 'react-icons/fa';
import { FaHospitalUser } from "react-icons/fa6";
import AboutCta from './AboutCta';

const OurStory = () => {
  const milestones = [
    {
      year: "2016",
      title: "The Vision Takes Shape",
      description: "A group of passionate neonatologists and healthcare experts came together with a vision to provide 100% human milk nutrition to premature babies in India.",
      icon: <FaHeart />,
      color: "from-blue-600 to-blue-500"
    },
    {
      year: "2018",
      title: "Facility Establishment",
      description: "India's first ISO 22000:2018 and GMP-certified human milk processing facility was established in Bangalore.",
      icon: <FaShieldAlt />,
      color: "from-blue-500 to-blue-400"
    },
    {
      year: "2020",
      title: "First Product Launch",
      description: "Launched segment-first lyophilised human milk powder - a breakthrough in neonatal nutrition.",
      icon: <FaFlask />,
      color: "from-blue-600 to-blue-500"
    },
    {
      year: "2022",
      title: "Expanding Reach",
      description: "Trusted by over 100+ leading mother & child care hospitals across India.",
      icon: <FaUsers />,
      color: "from-blue-500 to-blue-400"
    },
    {
      year: "2024",
      title: "Pan-India Presence",
      description: "Available across all major towns and cities, impacting over 50,000+ premature babies.",
      icon: <FaGlobeAsia />,
      color: "from-blue-600 to-blue-500"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "Rigorous safety protocols and international standards ensure the purest human milk products.",
      icon: <FaShieldAlt />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Clinical Excellence",
      description: "Backed by extensive research and trusted by leading neonatologists nationwide.",
      icon: <FaFlask />,
      color: "from-blue-500 to-blue-400"
    },
    {
      title: "Compassionate Care",
      description: "Every drop of milk is handled with utmost care and respect for the donor and recipient.",
      icon: <FaHandHoldingHeart />,
      color: "from-blue-600 to-blue-500"
    },
    {
      title: "Innovation Driven",
      description: "Continuously developing breakthrough products for better neonatal outcomes.",
      icon: <FaRegLightbulb />,
      color: "from-blue-500 to-blue-400"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Rajesh Mehta",
      role: "Founder & CEO",
      description: "Leading neonatologist with 25+ years of experience in neonatal care.",
      icon: <FaBaby />,
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Medical Officer",
      description: "Expert in pediatric nutrition and human milk banking.",
      icon: <FaHeart />,
      color: "from-blue-500 to-blue-400"
    },
    {
      name: "Ms. Anjali Nair",
      role: "Head of Operations",
      description: "ISO certified quality management specialist.",
      icon: <FaShieldAlt />,
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "Dr. Vikram Singh",
      role: "Research Director",
      description: "Leading clinical research on human milk fortifiers.",
      icon: <FaFlask />,
      color: "from-blue-500 to-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-40 w-48 h-48 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Every Drop Tells a <span className="text-blue-200">Story</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A story of compassion, innovation, and unwavering commitment to giving every premature baby 
              the best possible start in life through 100% human milk nutrition.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-full mb-4 shadow-sm border border-blue-100">
                <FaCompass className="text-blue-600 text-sm" />
                <span className="text-blue-700 font-semibold text-xs uppercase tracking-wider">The Beginning</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
                A Vision Born from <br />
                <span className="text-blue-600">Necessity</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In India, millions of babies are born premature every year. Many face life-threatening 
                challenges because they don't have access to their mother's milk. Recognizing this critical 
                gap, we set out on a mission to change the landscape of neonatal nutrition.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our journey began with a simple yet powerful question: What if every premature baby could 
                receive the gift of 100% human milk? Today, we are proud to be India's only ISO 22000:2018 
                and GMP-certified human milk facility dedicated to this mission.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform">50K+</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform">500+</div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform">100+</div>
                </div>
                <p className="text-sm text-gray-500">Babies • Hospitals • Experts</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                <img 
                  src="https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Our Story"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-[220px] border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <FaQuoteLeft className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Every baby deserves</p>
                    <p className="text-xs text-blue-600">the best nutrition</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Quick View */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, clinically proven, 100% human milk-derived nutrition to every premature 
                and at-risk baby in India, ensuring they have the best possible start in life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                <FaGlobeAsia className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted partner in neonatal nutrition, setting global standards for 
                human milk-derived products and making optimal nutrition accessible to every baby.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Milestones</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A journey of dedication, innovation, and impact
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-300 to-blue-400 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 md:pr-8 md:text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-500 border border-gray-100 group hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform shadow-md`}>
                        {milestone.icon}
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg my-4 md:my-0 hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                
                <div className="flex-1 md:pl-8"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Driven by passion, guided by expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-3xl">{member.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-bold text-blue-200 mb-2">50,000+</div>
              <p className="text-white/80">Babies Benefited</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-bold text-blue-200 mb-2">500+</div>
              <p className="text-white/80">Hospitals Served</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl font-bold text-blue-200 mb-2">100%</div>
              <p className="text-white/80">Human Milk Products</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { value: "8+", label: "Years of Excellence", icon: <FaCalendarAlt />, color: "from-blue-600 to-blue-500" },
              { value: "100%", label: "Quality Commitment", icon: <FaStar />, color: "from-blue-500 to-blue-400" },
              { value: "24/7", label: "Support Available", icon: <FaHeart />, color: "from-blue-600 to-blue-500" },
              { value: "12+", label: "Research Publications", icon: <FaChartLine />, color: "from-blue-500 to-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <div className="text-white text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <AboutCta />
    </div>
  );
};

export default OurStory;