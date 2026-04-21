import React from 'react'
import { motion } from 'framer-motion'

const AboutCta = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Be Part of Our <span className="text-blue-600">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Together, we can ensure every premature baby gets the nutrition they deserve.
              Join us in our mission to nurture lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 cursor-pointer"
              >
                Partner With Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-blue-600 text-blue-600 bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-blue-200/50"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutCta;