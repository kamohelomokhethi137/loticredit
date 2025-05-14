import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/contact", label: "Contact" }
    ];

    return (
        <div className="font-sans">
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ 
                    y: 0,
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgb(255, 255, 255)',
                    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    backgroundColor: { duration: 0.3 }
                }}
                className="fixed w-full z-50 top-0 border-b border-gray-100"
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-3">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-2xl font-bold text-blue-800">LotiCredit</span>
                    </Link>
                    
                    <div className="flex md:order-2 space-x-4">
                        {/* Desktop Auth Buttons - hidden on mobile */}
                        <div className="hidden md:flex space-x-3">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-4 py-2 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
                            >
                                Sign In
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                            >
                                Sign Up
                            </motion.button>
                        </div>
                        
                        <button 
                            onClick={toggleMenu}
                            type="button" 
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full md:hidden overflow-hidden"
                            >
                                <ul className="flex flex-col pt-2 pb-1 space-y-1 font-medium">
                                    {navLinks.map((link) => (
                                        <motion.li
                                            key={link.path}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Link 
                                                to={link.path}
                                                className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                                
                                {/* Mobile Auth Buttons - only shown when menu is open */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="flex flex-col space-y-3 px-4 py-3 border-t border-gray-100"
                                >
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-2.5 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
                                    >
                                        Sign In
                                    </motion.button>
                                    <motion.button
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                                    >
                                        Sign Up
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path}
                                        className="block py-2 px-3 text-gray-700 hover:text-blue-600 rounded md:p-0 transition-colors font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
}

export default Navbar;