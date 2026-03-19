import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaFilter, FaCertificate, FaBriefcase, FaUsers, FaLaptopCode, FaGraduationCap, FaHandshake, FaCode } from 'react-icons/fa';
import axios from 'axios';

const CertificatesContainer = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%);
  position: relative;
  overflow: hidden;

  &::before {
    background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
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
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(135deg, #764ba2, #667eea)' 
      : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
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

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
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
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const CertificateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: grayscale(0.2) brightness(1.3);
  transition: all 0.3s ease;
  
  ${CertificateCard}:hover & {
    filter: grayscale(0) brightness(1.5);
    transform: scale(1.1) rotateY(360deg);
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

const CertificateLink = styled.a`
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
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
    return <LoadingMessage>Loading certificates...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <CertificatesContainer id="certificates">
      <Container>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCertificate style={{ marginRight: '1rem' }} />
            My Certificates
          </Title>
          <Subtitle>
            A collection of my professional achievements, certifications, and participation in various events
          </Subtitle>
        </SectionHeader>

        <StatsContainer>
          <StatCard
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatNumber>{getTotalCount()}</StatNumber>
            <StatLabel>Total Certificates</StatLabel>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StatNumber>{getFeaturedCount()}</StatNumber>
            <StatLabel>Featured</StatLabel>
          </StatCard>
          
          <StatCard
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <StatNumber>{Object.keys(categories).length}</StatNumber>
            <StatLabel>Categories</StatLabel>
          </StatCard>
        </StatsContainer>

        <FilterContainer>
          <FilterButton
            active={selectedCategory === 'all'}
            onClick={() => handleCategoryChange('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilter /> All ({getTotalCount()})
          </FilterButton>
          
          {Object.entries(categories).map(([category, count]) => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryIcons[category]} {categoryLabels[category]} ({count})
            </FilterButton>
          ))}
        </FilterContainer>

        <CertificatesGrid>
          {filteredCertificates.map((certificate, index) => (
            <CertificateCard
              key={certificate._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
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
                >
                  Verify Certificate →
                </CertificateLink>
              ) : certificate.certificateFile ? (
                <CertificateLink 
                  href={`/uploads/${certificate.certificateFile}`} 
                  target="_blank"
                >
                  View Certificate →
                </CertificateLink>
              ) : null}
            </CertificateCard>
          ))}
        </CertificatesGrid>
      </Container>
    </CertificatesContainer>
  );
};

export default Certificates;
