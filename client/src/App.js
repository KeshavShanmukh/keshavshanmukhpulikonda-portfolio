import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { FaRocket } from 'react-icons/fa';
import styled from 'styled-components';

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  color: white;
`;

const LoadingIcon = styled(motion.div)`
  font-size: 4rem;
  color: #667eea;
  margin-bottom: 2rem;
`;

const LoadingText = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const AppContainer = styled.div`
  opacity: 0;
  transition: opacity 0.5s ease;
  
  &.loaded {
    opacity: 1;
  }
`;

const SectionWrapper = styled(motion.div)`
  min-height: 100vh;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <ThemeProvider>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          transformOrigin: "0%",
          zIndex: 9999
        }}
      />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <LoadingIcon
              animate={{
                rotate: 360,
                y: [0, -10, 0]
              }}
              transition={{
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                y: { duration: 1, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <FaRocket />
            </LoadingIcon>
            <LoadingText
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.95, 1, 0.95]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Launching Portfolio...
            </LoadingText>
          </LoadingScreen>
        ) : (
          <AppContainer className="loaded">
            <div className="App">
              <Header />
              <main>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <SectionWrapper variants={sectionVariants}>
                    <Hero />
                  </SectionWrapper>
                  <SectionWrapper variants={sectionVariants}>
                    <About />
                  </SectionWrapper>
                  <SectionWrapper variants={sectionVariants}>
                    <Skills />
                  </SectionWrapper>
                  <SectionWrapper variants={sectionVariants}>
                    <Projects />
                  </SectionWrapper>
                  <SectionWrapper variants={sectionVariants}>
                    <Certificates />
                  </SectionWrapper>
                  <SectionWrapper variants={sectionVariants}>
                    <Resume />
                  </SectionWrapper>
                  <SectionWrapper variants={sectionVariants}>
                    <Contact />
                  </SectionWrapper>
                </motion.div>
              </main>
              <Footer />
            </div>
          </AppContainer>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
