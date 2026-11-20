import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface CtaBannerProps {
  onRequestDemo: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onRequestDemo }) => {
  return (
    <section style={{ padding: '4.5rem 0' }}>
      <div className="container">
        <div
          className="image-slot-backdrop tech-grid-dark"
          style={{
            padding: 'clamp(2.75rem, 5vw, 4.5rem)',
            borderRadius: '1.5rem',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Orbes ambientales de luz */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              left: '10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(50, 160, 72, 0.32) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-80px',
              right: '10%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.28) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="glass-dark-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              marginBottom: '1.35rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Sparkles size={14} color="#48b85f" />
            <span>Demostración Personalizada · HelpCopies SRL</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.85rem, 4vw, 2.85rem)',
              fontWeight: 900,
              maxWidth: '820px',
              marginBottom: '1.1rem',
              lineHeight: 1.18,
              color: '#ffffff',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Solicitá una demostración con tus propios comprobantes y{' '}
            <span style={{ color: '#48b85f' }}>mirá cuánto tiempo ahorrás</span>
          </h2>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '1.0625rem',
              maxWidth: '680px',
              lineHeight: 1.65,
              marginBottom: '2.25rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Te mostramos en vivo cómo tus facturas, remitos y recibos que entran por correo, WhatsApp, Telegram o impresoras HP quedan validados, ordenados y listos para pasar a tu gestión, con el acompañamiento real de HelpCopies SRL.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <button
              onClick={onRequestDemo}
              className="btn-primary"
              style={{ fontSize: '1.02rem', padding: '0.95rem 2.1rem' }}
            >
              <span>Solicitar Demostración</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/5491100000000?text=Hola,%20quisiera%20solicitar%20una%20demostraci%C3%B3n%20de%20Help%20Scan%20de%20HelpCopies%20SRL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                fontSize: '1.02rem',
                padding: '0.95rem 1.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.96)',
              }}
            >
              <MessageCircle size={18} color="var(--color-primary)" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          <p
            style={{
              marginTop: '1.65rem',
              fontSize: '0.82rem',
              color: '#94a3b8',
              position: 'relative',
              zIndex: 2,
            }}
          >
            ✓ Demo guiada en vivo · No cambiás tu ERP · Puesta en marcha asistida por HelpCopies SRL
          </p>
        </div>
      </div>
    </section>
  );
};
