import { motion } from 'framer-motion';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { useInView } from 'react-intersection-observer';

// Import optimized WebP images
import creditReportImg from '../assets/market.svg';
import riskAnalysisImg from '../assets/risk.svg';
import monitoringImg from '../assets/monitoring.svg';
import marketplaceImg from '../assets/report.svg';

function Services() {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      title: "Consumer Credit Profiles",
      description: "Comprehensive credit histories that help consumers showcase their creditworthiness",
      icon: "📊",
      image: creditReportImg,
      features: [
        "Transparent scoring system",
        "Payment history tracking",
        "Credit health monitoring"
      ]
    },
    {
      title: "Lender Risk Tools",
      description: "Powerful assessment tools to help lenders make informed decisions",
      icon: "🛡️",
      image: riskAnalysisImg,
      features: [
        "Default probability indicators",
        "Borrower comparison tools",
        "Fraud detection alerts"
      ]
    },
    {
      title: "Real-Time Monitoring",
      description: "Continuous credit behavior tracking for both lenders and consumers",
      icon: "🔍",
      image: monitoringImg,
      features: [
        "Credit score change alerts",
        "Financial habit insights",
        "Monthly credit summaries"
      ]
    },
    {
      title: "Secure Marketplace",
      description: "Platform connecting verified lenders with qualified borrowers",
      icon: "🤝",
      image: marketplaceImg,
      features: [
        "Direct loan applications",
        "Competitive rate marketplace",
        "End-to-end encrypted messaging"
      ]
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-gray-50 pt-24 pb-16 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight px-2">
            The <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              LotiCredit
            </span> Platform
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Connecting trustworthy lenders with creditworthy consumers in a secure, transparent marketplace
          </p>
        </motion.div>
      </section>

      {/* Main Services */}
      <section className="max-w-7xl mx-auto py-10 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-2">
            How Our Platform Works
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-16 sm:space-y-20">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : null}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  (index === 0 && inView1) || 
                  (index === 1 && inView2) || 
                  (index === 2 && inView3) ? 
                  { opacity: 1, x: 0 } : 
                  {}
                }
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2 relative px-2 sm:px-0"
              >
                <div className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-indigo-100 to-purple-100 rounded-xl sm:rounded-2xl -z-10`}></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg sm:rounded-xl w-full h-auto shadow-md sm:shadow-lg"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={
                  (index === 0 && inView1) || 
                  (index === 1 && inView2) || 
                  (index === 2 && inView3) ? 
                  { opacity: 1, x: 0 } : 
                  {}
                }
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-4 px-2 sm:px-0"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-700 text-base sm:text-lg"
                    >
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {index === 3 && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 bg-indigo-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-colors text-base sm:text-lg"
                  >
                    Join Marketplace
                  </motion.button>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="bg-gray-50 py-12 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Benefits for All Users
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Creating value for both sides of the credit equation
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-indigo-600 text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">For Consumers</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg">Build and showcase your creditworthiness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg">Access multiple lender offers in one place</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg">Monitor and improve your credit health</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-purple-600 text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">For Lenders</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg">Access pre-vetted, creditworthy borrowers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg">Reduce default rates with our risk insights</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg">Competitive marketplace to grow your portfolio</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-14 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight px-2">
              Ready to join Africa's most transparent credit platform?
            </h2>
            <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto mt-3">
              Join thousands who are already building better financial futures
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all text-base sm:text-lg"
              >
                I'm a Borrower
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition-all text-base sm:text-lg"
              >
                I'm a Lender
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Services;