import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaUserMd, 
  FaBaby, 
  FaHeartbeat, 
  FaBookReader,
  FaNewspaper,
  FaChevronRight,
  FaSearch,
  FaTags,
  FaShareAlt,
  FaClock
} from 'react-icons/fa';

const BlogsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: <FaNewspaper />, count: 12 },
    { id: 'clinical', name: 'Clinical Insights', icon: <FaUserMd />, count: 4 },
    { id: 'parenting', name: 'Parenting Tips', icon: <FaBaby />, count: 5 },
    { id: 'nutrition', name: 'Infant Nutrition', icon: <FaHeartbeat />, count: 3 }
  ];

  const blogs = [
    {
      id: 1,
      title: "The Science Behind 100% Human Milk Diet for Premature Infants",
      excerpt: "Discover how exclusive human milk diet (EHMD) improves clinical outcomes and reduces NICU stay for preterm babies...",
      category: "clinical",
      author: "Dr. Priya Sharma",
      authorRole: "Neonatologist",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Premature Babies", "EHMD", "NICU"],
      featured: true
    },
    {
      id: 2,
      title: "Breastfeeding Tips for New Mothers: A Complete Guide",
      excerpt: "Essential tips and techniques to establish successful breastfeeding for first-time mothers...",
      category: "parenting",
      author: "Ms. Neha Gupta",
      authorRole: "Lactation Consultant",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Breastfeeding", "New Mothers", "Lactation"],
      featured: false
    },
    {
      id: 3,
      title: "Human Milk Fortifiers: Bridging the Nutritional Gap",
      excerpt: "Understanding the role of human milk-derived fortifiers in supporting growth of very low birth weight infants...",
      category: "nutrition",
      author: "Dr. Rajesh Kumar",
      authorRole: "Pediatric Nutritionist",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Fortifiers", "Nutrition", "VLBW"],
      featured: false
    },
    {
      id: 4,
      title: "Latest Research: Human Milk Reduces NEC Risk in Preterms",
      excerpt: "New study reveals that exclusive human milk diet significantly reduces the risk of Necrotizing Enterocolitis...",
      category: "clinical",
      author: "Dr. Anjali Mehta",
      authorRole: "Clinical Researcher",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["NEC", "Research", "Preterm"],
      featured: true
    },
    {
      id: 5,
      title: "Creating a Supportive Environment for Breastfeeding at Work",
      excerpt: "Practical strategies for working mothers to maintain breastfeeding after returning to work...",
      category: "parenting",
      author: "Ms. Sneha Reddy",
      authorRole: "Parenting Coach",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Working Mothers", "Pumping", "Support"],
      featured: false
    },
    {
      id: 6,
      title: "Understanding Cow's Milk Protein Allergy in Infants",
      excerpt: "Recognizing symptoms and management strategies for CMPA, and how human milk-based products can help...",
      category: "clinical",
      author: "Dr. Sunil Patel",
      authorRole: "Allergy Specialist",
      date: "February 15, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["CMPA", "Allergy", "Management"],
      featured: false
    },
    {
      id: 7,
      title: "The Role of Lyophilized Human Milk in Post-Discharge Care",
      excerpt: "How freeze-dried human milk supports continued nutrition after NICU discharge and reduces rehospitalization...",
      category: "nutrition",
      author: "Dr. Meera Iyer",
      authorRole: "Neonatologist",
      date: "February 10, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Post-discharge", "Lyophilized", "Continuity"],
      featured: false
    },
    {
      id: 8,
      title: "Success Stories: How Human Milk Changed Lives",
      excerpt: "Real stories from parents whose premature babies thrived on 100% human milk diet...",
      category: "parenting",
      author: "Parent Community",
      authorRole: "NeoLacta Parents",
      date: "February 5, 2024",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Success Stories", "Testimonials", "Inspiration"],
      featured: false
    }
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlogs = blogs.filter(blog => blog.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8fbf9] to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#1a6d4c] font-semibold text-sm uppercase tracking-wider bg-[#e8f5f0] px-4 py-2 rounded-full inline-block mb-4">
            Our Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a4a3a] mb-4">
            Insights & <span className="text-[#1a6d4c]">Knowledge Hub</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1a6d4c] to-[#0f5a3e] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, clinical updates, and parenting tips for your little one's healthy journey
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-[#e0ebe6] focus:border-[#1a6d4c] focus:outline-none focus:ring-2 focus:ring-[#1a6d4c]/20 transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-[#1a6d4c] to-[#0f5a3e] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-[#e8f5f0] hover:text-[#1a6d4c] border border-[#e0ebe6]'
                  }`}
                >
                  {category.icon}
                  <span className="text-sm">{category.name}</span>
                  <span className={`text-xs ${activeCategory === category.id ? 'text-white/80' : 'text-gray-400'}`}>
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Blogs Section */}
        {activeCategory === 'all' && searchTerm === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#1a4a3a]">Featured Articles</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#1a6d4c] to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#1a6d4c] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-4 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" /> {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-xs" /> {blog.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#b8e6d4] transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
                      <button className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More <FaChevronRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#e0ebe6] group hover:-translate-y-2"
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white/90 hover:bg-[#1a6d4c] text-gray-600 hover:text-white p-2 rounded-full transition-all duration-300">
                        <FaShareAlt className="text-sm" />
                      </button>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-5">
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-[#e8f5f0] text-[#1a6d4c] px-2 py-1 rounded-full">
                        {categories.find(c => c.id === blog.category)?.name}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <FaClock className="text-[10px]" /> {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1a4a3a] mb-2 line-clamp-2 group-hover:text-[#1a6d4c] transition-colors">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#e8f5f0]">
                      <div>
                        <p className="text-sm font-semibold text-[#1a4a3a]">{blog.author}</p>
                        <p className="text-xs text-gray-400">{blog.authorRole}</p>
                      </div>
                      <button className="text-[#1a6d4c] hover:gap-2 transition-all flex items-center gap-1 text-sm font-medium">
                        Read <FaChevronRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <FaBookReader className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

       

        {/* Load More Button */}
        {filteredBlogs.length >= 6 && (
          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 border-2 border-[#1a6d4c] text-[#1a6d4c] px-8 py-3 rounded-full font-semibold hover:bg-[#1a6d4c] hover:text-white transition-all duration-300">
              Load More Articles
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;