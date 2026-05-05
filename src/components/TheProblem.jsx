import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Settings, Video, Music } from 'lucide-react';

export default function TheProblem() {
  const revealRef = useReveal();
  
  return (
    <section id="modelo" className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      <div className="container reveal" ref={revealRef}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
          
          {/* Problem Statement */}
          <div className="grid-chaos" style={{ position: 'relative' }}>
            <div style={{ gridColumn: '1 / span 12', '@media (min-width: 768px)': { gridColumn: '1 / span 7' }, zIndex: 2 }}>
              <h2 style={{ fontSize: 'clamp(2.2rem, 8vw, 6rem)', color: 'var(--color-text)', lineHeight: 0.9 }}>
                EL CAOS DE LA<br/>
                <span style={{ color: 'var(--color-accent-primary)' }}>FRAGMENTACIÓN</span>
              </h2>
            </div>
            <div style={{ gridColumn: '1 / span 12', '@media (min-width: 768px)': { gridColumn: '6 / span 7' }, display: 'flex', alignItems: 'flex-end', zIndex: 1, marginTop: '-2rem' }}>
              <p style={{ 
                fontSize: '1.25rem', 
                color: 'var(--color-text-muted)', 
                backgroundColor: 'var(--color-bg)', 
                padding: 'var(--spacing-sm)',
                borderLeft: '2px solid var(--color-accent-secondary)'
              }}>
                Estudios de grabación por un lado. Productoras de videoclips por otro. Agregadoras externas. 
                El resultado: Proyectos sin coherencia visual ni sonora y nula constancia de contenido.
              </p>
            </div>
          </div>

          {/* Solution - The 360 Model */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-accent-tertiary)' }}>LA SOLUCIÓN KOMBO</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: 'var(--spacing-md)' 
            }}>
              
              {/* Card 1 */}
              <div className="magnetic-card problem-stagger-1" style={{ 
                border: '1px solid #333', 
                padding: 'var(--spacing-md)',
                backgroundColor: 'rgba(0,0,0,0.8)'
              }}>
                <Music size={48} color="var(--color-accent-primary)" style={{ marginBottom: 'var(--spacing-sm)' }} />
                <h4 style={{ fontSize: '1.5rem' }}>Producción Musical</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>Calidad impecable, sonido competitivo a nivel global desde el primer acorde. Liderado por Ozpe.</p>
              </div>

              {/* Card 2 - Asymmetrical */}
              <div className="magnetic-card problem-stagger-2" style={{ 
                border: '1px solid #333', 
                padding: 'var(--spacing-md)',
                backgroundColor: 'rgba(0,0,0,0.8)'
              }}>
                <Video size={48} color="var(--color-accent-secondary)" style={{ marginBottom: 'var(--spacing-sm)' }} />
                <h4 style={{ fontSize: '1.5rem' }}>Dirección Audiovisual</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>Articulación profunda con N35. Videoclips y contenido para RRSS con peso narrativo.</p>
              </div>

              {/* Card 3 */}
              <div className="magnetic-card problem-stagger-3" style={{ 
                border: '1px solid #333', 
                padding: 'var(--spacing-md)',
                backgroundColor: 'rgba(0,0,0,0.8)'
              }}>
                <Settings size={48} color="var(--color-accent-tertiary)" style={{ marginBottom: 'var(--spacing-sm)' }} />
                <h4 style={{ fontSize: '1.5rem' }}>Distribución Digital</h4>
                <p style={{ color: 'var(--color-text-muted)' }}>Alcance global asegurado mediante nuestra alianza estratégica con Symphonic Distribution.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
