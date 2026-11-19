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
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState<'channels' | 'ocr' | 'filters'>('channels');

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
        <div className="hero-split-grid animate-fade-up" style={{ marginBottom: '4rem' }}>
          {/* Columna Izquierda */}
          <div>
            <div style={{ marginBottom: '1.35rem' }}>
              <div className="badge-pill">
                <Sparkles size={14} />
                <span>Desarrollado por HelpCopies SRL · SFTP, Email, WhatsApp, Telegram & API ERP</span>
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
              Digitalización Inteligente con{' '}
              <span className="gradient-text-tech">OCR e IA en Base de Datos</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              Con <strong>Help Scan</strong> centraliza todos los comprobantes de tu empresa ingresados desde{' '}
              <strong>impresoras HP por SFTP</strong>, <strong>Correo Electrónico</strong>,{' '}
              <strong>WhatsApp</strong>, <strong>Telegram</strong> o tu <strong>ERP mediante API</strong>.
              Nuestro motor OCR + IA extrae y guarda cada dato en base de datos para consultarlos al instante mediante filtros avanzados.
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
                onClick={onOpenTrial}
                className="btn-primary"
                style={{ fontSize: '1.02rem', padding: '0.95rem 2rem' }}
              >
                <span>Prueba Help Scan por 6 días</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="#planes"
                className="btn-secondary"
                style={{ fontSize: '1.02rem', padding: '0.95rem 1.7rem' }}
              >
                Ver Planes y Equipos
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
                <CheckCircle2 size={16} color="var(--color-primary)" /> Sin tarjeta de crédito
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" /> Hardware HP + Soporte HelpCopies SRL
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-secondary)" /> Cifrado AES-256-GCM
              </span>
            </div>
          </div>

          {/* Columna Derecha: Banner Principal preparado para Imagen */}
          <div>
            <ImageSlot
              slotLabel="Banner Principal · Espacio para Imagen"
              recommendedSize="1200 × 900 px"
              suggestionText="Aquí podrás colocar una foto de tus equipos HP LaserJet Enterprise, oficina digitalizada o captura del sistema Help Scan."
              minHeight="440px"
              showLaserBeam
              topLeftBadge={
                <>
                  <span className="live-dot" />
                  <span>SFTP · Email · WhatsApp · Telegram · API ERP</span>
                </>
              }
              bottomRightCard={
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'var(--color-primary)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      ✔ Indexado en PostgreSQL
                    </span>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        padding: '0.1rem 0.45rem',
                        borderRadius: '9999px',
                        backgroundColor: 'var(--color-secondary-soft)',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      99.8% IA
                    </span>
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Factura A · 0001-00048291
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    CUIT: 30-71458921-9 · <strong style={{ color: 'var(--color-primary)' }}>$ 145.200,00</strong>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* Simulador Interactivo del Flujo en Tiempo Real */}
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div
            className="light-card"
            style={{
              padding: '1.75rem',
              boxShadow: 'var(--shadow-xl)',
              backgroundColor: '#ffffff',
              borderTop: '3px solid var(--color-primary)',
            }}
          >
            {/* Cabecera del Simulador */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '1rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginLeft: '0.5rem', fontWeight: 600 }}>
                  Flujo Inteligente Help Scan · HelpCopies SRL
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '0.3rem',
                  borderRadius: '0.65rem',
                }}
              >
                {[
                  { id: 'channels', label: '1. Canales de Ingreso' },
                  { id: 'ocr', label: '2. OCR + IA a Base de Datos' },
                  { id: 'filters', label: '3. Filtros y Consulta ERP' },
                ].map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'channels' | 'ocr' | 'filters')}
                      style={{
                        fontSize: '0.8125rem',
                        padding: '0.45rem 0.9rem',
                        borderRadius: '0.45rem',
                        backgroundColor: active ? '#ffffff' : 'transparent',
                        color: active ? 'var(--color-primary)' : 'var(--text-muted)',
                        fontWeight: active ? 700 : 500,
                        boxShadow: active ? 'var(--shadow-sm)' : 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Panel 1: Multi-Canal (SFTP, Email, WhatsApp, Telegram, ERP API) */}
            {activeTab === 'channels' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '1.5rem',
                    borderRadius: '0.9rem',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '0.65rem', backgroundColor: 'var(--color-primary-soft)' }}>
                      <Printer size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        Recepción Omnicanal Automática
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700 }}>
                        ● Impresoras HP SFTP · Email · WhatsApp · Telegram · API
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Escanea desde equipos HP, recibe facturas por correo IMAP, captura remitos desde WhatsApp / Telegram o envía comprobantes desde sistemas ERP por API.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {[
                      { icon: <Printer size={13} />, label: 'SFTP HP' },
                      { icon: <Mail size={13} />, label: 'Email IMAP' },
                      { icon: <MessageCircle size={13} />, label: 'WhatsApp' },
                      { icon: <Send size={13} />, label: 'Telegram' },
                      { icon: <Webhook size={13} />, label: 'ERP API' },
                    ].map((ch, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.28rem 0.6rem',
                          borderRadius: '0.4rem',
                          backgroundColor: '#ffffff',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-main)',
                        }}
                      >
                        {ch.icon} {ch.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '1.5rem',
                    borderRadius: '0.9rem',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.6rem', borderRadius: '0.65rem', backgroundColor: 'var(--color-secondary-soft)' }}>
                      <ShieldCheck size={24} color="var(--color-secondary)" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        Bóveda Cifrada AES-256-GCM
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Aislamiento Multi-Tenant por Compañía
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Cada comprobante ingresado pasa verificación binaria y hash SHA-256 anti-duplicados, quedando resguardado con clave exclusiva por empresa en el servidor.
                  </p>
                  <div
                    style={{
                      padding: '0.75rem',
                      backgroundColor: '#0f172a',
                      borderRadius: '0.55rem',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#48b85f',
                    }}
                  >
                    [HELP-SCAN] ✔ PDF cifrado en /vault/2026/11/ (AES-256-GCM)
                  </div>
                </div>
              </div>
            )}

            {/* Panel 2: OCR + IA estructurando en Base de Datos */}
            {activeTab === 'ocr' && (
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '1.5rem',
                  borderRadius: '0.9rem',
                  border: '1px solid var(--border-color)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                    <Cpu size={20} color="var(--color-secondary)" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      Procesamiento OCR + IA guardado en Base de Datos PostgreSQL
                    </span>
                  </div>
                  <span className="badge-pill badge-emerald">Precisión OCR + IA: 99.8%</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem' }}>
                  {[
                    { label: 'Tipo y Letra', value: 'Factura A · 0001-00048291', color: 'var(--text-main)' },
                    { label: 'Emisor / Proveedor', value: 'Acme Argentina S.A.', color: 'var(--text-main)' },
                    { label: 'CUIT & CAE AFIP', value: '30-71458921-9 · CAE OK', color: 'var(--color-secondary)' },
                    { label: 'Orden de Compra / Total', value: 'OC-4819 · $ 145.200,00', color: 'var(--color-primary)' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.95rem',
                        backgroundColor: '#ffffff',
                        borderRadius: '0.65rem',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        {item.label}
                      </span>
                      <p style={{ fontSize: '0.95rem', fontWeight: 800, color: item.color, marginTop: '0.2rem' }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Panel 3: Búsqueda por Filtros Avanzados y API ERP */}
            {activeTab === 'filters' && (
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '1.5rem',
                  borderRadius: '0.9rem',
                  border: '1px solid var(--border-color)',
                }}
              >
                {/* Barra simulada de Filtros */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    marginBottom: '1rem',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.4rem 0.75rem',
                        backgroundColor: '#ffffff',
                        borderRadius: '0.45rem',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                      }}
                    >
                      <Search size={14} color="var(--color-primary)" /> CUIT: 30-71458921-9
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.4rem 0.75rem',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '0.45rem',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      <Filter size={13} /> Factura (14)
                    </span>
                    <span
                      style={{
                        padding: '0.4rem 0.75rem',
                        backgroundColor: '#ffffff',
                        borderRadius: '0.45rem',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      O.C.: OC-4819
                    </span>
                    <span
                      style={{
                        padding: '0.4rem 0.75rem',
                        backgroundColor: '#ffffff',
                        borderRadius: '0.45rem',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Origen: Email / SFTP
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '0.4rem',
                      backgroundColor: '#0f172a',
                      color: '#38bdf8',
                    }}
                  >
                    GET /api/documents · ERP Ready
                  </span>
                </div>

                {/* Filas de resultados filtrados */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    {
                      file: 'Factura_A_0001_00048291.pdf',
                      origin: 'Email IMAP',
                      oc: 'OC-4819',
                      amount: '$ 145.200,00 ARS',
                      status: 'Validado',
                    },
                    {
                      file: 'Remito_Deposito_Norte_9921.pdf',
                      origin: 'Escáner HP SFTP',
                      oc: 'OC-4819',
                      amount: '12 ítems indexados',
                      status: 'Validado',
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.75rem',
                        padding: '0.8rem 1rem',
                        backgroundColor: '#ffffff',
                        borderRadius: '0.55rem',
                        border: '1px solid var(--border-color)',
                        borderLeft: '3px solid var(--color-primary)',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-main)' }}>
                          📄 {row.file}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          Origen: <strong>{row.origin}</strong> · Ref: {row.oc}
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary)' }}>{row.amount}</strong>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '0.2rem 0.55rem',
                            borderRadius: '9999px',
                            backgroundColor: 'var(--color-accent-soft)',
                            color: '#059669',
                          }}
                        >
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
