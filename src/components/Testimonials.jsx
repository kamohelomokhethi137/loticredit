import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative mt-16 overflow-hidden group"
      style={{
        backgroundColor: '#f0f4ff',
        backgroundImage: `
          radial-gradient(circle, rgba(129,140,248,0.2) 2.3px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
        transition: 'background 0.5s ease-in-out'
      }}
    >
      
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(99,102,241,0.25) 2.3px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      <style>
        {`
          .group:hover > div {
            opacity: 1 !important;
          }
        `}
      </style>

      {/* Wavy SVG Overlay */}
      <motion.svg
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full z-0"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#cce4ff"
          fillOpacity="1"
          d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,106.7C672,85,768,75,864,96C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </motion.svg>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Trusted by Financial Institutions</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              initials: "NK",
              bg: "bg-cyan-100",
              color: "text-cyan-700",
              name: "Nkhahle Makara",
              role: "Loan Officer, First National",
              quote: "LotiCredit has reduced our loan approval time by 40% while maintaining excellent risk management. The predictive scoring is incredibly accurate.",
              stars: 5
            },
            {
              initials: "MM",
              bg: "bg-green-100",
              color: "text-green-700",
              name: "Mokopane Makhetha",
              role: "Consumer",
              quote: "I was able to fix errors on my credit report in just 3 days using LotiCredit's dispute system. My score jumped 85 points!",
              stars: 5
            },
            {
              initials: "LM",
              bg: "bg-blue-100",
              color: "text-blue-700",
              name: "Liteboho Majoro",
              role: "Risk Manager, City Bank",
              quote: "The portfolio analytics have helped us reduce defaults by 22% this year. The API integration was seamless with our systems.",
              stars: 4
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.bg} rounded-full flex items-center justify-center mr-4`}>
                  <span className={`${testimonial.color} font-bold`}>{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex text-amber-400">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {testimonial.stars < 5 &&
                  [...Array(5 - testimonial.stars)].map((_, i) => (
                    <svg key={`empty-${i}`} className="w-5 h-5 fill-current text-gray-300" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
