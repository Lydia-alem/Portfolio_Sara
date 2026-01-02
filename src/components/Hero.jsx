import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const titles = ['STIC Student', 'Full-Stack Developer'];

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 0 80px'
    }}>
      <div className="container">
        <div className="hero-content" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '50px'
        }}>
          <div className="hero-text" style={{ flex: 1 }}>
            <p className="greeting" style={{
              fontSize: '24px',
              fontWeight: '500',
              marginBottom: '15px',
              color: '#3479b1'
            }}>
              Hi there, I'm
            </p>
            <h1 className="name" style={{
              fontSize: '72px',
              fontWeight: '500',
              marginBottom: '15px',
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
                fontSize: '28px',
                marginBottom: '30px',
                color: 'var(--light)',
                minHeight: '40px',
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.5s ease'
              }}
            >
              {titles[currentTitleIndex]}
            </h2>
            <p className="description" style={{
              fontSize: '18px',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '600px',
              opacity: '0.9'
            }}>
               I am Boulassel Sara Nesrine. Front end and flutter developper.
              I'm passionate about creating beautiful, functional web experiences.
               Currently studying Masters for Systems of Information Technology and communication at University of Constantine2 while building modern web applications.
            </p>
            <div className="cta-buttons" style={{ display: 'flex', gap: '20px' }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
                style={{
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(255, 0, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 30px rgba(255, 0, 255, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 20px rgba(255, 0, 255, 0.3)';
                }}
              >
                <i className="fas fa-paper-plane"></i> Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-secondary"
                style={{
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'transparent',
                  color: 'var(--light)',
                  border: '2px solid var(--light)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--light)';
                  e.target.style.color = 'var(--dark)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--light)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <i className="fas fa-code"></i> View Projects
              </button>
            </div>
          </div>
          <div className="hero-image" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/sara1.png" 
              alt="Lydia Alem" 
              className="floating"
              style={{
                width: '100%',
                maxWidth: '450px',
                height: '450px',
                objectFit: 'cover',
                borderRadius: '50%',
                boxShadow: '0 40px 40px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.5s ease',
                border: '5px solid rgba(255, 255, 255, 0.5)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;