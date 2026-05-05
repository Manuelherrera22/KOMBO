import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Traction() {
  const revealRef = useReveal();

  return (
    <section id="traccion" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container reveal" ref={revealRef}>
        
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            TRACCIÓN <span style={{ color: 'var(--color-text-muted)' }}>(ÚLTIMOS 6 MESES)</span>
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', color: 'var(--color-text-muted)' }}>
            El modelo está validado. Construimos carreras sostenibles y generamos valor a largo plazo a través de la propiedad intelectual.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(4rem, 8vw, 6rem)', 
              fontWeight: 800, 
              lineHeight: 1,
              color: 'var(--color-accent-primary)' 
            }}>10+</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginTop: 'var(--spacing-xs)' }}>Artistas Locales</span>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-xs)' }}>Operando como usuarios beta bajo el modelo integral 360.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(4rem, 8vw, 6rem)', 
              fontWeight: 800, 
              lineHeight: 1,
              color: 'var(--color-accent-secondary)' 
            }}>20+</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginTop: 'var(--spacing-xs)' }}>Proyectos Musicales</span>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-xs)' }}>Producidos y listos con altos estándares de la industria.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(4rem, 8vw, 6rem)', 
              fontWeight: 800, 
              lineHeight: 1,
              color: 'var(--color-accent-tertiary)' 
            }}>30+</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginTop: 'var(--spacing-xs)' }}>Lanzamientos Exitosos</span>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-xs)' }}>Iniciando nuestro catálogo propio distribuido globalmente.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
