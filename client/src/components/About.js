import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
  position: relative;
  overflow: hidden;
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

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 50%;
  color: #667eea;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.3);
    color: #764ba2;
    transform: translateY(-2px);
  }
`;

const ScrollArrow = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
    transform: translateX(-50%) translateY(-5px);
  }

  svg {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const About = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AboutContainer id="about">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaUser style={{ marginRight: '1rem' }} />
            About Me
          </Title>
        </SectionHeader>

        <ScrollArrow
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FaChevronDown />
        </ScrollArrow>
      </Container>
    </AboutContainer>
  );
};

export default About;
