import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const PageNotFound = () => {
  const controls = useAnimation();
  const particles = Array(30).fill(0); // Increased number of particles
  const containerRef = useRef(null);

  // Floating particles animation
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: [0, 0.8, 0],
        transition: { duration: 4, repeat: Infinity, repeatType: "reverse" }
      });
    }, 300);
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      className="not-found-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        position: "relative",
        overflow: "hidden",
        padding: "2rem",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(45deg, rgba(255,0,150,0.1) 0%, rgba(0,204,255,0.1) 100%)",
          zIndex: 0,
          opacity: 0.7
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      {/* Floating Particles Background */}
      <AnimatePresence>
        {particles.map((_, i) => {
          const size = Math.random() * 10 + 5;
          const colors = [
            "rgba(100, 210, 255, 0.8)",
            "rgba(255, 100, 210, 0.8)",
            "rgba(100, 255, 210, 0.8)",
            "rgba(210, 100, 255, 0.8)"
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * (containerRef.current?.clientWidth || 800) - 400,
                y: Math.random() * (containerRef.current?.clientHeight || 600) - 300,
                scale: Math.random() * 0.8 + 0.2,
                opacity: 0
              }}
              animate={{
                x: [null, Math.random() * 600 - 300],
                y: [null, Math.random() * 600 - 300],
                opacity: [0, 0.8, 0],
                transition: {
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }
              }}
              style={{
                position: "absolute",
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: "50%",
                zIndex: 0,
                filter: "blur(1px)"
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Glowing center orb */}
      <motion.div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100,210,255,0.3) 0%, rgba(100,210,255,0) 70%)",
          filter: "blur(10px)",
          zIndex: 0
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "2rem",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(15, 32, 39, 0.5)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        {/* Main 404 Text */}
        <motion.h1
          style={{
            fontSize: "clamp(5rem, 15vw, 8rem)",
            fontWeight: 900,
            margin: 0,
            lineHeight: 1,
            background: "linear-gradient(45deg, #ff6b6b, #64d2ff, #a162e8)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 10px rgba(100, 210, 255, 0.3)"
          }}
          animate={{
            scale: [1, 1.05, 1],
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          404
        </motion.h1>

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ margin: "2rem 0" }}
        >
          <motion.h2 
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#ffffff",
              marginBottom: "1rem",
              fontWeight: 600
            }}
            whileHover={{ scale: 1.02 }}
          >
            Oops! Page Not Found
          </motion.h2>
          <motion.p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "500px",
              lineHeight: 1.6
            }}
            animate={{
              x: [0, -3, 3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            The page you're looking for might have been removed or doesn't exist.
          </motion.p>
        </motion.div>

        {/* Home Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 25px rgba(100, 210, 255, 0.5)"
          }}
          whileTap={{ 
            scale: 0.95,
            boxShadow: "0 2px 10px rgba(100, 210, 255, 0.3)"
          }}
          style={{
            background: "linear-gradient(45deg, #64d2ff, #a162e8)",
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "1.1rem",
            boxShadow: "0 4px 20px rgba(100, 210, 255, 0.4)",
            border: "none",
            outline: "none",
            position: "relative",
            overflow: "hidden"
          }}
          onClick={() => window.location.href = "/"}
        >
          <motion.span
            style={{
              position: "relative",
              zIndex: 2
            }}
          >
            Return Home
          </motion.span>
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(45deg, #a162e8, #64d2ff)",
              opacity: 0
            }}
            whileHover={{
              opacity: 1,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageNotFound;