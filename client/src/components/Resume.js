import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import { fadeUp } from '../animations';
import SectionWrapper from './SectionWrapper';
import BlurOrb from './BlurOrb';

const ResumeSection = styled.section`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ResumeButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ViewButton = styled(ResumeButton)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

const DownloadButton = styled(ResumeButton)`
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
  }
`;

const FileIcon = styled(FaFilePdf)`
  font-size: 4rem;
  color: #667eea;
  margin-bottom: 2rem;
  filter: drop-shadow(0 5px 15px rgba(102, 126, 234, 0.3));
`;

const Resume = () => {
  const resumeUrl = '/Keshav_Shanmukh_Pulikonda_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Keshav_Shanmukh_Pulikonda_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <SectionWrapper>
      <BlurOrb style={{ top: "15%", left: "10%" }} />
      <BlurOrb style={{ bottom: "15%", right: "10%" }} />

      <ResumeSection id="resume">
        <ContentWrapper>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <FileIcon />
            <SectionTitle>
              Resume
            </SectionTitle>
            <SectionDescription>
              Download or view my professional resume to learn more about my experience, 
              skills, and qualifications. Updated with my latest projects and certifications.
            </SectionDescription>
            <ButtonContainer>
              <ViewButton
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                View Resume
              </ViewButton>
              <DownloadButton
                as="button"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </DownloadButton>
            </ButtonContainer>
          </motion.div>
        </ContentWrapper>
      </ResumeSection>
    </SectionWrapper>
  );
};

export default Resume;