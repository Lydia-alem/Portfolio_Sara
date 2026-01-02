import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  return (
    <section id="contact" className="contact" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <h2 className="section-title" style={{
          fontSize: '42px',
          marginBottom: '50px',
          textAlign: 'center',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          Get In Touch
        </h2>
        
        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        
        <div className="contact-container" style={{
          display: 'flex',
          gap: '50px'
        }}>
          <div className="contact-info" style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '28px',
              marginBottom: '20px',
              color: 'var(--secondary)'
            }}>
              Contact Information
            </h3>
            <div className="contact-details" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
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
                      gap: '15px',
                      textDecoration: 'none',
                      color: 'var(--light)',
                      transition: 'all 0.3s ease',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = 'var(--light)';
                    }}
                  >
                    <span className="material-icons" style={{
                      fontSize: '24px',
                      color: 'var(--primary)',
                      width: '30px'
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ fontSize: '16px' }}>{item.text}</span>
                  </a>
                ) : (
                  <div
                    key={item.id}
                    className="contact-item"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '12px 15px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span className="material-icons" style={{
                      fontSize: '24px',
                      color: 'var(--primary)',
                      width: '30px'
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ fontSize: '16px' }}>{item.text}</span>
                  </div>
                )
              ))}
            </div>
            <div className="social-links" style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '20px',
              marginTop: '30px'
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
                    fontSize: '24px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = 'var(--primary)';
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'var(--light)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <span className="material-icons">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form" style={{
            flex: 1,
            background: 'var(--glass)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(5px)'
          }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
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
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
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
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
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
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
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
                <label htmlFor="subject" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
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
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
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
                  marginBottom: '8px',
                  fontWeight: '500'
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
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    minHeight: '150px',
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
                  justifyContent: 'center',
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
                <span className="material-icons">send</span> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;