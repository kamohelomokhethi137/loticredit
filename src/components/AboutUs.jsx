import { motion } from 'framer-motion';
import NavBar from './layout/Navbar';
import Footer from './layout/Footer';
import { useInView } from 'react-intersection-observer';

// Optimized WebP images 
import teamImage from '../assets/team.jpg';
import dataImage from '../assets/data-securiry.webp';
import graphImage from '../assets/growth-graph.webp';

function AboutUs() {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white pt-20 pb-16 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center px-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Building <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Trust</span> in Every Transaction
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              LotiCredit transforms financial relationships with transparent credit histories.
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-10 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* Our Story */}
      <section ref={ref1} className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            animate={inView1 ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative px-2 sm:px-0"
          >
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl -z-10"></div>
            <img 
              src={teamImage} 
              alt="LotiCredit team working together" 
              className="rounded-lg sm:rounded-xl w-full h-auto object-cover shadow-md"
              loading="lazy"
              width={600}
              height={400}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 px-2 sm:px-0"
          >
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">Redefining Credit Assessment</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-base sm:text-lg">
              <p>
                Founded in 2018, LotiCredit revolutionized credit scoring by focusing on actual financial behavior.
              </p>
              <p>
                We developed a system that captures nuanced financial patterns, giving lenders better insights.
              </p>
              <p className="font-medium">
                Today, our platform serves financial institutions across Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Difference */}
      <section ref={ref2} className="bg-white py-12 sm:py-16 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Smarter Credit Intelligence
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming credit assessment across Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "360° Financial Profiles",
                description: "Analyze banking patterns and alternative data for complete financial pictures.",
                icon: "🌐"
              },
              {
                title: "Inclusive Scoring",
                description: "Identify creditworthy individuals traditional systems miss.",
                icon: "🤝"
              },
              {
                title: "Dynamic Updates",
                description: "Real-time monitoring reflects current behavior.",
                icon: "⚡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-gray-50 p-5 sm:p-6 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-105 transition-transform">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={ref3} className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8 sm:gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={inView3 ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative px-2 sm:px-0"
          >
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-l from-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl -z-10"></div>
            <img 
              src={graphImage} 
              alt="LotiCredit growth metrics" 
              className="rounded-lg sm:rounded-xl w-full h-auto object-cover shadow-md"
              loading="lazy"
              width={600}
              height={400}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 px-2 sm:px-0"
          >
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
              Measurable Results
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">Proven Impact</h2>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-6">
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1">42%</div>
                <div className="text-xs sm:text-sm text-gray-600">Reduction in defaults</div>
              </div>
              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">1.8M+</div>
                <div className="text-xs sm:text-sm text-gray-600">New borrowers served</div>
              </div>
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">76%</div>
                <div className="text-xs sm:text-sm text-gray-600">Credit access improved</div>
              </div>
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-xs sm:text-sm text-gray-600">Countries served</div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Read Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-gray-900 text-white py-12 sm:py-16 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 sm:gap-10 items-center"
          >
            <div className="w-full md:w-1/2 px-2 sm:px-0">
              <img 
                src={dataImage} 
                alt="Data security illustration" 
                className="rounded-lg sm:rounded-xl w-full h-auto object-cover shadow-md"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
            
            <div className="w-full md:w-1/2 px-2 sm:px-0">
              <div className="inline-block bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                Data Protection
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5">Bank-Level Security</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg">
                <p>
                  Military-grade encryption and multi-factor authentication protect your data.
                </p>
                <p>
                  Regularly audited by independent security firms for compliance.
                </p>
                <p className="font-medium text-white">
                  Your data belongs to you - never sold or shared without consent.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;