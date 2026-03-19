import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaDatabase } from 'react-icons/fa';

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
      title: 'IoT Smart Agriculture System',
      description: 'An IoT-based agricultural monitoring system using sensors to track soil moisture, temperature, and humidity for optimal crop management.',
      icon: <FaDatabase />,
      tech: ['Arduino', 'NodeMCU', 'MQTT', 'Firebase', 'React'],
      github: 'https://github.com/KeshavShanmukh/smart-agriculture',
      demo: '#'
    },
    {
      title: 'Flutter E-Commerce App',
      description: 'A mobile e-commerce application built with Flutter featuring product catalog, cart functionality, and secure payment integration.',
      icon: <FaMobile />,
      tech: ['Flutter', 'Dart', 'Firebase', 'Stripe API', 'Redux'],
      github: 'https://github.com/KeshavShanmukh/flutter-ecommerce',
      demo: '#'
    },
    {
      title: 'MERN Certificate Portfolio',
      description: 'A full-stack web application for managing and showcasing certificates with dynamic categorization and filtering capabilities.',
      icon: <FaCode />,
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Styled Components'],
      github: 'https://github.com/KeshavShanmukh/certificate-portfolio',
      demo: '#'
    },
    {
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology ensuring immutability and auditability of votes.',
      icon: <FaDatabase />,
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      github: 'https://github.com/KeshavShanmukh/blockchain-voting',
      demo: '#'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'An intelligent chatbot using natural language processing for customer service automation and query resolution.',
      icon: <FaCode />,
      tech: ['Python', 'TensorFlow', 'NLP', 'Flask', 'React'],
      github: 'https://github.com/KeshavShanmukh/ai-chatbot',
      demo: '#'
    },
    {
      title: 'Real-Time Collaboration Tool',
      description: 'A collaborative platform enabling real-time document editing, video conferencing, and team communication features.',
      icon: <FaCode />,
      tech: ['Socket.io', 'WebRTC', 'React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/KeshavShanmukh/collaboration-tool',
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
