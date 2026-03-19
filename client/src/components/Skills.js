import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaDatabase, FaMobile, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const SkillsContainer = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  font-size: 0.9rem;
  color: #ffffff;
  border: 1px solid rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
  }
`;

const Skills = () => {
  const skills = {
    'Frontend Development': {
      icon: <FaReact />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Styled Components', 'Redux']
    },
    'Backend Development': {
      icon: <FaNodeJs />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL', 'Authentication']
    },
    'Mobile Development': {
      icon: <FaMobile />,
      skills: ['Flutter', 'React Native', 'Android Studio', 'iOS Development', 'Mobile UI/UX']
    },
    'IoT & Hardware': {
      icon: <FaCode />,
      skills: ['Arduino', 'NodeMCU', 'Raspberry Pi', 'Sensors', 'IoT Protocols', 'Embedded C']
    },
    'Database & Cloud': {
      icon: <FaDatabase />,
      skills: ['MongoDB', 'MySQL', 'Firebase', 'AWS', 'Git', 'Docker']
    },
    'Programming Languages': {
      icon: <FaPython />,
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'Dart']
    }
  };

  return (
    <SkillsContainer id="skills">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </Title>
          <Subtitle>
            Comprehensive skill set spanning frontend, backend, mobile, and IoT development
          </Subtitle>
        </SectionHeader>

        <SkillsGrid>
          {Object.entries(skills).map(([category, data], index) => (
            <SkillCategory
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryTitle>
                {data.icon} {category}
              </CategoryTitle>
              <SkillList>
                {data.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
