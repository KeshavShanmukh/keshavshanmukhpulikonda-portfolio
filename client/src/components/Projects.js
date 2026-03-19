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
      id: 1,
      title: 'Organ Donation Web Application',
      description: 'A comprehensive web application that shares and manages available donor information across India, connecting donors with recipients in real-time.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: <FaDatabase />,
      github: 'https://github.com/KeshavShanmukh/organ-donation-app',
      demo: 'https://organ-donation-demo.netlify.app',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Home Automation',
      description: 'IoT-based home automation system for monitoring and controlling electrical appliances manually or through mobile application (local, non-cloud based).',
      technologies: ['Arduino', 'React Native', 'ESP32', 'Local Network'],
      icon: <FaMobile />,
      github: 'https://github.com/KeshavShanmukh/smart-home-automation',
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'Quantum-Safe CLI Encryption Tool',
      description: 'Command-line tool implementing AES 256 and lattice-based encryption algorithms for quantum-resistant security and data protection.',
      technologies: ['Python', 'Cryptography', 'AES-256', 'Lattice-Based'],
      icon: <FaCode />,
      github: 'https://github.com/KeshavShanmukh/quantum-safe-encryption',
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      description: 'Full-stack MERN portfolio showcasing 17 certificates with dynamic filtering, modern UI, and responsive design.',
      technologies: ['React', 'Node.js', 'SQLite', 'Framer Motion'],
      icon: <FaGithub />,
      github: 'https://github.com/KeshavShanmukh/keshavshanmukhpulikonda-portfolio',
      demo: 'https://keshavshanmukhpulikonda-portfolio.onrender.com',
      featured: true
    },
    {
      id: 5,
      title: 'Smart Gardening Device (Upcoming)',
      description: 'IoT-based smart gardening system for automated plant monitoring, watering, and environmental control for optimal plant growth.',
      technologies: ['Arduino', 'Sensors', 'IoT', 'Mobile App'],
      icon: <FaCode />,
      github: null,
      demo: null,
      featured: false,
      status: 'In Development'
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
