import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Team() {
  const revealRef = useReveal();

  return (
    <section id="equipo" className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container reveal" ref={revealRef}>
        
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'var(--color-text-muted)' }}>
            EL MÚSCULO<br/>
            <span style={{ color: 'var(--color-text)' }}>OPERATIVO</span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 'var(--spacing-md)',
          alignItems: 'start'
        }}>
          
          {/* Ozpe */}
          <div className="magnetic-card team-stagger-1" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
              height: '500px', 
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent), url(/ozpe_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 'var(--spacing-md)',
              border: '1px solid rgba(255,0,0,0.2)'
            }}>
              <div style={{ zIndex: 10 }}>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>OZPE</h3>
                <p style={{ color: 'var(--color-accent-primary)', fontWeight: 700, margin: 'var(--spacing-xs) 0' }}>Producción Musical & Representación Legal</p>
                <p style={{ color: '#ccc', fontSize: '0.875rem' }}>Asegurando la calidad sonora y protegiendo el catálogo.</p>
              </div>
            </div>
          </div>

          {/* Wil */}
          <div className="magnetic-card team-stagger-2" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
              height: '500px', 
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent), url(/wil_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 'var(--spacing-md)',
              border: '1px solid rgba(255,0,0,0.2)'
            }}>
              <div style={{ zIndex: 10 }}>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>N35</h3>
                <p style={{ color: 'var(--color-accent-secondary)', fontWeight: 700, margin: 'var(--spacing-xs) 0' }}>Dirección Audiovisual</p>
                <p style={{ color: '#ccc', fontSize: '0.875rem' }}>Aportando el peso narrativo visual del proyecto.</p>
              </div>
            </div>
          </div>

          {/* Ops */}
          <div className="magnetic-card team-stagger-3" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
              height: '500px', 
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent), url(/ops_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 'var(--spacing-md)',
              border: '1px solid rgba(255,0,0,0.2)'
            }}>
              <div style={{ zIndex: 10 }}>
                <h3 style={{ fontSize: '2rem', margin: 0 }}>DIRECCIÓN OPERATIVA</h3>
                <p style={{ color: 'var(--color-accent-tertiary)', fontWeight: 700, margin: 'var(--spacing-xs) 0' }}>Desarrollo Tecnológico</p>
                <p style={{ color: '#ccc', fontSize: '0.875rem' }}>Integración de herramientas y ecosistema digital a largo plazo.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
