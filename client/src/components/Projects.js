import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaHeart, FaHome, FaLock, FaSeedling, FaRocket, FaStar, FaTrophy, FaLightbulb, FaCogs, FaRocket as FaRocketIcon } from 'react-icons/fa';
import { fadeUp, fadeLeft, fadeRight, stagger, cardVariants, containerVariants } from '../animations';
import SectionWrapper from './SectionWrapper';
import BlurOrb from './BlurOrb';

const ProjectsContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
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

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  color: rgba(102, 126, 234, 0.3);
  pointer-events: none;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.15), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.4);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const ProjectIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #667eea;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    color: #764ba2;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    color: #667eea;
  }
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled(motion.span)`
  padding: 0.3rem 0.8rem;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 15px;
  font-size: 0.8rem;
  color: #667eea;
  border: 1px solid rgba(102, 126, 234, 0.3);
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
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent);
    transition: left 0.4s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(102, 126, 234, 0.4);
    transform: translateY(-2px) scale(1.05);
    color: #ffffff;
    border-color: rgba(102, 126, 234, 0.5);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.5);
  }

  svg {
    position: relative;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Organ Donation Platform',
      description: 'A web platform that displays available donor contact details and helps find donors from the same city across India, facilitating life-saving connections.',
      icon: <FaHeart />,
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Geolocation API'],
      github: 'https://github.com/KeshavShanmukh/organ-donation-platform',
      demo: '#',
      featured: true
    },
    {
      title: 'Mental Health Chatbot',
      description: 'An AI-powered chatbot that provides therapeutic tasks and guidance for people experiencing negative emotions like anger, sadness, and depression.',
      icon: <FaCode />,
      tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
      github: 'https://github.com/KeshavShanmukh/mental-health-chatbot',
      demo: '#'
    },
    {
      title: 'College Event Management App',
      description: 'A Flutter-based mobile application with role-based permissions where admins have access to special features not available to general users.',
      icon: <FaMobile />,
      tech: ['Flutter', 'Firebase', 'Dart', 'Authentication', 'Cloud Firestore'],
      github: 'https://github.com/KeshavShanmukh/college-event-app',
      demo: '#'
    },
    {
      title: 'Smart Home Automation',
      description: 'An IoT system for controlling electrical appliances manually, through mobile app, and monitoring their status in real-time.',
      icon: <FaHome />,
      tech: ['Arduino', 'NodeMCU', 'MQTT', 'React Native', 'Firebase'],
      github: 'https://github.com/KeshavShanmukh/smart-home-automation',
      demo: '#'
    },
    {
      title: 'AES-256 CLI Encryption Tool',
      description: 'A command-line tool that encrypts and decrypts files using AES-256, with the AES key encrypted using Lattice-based cryptography for enhanced security.',
      icon: <FaLock />,
      tech: ['Python', 'Cryptography', 'Lattice Encryption', 'CLI', 'AES-256'],
      github: 'https://github.com/KeshavShanmukh/aes-lattice-encryption',
      demo: '#'
    },
    {
      title: 'Smart Gardening System',
      description: 'An upcoming IoT-based smart gardening system for automated plant care, monitoring soil conditions, and optimizing growth parameters.',
      icon: <FaSeedling />,
      tech: ['Arduino', 'Sensors', 'IoT', 'Mobile App', 'Firebase'],
      github: 'https://github.com/KeshavShanmukh/smart-gardening-system',
      demo: '#',
      upcoming: true
    }
  ];

  return (
    <SectionWrapper id="projects" ref={ref}>
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.2rem"
            }}
          >
            A collection of my innovative projects showcasing skills in IoT, mobile development, and full-stack applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem"
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                variants={fadeUp}
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  color: "#667eea",
                  position: "relative",
                  zIndex: 2,
                  transition: "all 0.3s ease"
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {project.icon}
              </motion.div>
              
              <motion.h3
                variants={fadeUp}
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#ffffff",
                  position: "relative",
                  zIndex: 2,
                  transition: "all 0.3s ease"
                }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                variants={fadeUp}
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem"
                }}
              >
                {project.description}
              </motion.p>

              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1.5rem"
                }}
              >
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    variants={scaleIn}
                    whileHover={{ y: -2, scale: 1.05 }}
                    style={{
                      padding: "0.3rem 0.8rem",
                      background: "rgba(102, 126, 234, 0.2)",
                      borderRadius: "15px",
                      fontSize: "0.8rem",
                      color: "#667eea",
                      border: "1px solid rgba(102, 126, 234, 0.3)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                style={{
                  display: "flex",
                  gap: "1rem"
                }}
              >
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1.2rem",
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <FaGithub />
                  Code
                </motion.a>
                
                {project.demo && project.demo !== '#' && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.2rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </motion.a>
                )}
              </motion.div>

              {project.upcoming && (
                <motion.div
                  variants={fadeUp}
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    background: "linear-gradient(135deg, #ff7a00, #ffb347)",
                    color: "white",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    textAlign: "center"
                  }}
                >
                  🚀 Coming Soon
                </motion.div>
              )}
            </ProjectCard>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
