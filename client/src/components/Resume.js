import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGraduationCap, FaBriefcase, FaCode, FaRocket, FaAward, FaCertificate } from 'react-icons/fa';
import { fadeUp } from '../animations';
import SectionWrapper from './SectionWrapper';
import BlurOrb from './BlurOrb';

const ResumeContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem;
  background: white;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ResumeHeader = styled.div`
  text-align: center;
  border-bottom: 3px solid #667eea;
  padding-bottom: 2rem;
  margin-bottom: 3rem;
`;

const ResumeName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const ResumeTitle = styled.h2`
  font-size: 1.3rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-size: 0.9rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid #667eea;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
`;

const JobCompany = styled.div`
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const JobDuration = styled.div`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
`;

const JobDescription = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
  color: #555;
  line-height: 1.6;
`;

const JobDescriptionItem = styled.li`
  margin-bottom: 0.3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillCategory = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
  border-left: 4px solid #667eea;
`;

const SkillCategoryTitle = styled.h5`
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const SkillList = styled.div`
  color: #555;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const Resume = () => {
  return (
    <SectionWrapper>
      <BlurOrb style={{ top: "10%", left: "5%" }} />
      <BlurOrb style={{ bottom: "10%", right: "5%" }} />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <ResumeContainer>
          {/* ATS Optimized Header */}
          <ResumeHeader>
            <ResumeName>PULIKONDA KESHAV SHANMUKH</ResumeName>
            <ResumeTitle>IoT Developer | Full Stack Engineer | Flutter Developer</ResumeTitle>
            <ContactInfo>
              <ContactItem>
                <FaEnvelope /> keshavshanmukh25@gmail.com
              </ContactItem>
              <ContactItem>
                <FaPhone /> +91-9515037980
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt /> Vijayawada, Andhra Pradesh, India
              </ContactItem>
              <ContactItem>
                <FaLinkedin /> linkedin.com/in/keshavshanmukhpulikonda
              </ContactItem>
              <ContactItem>
                <FaGithub /> github.com/KeshavShanmukh
              </ContactItem>
            </ContactInfo>
          </ResumeHeader>

          {/* Professional Summary */}
          <Section>
            <SectionTitle>
              <FaUser /> Professional Summary
            </SectionTitle>
            <motion.p variants={fadeUp} style={{ lineHeight: '1.6', color: '#555' }}>
              Motivated 3rd-year B.Tech student in Internet of Things with strong foundation in Flutter mobile development, 
              Arduino programming, and full-stack web development. Passionate about creating innovative IoT solutions 
              and currently gaining practical experience through internship at Supraja Technologies. Quick learner with 
              17+ technical certifications and multiple academic projects demonstrating strong problem-solving abilities 
              and technical skills in emerging technologies.
            </motion.p>
          </Section>

          {/* Education */}
          <Section>
            <SectionTitle>
              <FaGraduationCap /> Education
            </SectionTitle>
            <ExperienceItem>
              <JobHeader>
                <div>
                  <JobTitle>Bachelor of Technology in Internet of Things</JobTitle>
                  <JobCompany>Lakki Reddy Bali Reddy College of Engineering</JobCompany>
                </div>
                <JobDuration>2022 - 2026 (Expected)</JobDuration>
              </JobHeader>
              <JobDescription>
                <JobDescriptionItem>Current GPA: [Your GPA if you want to include]</JobDescriptionItem>
                <JobDescriptionItem>Relevant Coursework: IoT Systems, Embedded Systems, Web Development, Mobile Development, Blockchain Technology</JobDescriptionItem>
                <JobDescriptionItem>Academic Projects: Smart Gardening System, AES-256 Encryption Tool, Organ Donation Platform</JobDescriptionItem>
                <JobDescriptionItem>Technical Certifications: 17+ certifications in IoT, Web Development, and Cloud Technologies</JobDescriptionItem>
              </JobDescription>
            </ExperienceItem>
          </Section>

          {/* Internship */}
          <Section>
            <SectionTitle>
              <FaBriefcase /> Internship Experience
            </SectionTitle>
            <ExperienceItem>
              <JobHeader>
                <div>
                  <JobTitle>IoT Development Intern</JobTitle>
                  <JobCompany>Supraja Technologies</JobCompany>
                </div>
                <JobDuration>2024 - Present</JobDuration>
              </JobHeader>
              <JobDescription>
                <JobDescriptionItem>Learning real-world IoT development and smart infrastructure solutions</JobDescriptionItem>
                <JobDescriptionItem>Gaining hands-on experience with sensor networks and data collection systems</JobDescriptionItem>
                <JobDescriptionItem>Assisting in full-stack application development with Node.js and React</JobDescriptionItem>
                <JobDescriptionItem>Collaborating with development teams on IoT prototype projects</JobDescriptionItem>
              </JobDescription>
            </ExperienceItem>
          </Section>

          {/* Projects */}
          <Section>
            <SectionTitle>
              <FaCode /> Technical Projects
            </SectionTitle>
            <ExperienceItem>
              <JobHeader>
                <div>
                  <JobTitle>Organ Donation Platform</JobTitle>
                  <JobCompany>Full Stack Web Application</JobCompany>
                </div>
                <JobDuration>2024</JobDuration>
              </JobHeader>
              <JobDescription>
                <JobDescriptionItem>Developed web platform displaying available donor contacts across Indian cities</JobDescriptionItem>
                <JobDescriptionItem>Implemented location-based search functionality and real-time donor matching</JobDescriptionItem>
                <JobDescriptionItem>Technologies: React, Node.js, MongoDB, Express, REST APIs</JobDescriptionItem>
              </JobDescription>
            </ExperienceItem>
            <ExperienceItem>
              <JobHeader>
                <div>
                  <JobTitle>AES-256 CLI Encryption Tool</JobTitle>
                  <JobCompany>Security Application</JobCompany>
                </div>
                <JobDuration>2024</JobDuration>
              </JobHeader>
              <JobDescription>
                <JobDescriptionItem>Created command-line tool implementing AES-256 encryption with lattice-based cryptography</JobDescriptionItem>
                <JobDescriptionItem>Enhanced security through post-quantum cryptographic methods</JobDescriptionItem>
                <JobDescriptionItem>Technologies: Python, Cryptography, Lattice Encryption, CLI Development</JobDescriptionItem>
              </JobDescription>
            </ExperienceItem>
            <ExperienceItem>
              <JobHeader>
                <div>
                  <JobTitle>Smart Gardening System</JobTitle>
                  <JobCompany>IoT Project</JobCompany>
                </div>
                <JobDuration>2024</JobDuration>
              </JobHeader>
              <JobDescription>
                <JobDescriptionItem>Designing automated plant care system with soil monitoring and growth optimization</JobDescriptionItem>
                <JobDescriptionItem>Integrating Arduino sensors, mobile app control, and Firebase data storage</JobDescriptionItem>
                <JobDescriptionItem>Technologies: Arduino, IoT Sensors, Flutter, Firebase, Mobile Development</JobDescriptionItem>
              </JobDescription>
            </ExperienceItem>
          </Section>

          {/* Skills */}
          <Section>
            <SectionTitle>
              <FaRocket /> Technical Skills
            </SectionTitle>
            <SkillsGrid>
              <SkillCategory>
                <SkillCategoryTitle>Programming Languages</SkillCategoryTitle>
                <SkillList>Python, JavaScript, Java, C++, Dart, HTML/CSS</SkillList>
              </SkillCategory>
              <SkillCategory>
                <SkillCategoryTitle>Mobile Development</SkillCategoryTitle>
                <SkillList>Flutter, Dart, React Native, Android Studio</SkillList>
              </SkillCategory>
              <SkillCategory>
                <SkillCategoryTitle>Web Development</SkillCategoryTitle>
                <SkillList>React, Node.js, Express, MongoDB, MySQL</SkillList>
              </SkillCategory>
              <SkillCategory>
                <SkillCategoryTitle>IoT & Embedded</SkillCategoryTitle>
                <SkillList>Arduino, NodeMCU, Raspberry Pi, Sensors, IoT Protocols</SkillList>
              </SkillCategory>
              <SkillCategory>
                <SkillCategoryTitle>Cloud & DevOps</SkillCategoryTitle>
                <SkillList>Firebase, AWS, Git, Docker, CI/CD</SkillList>
              </SkillCategory>
              <SkillCategory>
                <SkillCategoryTitle>Security</SkillCategoryTitle>
                <SkillList>Cryptography, AES-256, Lattice Encryption, Network Security</SkillList>
              </SkillCategory>
            </SkillsGrid>
          </Section>

          {/* Certifications */}
          <Section>
            <SectionTitle>
              <FaCertificate /> Certifications & Achievements
            </SectionTitle>
            <ExperienceItem>
              <JobHeader>
                <div>
                  <JobTitle>17+ Technical Certifications</JobTitle>
                  <JobCompany>Various Platforms</JobCompany>
                </div>
                <JobDuration>2022 - 2024</JobDuration>
              </JobHeader>
              <JobDescription>
                <JobDescriptionItem>IoT Fundamentals and Advanced IoT Systems</JobDescriptionItem>
                <JobDescriptionItem>Full Stack Web Development and Cloud Computing</JobDescriptionItem>
                <JobDescriptionItem>Mobile App Development and Flutter Framework</JobDescriptionItem>
                <JobDescriptionItem>Cybersecurity and Cryptography Fundamentals</JobDescriptionItem>
                <JobDescriptionItem>AWS Cloud Practitioner and Developer Certification</JobDescriptionItem>
              </JobDescription>
            </ExperienceItem>
          </Section>
        </ResumeContainer>
      </motion.div>
    </SectionWrapper>
  );
};

export default Resume;
