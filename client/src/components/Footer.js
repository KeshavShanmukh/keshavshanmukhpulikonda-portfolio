import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
  padding: 3rem 0 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const HeartIcon = styled(FaHeart)`
  color: #ff6b6b;
  animation: heartbeat 1.5s ease-in-out infinite;

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FooterTitle>About Me</FooterTitle>
            <FooterText>
              Passionate IoT developer and full-stack engineer creating innovative solutions 
              with modern technologies. Always eager to learn and build amazing projects.
            </FooterText>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FooterTitle>Connect With Me</FooterTitle>
            <FooterText>
              Let's collaborate on exciting projects and build something amazing together!
            </FooterText>
            <SocialLinks>
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
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FooterTitle>Technologies</FooterTitle>
            <FooterText>
              React • Node.js • MongoDB • Flutter • Arduino • Firebase • 
              Python • IoT • Full-Stack Development
            </FooterText>
          </FooterSection>
        </FooterContent>

        <FooterBottom
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>
            © 2024 Pulikonda Keshav Shanmukh. Crafted with <HeartIcon /> and dedication.
          </p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
