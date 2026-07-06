import React, { createContext, useContext, useState, useEffect } from 'react';

// This context stores app-wide theme state and scroll status.
// It helps components such as the header react to whether the user has scrolled down.
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // theme controls light or dark mode; currently the app defaults to dark mode.
  const [theme, setTheme] = useState('dark');
  // isScrolled is used by the header to change its appearance when the page scrolls.
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Listen for window scroll events and update the header's state.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Switch between dark and light mode when needed.
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    isScrolled,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
