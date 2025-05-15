import { motion, LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { useInView } from 'react-intersection-observer';

// Import optimized SVG images
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
    <LazyMotion features={domAnimation}>
      <div className="bg-white overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-gray-50 pt-20 pb-16 px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                LotiCredit
              </span> Platform
            </h1>
            <p className="text-lg text-gray-600">
              Connecting trustworthy lenders with creditworthy consumers
            </p>
          </motion.div>
        </section>

        {/* Main Services */}
        <section className="max-w-4xl mx-auto py-10 px-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              How Our Platform Works
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                ref={index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : null}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={
                    (index === 0 && inView1) || 
                    (index === 1 && inView2) || 
                    (index === 2 && inView3) ? 
                    { opacity: 1, x: 0 } : 
                    {}
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-indigo-50 to-purple-50 p-4 rounded-xl`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto"
                      loading="lazy"
                      width={500}
                      height={350}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  animate={
                    (index === 0 && inView1) || 
                    (index === 1 && inView2) || 
                    (index === 2 && inView3) ? 
                    { opacity: 1, x: 0 } : 
                    {}
                  }
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="w-full lg:w-1/2 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-start text-gray-700"
                      >
                        <svg className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {index === 3 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
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
        <section className="bg-gray-50 py-12 px-5">
          <div className="max-w-4xl mx-auto space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Benefits for All Users
              </h2>
              <p className="text-gray-600 mt-2">
                Creating value for both sides of the credit equation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white p-5 rounded-lg border border-gray-200"
              >
                <div className="text-indigo-600 text-4xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-bold mb-3">For Consumers</h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Build and showcase your creditworthiness",
                    "Access multiple lender offers",
                    "Monitor and improve your credit health"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-5 rounded-lg border border-gray-200"
              >
                <div className="text-purple-600 text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-3">For Lenders</h3>
                <ul className="space-y-2 text-gray-600">
                  {[
                    "Access pre-vetted, creditworthy borrowers",
                    "Reduce default rates with risk insights",
                    "Competitive marketplace to grow your portfolio"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-14 px-5">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Ready to join Africa's most transparent credit platform?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-indigo-600 px-5 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  I'm a Borrower
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent border-2 border-white text-white px-5 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  I'm a Lender
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default Services;