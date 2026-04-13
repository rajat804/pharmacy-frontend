import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    subtitle: "Join The Movement",
    title: "Be a Donor",
    desc: "Help save premature babies by donating your precious breast milk. Every drop matters in their fight for life and growth.",
    image: "https://images.pexels.com/photos/6873559/pexels-photo-6873559.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    fallbackImage: "https://placehold.co/1600x900/1a6d4c/white?text=NeoLacta+Donor",
    buttonText: "Become a Donor"
  },
  {
    subtitle: "Welcome to Neolacta",
    title: "Nurturing Lives",
    desc: "Exclusively human milk derived products which offer improved clinical outcomes and reduced hospital stay for premature infants in the NICU",
    image: "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    fallbackImage: "https://placehold.co/1600x900/1a6d4c/white?text=NeoLacta+Nurturing",
    buttonText: "Know More"
  },
  {
    subtitle: "Purest Human Milk",
    title: "For Tiny Warriors",
    desc: "100% natural, pasteurised and lyophilised human breast milk that gives premature babies the best chance at life",
    image: "https://images.pexels.com/photos/6696132/pexels-photo-6696132.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    fallbackImage: "https://placehold.co/1600x900/1a6d4c/white?text=NeoLacta+Warriors",
    buttonText: "Our Products"
  },
  {
    subtitle: "Clinically Proven",
    title: "Better Outcomes",
    desc: "Backed by science and trusted by leading neonatologists and NICUs across India for faster recovery and better growth",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
    fallbackImage: "https://placehold.co/1600x900/1a6d4c/white?text=NeoLacta+Clinical",
    buttonText: "See Evidence"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setCurrentSlide(slides[swiper.realIndex]);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a2e24]">
      {/* Background Image with Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Swiper for Controls Only */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Empty slide - only for swiper navigation */}
            <div className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Content - Animated with Framer Motion */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pointer-events-auto">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="text-[#b8e6d4] font-semibold text-sm md:text-base tracking-wider mb-3 uppercase">
                  {currentSlide.subtitle}
                </p>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.2] mb-5">
                  {currentSlide.title}
                </h1>

                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                  {currentSlide.desc}
                </p>

                <button className="bg-[#1a6d4c] hover:bg-[#0f5a3e] text-white font-semibold py-3.5 px-10 rounded-full text-base md:text-lg shadow-xl transition-all duration-300 cursor-pointer">
                  {currentSlide.buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="custom-prev absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-[#1a6d4c] p-3 md:p-4 rounded-full shadow-xl transition-all hover:scale-110 cursor-pointer pointer-events-auto">
        <FaChevronLeft className="text-xl md:text-2xl" />
      </button>
      <button className="custom-next absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-[#1a6d4c] p-3 md:p-4 rounded-full shadow-xl transition-all hover:scale-110 cursor-pointer pointer-events-auto">
        <FaChevronRight className="text-xl md:text-2xl" />
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20b859] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl md:text-3xl" />
      </a>
    </div>
  );
};

export default Hero;