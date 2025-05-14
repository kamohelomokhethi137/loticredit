import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './layout/Navbar';
import image1 from '../assets/2.jpg';
import image2 from '../assets/img.png';
import image3 from '../assets/3.png';
import Footer from './layout/Footer'
import Testimonials from './Testimonials';


function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('lenders');
  const [darkMode, setDarkMode] = useState(false);
  


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      {
        url: image1,
        alt: 'Financial advisors meeting'
      },
      {
        url: image2,
        alt: 'Credit card and money'
      },
      {
        url: image3,
        alt: 'Business handshake'
      }
    ];

    const nextImage = () => {
      setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
      setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

// Auto-rotate effect
useEffect(() => {
  const interval = setInterval(() => {
    nextImage();
  }, 5900);
  return () => clearInterval(interval);
}, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
    const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Intersection observer for scroll animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`font-sans ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-50 dark:bg-gray-900">
        {/* Navigation Bar */}

          <Navbar />

        {/* Hero Section with Dotted Background */}

        
          <motion.div 
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">

            {/* Image Carousel Background */}
            <div className="absolute inset-0 overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={images[currentImageIndex].url} 
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-gray-900/80 to-purple-900/80 blur-xl opacity-90"></div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            <button 
              onClick={prevImage}
              className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto text-center z-10">
              <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Smart Credit Solutions for Everyone
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-6 text-xl max-w-3xl mx-auto">
                Empowering lenders with data-driven decisions and helping consumers understand their credit health.
              </motion.p>
              <motion.div variants={itemVariants} className="mt-10 flex justify-center space-x-6">
                <button 
                  onClick={() => setActiveTab('lenders')}
                  className={`px-8 py-3 rounded-md font-medium ${activeTab === 'lenders' ? 'bg-white text-cyan-600' : 'bg-cyan-700 text-white hover:bg-cyan-800'}`}
                >
                  For Lenders
                </button>
                <button 
                  onClick={() => setActiveTab('consumers')}
                  className={`px-8 py-3 rounded-md font-medium ${activeTab === 'consumers' ? 'bg-white text-green-600' : 'bg-green-600 text-white hover:bg-green-700'}`}
                >
                  For Consumers
                </button>
              </motion.div>
            </div>
          </motion.div>

        {/* Main Content */}
       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <AnimatePresence mode="wait">
  {/* Lender Section */}
  {activeTab === 'lenders' && (
    <motion.div
      key="lenders"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden"
    >
      <div className="p-6 sm:p-8 bg-cyan-50 dark:bg-cyan-900/20 border-b border-cyan-100 dark:border-cyan-800">
        <h2 className="text-3xl font-bold text-cyan-800 dark:text-cyan-100">For Lenders & Investors</h2>
        <p className="mt-2 text-cyan-600 dark:text-cyan-300">
          Whether you're a financial institution or an individual investor, our tools help you make informed lending decisions
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 p-6 sm:p-8">
        {[
          {
            icon: (
              <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            ),
            title: "Borrower Verification",
            desc: "Access complete credit histories to verify borrower credibility before approving loans."
          },
          {
            icon: (
              <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
            title: "Risk Analysis",
            desc: "Our algorithms analyze borrower data to predict repayment probability and suggest appropriate interest rates."
          },
          {
            icon: (
              <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Loan Portfolio Management",
            desc: "Monitor all your active loans and track repayment performance in real-time."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-cyan-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="px-6 sm:px-8 pb-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Lender Types */}
          <div className="bg-cyan-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-4">Who Uses Our Lender Tools?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Banks & Credit Unions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Peer-to-Peer Lending Platforms</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Individual Investors</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Microfinance Institutions</span>
              </li>
            </ul>
          </div>
          
          {/* How It Works */}
          <div className="bg-cyan-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-4">How Lending Works</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <span className="text-gray-700 dark:text-gray-300">Consumers apply for loans through your platform</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <span className="text-gray-700 dark:text-gray-300">You access their credit reports through our system</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <span className="text-gray-700 dark:text-gray-300">Our risk assessment helps you make approval decisions</span>
              </li>
              <li className="flex items-start">
                <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <span className="text-gray-700 dark:text-gray-300">You set terms and disburse funds to approved borrowers</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/Signup" 
            className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg shadow-md transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Access Lender Dashboard
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Registration available for both institutions and individual lenders
          </p>
        </div>
      </div>
    </motion.div>
  )}

  {/* Consumer Section */}
  {activeTab === 'consumers' && (
    <motion.div
      key="consumers"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden"
    >
      <div className="p-6 sm:p-8 bg-green-300 dark:bg-green-900/20 border-b border-green-100 dark:border-green-800">
        <h2 className="text-3xl font-bold text-green-800 dark:text-green-100">For Loan Applicants</h2>
        <p className="mt-2  text-green-300">
          Understand and improve your credit profile to access better loan terms
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 p-6 sm:p-8">
        {[
          {
            icon: (
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            title: "Credit Profile",
            desc: "See how lenders view your creditworthiness when you apply for loans."
          },
          {
            icon: (
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Loan Readiness",
            desc: "Get personalized tips to improve your chances of loan approval."
          },
          {
            icon: (
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
            title: "Rate Comparison",
            desc: "See what interest rates you might qualify for based on your credit."
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-green-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="px-6 sm:px-8 pb-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Consumer Benefits */}
          <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">Why Check Your Credit?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Understand what lenders see when you apply</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Identify errors that might affect loan approvals</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Improve your chances of getting better interest rates</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Monitor for identity theft that could impact loan applications</span>
              </li>
            </ul>
          </div>
          
          {/* Loan Application Process */}
          <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">The Loan Journey</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <span className="text-gray-700 dark:text-gray-300">You apply for a loan with a lender</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <span className="text-gray-700 dark:text-gray-300">Lender checks your credit report through our system</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <span className="text-gray-700 dark:text-gray-300">Based on your credit, lender makes approval decision</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <span className="text-gray-700 dark:text-gray-300">If approved, funds are disbursed with agreed terms</span>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/Signup" 
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Access My Credit Profile
          </a>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Checking your own credit won't affect your score
          </p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

          {/* Testimonials Section */}
          <Testimonials />
        </main>

        {/* Footer */}
       <Footer />
      </div>
    </div>
  );
}

export default LandingPage;