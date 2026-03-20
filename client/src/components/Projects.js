import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaHeart, FaHome, FaLock, FaSeedling, FaRocket, FaStar, FaTrophy, FaLightbulb, FaCogs, FaRocket as FaRocketIcon } from 'react-icons/fa';

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
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
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
    box-shadow: 0 30px 60px rgba(102, 126, 234, 0.4);
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
    <ProjectsContainer id="projects" ref={ref}>
      {/* Floating Icons */}
      <FloatingIcon
        style={{ top: '20%', left: '5%' }}
        animate={{
          y: [0, -18, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaCode />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ top: '15%', right: '8%' }}
        animate={{
          y: [0, -22, 0],
          rotate: [0, -20, 20, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <FaRocketIcon />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '25%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 25, -25, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      >
        <FaLightbulb />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '15%', right: '12%' }}
        animate={{
          y: [0, -16, 0],
          rotate: [0, -18, 18, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      >
        <FaCogs />
      </FloatingIcon>

      <FloatingBadge
        style={{ top: '10%', right: '10%' }}
        animate={{
          y: [0, -15, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaTrophy style={{ marginRight: '0.5rem' }} />
        Award Winning
      </FloatingBadge>

      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of my innovative projects showcasing skills in IoT, mobile development, and full-stack applications
          </Subtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.03 }}
            >
              <GlowEffect />
              
              {project.featured && (
                <motion.div
                  style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 3 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.5 }}
                >
                  <FaStar style={{ color: '#ffd700', fontSize: '1.2rem' }} />
                </motion.div>
              )}
              
              {project.upcoming && (
                <motion.div
                  style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 3 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.5 }}
                >
                  <FaRocket style={{ color: '#667eea', fontSize: '1.2rem' }} />
                </motion.div>
              )}
              
              <ProjectIcon>{project.icon}</ProjectIcon>
              
              <ProjectTitle>{project.title}</ProjectTitle>
              
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <ProjectTech>
                {project.tech.map((tech, techIndex) => (
                  <TechTag
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: (index * 0.15) + (techIndex * 0.05) + 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      boxShadow: "0 5px 15px rgba(102, 126, 234, 0.4)"
                    }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </ProjectTech>
              
              <ProjectLinks>
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
                >
                  <FaGithub /> <span>Code</span>
                </ProjectLink>
                
                <ProjectLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.7 }}
                >
                  <FaExternalLinkAlt /> <span>Demo</span>
                </ProjectLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
