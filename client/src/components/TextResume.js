import React from 'react';
import { fadeUp } from '../animations';
import SectionWrapper from './SectionWrapper';

const TextResume = () => {
  return (
    <SectionWrapper>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: 'white',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '2px solid #667eea', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '2rem', margin: '0', color: '#2c3e50' }}>
            PULIKONDA KESHAV SHANMUKH
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#667eea', margin: '0.5rem 0' }}>
            IoT Developer | Full Stack Engineer | Flutter Developer
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
            <span>📧 keshavshanmukh25@gmail.com</span>
            <span>📱 +91-9515037980</span>
            <span>📍 Vijayawada, Andhra Pradesh, India</span>
            <span>💼 linkedin.com/in/keshavshanmukhpulikonda</span>
            <span>💻 github.com/KeshavShanmukh</span>
          </div>
        </div>

        {/* Professional Summary */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
            Professional Summary
          </h2>
          <p>
            Motivated 3rd-year B.Tech student in Internet of Things with strong foundation in Flutter mobile development, 
            Arduino programming, and full-stack web development. Passionate about creating innovative IoT solutions 
            and currently gaining practical experience through internship at Supraja Technologies. Quick learner with 
            17+ technical certifications and multiple academic projects demonstrating strong problem-solving abilities 
            and technical skills in emerging technologies.
          </p>
        </section>

        {/* Education */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
            Education
          </h2>
          <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #667eea' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>Bachelor of Technology in Internet of Things</h3>
                <p style={{ color: '#667eea', margin: '0.3rem 0' }}>Potti Sriramulu Chalavadi Mallikarjuna Rao College of Engineering and Technology</p>
              </div>
              <span style={{ color: '#666' }}>2023 - 2027 (Expected)</span>
            </div>
            <ul style={{ marginTop: '0.5rem', color: '#555', paddingLeft: '1.5rem' }}>
              <li>Current GPA: [Your GPA if you want to include]</li>
              <li>Relevant Coursework: IoT Systems, Embedded Systems, Web Development, Mobile Development, Blockchain Technology</li>
              <li>Academic Projects: Smart Gardening System, AES-256 Encryption Tool, Organ Donation Platform</li>
              <li>Technical Certifications: 17+ certifications in IoT, Web Development, and Cloud Technologies</li>
            </ul>
          </div>
        </section>

        {/* Internship */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
            Internship Experience
          </h2>
          <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #667eea' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>IoT Development Intern</h3>
                <p style={{ color: '#667eea', margin: '0.3rem 0' }}>Supraja Technologies</p>
              </div>
              <span style={{ color: '#666' }}>2024 - Present</span>
            </div>
            <ul style={{ marginTop: '0.5rem', color: '#555', paddingLeft: '1.5rem' }}>
              <li>Learning real-world IoT development and smart infrastructure solutions</li>
              <li>Gaining hands-on experience with sensor networks and data collection systems</li>
              <li>Assisting in full-stack application development with Node.js and React</li>
              <li>Collaborating with development teams on IoT prototype projects</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
            Technical Projects
          </h2>
          
          <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #667eea' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>Organ Donation Platform</h3>
                <p style={{ color: '#667eea', margin: '0.3rem 0' }}>Full Stack Web Application</p>
              </div>
              <span style={{ color: '#666' }}>2024</span>
            </div>
            <ul style={{ marginTop: '0.5rem', color: '#555', paddingLeft: '1.5rem' }}>
              <li>Developed web platform displaying available donor contacts across Indian cities</li>
              <li>Implemented location-based search functionality and real-time donor matching</li>
              <li>Technologies: React, Node.js, MongoDB, Express, REST APIs</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #667eea' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>AES-256 CLI Encryption Tool</h3>
                <p style={{ color: '#667eea', margin: '0.3rem 0' }}>Security Application</p>
              </div>
              <span style={{ color: '#666' }}>2024</span>
            </div>
            <ul style={{ marginTop: '0.5rem', color: '#555', paddingLeft: '1.5rem' }}>
              <li>Created command-line tool implementing AES-256 encryption with lattice-based cryptography</li>
              <li>Enhanced security through post-quantum cryptographic methods</li>
              <li>Technologies: Python, Cryptography, Lattice Encryption, CLI Development</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #667eea' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>Smart Gardening System</h3>
                <p style={{ color: '#667eea', margin: '0.3rem 0' }}>IoT Project</p>
              </div>
              <span style={{ color: '#666' }}>2024</span>
            </div>
            <ul style={{ marginTop: '0.5rem', color: '#555', paddingLeft: '1.5rem' }}>
              <li>Designing automated plant care system with soil monitoring and growth optimization</li>
              <li>Integrating Arduino sensors, mobile app control, and Firebase data storage</li>
              <li>Technologies: Arduino, IoT Sensors, Flutter, Firebase, Mobile Development</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
            Technical Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#667eea', margin: '0 0 0.5rem 0' }}>Programming Languages</h4>
              <p style={{ margin: '0', color: '#555' }}>Python, JavaScript, Java, C++, Dart, HTML/CSS</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#667eea', margin: '0 0 0.5rem 0' }}>Mobile Development</h4>
              <p style={{ margin: '0', color: '#555' }}>Flutter, Dart, React Native, Android Studio</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#667eea', margin: '0 0 0.5rem 0' }}>Web Development</h4>
              <p style={{ margin: '0', color: '#555' }}>React, Node.js, Express, MongoDB, MySQL</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#667eea', margin: '0 0 0.5rem 0' }}>IoT & Embedded</h4>
              <p style={{ margin: '0', color: '#555' }}>Arduino, NodeMCU, Raspberry Pi, Sensors, IoT Protocols</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#667eea', margin: '0 0 0.5rem 0' }}>Cloud & DevOps</h4>
              <p style={{ margin: '0', color: '#555' }}>Firebase, AWS, Git, Docker, CI/CD</p>
            </div>
            <div style={{ background: '#f8f9fa', padding: '1rem', borderLeft: '4px solid #667eea' }}>
              <h4 style={{ color: '#667eea', margin: '0 0 0.5rem 0' }}>Security</h4>
              <p style={{ margin: '0', color: '#555' }}>Cryptography, AES-256, Lattice Encryption, Network Security</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#667eea', borderBottom: '2px solid #667eea', paddingBottom: '0.5rem' }}>
            Certifications & Achievements
          </h2>
          <div style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid #667eea' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <div>
                <h3 style={{ margin: '0', color: '#2c3e50' }}>17+ Technical Certifications</h3>
                <p style={{ color: '#667eea', margin: '0.3rem 0' }}>Various Platforms</p>
              </div>
              <span style={{ color: '#666' }}>2022 - 2024</span>
            </div>
            <ul style={{ marginTop: '0.5rem', color: '#555', paddingLeft: '1.5rem' }}>
              <li>IoT Fundamentals and Advanced IoT Systems</li>
              <li>Full Stack Web Development and Cloud Computing</li>
              <li>Mobile App Development and Flutter Framework</li>
              <li>Cybersecurity and Cryptography Fundamentals</li>
              <li>AWS Cloud Practitioner and Developer Certification</li>
            </ul>
          </div>
        </section>

      </div>
    </SectionWrapper>
  );
};

export default TextResume;
