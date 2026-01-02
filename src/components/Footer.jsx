import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--dark)',
      padding: '50px 0 20px',
      textAlign: 'center'
    }}>
      <div className="container">
        <div className="social-links" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '30px'
        }}>
          {['github', 'linkedin-in', 'twitter', 'instagram'].map((platform) => (
            <a
              key={platform}
              href="#"
              style={{
                color: 'var(--light)',
                fontSize: '24px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.color = 'var(--primary)';
                e.target.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'var(--light)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className={`fab fa-${platform}`}></i>
            </a>
          ))}
        </div>
        <p className="copyright" style={{
          opacity: '0.7',
          fontSize: '14px'
        }}>
          &copy; 2025 Boulassel Sara Nesrine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;