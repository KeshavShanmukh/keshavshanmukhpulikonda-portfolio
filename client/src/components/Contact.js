import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaRocket, FaHeart, FaComments } from 'react-icons/fa';

const ContactContainer = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
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
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
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
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(5px);
  }
`;

const InfoIcon = styled.div`
  color: #667eea;
  font-size: 1.3rem;
  width: 25px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }

  svg {
    position: relative;
    z-index: 1;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
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
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.5);
    background: rgba(255, 255, 255, 0.12);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.5);
    background: rgba(255, 255, 255, 0.12);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.5);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 3rem;
  color: rgba(102, 126, 234, 0.2);
  pointer-events: none;
  z-index: 0;
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #00b894, #00cec9);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(0, 184, 148, 0.3);
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <FloatingBadge
        style={{ top: '10%', right: '10%' }}
        animate={{
          y: [0, -15, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaComments style={{ marginRight: '0.5rem' }} />
        Let's Connect
      </FloatingBadge>

      <FloatingIcon
        style={{ top: '20%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaEnvelope />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '15%', right: '8%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <FaHeart />
      </FloatingIcon>

      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's collaborate and build something amazing together
          </Subtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <InfoTitle>Contact Information</InfoTitle>
            
            <InfoList>
              <InfoItem
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <InfoIcon><FaEnvelope /></InfoIcon>
                <span>keshavshanmukh25@gmail.com</span>
              </InfoItem>
              
              <InfoItem
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <InfoIcon><FaPhone /></InfoIcon>
                <span>+91-9515037980</span>
              </InfoItem>
              
              <InfoItem
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                <span>Vijayawada, Andhra Pradesh, India</span>
              </InfoItem>
            </InfoList>

            <SocialLinks>
              <SocialLink
                href="https://linkedin.com/in/keshavshanmukhpulikonda"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <FaLinkedin />
              </SocialLink>
              
              <SocialLink
                href="https://github.com/KeshavShanmukh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <FormGroup
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>

            <FormGroup
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>

            <FormGroup
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project idea or just say hello..."
                required
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <FaPaperPlane />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </SubmitButton>

            {showSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Thank you for your message! I'll get back to you soon.
              </SuccessMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
