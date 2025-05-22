"use client"

import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'; // Import icons

const Dock = ({ position = 'bottom', collapsible = false, responsive = 'bottom' }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);

  const dockItems = [
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaLinkedin />, label: 'LinkedIn' },
    { icon: <FaFacebook />, label: 'Facebook' },
    { icon: <FaInstagram />, label: 'Instagram' },
    { icon: <FaGithub />, label: 'GitHub' },
  ];

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
    };

    updatePosition(); // Initial update

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [position, responsive, collapsible]);

  const getDockStyle = () => {
    const flexDirection = currentPosition === 'left' || currentPosition === 'right' ? 'flex-col' : 'flex-row';
    return { flexDirection };
  };

  const scaleSpring = (index) => {
    const translateValue = (() => {
      if (hoverIndex === index) {
        switch (currentPosition) {
          case 'left':
            return 'translateX(5px) translateY(0px)';
          case 'right':
            return 'translateX(-5px) translateY(0px)';
          case 'top':
            return 'translateX(0px) translateY(5px)';
          case 'bottom':
            return 'translateX(0px) translateY(-5px)';
          default:
            return 'translateX(0px) translateY(0px)';
        }
      } else {
        return 'translateX(0px) translateY(0px)';
      }
    })();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring({
      transform:
        hoverIndex === index
          ? `scale(1.5) ${translateValue}`
          : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
          ? `scale(1.3) translateX(0px) translateY(0px)`
          : `scale(1) translateX(0px) translateY(0px)`,
      config: { tension: 200, friction: 15 },
    });
  };

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      className={`dock-container ${currentPosition} absolute bottom-0 left-0 right-0 z-50`} // Tailwind absolute positioning
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div
        className="dock flex items-center justify-center space-x-4 py-4" // Tailwind flexbox for layout
        style={{ ...getDockStyle(), ...visibilitySpring }}
      >
        {dockItems.map((item, index) => (
          <animated.div
            key={index}
            className="dock-item text-3xl cursor-pointer hover:text-blue-500 transition-transform transform" // Tailwind styles for icons
            style={scaleSpring(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon} {/* Display the icon */}
            <span className="sr-only">{item.label}</span> {/* Optional: Add screen reader text for accessibility */}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Dock;
