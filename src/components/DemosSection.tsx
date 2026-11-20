import React from 'react';
import { Video, ArrowRight, PlayCircle } from 'lucide-react';
import { ImageSlot } from './ImageSlot';

interface DemosSectionProps {
  onRequestDemo: (selectedDemo?: string) => void;
}

export const DemosSection: React.FC<DemosSectionProps> = ({ onRequestDemo }) => {
  const demos = [
    {
      badge: 'Video Demo 01 · Próximamente',
      title: 'Ingreso por Mail, WhatsApp, Telegram y HP',
      desc: 'Mirá cómo entran facturas, remitos y transferencias sin descargar archivos ni copiar nada a mano.',
      slotLabel: 'Demo 01 · Recepción Automática Multicanal',
      recommendedSize: 'Video o Captura 1280 × 720 px',
      suggestionText: 'Espacio reservado para el video mostrando la entrada automática desde correo, WhatsApp, Telegram e impresoras HP.',
    },
    {
      badge: 'Video Demo 02 · Próximamente',
      title: 'Validación de datos y control sin errores',
      desc: 'Observá cómo se detectan proveedor, CUIT, fechas, orden de compra e importes para revisar en segundos.',
      slotLabel: 'Demo 02 · Lectura y Validación de Comprobantes',
      recommendedSize: 'Video o Captura 1280 × 720 px',
      suggestionText: 'Espacio reservado para el video mostrando la revisión rápida y la prevención de errores o duplicados.',
    },
    {
      badge: 'Video Demo 03 · Próximamente',
      title: 'Búsqueda instantánea y pase a tu sistema',
      desc: 'Ubicá cualquier comprobante al instante por filtro y llevá los datos ordenados directo a tu ERP actual.',
      slotLabel: 'Demo 03 · Filtros y Conexión con tu ERP',
      recommendedSize: 'Video o Captura 1280 × 720 px',
      suggestionText: 'Espacio reservado para el video mostrando la búsqueda por proveedor/OC y la exportación a tu sistema contable.',
    },
  ];

  return (
    <section
      id="demos"
      style={{ padding: '6rem 0', position: 'relative' }}
    >
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Video size={14} color="var(--color-primary)" />
            <span>Demos del Circuito Operativo</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 900,
              marginBottom: '1.15rem',
              color: 'var(--text-main)',
            }}
          >
            Mirá cómo funciona{' '}
            <span className="gradient-text-tech">en el día a día</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
            Acá vamos a sumar recorridos breves en video mostrando cada etapa del proceso.
            Si querés verlo funcionando hoy mismo con comprobantes reales de tu empresa, coordiná una demostración en vivo.
          </p>
        </div>

        {/* Grid de 3 Demos usando ImageSlot */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {demos.map((demo, idx) => (
            <div
              key={idx}
              className="tech-card"
              onClick={() => onRequestDemo(demo.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onRequestDemo(demo.title);
                }
              }}
              style={{
                padding: '1.25rem',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.1rem',
                cursor: 'pointer',
              }}
            >
              <ImageSlot
                slotLabel={demo.slotLabel}
                recommendedSize={demo.recommendedSize}
                suggestionText={demo.suggestionText}
                minHeight="auto"
                aspectRatio="16 / 9"
                showLaserBeam
                topLeftBadge={
                  <>
                    <PlayCircle size={14} color="#48b85f" />
                    <span>{demo.badge}</span>
                  </>
                }
              />

              <div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '0.4rem',
                  }}
                >
                  {demo.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.9rem' }}>
                  {demo.desc}
                </p>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                  }}
                >
                  <span>Solicitar ver esta demo en vivo</span>
                  <ArrowRight size={15} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA al pie de Demos */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => onRequestDemo()}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
          >
            <span>Solicitar Demostración en Vivo</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
