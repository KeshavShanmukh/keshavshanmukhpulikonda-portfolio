import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaStar, FaCode, FaRocket } from 'react-icons/fa';
import profileImage from "../assets/profile-image.png";

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(-45deg, #0f0f1e, #1a1a2e, #16213e, #0f3460, #533483);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle, ${props => props.color}, transparent);
  border-radius: 50%;
  filter: blur(1px);
  pointer-events: none;
`;

const GeometricShape = styled(motion.div)`
  position: absolute;
  border: 2px solid rgba(102, 126, 234, 0.3);
  background: rgba(102, 126, 234, 0.05);
  backdrop-filter: blur(5px);
  pointer-events: none;
  
  ${props => props.shape === 'triangle' && `
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 43px solid rgba(102, 126, 234, 0.2);
    border-top: none;
  `}
  
  ${props => props.shape === 'square' && `
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
  `}
  
  ${props => props.shape === 'hexagon' && `
    width: 50px;
    height: 28px;
    position: relative;
    background: rgba(102, 126, 234, 0.1);
    
    &:before, &:after {
      content: "";
      position: absolute;
      width: 0;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
    }
    
    &:before {
      bottom: 100%;
      border-bottom: 14px solid rgba(102, 126, 234, 0.1);
    }
    
    &:after {
      top: 100%;
      border-top: 14px solid rgba(102, 126, 234, 0.1);
    }
  `}
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent);
    animation: float 20s ease-in-out infinite;
  }

  &::before {
    width: 600px;
    height: 600px;
    top: -200px;
    right: -200px;
  }

  &::after {
    width: 800px;
    height: 800px;
    bottom: -300px;
    left: -300px;
    animation-delay: 10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-30px, 30px) rotate(180deg); }
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  pointer-events: none;

  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Greeting = styled(motion.span)`
  display: block;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;

  background: linear-gradient(270deg, #ff7a00, #ff00cc, #00dbde);
  background-size: 600% 600%;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  animation: gradientMove 6s ease infinite;

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Title = styled(motion.div)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  font-weight: 300;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  color: white;

  border: 1px solid rgba(255,255,255,0.2);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    background: linear-gradient(135deg, #667eea, #764ba2);
  }

  ${props => props.primary && `
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    
    &:hover {
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
      transform: translateY(-5px) scale(1.05);
    }
  `}
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1.2rem;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.2);
    background: linear-gradient(135deg, #ff7a00, #ff00cc);
    box-shadow: 0 10px 30px rgba(255,0,200,0.4);
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  color: rgba(102, 126, 234, 0.6);
  pointer-events: none;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 340px;
  border-radius: 60% 40% 50% 50% / 40% 60% 50% 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: floatBlob 6s ease-in-out infinite;

  @keyframes floatBlob {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 260px;
  }
`;


const ProfileImage = styled.img`
  width: 85%;
  height: 85%;
  object-fit: cover;
  border-radius: 30px;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CursorGlow = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.25), transparent 60%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1;
  filter: blur(40px);
`;



const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [particles, setParticles] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const titles = [
    'IoT Developer',
    'Full-Stack Developer',
    'UI/UX Designer',
    'Flutter Developer',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 234, ${Math.random() * 0.5 + 0.3})`,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    // Generate geometric shapes
    const newShapes = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      shape: ['triangle', 'square', 'hexagon'][Math.floor(Math.random() * 3)],
      size: Math.random() * 30 + 20,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    setShapes(newShapes);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home" ref={containerRef}>
      <CursorGlow style={{ left: cursor.x, top: cursor.y }} />
      <GridOverlay />
      <AnimatedBackground />
      
      
      {/* Animated Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            size={particle.size}
            color={particle.color}
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y}%`,
              opacity: 0
            }}
            animate={{ 
              x: `${particle.x}%`, 
              y: `${particle.y - 20}%`,
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Floating Geometric Shapes */}
      <AnimatePresence>
        {shapes.map((shape) => (
          <GeometricShape
            key={shape.id}
            shape={shape.shape}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              rotate: 360,
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0]
            }}
            transition={{ 
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Floating Icons */}
      <FloatingIcon
        style={{ top: '20%', left: '10%' }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaCode />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ top: '30%', right: '15%' }}
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <FaRocket />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '30%', left: '15%' }}
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 20, -20, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <FaStar />
      </FloatingIcon>
      
      <HeroContent>
        {/* LEFT SIDE - TEXT */}
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>
          
          <Name
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pulikonda Keshav Shanmukh
          </Name>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {text}
            <span style={{ borderRight: '2px solid #667eea' }}></span>
          </Title>
          
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            3rd-year B.Tech in IoT specializing in smart infrastructure,
            blockchain-secured systems, and full-stack applications.
          </Description>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              primary
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Get In Touch
            </Button>
            
            <Button
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> View Projects
            </Button>
          </ButtonGroup>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <SocialLink
              href="https://linkedin.com/in/keshavshanmukhpulikonda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            
            <SocialLink
              href="https://github.com/KeshavShanmukh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            
            <SocialLink
              href="mailto:keshavshanmukh25@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </TextContent>

        {/* RIGHT SIDE - IMAGE */}
        <ImageWrapper
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <ProfileImage src={profileImage} alt="Profile" />
        </ImageWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
