import styled from "styled-components";

const BlurOrb = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent);
  filter: blur(120px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
`;

export default BlurOrb;
