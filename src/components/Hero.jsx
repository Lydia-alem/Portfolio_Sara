import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  const titles = ['STIC Student', 'Full-Stack Developer'];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Load Font Awesome icons
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="home" className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '80px 0 40px' : isTablet ? '100px 0 60px' : '120px 0 80px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : isTablet ? '0 30px' : '0 40px'
      }}>
        <div className="hero-content" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          alignItems: 'center',
          gap: isMobile ? '30px' : isTablet ? '40px' : '50px',
          justifyContent: 'space-between'
        }}>
          <div className="hero-text" style={{ 
            flex: 1,
            textAlign: isMobile ? 'center' : 'left',
            maxWidth: isMobile ? '100%' : isTablet ? '500px' : '600px'
          }}>
            <p className="greeting" style={{
              fontSize: isMobile ? '18px' : isTablet ? '22px' : '24px',
              marginBottom: isMobile ? '10px' : '15px',
              color: '#3479b1',
              fontWeight: '500'
            }}>
              Hi there, I'm
            </p>
            <h1 className="name" style={{
              fontSize: isMobile ? '36px' : isTablet ? '48px' : '72px',
              fontWeight: '500',
              marginBottom: isMobile ? '10px' : '15px',
              background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: '1.1'
            }}>
              Boulassel Sara Nesrine
            </h1>
            <h2 
              className="title-animation"
              style={{
                fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px',
                marginBottom: isMobile ? '20px' : '30px',
                color: 'var(--light)',
                minHeight: isMobile ? '28px' : isTablet ? '32px' : '40px',
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.5s ease',
                fontWeight: '500'
              }}
            >
              {titles[currentTitleIndex]}
            </h2>
            <p className="description" style={{
              fontSize: isMobile ? '15px' : isTablet ? '16px' : '18px',
              lineHeight: '1.6',
              marginBottom: isMobile ? '30px' : '40px',
              maxWidth: '100%',
              opacity: '0.9',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              I am Boulassel Sara Nesrine. Front end and flutter developper.
              I'm passionate about creating beautiful, functional web experiences.
              Currently studying Masters for Systems of Information Technology and communication at University of Constantine2 while building modern web applications.
            </p>
            <div className="cta-buttons" style={{ 
              display: 'flex', 
              gap: isMobile ? '15px' : '20px',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: 'center'
            }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
                style={{
                  padding: isMobile ? '12px 24px' : '15px 30px',
                  borderRadius: '50px',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(255, 0, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: isMobile ? '100%' : 'auto',
                  maxWidth: isMobile ? '300px' : 'none',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 30px rgba(255, 0, 255, 0.4)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 20px rgba(255, 0, 255, 0.3)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(0.95)';
                    e.target.style.opacity = '0.9';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.opacity = '1';
                  }
                }}
              >
                <i className="fas fa-paper-plane"></i> Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-secondary"
                style={{
                  padding: isMobile ? '12px 24px' : '15px 30px',
                  borderRadius: '50px',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  background: 'transparent',
                  color: 'var(--light)',
                  border: '2px solid var(--light)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: isMobile ? '100%' : 'auto',
                  maxWidth: isMobile ? '300px' : 'none',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'var(--light)';
                    e.target.style.color = 'var(--dark)';
                    e.target.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--light)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(0.95)';
                    e.target.style.background = 'var(--light)';
                    e.target.style.color = 'var(--dark)';
                    e.target.style.opacity = '0.9';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.opacity = '1';
                    setTimeout(() => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'var(--light)';
                    }, 150);
                  }
                }}
              >
                <i className="fas fa-code"></i> View Projects
              </button>
            </div>
          </div>
          <div className="hero-image" style={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: isMobile ? '280px' : isTablet ? '380px' : '450px',
            margin: isMobile ? '0 auto 20px' : '0'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px'
            }}>
              <img 
                src="/sara1.png" 
                alt="Boulassel Sara Nesrine" 
                className="floating"
                style={{
                  width: '100%',
                  height: isMobile ? '280px' : isTablet ? '380px' : '450px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 40px 40px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.5s ease',
                  border: isMobile ? '4px solid rgba(255, 255, 255, 0.5)' : 
                          isTablet ? '5px solid rgba(255, 255, 255, 0.5)' : 
                          '6px solid rgba(255, 255, 255, 0.5)',
                  animation: 'float 6s ease-in-out infinite'
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'scale(1)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(0.98)';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              />
              {/* Decorative glow effect */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                borderRadius: '50%',
                zIndex: -1,
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                animation: 'pulse 4s ease-in-out infinite'
              }} />
            </div>
          </div>
        </div>
        
        {/* Mobile scroll indicator */}
        {isMobile && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            animation: 'bounce 2s infinite',
            zIndex: 10
          }}>
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--light)',
                fontSize: '24px',
                cursor: 'pointer',
                opacity: '0.7',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onTouchStart={(e) => {
                e.target.style.transform = 'scale(0.9)';
                e.target.style.opacity = '0.5';
              }}
              onTouchEnd={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.opacity = '0.7';
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 480px) {
          .name {
            font-size: 32px !important;
          }
          .title-animation {
            font-size: 18px !important;
            min-height: 26px !important;
          }
          .description {
            font-size: 14px !important;
          }
          .hero-image {
            max-width: 250px !important;
          }
          .hero-image img {
            height: 250px !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: 90vh !important;
          }
          .hero-content {
            flex-direction: column-reverse !important;
          }
          .hero-text {
            text-align: center !important;
          }
          .cta-buttons {
            flex-direction: column !important;
          }
        }
        
        @media (min-width: 481px) and (max-width: 768px) {
          .name {
            font-size: 36px !important;
          }
          .hero-image {
            max-width: 300px !important;
          }
          .hero-image img {
            height: 300px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-content {
            gap: 40px !important;
          }
          .name {
            font-size: 48px !important;
          }
          .hero-image {
            max-width: 380px !important;
          }
        }
        
        @media (min-width: 1025px) {
          .hero-content {
            gap: 50px !important;
          }
        }
        
        /* Reduce animation on devices that prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .floating, .hero-image div, .scroll-indicator {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;