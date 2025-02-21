import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import './App.css';

const projects = [
  { title: "store", description: "A fullstack project utilizing MongolDB , react ,expresjs and node js to make a store that adds products with their name price and a url picture .", link: "https://github.com/fervent-Coder/Store" },
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
