import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactDetails = [
    {
      id: 1,
      type: 'email',
      icon: 'email', 
      text: 'sara.boulassel@univ-constantine2.dz',
      link: 'mailto:sara.boulassel@univ-constantine2.dz'
    },
    {
      id: 2,
      type: 'phone',
      icon: 'phone',
      text: '0696547733',
      link: 'tel:+213696547733'
    },
    {
      id: 3,
      type: 'location',
      icon: 'location_on',
      text: 'Constantine, Algeria'
    },
    {
      id: 4,
      type: 'linkedin',
      icon: 'people',
      text: 'Sara Nesrine Boulassel',
      link: 'https://www.linkedin.com/in/sara-nesrine-boulassel-b0987836b/'
    },
    {
      id: 5,
      type: 'github',
      icon: 'code',
      text: 'Sanabelle',
      link: 'https://github.com/Sanabelle'
    }
  ];

  // Add Material Icons dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="contact" className="contact" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '60px 0' : isTablet ? '70px 0' : '80px 0'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : isTablet ? '0 30px' : '0 40px'
      }}>
        <h2 className="section-title" style={{
          fontSize: isMobile ? '32px' : isTablet ? '36px' : '42px',
          marginBottom: isMobile ? '30px' : isTablet ? '40px' : '50px',
          textAlign: 'center',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: '700'
        }}>
          Get In Touch
        </h2>
        
        <div className="contact-container" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : isTablet ? '40px' : '50px',
          alignItems: isMobile ? 'center' : 'flex-start'
        }}>
          <div className="contact-info" style={{ 
            flex: 1,
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '500px' : 'none'
          }}>
            <h3 style={{
              fontSize: isMobile ? '24px' : isTablet ? '26px' : '28px',
              marginBottom: isMobile ? '15px' : isTablet ? '18px' : '20px',
              color: 'var(--secondary)',
              fontWeight: '600',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Contact Information
            </h3>
            <div className="contact-details" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '15px' : isTablet ? '18px' : '20px'
            }}>
              {contactDetails.map((item) => (
                item.link ? (
                  <a
                    key={item.id}
                    href={item.link}
                    target={item.type === 'email' || item.type === 'phone' ? '_self' : '_blank'}
                    rel={item.type === 'linkedin' || item.type === 'github' ? 'noopener noreferrer' : ''}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '12px' : isTablet ? '14px' : '15px',
                      textDecoration: 'none',
                      color: 'var(--light)',
                      transition: 'all 0.3s ease',
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px'
                    }}
                    onMouseOver={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.color = 'var(--primary)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = 'var(--light)';
                      }
                    }}
                    onTouchStart={(e) => {
                      if (isMobile) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.color = 'var(--primary)';
                        e.currentTarget.style.transform = 'scale(0.98)';
                      }
                    }}
                    onTouchEnd={(e) => {
                      if (isMobile) {
                        setTimeout(() => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.color = 'var(--light)';
                          e.currentTarget.style.transform = 'scale(1)';
                        }, 150);
                      }
                    }}
                  >
                    <span className="material-icons" style={{
                      fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px',
                      color: 'var(--primary)',
                      width: isMobile ? '24px' : isTablet ? '26px' : '30px'
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ 
                      fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.text}
                    </span>
                  </a>
                ) : (
                  <div
                    key={item.id}
                    className="contact-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '12px' : isTablet ? '14px' : '15px',
                      padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px'
                    }}
                  >
                    <span className="material-icons" style={{
                      fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px',
                      color: 'var(--primary)',
                      width: isMobile ? '24px' : isTablet ? '26px' : '30px'
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ 
                      fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.text}
                    </span>
                  </div>
                )
              ))}
            </div>
            
            <h3 style={{
              fontSize: isMobile ? '24px' : isTablet ? '26px' : '28px',
              marginTop: isMobile ? '30px' : isTablet ? '35px' : '40px',
              marginBottom: isMobile ? '15px' : isTablet ? '18px' : '20px',
              color: 'var(--secondary)',
              fontWeight: '600',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Social Links
            </h3>
            
            <div className="social-links" style={{
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'flex-start',
              gap: isMobile ? '15px' : isTablet ? '18px' : '20px',
              marginTop: isMobile ? '20px' : isTablet ? '25px' : '30px',
              flexWrap: 'wrap'
            }}>
              {[
                { platform: 'github', link: 'https://github.com/Sanabelle', icon: 'code' },
                { platform: 'linkedin', link: 'https://www.linkedin.com/in/sara-nesrine-boulassel-702540281/', icon: 'people' },
                { platform: 'email', link: 'mailto:sara.boulassel@univ-constantine2.dz', icon: 'email' },
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--light)',
                    fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    padding: isMobile ? '8px' : isTablet ? '9px' : '10px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    width: isMobile ? '45px' : isTablet ? '48px' : '50px',
                    height: isMobile ? '45px' : isTablet ? '48px' : '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => {
                    if (!isMobile) {
                      e.target.style.color = 'var(--primary)';
                      e.target.style.transform = 'translateY(-5px)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isMobile) {
                      e.target.style.color = 'var(--light)';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onTouchStart={(e) => {
                    if (isMobile) {
                      e.target.style.color = 'var(--primary)';
                      e.target.style.transform = 'scale(0.95)';
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onTouchEnd={(e) => {
                    if (isMobile) {
                      setTimeout(() => {
                        e.target.style.color = 'var(--light)';
                        e.target.style.transform = 'scale(1)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      }, 150);
                    }
                  }}
                >
                  <span className="material-icons" style={{
                    fontSize: isMobile ? '20px' : isTablet ? '22px' : '24px'
                  }}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-form" style={{
            flex: 1,
            background: 'var(--glass)',
            padding: isMobile ? '20px' : isTablet ? '25px' : '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(5px)',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '500px' : 'none'
          }}>
            <h3 style={{
              fontSize: isMobile ? '24px' : isTablet ? '26px' : '28px',
              marginBottom: isMobile ? '15px' : isTablet ? '18px' : '20px',
              color: 'var(--secondary)',
              fontWeight: '600',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontWeight: '500',
                  fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontWeight: '500',
                  fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="subject" style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontWeight: '500',
                  fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontWeight: '500',
                  fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px'
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: isMobile ? '10px 12px' : isTablet ? '11px 14px' : '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                    transition: 'all 0.3s ease',
                    minHeight: isMobile ? '120px' : isTablet ? '140px' : '150px',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: isMobile ? '12px 24px' : isTablet ? '13px 26px' : '15px 30px',
                  borderRadius: '50px',
                  fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
                  fontWeight: '600',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(255, 0, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
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
                    e.target.style.transform = 'scale(0.98)';
                    e.target.style.opacity = '0.9';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    setTimeout(() => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.opacity = '1';
                    }, 150);
                  }
                }}
              >
                <span className="material-icons" style={{
                  fontSize: isMobile ? '18px' : isTablet ? '20px' : '20px'
                }}>
                  send
                </span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .contact-info, .contact-form {
            max-width: 100% !important;
          }
          
          .contact-details a,
          .contact-details .contact-item {
            font-size: 13px !important;
            padding: 8px 10px !important;
          }
          
          .social-links a {
            width: 40px !important;
            height: 40px !important;
            padding: 6px !important;
          }
          
          .section-title {
            font-size: 28px !important;
          }
        }
        
        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .contact-info, .contact-form {
            width: 100% !important;
            max-width: 500px !important;
          }
          
          .contact-info h3,
          .contact-form h3 {
            text-align: center !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-container {
            gap: 40px !important;
          }
        }
        
        @media (min-width: 1025px) {
          .contact-container {
            gap: 50px !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;