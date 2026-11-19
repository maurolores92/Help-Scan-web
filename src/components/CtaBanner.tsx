import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

interface CtaBannerProps {
  onOpenTrial: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenTrial }) => {
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
            <span>Prueba de 6 Días sin Compromiso · HelpCopies SRL</span>
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
            Crea tu cuenta y prueba nuestro sistema{' '}
            <span style={{ color: '#48b85f' }}>Help Scan por 6 días</span>
          </h2>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '1.0625rem',
              maxWidth: '660px',
              lineHeight: 1.65,
              marginBottom: '2.25rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Digitaliza facturas, remitos, órdenes de compra y correos en segundos. Te instalamos el escáner HP o sube tus archivos por SFTP, Email, WhatsApp, Telegram o API ERP para experimentar la extracción OCR + IA.
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
              onClick={onOpenTrial}
              className="btn-primary"
              style={{ fontSize: '1.02rem', padding: '0.95rem 2.1rem' }}
            >
              <span>Comenzar Prueba Gratuita</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/5491100000000?text=Hola,%20quisiera%20asesoramiento%20sobre%20el%20sistema%20Help%20Scan%20de%20HelpCopies%20SRL"
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
            ✓ Activación inmediata · Cifrado AES-256 · Cancelación automática sin penalizaciones
          </p>
        </div>
      </div>
    </section>
  );
};
