import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaFilter, FaCertificate, FaBriefcase, FaUsers, FaLaptopCode, FaGraduationCap, FaHandshake, FaCode, FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import axios from 'axios';

const CertificatesContainer = styled.section`
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
      radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-30px, 30px) rotate(180deg); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
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
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: 2px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.3)'};
  background: ${props => props.active 
    ? 'linear-gradient(135deg, #667eea, #764ba2)' 
    : 'transparent'};
  color: white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #764ba2, #667eea)' 
      : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
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
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CertificateCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 30px 60px rgba(102, 126, 234, 0.4);
    border-color: rgba(102, 126, 234, 0.4);
  }
`;

const CertificateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: grayscale(0.2) brightness(1.3);
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  
  ${CertificateCard}:hover & {
    filter: grayscale(0) brightness(1.5);
    transform: scale(1.2) rotateY(360deg);
    color: #667eea;
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

const GlowEffect = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${CertificateCard}:hover & {
    opacity: 1;
  }
`;

const CertificateTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CertificateOrganization = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CertificateDate = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const CertificateDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CertificateCategory = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #667eea;
  margin-bottom: 1rem;
`;

const CertificateLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.5);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.2rem;
  padding: 3rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff6b6b;
  font-size: 1.2rem;
  padding: 3rem;
`;

const categoryIcons = {
  professional: <FaBriefcase />,
  participation: <FaUsers />,
  workshop: <FaLaptopCode />,
  'online-course': <FaGraduationCap />,
  'community-service': <FaHandshake />,
  hackathon: <FaCode />
};

const categoryLabels = {
  professional: 'Professional',
  participation: 'Participation',
  workshop: 'Workshop',
  'online-course': 'Online Course',
  'community-service': 'Community Service',
  hackathon: 'Hackathon'
};

const API_BASE = process.env.NODE_ENV === 'production' 
  ? '' // Same domain for Render all-in-one deployment
  : 'http://localhost:5000';

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [certificates, setCertificates] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCertificates();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterCertificates();
  }, [certificates, selectedCategory]);

  const fetchCertificates = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/certificates`);
      setCertificates(response.data);
    } catch (error) {
      setError('Failed to fetch certificates');
      console.error('Error fetching certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/certificates/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const filterCertificates = () => {
    if (selectedCategory === 'all') {
      setFilteredCertificates(certificates);
    } else {
      setFilteredCertificates(certificates.filter(cert => cert.category === selectedCategory));
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getTotalCount = () => certificates.length;
  const getFeaturedCount = () => certificates.filter(cert => cert.featured).length;

  if (loading) {
    return (
      <LoadingMessage>
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1, 0.95]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Loading certificates...
        </motion.div>
      </LoadingMessage>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <CertificatesContainer id="certificates" ref={ref}>
      <FloatingBadge
        style={{ top: '10%', right: '10%' }}
        animate={{
          y: [0, -15, 0],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <FaAward style={{ marginRight: '0.5rem' }} />
        Certified Professional
      </FloatingBadge>

      <FloatingIcon
        style={{ top: '20%', left: '5%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaTrophy />
      </FloatingIcon>
      
      <FloatingIcon
        style={{ bottom: '15%', right: '8%' }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <FaMedal />
      </FloatingIcon>

      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FaCertificate style={{ marginRight: '1rem' }} />
            My Certificates
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of my professional achievements, certifications, and participation in various events
          </Subtitle>
        </SectionHeader>

        <StatsContainer>
          <StatCard
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <StatNumber>{getTotalCount()}</StatNumber>
            <StatLabel>Total Certificates</StatLabel>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <StatNumber>{getFeaturedCount()}</StatNumber>
            <StatLabel>Featured</StatLabel>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <StatNumber>{Object.keys(categories).length}</StatNumber>
            <StatLabel>Categories</StatLabel>
          </StatCard>
        </StatsContainer>

        <FilterContainer>
          <AnimatePresence>
            <FilterButton
              key="all"
              active={selectedCategory === 'all'}
              onClick={() => handleCategoryChange('all')}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <FaFilter /> <span>All ({getTotalCount()})</span>
            </FilterButton>
          </AnimatePresence>
          
          <AnimatePresence>
            {Object.entries(categories).map(([category, count]) => (
              <FilterButton
                key={category}
                active={selectedCategory === category}
                onClick={() => handleCategoryChange(category)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {categoryIcons[category]} <span>{categoryLabels[category]} ({count})</span>
              </FilterButton>
            ))}
          </AnimatePresence>
        </FilterContainer>

        <CertificatesGrid>
          <AnimatePresence>
            {filteredCertificates.map((certificate, index) => (
              <CertificateCard
                key={certificate._id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                layout
              >
                <GlowEffect />
                
                {certificate.featured && (
                  <motion.div
                    style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 3 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  >
                    <FaStar style={{ color: '#ffd700', fontSize: '1.2rem' }} />
                  </motion.div>
                )}
                
                <CertificateIcon>{categoryIcons[certificate.category] || <FaCertificate />}</CertificateIcon>
                
                <CertificateCategory>{categoryLabels[certificate.category]}</CertificateCategory>
                
                <CertificateTitle>{certificate.title}</CertificateTitle>
                
                <CertificateOrganization>{certificate.organization}</CertificateOrganization>
                
                <CertificateDate>{certificate.date}</CertificateDate>
                
                <CertificateDescription>{certificate.description}</CertificateDescription>
                
                {certificate.verificationLink ? (
                  <CertificateLink 
                    href={certificate.verificationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Verify Certificate →</span>
                  </CertificateLink>
                ) : certificate.certificateFile ? (
                  <CertificateLink 
                    href={`/uploads/${certificate.certificateFile}`} 
                    target="_blank"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Certificate →</span>
                  </CertificateLink>
                ) : null}
              </CertificateCard>
            ))}
          </AnimatePresence>
        </CertificatesGrid>
      </Container>
    </CertificatesContainer>
  );
};

export default Certificates;
