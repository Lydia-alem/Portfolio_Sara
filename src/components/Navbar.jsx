import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      padding: '20px 0',
      zIndex: 100,
      boxShadow: scrolled ? '0 5px 30px rgba(0, 0, 0, 0.2)' : '0 5px 30px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a 
          href="#" 
          className="logo" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'var(--light)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          Sara Nesrine<span style={{ color: 'var(--primary)' }}>Boulassel</span>
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
              style={{
                color: 'var(--secondary)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--primary)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'var(--secondary)';
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span style={{
                content: '',
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: 0,
                height: '2px',
                background: 'var(--primary)',
                transition: 'width 0.3s ease'
              }} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;