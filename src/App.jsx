import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import './App.css';

const projects = [
  { title: "Project One", description: "A cool project I made.", link: "#" },
  { title: "Project Two", description: "Another awesome project.", link: "#" },
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Portfolio</h1>
        <p>Showcasing my best coding projects</p>
      </header>

      <motion.section
        className="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </button>
          </div>
        ))}
      </motion.section>

      <footer className="footer">
        <p>Connect with me:</p>
        <div className="social-links">
          <a href="https://github.com/fervent-Coder" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="mailto:Mohamed.Ashraf.Fouda@outlook.com">
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
