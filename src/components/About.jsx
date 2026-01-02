import React from 'react';

const About = () => {
  const skills = [
    'HTML5 & CSS3', 'JavaScript', 'Java', 'Java Swing', 'JavaFX', 'C++'
  ];

  const tools = [
    'React', 'Vite', 'MySQL', 'Git', 'GitHub','Latex'
  ];

  return (
    <section id="about" className="about" style={{
      backgroundColor: 'rgba(15, 15, 26, 0.7)',
      backdropFilter: 'blur(10px)',
      padding: '80px 0'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 className="section-title" style={{
          fontSize: '42px',
          marginBottom: '50px',
          textAlign: 'center',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          fontWeight: '700'
        }}>
          About Me
        </h2>
        <div className="about-content" style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '50px',
          flexWrap: 'wrap'
        }}>
          <div className="about-text" style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{
              fontSize: '28px',
              marginBottom: '20px',
              color: 'var(--secondary)',
              fontWeight: '600'
            }}>
              Who I Am
            </h3>
            <p style={{ 
              marginBottom: '15px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px'
            }}>
              I'm Boulassel Sara Nesrine, a Systems of Information Technology and 
              communication master student with a strong interest in web development and system design. 
              I enjoy building practical, user centered digital solutions, especially web
              applications that balance functionality, performance, and clean design.
            </p>
            <p style={{ 
              marginBottom: '15px', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '16px'
            }}>
              My passion for technology grew from curiosity and problem solving, which naturally led me toward programming and development. 
              Over time, I've worked on projects that combine technical skills with real world needs; such as hotel
              management systems, interactive applications, and creative tech driven ideas. 
              I'm constantly learning, refining my skills, and exploring new technologies to grow as a developer and turn ideas into impactful solutions.
            </p>
            
            {/* Skills Section */}
            <div className="skills" style={{ marginTop: '40px' }}>
              <h4 style={{
                fontSize: '22px',
                marginBottom: '20px',
                color: 'var(--secondary)',
                fontWeight: '600'
              }}>
                Technical Skills
              </h4>
              <div className="skills-list" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item"
                    style={{
                      background: 'rgba(41, 98, 255, 0.1)',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(41, 98, 255, 0.3)',
                      color: '#e0e0ff',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(41, 98, 255, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(41, 98, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div className="tools" style={{ marginTop: '40px' }}>
              <h4 style={{
                fontSize: '22px',
                marginBottom: '20px',
                color: 'var(--secondary)',
                fontWeight: '600'
              }}>
                Tools & Technologies
              </h4>
              <div className="tools-list" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="tool-item"
                    style={{
                      background: 'rgba(147, 51, 234, 0.1)',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(147, 51, 234, 0.3)',
                      color: '#f0e6ff',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(147, 51, 234, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(147, 51, 234, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;