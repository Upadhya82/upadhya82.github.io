import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DesignPortfolio from './components/DesignPortfolio';
import Education from './components/Education';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import styles from './App.module.css';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className={styles.appContainer}>
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className={styles.main}>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Roadmap />
        <Skills />
        <Projects />
        <DesignPortfolio />
        <Education />
        <GithubActivity />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
