import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase, FaHeart, FaHome, FaLock, FaSeedling } from 'react-icons/fa';

const ProjectsContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%);
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
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const ProjectIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #667eea;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
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

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 15px;
  font-size: 0.8rem;
  color: #667eea;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Organ Donation Platform',
      description: 'A web platform that displays available donor contact details and helps find donors from the same city across India, facilitating life-saving connections.',
      icon: <FaHeart />,
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Geolocation API'],
      github: 'https://github.com/KeshavShanmukh/organ-donation-platform',
      demo: '#'
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
      demo: '#'
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </Title>
          <Subtitle>
            A collection of my innovative projects showcasing skills in IoT, mobile development, and full-stack applications
          </Subtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              
              <ProjectTitle>{project.title}</ProjectTitle>
              
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <ProjectTech>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </ProjectTech>
              
              <ProjectLinks>
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </ProjectLink>
                
                <ProjectLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Demo
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
