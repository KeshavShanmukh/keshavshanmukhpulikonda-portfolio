import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

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

  &:hover {
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

const About = () => {
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
          <Subtitle>
            Passionate IoT developer and full-stack engineer creating innovative solutions
          </Subtitle>
        </SectionHeader>

        <AboutGrid>
          <AboutCard
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
          </AboutCard>

          <div>
            <AboutCard
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <InfoList>
                <InfoItem>
                  <InfoIcon><FaUser /></InfoIcon>
                  <span>Pulikonda Keshav Shanmukh</span>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                  <span>Vijayawada, Andhra Pradesh, India</span>
                </InfoItem>
                
                <InfoItem>
                  <InfoIcon><FaEnvelope /></InfoIcon>
                  <span>keshavshanmukh25@gmail.com</span>
                </InfoItem>
                
                <InfoItem>
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
              </SocialLinks>
            </AboutCard>
          </div>
        </AboutGrid>
      </Container>
    </AboutContainer>
  );
};

export default About;
