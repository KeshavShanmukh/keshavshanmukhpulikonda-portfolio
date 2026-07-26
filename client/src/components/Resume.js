import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaDownload, FaEye, FaFilePdf } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
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
  const latexResume = `
\\documentclass{article}
\\usepackage[margin=0.6in]{geometry}
\\begin{document}
\\begin{center}
{\\Large Keshav Shanmukh Pulikonda}\\\\n
Software Engineer | Full-Stack Developer | IoT Enthusiast\\\\n
Email: keshavshanmukh25@example.com | LinkedIn: linkedin.com/in/keshavshanmukh | GitHub: github.com/KeshavShanmukh
\\end{center}

\\section{Professional Summary}
Results-driven software engineer with experience building full-stack web applications, mobile solutions, and IoT systems. Skilled in React, Node.js, Python, Flutter, MongoDB, and cloud-based deployment with a strong focus on user-centered design, scalability, and rapid delivery.

\\section{Core Skills}
\\begin{itemize}
\\item Frontend: React, JavaScript, HTML5, CSS3, Styled Components, Tailwind CSS
\\item Backend: Node.js, Express.js, REST APIs, Authentication, GraphQL
\\item Mobile: Flutter, Dart, React Native, Android Studio, Mobile UI/UX
\\item IoT & Hardware: Arduino, NodeMCU, Raspberry Pi, Sensors, Embedded C
\\item Database & Cloud: MongoDB, MySQL, Firebase, AWS, Docker, Git
\\end{itemize}

\\section{Projects}
\\begin{itemize}
\\item Organ Donation Platform – Built a web platform connecting donors and recipients across cities using React, Node.js, Express.js, and MongoDB.
\\item Mental Health Chatbot – Designed an AI-powered chatbot using Python, NLP, TensorFlow, and Flask with empathetic user guidance.
\\item College Event Management App – Developed a Flutter application with role-based permissions and real-time event management for students and admins.
\\item Smart Home Automation – Created an IoT solution for remote appliance control and monitoring using Arduino, NodeMCU, MQTT, and Firebase.
\\end{itemize}

\\section{Certifications}
\\begin{itemize}
\\item Certified in Full-Stack Web Development and modern JavaScript frameworks
\\item Completed practical coursework in IoT systems, embedded development, and cloud integration
\\item Recognized for project-based achievements in software engineering and application delivery
\\end{itemize}

\\section{Education & Achievements}
\\begin{itemize}
\\item B.Tech / degree-focused academic background with strong software engineering fundamentals
\\item Built multiple end-to-end projects spanning web, mobile, and IoT domains
\\item Known for problem-solving, teamwork, and delivering user-focused digital products
\\end{itemize}

\\end{document}
`;

  const handleDownload = () => {
    let doc;

    try {
      doc = new jsPDF({ unit: 'pt', format: 'a4' });
    } catch (error) {
      console.error('Unable to generate resume PDF:', error);
      return;
    }

    const pageWidth = doc?.internal?.pageSize?.getWidth?.() ?? 595.28;
    const pageHeight = doc?.internal?.pageSize?.getHeight?.() ?? 841.89;
    const margin = 40;
    let y = 60;

    const setDocFont = (fontName, fontStyle) => {
      if (typeof doc?.setFont === 'function') {
        doc.setFont(fontName, fontStyle);
      }
    };

    const setDocFontSize = (size) => {
      if (typeof doc?.setFontSize === 'function') {
        doc.setFontSize(size);
      }
    };

    const addDocText = (text, x, yPosition) => {
      if (typeof doc?.text === 'function') {
        doc.text(text, x, yPosition);
      }
    };

    const splitDocText = (text, width) => {
      if (typeof doc?.splitTextToSize === 'function') {
        return doc.splitTextToSize(text, width);
      }
      return [text];
    };

    const addDocPage = () => {
      if (typeof doc?.addPage === 'function') {
        doc.addPage();
      }
    };

    const addSectionTitle = (title) => {
      if (y > pageHeight - 80) {
        addDocPage();
        y = 60;
      }
      setDocFont('helvetica', 'bold');
      setDocFontSize(14);
      addDocText(title, margin, y);
      y += 20;
    };

    const addBulletList = (items) => {
      items.forEach((item) => {
        if (y > pageHeight - 70) {
          addDocPage();
          y = 60;
        }
        setDocFont('helvetica', 'normal');
        setDocFontSize(10);
        const lines = splitDocText(`• ${item}`, pageWidth - margin * 2 - 20);
        addDocText(lines, margin + 8, y);
        y += lines.length * 12;
      });
    };

    const lines = latexResume
      .replace(/\\n/g, '\n')
      .replace(/\\\\/g, '\n')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('%'));

    let currentSection = null;
    let inList = false;
    const bulletItems = [];

    lines.forEach((line) => {
      if (line.startsWith('\\section{')) {
        if (currentSection) {
          if (bulletItems.length > 0) {
            addBulletList(bulletItems);
            bulletItems.length = 0;
          }
        }

        const title = line.match(/\\section\{([^}]+)\}/)?.[1] || 'Resume';
        currentSection = title;
        addSectionTitle(title);
        inList = false;
        return;
      }

      if (line === '\\begin{itemize}') {
        inList = true;
        return;
      }

      if (line === '\\end{itemize}') {
        if (bulletItems.length > 0) {
          addBulletList(bulletItems);
          bulletItems.length = 0;
        }
        inList = false;
        return;
      }

      if (line.startsWith('\\item')) {
        const item = line.replace('\\item', '').trim();
        if (item) {
          bulletItems.push(item);
        }
        return;
      }

      if (line.startsWith('{\\Large')) {
        setDocFont('helvetica', 'bold');
        setDocFontSize(22);
        const titleLine = line.replace('{\\Large', '').replace('}', '').trim();
        addDocText(titleLine, margin, y);
        y += 28;
        return;
      }

      if (line.startsWith('Software Engineer') || line.startsWith('Email:')) {
        setDocFont('helvetica', 'normal');
        setDocFontSize(10);
        addDocText(line, margin, y);
        y += 16;
        return;
      }

      if (line.startsWith('\\begin{center}') || line.startsWith('\\end{center}') || line.startsWith('\\documentclass') || line.startsWith('\\usepackage') || line.startsWith('\\begin{document}') || line.startsWith('\\end{document}')) {
        return;
      }

      if (!inList && line) {
        setDocFont('helvetica', 'normal');
        setDocFontSize(10);
        const textLines = splitDocText(line.replace(/\\\\/g, ' ').replace(/\{/, '').replace(/\}/g, ''), pageWidth - margin * 2);
        addDocText(textLines, margin, y);
        y += textLines.length * 12 + 6;
      }
    });

    if (bulletItems.length > 0) {
      addBulletList(bulletItems);
    }

    doc.save('Keshav_Shanmukh_Pulikonda_Resume.pdf');
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
              Download a polished PDF resume generated from a LaTeX-style template with your latest experience, skills, and project highlights.
            </SectionDescription>
            <ButtonContainer>
              <ViewButton
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  handleDownload();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEye />
                Generate Resume
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