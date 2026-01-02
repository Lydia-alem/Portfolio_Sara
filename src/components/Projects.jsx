import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: ' Network Security Simulation Presentation',
      description: 'A presentation for simulating network security scenarios',
      technologies: ['Canva'],
      link: 'https://www.canva.com/design/DAGkU7TMD28/6yVXqNc_g_RJkd3JQsDHEw/edit?utm_content=DAGkU7TMD28&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      id: 2,
      title: 'Design and Development of a Multi-Platform Property Management System Tailored for the Algerian Hospitality Sector',
      description: 'A comprehensive property management system for hotels in Algeria',
      technologies: ['Canva'],
      link: ' https://www.canva.com/design/DAGny4S4GK0/e-4XyfnHQAEwaxl8HAX9BA/edit?utm_content=DAGny4S4GK0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' 
    },
    {
      id: 3,
      title: 'How Today’s Technologies Convince You That You Are Smart ',
      description: 'An article discussing the influence of modern technologies on our perception of intelligence',
      technologies: ['Canva'],
      link: 'https://www.canva.com/design/DAGjzyJpa_c/fRxX44_w6JKX69HNfle7Kg/edit?utm_content=DAGjzyJpa_c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' 
    },
    {
      id: 4,
      title: 'GESTPRO: PLatforme pour gerer les projets de master 2 ',
      description: 'A presentation of a platform to manage Master 2 projects effectively',
      technologies: ['Canva'],
      link: 'https://www.canva.com/design/DAGYsQHeMZs/uiIGNb_rg8CUx96kLFryCw/edit?utm_content=DAGYsQHeMZs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' 
    },
    {
      id: 5,
      title: 'Kanban Board ',
      description: 'A Kanban board for project management',
      technologies: ['React', 'Vite', 'CSS'],
      link: 'https://github.com/Lydia-alem/My_portfolio-React-version-.git' 
    },
    {
      id: 6,
      title: 'LAB5 ',
      description: 'React-Components-Practice-LAB5_caw-project',
      technologies: ['React', 'CSS'],
      link: 'https://github.com/Lydia-alem/React-Components-Practice-LAB5_caw-.git' 
    },
    {
      id: 7,
      title: 'LAB4 ',
      description: 'Unit Testing with JEST',
      technologies: ['React', 'JEST', 'CSS'],
      link: 'https://github.com/lydiaalm4/caw_lab4.git' 
    },
    {
      id: 8,
      title: 'LAB3 ',
      description: 'Node.js & NPM Practice',
      technologies: ['Node.js', 'CSS'],
      link: 'https://github.com/lydiaalm4/caw-lab3.git' 
    }



  ]);

  return (
    <section id="projects" style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
          My Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: 'var(--glass)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(5px)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{
                fontSize: '24px',
                marginBottom: '15px',
                color: 'var(--secondary)'
              }}>
                {project.title}
              </h3>
              <p style={{
                marginBottom: '20px',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '14px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#FF00FF',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;