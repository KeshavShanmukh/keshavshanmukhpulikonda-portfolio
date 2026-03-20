import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGraduationCap, FaBriefcase, FaAward, FaCode, FaRocket, FaLightbulb, FaStar } from 'react-icons/fa';
import { fadeUp, fadeLeft, fadeRight, stagger, containerVariants, scaleIn } from '../animations';
import SectionWrapper from './SectionWrapper';
import BlurOrb from './BlurOrb';

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
    <SectionWrapper id="about" ref={ref}>
      {/* Blur Orbs */}
      <BlurOrb style={{ top: "10%", left: "5%" }} />
      <BlurOrb style={{ bottom: "10%", right: "5%" }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
      >
        <motion.div
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            <FaUser style={{ marginRight: '1rem' }} />
            About Me
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.2rem"
            }}
          >
            Passionate IoT developer and full-stack engineer creating innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center"
          }}
        >
          <motion.div variants={fadeLeft}>
            <motion.div
              variants={fadeUp}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "2.5rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.p variants={fadeUp} style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.8", marginBottom: "2rem", fontSize: "1.1rem" }}>
                I'm a 3rd-year B.Tech student in IoT from Vijayawada, passionate about creating 
                smart infrastructure solutions and blockchain-secured systems. With expertise in 
                Flutter mobile development, NodeMCU/Arduino programming, and full-stack web 
                applications, I love turning innovative ideas into reality.
              </motion.p>
              
              <motion.p variants={fadeUp} style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.8", marginBottom: "2rem", fontSize: "1.1rem" }}>
                Currently interning at Supraja Technologies, I'm gaining hands-on experience in 
                developing real-world IoT solutions and full-stack applications. My journey in 
                technology has been driven by curiosity and a desire to solve meaningful problems 
                through innovation.
              </motion.p>

              <motion.div variants={containerVariants} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginTop: "2rem" }}>
                {[
                  { number: "3+", label: "Internships" },
                  { number: "5+", label: "Projects" },
                  { number: "17+", label: "Certifications" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -3 }}
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "15px",
                      padding: "1.5rem",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      textAlign: "center",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <motion.div variants={fadeUp} style={{ fontSize: "2rem", fontWeight: "700", color: "#667eea", marginBottom: "0.5rem" }}>
                      {stat.number}
                    </motion.div>
                    <motion.div variants={fadeUp} style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9rem" }}>
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRight}>
            <motion.div
              variants={fadeUp}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "2.5rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div variants={containerVariants} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  { icon: <FaUser />, text: "Pulikonda Keshav Shanmukh" },
                  { icon: <FaMapMarkerAlt />, text: "Vijayawada, Andhra Pradesh, India" },
                  { icon: <FaEnvelope />, text: "keshavshanmukh25@gmail.com" },
                  { icon: <FaPhone />, text: "+91-9515037980" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeLeft}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "rgba(255, 255, 255, 0.8)"
                    }}
                  >
                    <motion.div variants={fadeUp} style={{ color: "#667eea", fontSize: "1.2rem", width: "20px", textAlign: "center" }}>
                      {item.icon}
                    </motion.div>
                    <motion.span variants={fadeUp}>{item.text}</motion.span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={containerVariants} style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                {[
                  { href: "https://linkedin.com/in/keshavshanmukhpulikonda", icon: <FaLinkedin /> },
                  { href: "https://github.com/KeshavShanmukh", icon: <FaGithub /> }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.2rem",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                      textDecoration: "none"
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
