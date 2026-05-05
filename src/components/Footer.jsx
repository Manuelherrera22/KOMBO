import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'var(--color-accent-primary)', 
      color: '#000',
      padding: 'var(--spacing-xl) 0 var(--spacing-md) 0'
    }}>
      <div className="container">
        
        <div className="grid-chaos" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ gridColumn: '1 / span 12', '@media (min-width: 768px)': { gridColumn: '1 / span 8' } }}>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9 }}>
              BIME &<br/>BEYOND.
            </h2>
          </div>
          
          <div style={{ gridColumn: '1 / span 12', '@media (min-width: 768px)': { gridColumn: '9 / span 4' }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>CONTACTO PARA INVERSORES</p>
            <a href="mailto:komborecordscol@gmail.com" style={{ 
              display: 'inline-block',
              borderBottom: '2px solid #000',
              paddingBottom: '4px',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: 800,
              width: 'fit-content'
            }}>komborecordscol@gmail.com</a>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderTop: '1px solid rgba(0,0,0,0.2)',
          paddingTop: 'var(--spacing-md)',
          marginTop: 'var(--spacing-xl)'
        }}>
          <img src="/KOMBO.png" alt="KOMBO Logo" style={{ height: '80px', objectFit: 'contain' }} />
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>© {new Date().getFullYear()} Ibagué, Colombia.</span>
        </div>

      </div>
    </footer>
  );
}
