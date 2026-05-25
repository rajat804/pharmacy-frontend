import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaEnvelope,
  FaBell,
  FaArrowRight,
  FaCheckCircle,
  FaHeartbeat,
  FaMicroscope,
  FaBaby,
  FaFlask,
  FaShieldAlt,
  FaTrophy,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Launch date
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      setSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  const features = [
    {
      icon: <FaMicroscope />,
      title: "Clinical Research",
      description: "Latest studies and publications",
    },
    {
      icon: <FaBaby />,
      title: "Parent Resources",
      description: "Guides and support materials",
    },
    {
      icon: <FaFlask />,
      title: "Product Innovations",
      description: "New neonatal nutrition solutions",
    },
    {
      icon: <FaHeartbeat />,
      title: "Expert Webinars",
      description: "Live sessions with specialists",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Updates",
      description: "Certifications and compliance",
    },
    {
      icon: <FaTrophy />,
      title: "Success Stories",
      description: "Real impact on tiny lives",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
    },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [null, -40, 40],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 min-h-screen flex flex-col justify-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-cyan-400/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-400 uppercase tracking-widest text-xs font-semibold">
              Coming Soon
            </span>
          </div>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl mb-6">
            <FaRocket className="text-white text-3xl sm:text-4xl" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Something
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <p className="mt-5 text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We’re building a next-generation healthcare experience for
            neonatal nutrition, innovation, and medical excellence.
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 text-center shadow-xl"
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-white">
                {String(item.value).padStart(2, "0")}
              </h2>
              <p className="text-cyan-400 uppercase tracking-widest text-xs sm:text-sm mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                {feature.icon}
              </div>

              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Subscribe Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto w-full"
        >
          <div className="bg-white/10 border border-cyan-400/20 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <FaBell className="text-cyan-400 text-4xl mx-auto mb-4" />

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Stay Updated
              </h2>

              <p className="text-white/70 text-sm sm:text-base">
                Subscribe and get notified when we officially launch.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-1">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-14 rounded-2xl bg-white/10 border border-white/10 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 transition-all"
                />
              </div>

              <button
                type="submit"
                className="h-14 px-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                Notify Me
                <FaArrowRight />
              </button>
            </form>

            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 bg-green-500/20 border border-green-500/40 rounded-2xl p-4 text-center"
              >
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <FaCheckCircle />
                  <span>Successfully subscribed!</span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-14 flex-wrap">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10 border-t border-white/10 pt-6">
          <p className="text-white/40 text-xs sm:text-sm">
            © {new Date().getFullYear()} Neoverse Lifesciences. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;