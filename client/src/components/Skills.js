import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaDatabase, FaMobile, FaReact, FaNodeJs, FaPython, FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';

const SkillsContainer = styled.section`
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
    background: 
      radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
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
  transition: all 0.4s ease;
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
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;

  svg {
    color: #667eea;
    font-size: 1.8rem;
  }
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
  position: relative;
  overflow: hidden;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: rgba(102, 126, 234, 0.4);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.5);
  }
`;

const ProgressRing = styled.svg`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  transform: rotate(-90deg);
  z-index: 1;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 3rem;
  color: rgba(102, 126, 234, 0.2);
  pointer-events: none;
  z-index: 0;
`;

const SkillLevel = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #667eea;
  z-index: 2;
`;

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    'Frontend Development': {
      icon: <FaReact />,
      level: 90,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Styled Components', 'Redux']
    },
    'Backend Development': {
      icon: <FaNodeJs />,
      level: 85,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL', 'Authentication']
    },
    'Mobile Development': {
      icon: <FaMobile />,
      level: 80,
      skills: ['Flutter', 'React Native', 'Android Studio', 'iOS Development', 'Mobile UI/UX']
    },
    'IoT & Hardware': {
      icon: <FaCode />,
      level: 88,
      skills: ['Arduino', 'NodeMCU', 'Raspberry Pi', 'Sensors', 'IoT Protocols', 'Embedded C']
    },
    'Database & Cloud': {
      icon: <FaDatabase />,
      level: 82,
      skills: ['MongoDB', 'MySQL', 'Firebase', 'AWS', 'Git', 'Docker']
    },
    'Programming Languages': {
      icon: <FaPython />,
      level: 92,
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'Dart']
    }
  };

  const circumference = 2 * Math.PI * 18;

  return (
    <SkillsContainer id="skills" ref={ref}>
      <FloatingIcon
        style={{ top: '10%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaRocket />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '15%', right: '8%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <FaLightbulb />
      </FloatingIcon>

      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive skill set spanning frontend, backend, mobile, and IoT development
          </Subtitle>
        </SectionHeader>

        <SkillsGrid>
          {Object.entries(skills).map(([category, data], index) => (
            <SkillCategory
              key={category}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <SkillLevel>{data.level}%</SkillLevel>
              <ProgressRing>
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="rgba(102, 126, 234, 0.2)"
                  strokeWidth="3"
                  fill="none"
                />
                <motion.circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="#667eea"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={isInView ? { strokeDashoffset: circumference - (data.level / 100) * circumference } : {}}
                  transition={{ duration: 1.5, delay: index * 0.15 + 0.5, ease: "easeInOut" }}
                  strokeLinecap="round"
                />
              </ProgressRing>
              
              <CategoryTitle>
                {data.icon} {category}
              </CategoryTitle>
              
              <SkillList>
                {data.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: (index * 0.15) + (skillIndex * 0.05) + 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
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
