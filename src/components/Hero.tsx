import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Printer,
  Cpu,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Search,
  Filter,
  MessageCircle,
  Send,
  Webhook,
} from 'lucide-react';
import { ImageSlot } from './ImageSlot';

interface HeroProps {
  onRequestDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo }) => {
  const [activeTab, setActiveTab] = useState<'channels' | 'extract' | 'filters'>('channels');

  return (
    <section
      id="inicio"
      style={{
        paddingTop: '7.75rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Halos ambientales de luz en los colores corporativos */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-120px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(50, 160, 72, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '80px',
          right: '-140px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Split Layout: Contenido a la izquierda + Banner Visual a la derecha */}
        <div className="hero-split-grid animate-fade-up" >
          {/* Columna Izquierda */}
          <div>
            <div style={{ marginBottom: '1.35rem' }}>
              <div className="badge-pill">
                <Sparkles size={14} />
                <span>HelpCopies SRL · Control y Orden sin Carga Manual</span>
              </div>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.4vw, 3.35rem)',
                fontWeight: 900,
                lineHeight: 1.14,
                letterSpacing: '-0.03em',
                marginBottom: '1.35rem',
                color: 'var(--text-main)',
              }}
            >
              Tu administración al día sin{' '}
              <span className="gradient-text-tech">cargar comprobantes a mano</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              Recibí facturas, remitos y recibos por <strong>correo</strong>, <strong>WhatsApp</strong>,{' '}
              <strong>Telegram</strong>, <strong>ScanJet de HP</strong> o <strong>API</strong>.{' '}
              <strong>HelpScan</strong> ordena, valida y deja cada dato listo para buscar o pasar a tu sistema sin perder tiempo descargando ni tipeando.
            </p>

            {/* Botones de Acción */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.9rem',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              <button
                onClick={onRequestDemo}
                className="btn-primary"
                style={{ fontSize: '1.02rem', padding: '0.95rem 2rem' }}
              >
                <span>Solicitar Demostración</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="#demos"
                className="btn-secondary"
                style={{ fontSize: '1.02rem', padding: '0.95rem 1.7rem' }}
              >
                Ver Demos
              </a>
            </div>

            {/* Garantías de confianza */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                fontSize: '0.84rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" /> Sin cambiar tu sistema actual
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" /> Equipos HP + respaldo HelpCopies SRL
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-secondary)" /> Demo en vivo con tus comprobantes
              </span>
            </div>
          </div>

          {/* Columna Derecha: Banner Principal ligeramente rectangular dentro del marco con efecto scanner */}
          <div>
            <ImageSlot
              slotLabel="HelpScan — Recepción automática omnicanal desde Impresora HP, WhatsApp, Correo Electrónico, Telegram y API/ERP"
              recommendedSize="1024 × 819 px"
              suggestionText=""
              imageSrc="/images/BannerPrincipal-square.jpg"
              minHeight="auto"
              aspectRatio="5 / 4"
              imageFit="cover"
              showLaserBeam
            />
          </div>
        </div>
      </div>
    </section>
  );
};
