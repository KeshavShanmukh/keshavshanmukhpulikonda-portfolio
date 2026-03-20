import styled from "styled-components";

const GlassCard = styled.div`
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;

  border: 1px solid ${({ theme }) => theme.border};

  box-shadow:
    0 8px 32px rgba(0,0,0,0.25),
    inset 0 0 10px rgba(255,255,255,0.05);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
`;

export default GlassCard;
