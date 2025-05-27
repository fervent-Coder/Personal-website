import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import './App.css';

const projects = [
  { title: "Insulin Machine Simulation", description: "A full-stack University group project that simulated Tandem t:slim X2 Insulin Pump is a system designed to deliver precise insulin dosages for effective diabetes management. The goal of this project is to develop an interactive software simulation of the t:slim X2 pump in Qt/C++.", link: "https://github.com/team-62-hq/Insulin-Pump-Simulation" },
  { title: "store", description: "A full-stack project utilizing MongolDB, react ,expresjs and node js to make a store that adds products with their name price and a url picture .", link: "https://github.com/fervent-Coder/Store" },
  { title: "portofolio", description: "Website i made to showcase my projects using react , html and css.", link: "https://github.com/fervent-Coder/Personal-website" },
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
