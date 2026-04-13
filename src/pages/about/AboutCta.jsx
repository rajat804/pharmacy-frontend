import React from 'react'
import { motion } from 'framer-motion'

const AboutCta = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Be Part of Our Journey
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Together, we can ensure every premature baby gets the nutrition they deserve.
              Join us in our mission to nurture lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#1e3a5f] to-[#152c48] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Partner With Us
              </button>
              <button className="border-2 border-[#1e3a5f] text-[#1e3a5f] px-8 py-3 rounded-full font-semibold hover:bg-[#1e3a5f] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutCta
