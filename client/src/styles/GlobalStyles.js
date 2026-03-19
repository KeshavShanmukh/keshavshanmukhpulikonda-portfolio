import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: 
      radial-gradient(ellipse at top left, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at center, rgba(255, 255, 255, 0.02) 0%, transparent 70%),
      linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%);
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.01) 0%, transparent 50%);
      pointer-events: none;
      z-index: 1;
      animation: backgroundFloat 20s ease-in-out infinite;
    }
    
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 50px 50px, 50px 50px;
      pointer-events: none;
      z-index: 1;
      animation: backgroundMove 30s linear infinite;
    }
  }
  
  @keyframes backgroundFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(-20px, -20px) rotate(120deg);
    }
    66% {
      transform: translate(20px, -10px) rotate(240deg);
    }
  }
  
  @keyframes backgroundMove {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 50px 50px, -50px -50px;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #764ba2, #667eea);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section {
    padding: 5rem 0;
    position: relative;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-subtitle {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }

  .btn {
    display: inline-block;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    }
  }

  .card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .section {
      padding: 3rem 0;
    }
  }
`;
