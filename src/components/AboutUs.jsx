import { motion } from 'framer-motion';
import NavBar from './layout/NavBar';
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
    <div className="bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Trust</span> in Every Transaction
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              LotiCredit transforms financial relationships with transparent credit histories that benefit both lenders and borrowers.
            </p>
          </motion.div>
        </div>
        <div className="absolute -bottom-20 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>

      {/* Our Story */}
      <section ref={ref1} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            animate={inView1 ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl -z-10"></div>
            <img 
              src={teamImage} 
              alt="LotiCredit team working together" 
              className="rounded-xl w-full h-auto object-cover"
              loading="lazy"
              width={600}
              height={400}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Redefining Credit Assessment</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2018, LotiCredit revolutionized credit scoring by focusing on actual financial behavior rather than traditional metrics.
              </p>
              <p>
                We developed a system that captures nuanced financial patterns, giving lenders better insights while helping responsible borrowers get fair opportunities.
              </p>
              <p className="font-medium">
                Today, our AI-driven platform serves financial institutions across Africa, helping millions build credit identities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Difference */}
      <section ref={ref2} className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smarter Credit Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we're transforming credit assessment across Africa
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "360° Financial Profiles",
                description: "We analyze banking patterns, utility payments, and alternative data to build complete financial pictures.",
                icon: "🌐"
              },
              {
                title: "Inclusive Scoring",
                description: "Our algorithms identify creditworthy individuals traditional systems often miss.",
                icon: "🤝"
              },
              {
                title: "Dynamic Updates",
                description: "Real-time monitoring reflects current behavior, not just historical data.",
                icon: "⚡"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={ref3} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={inView3 ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-l from-indigo-100 to-purple-100 rounded-2xl -z-10"></div>
            <img 
              src={graphImage} 
              alt="LotiCredit growth metrics" 
              className="rounded-xl w-full h-auto object-cover"
              loading="lazy"
              width={600}
              height={400}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Measurable Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Proven Impact</h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-indigo-600 mb-1">42%</div>
                <div className="text-sm text-gray-600">Reduction in defaults</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-1">1.8M+</div>
                <div className="text-sm text-gray-600">New borrowers served</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">76%</div>
                <div className="text-sm text-gray-600">Credit access improved</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Countries served</div>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Read Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/2">
              <img 
                src={dataImage} 
                alt="Data security illustration" 
                className="rounded-xl w-full h-auto object-cover"
                loading="lazy"
                width={600}
                height={400}
              />
            </div>
            
            <div className="md:w-1/2">
              <div className="inline-block bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Data Protection
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bank-Level Security</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We implement military-grade encryption and multi-factor authentication to protect your financial data.
                </p>
                <p>
                  Our systems are regularly audited by independent security firms to ensure compliance with global standards.
                </p>
                <p className="font-medium text-white">
                  Your data belongs to you - we never sell or share information without explicit consent.
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