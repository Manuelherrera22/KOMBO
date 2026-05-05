import React from 'react';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import Traction from './components/Traction';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      
      {/* Navigation - Minimalist floating */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: 'var(--spacing-sm) var(--spacing-md)',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 100,
        mixBlendMode: 'difference'
      }}>
        <div>
          <img src="/KOMBO.png" alt="KOMBO Logo" style={{ height: '64px', objectFit: 'contain' }} />
        </div>
        <div className="nav-links">
          <a href="#modelo" style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Modelo</a>
          <a href="#traccion" style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tracción</a>
          <a href="#equipo" style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Equipo</a>
        </div>
      </nav>

      <main>
        <Hero />
        <TheProblem />
        <Traction />
        <Team />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
