import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Lock } from 'lucide-react';
import './App.css';

const projects = [
  {
    id: 'docchat',
    title: 'DocChat',
    subtitle: 'RAG document Q&A',
    description:
      'Ask questions about uploaded PDFs and get answers that cite the exact file and page. Hybrid retrieval (local embeddings + BM25) raised hit-rate@3 from 91% to 100% over vector-only search on a 54-question eval. Works with any OpenAI-compatible LLM; 59 offline tests run in GitHub Actions CI.',
    tags: ['Python', 'RAG', 'NumPy', 'BM25', 'Streamlit', 'GitHub Actions'],
    link: null,
    note: 'Source available on request',
  },
  {
    id: 'skin-lesion',
    title: 'Skin Lesion Classification',
    subtitle: 'Multimodal Deep Learning',
    description:
      'A PyTorch CNN that classifies skin lesions from dermoscopic images combined with patient data (age, sex, lesion location). It uses depthwise separable convolutions and squeeze-and-excitation blocks, and is pretrained on MILK10k, then fine-tuned on ISIC 2019 (8 classes).',
    tags: ['Python', 'PyTorch', 'CNNs', 'Transfer Learning'],
    link: 'https://github.com/fervent-Coder/Skin-Lesion-Classification-with-Multimodal-Deep-Learning',
  },
  {
    id: 'insulin-pump',
    title: 'Insulin Pump Simulator',
    subtitle: 'University group project',
    description:
      'An interactive Qt/C++ simulator of the Tandem t:slim X2 insulin pump with Control-IQ technology: basal and bolus delivery, CGM-driven insulin adjustments, personal insulin profiles, and alerts for low battery, low insulin, and sensor errors.',
    tags: ['C++', 'Qt', 'Agile / Scrum'],
    link: null,
    note: 'Private team repository',
  },
  {
    id: 'mern-store',
    title: 'MERN Product Store',
    subtitle: 'Full-stack web app',
    description:
      'A store app where users can add, edit, and delete products with a name, price, and image. React and Chakra UI on the front end, with an Express/Node.js REST API backed by MongoDB.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/fervent-Coder/Store',
  },
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Mohamed Fouda</h1>
        <p>Computer Science student at Carleton University, focused on AI and machine learning</p>
      </header>

      <motion.section
        className="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project) => (
          <article key={project.id} id={project.id} className="card">
            <h2>{project.title}</h2>
            <p className="subtitle">{project.subtitle}</p>
            <p>{project.description}</p>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            {project.link ? (
              <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            ) : (
              <span className="private-note">
                <Lock size={16} aria-hidden="true" /> {project.note}
              </span>
            )}
          </article>
        ))}
      </motion.section>

      <footer className="footer">
        <p>Connect with me</p>
        <div className="social-links">
          <a href="https://github.com/fervent-Coder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-fouda-957054275"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:Mohamed.Ashraf.Fouda@outlook.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
