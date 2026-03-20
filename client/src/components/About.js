import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaAward, FaCode, FaRocket, FaLightbulb, FaStar } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const AboutText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const InfoIcon = styled.div`
  color: #667eea;
  font-size: 1.2rem;
  width: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  z-index: 10;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  color: rgba(102, 126, 234, 0.3);
  pointer-events: none;
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AboutContainer id="about" ref={ref}>
      {/* Floating Icons */}
      <FloatingIcon
        style={{ top: '15%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaCode />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ top: '25%', right: '8%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <FaRocket />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '20%', left: '10%' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 20, -20, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      >
        <FaLightbulb />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '30%', right: '15%' }}
        animate={{
          y: [0, -18, 0],
          rotate: [0, -25, 25, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      >
        <FaStar />
      </FloatingIcon>

      <FloatingBadge
        style={{ top: '10%', right: '10%' }}
        animate={{
          y: [0, -10, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaAward style={{ marginRight: '0.5rem' }} />
        IoT Expert
      </FloatingBadge>

      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <FaUser style={{ marginRight: '1rem' }} />
            About Me
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Passionate IoT developer and full-stack engineer creating innovative solutions
          </Subtitle>
        </SectionHeader>

        <AboutGrid>
          <AboutCard
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <AboutText>
              I'm a 3rd-year B.Tech student in IoT from Vijayawada, passionate about creating 
              smart infrastructure solutions and blockchain-secured systems. With expertise in 
              Flutter mobile development, NodeMCU/Arduino programming, and full-stack web 
              applications, I love turning innovative ideas into reality.
            </AboutText>
            
            <AboutText>
              Currently interning at Supraja Technologies, I'm gaining hands-on experience in 
              developing real-world IoT solutions and full-stack applications. My journey in 
              technology has been driven by curiosity and a desire to solve meaningful problems 
              through innovation.
            </AboutText>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <StatNumber>3+</StatNumber>
                <StatLabel>Interships</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <StatNumber>5+</StatNumber>
                <StatLabel>Projects</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <StatNumber>17+</StatNumber>
                <StatLabel>Certifications</StatLabel>
              </StatCard>
            </div>
          </AboutCard>

          <div>
            <AboutCard
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <InfoList>
                <InfoItem
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <InfoIcon><FaUser /></InfoIcon>
                  <span>Pulikonda Keshav Shanmukh</span>
                </InfoItem>
                
                <InfoItem
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                  <span>Vijayawada, Andhra Pradesh, India</span>
                </InfoItem>
                
                <InfoItem
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <InfoIcon><FaEnvelope /></InfoIcon>
                  <span>keshavshanmukh25@gmail.com</span>
                </InfoItem>
                
                <InfoItem
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <InfoIcon><FaPhone /></InfoIcon>
                  <span>+91-9515037980</span>
                </InfoItem>
              </InfoList>

              <SocialLinks>
                <SocialLink
                  href="https://linkedin.com/in/keshavshanmukhpulikonda"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <FaLinkedin />
                </SocialLink>
                
                <SocialLink
                  href="https://github.com/KeshavShanmukh"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <FaGithub />
                </SocialLink>
              </SocialLinks>
            </AboutCard>
          </div>
        </AboutGrid>
      </Container>
    </AboutContainer>
  );
};

export default About;
