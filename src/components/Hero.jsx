import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="section flex flex-col justify-center" 
      style={{ 
        minHeight: '100vh', 
        paddingTop: 'var(--spacing-xxl)',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'var(--color-bg)'
      }}
    >
      {/* Red Tint Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        mixBlendMode: 'color',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      {/* Marquee Background */}
      <div className="marquee-container" style={{ zIndex: 2 }}>
        <div className="marquee-content">
          KOMBO 360° CREATIVE HUB - KOMBO 360° CREATIVE HUB - KOMBO 360° CREATIVE HUB -
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h1 
          className="oversized-text" 
          style={{ 
            color: 'var(--color-accent-primary)'
          }}
        >
          CREATIVE<br/>HUB 360°
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          marginTop: 'var(--spacing-md)'
        }}>
          <div style={{ gridColumn: '1 / span 12', '@media (min-width: 768px)': { gridColumn: '6 / span 7' } }}>
            <p style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
              fontWeight: 500, 
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: 'var(--spacing-md)'
            }}>
              Transformamos talento emergente de Ibagué en productos artísticos competitivos a nivel global.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-sm)',
              alignItems: 'center'
            }}>
              <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--color-text)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem' }}>No es un piloto. Es una plataforma viva.</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
