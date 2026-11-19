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
        <div className="hero-split-grid animate-fade-up" style={{ marginBottom: '4rem' }}>
          {/* Columna Izquierda */}
          <div>
            <div style={{ marginBottom: '1.35rem' }}>
              <div className="badge-pill">
                <Sparkles size={14} />
                <span>HelpCopies SRL · Automatización Documental para Empresas</span>
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
              Simplifica la Gestión de{' '}
              <span className="gradient-text-tech">Facturas, Remitos y Comprobantes</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2rem',
              }}
            >
              Con <strong>Help Scan</strong> olvídate de descargar archivos o cargar comprobantes a mano.
              Recibe documentos automáticamente desde tus <strong>impresoras HP</strong>, <strong>Correo Electrónico</strong>,{' '}
              <strong>WhatsApp</strong>, <strong>Telegram</strong> o tu <strong>ERP mediante API</strong>. Organizamos toda la información al instante para que la encuentres y controles en segundos.
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
                <CheckCircle2 size={16} color="var(--color-primary)" /> Hardware HP + Servicio HelpCopies SRL
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-secondary)" /> Puesta en marcha inmediata
              </span>
            </div>
          </div>

          {/* Columna Derecha: Banner Principal preparado para Imagen */}
          <div>
            <ImageSlot
              slotLabel="Banner Principal · Espacio para Imagen"
              recommendedSize="1200 × 900 px"
              suggestionText="Aquí podrás colocar una foto de tus equipos HP LaserJet Enterprise, oficina digitalizada o captura del portal Help Scan."
              minHeight="440px"
              showLaserBeam
              topLeftBadge={
                <>
                  <span className="live-dot" />
                  <span>Impresoras HP · Email · WhatsApp · Telegram · ERP</span>
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
                      ✔ Comprobante Organizado
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
                      Listo para pagar
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

        {/* Simulador Interactivo orientado a Procesos */}
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
                  Así agiliza tu día a día · Help Scan
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
                  { id: 'channels', label: '1. Recepción Automática' },
                  { id: 'extract', label: '2. Lectura sin Tipeo' },
                  { id: 'filters', label: '3. Búsqueda y ERP' },
                ].map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as 'channels' | 'extract' | 'filters')}
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

            {/* Panel 1: Recepción Automática Omnicanal */}
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
                        Todos tus Canales Conectados
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700 }}>
                        ● Sin descargas ni archivos perdidos
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Escanea un papel en tu impresora HP, recibe una factura por correo, saca una foto por WhatsApp o Telegram, o envía documentos desde tu sistema actual.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {[
                      { icon: <Printer size={13} />, label: 'Impresoras HP' },
                      { icon: <Mail size={13} />, label: 'Correo Email' },
                      { icon: <MessageCircle size={13} />, label: 'WhatsApp' },
                      { icon: <Send size={13} />, label: 'Telegram' },
                      { icon: <Webhook size={13} />, label: 'API ERP' },
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
                        Archivo Seguro y Centralizado
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Acceso privado exclusivo para tu empresa
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Olvídate de buscar comprobantes en distintos correos, teléfonos o carpetas compartidas. Todo queda resguardado en un único portal ordenado y sin duplicados.
                  </p>
                  <div
                    style={{
                      padding: '0.75rem',
                      backgroundColor: 'var(--color-accent-soft)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      borderRadius: '0.55rem',
                      fontSize: '0.78rem',
                      color: '#059669',
                      fontWeight: 600,
                    }}
                  >
                    ✓ Factura recibida, verificada y disponible para tu equipo al instante.
                  </div>
                </div>
              </div>
            )}

            {/* Panel 2: Lectura automática sin tipeo manual */}
            {activeTab === 'extract' && (
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
                      Cada dato clave extraído automáticamente, sin cargar nada a mano
                    </span>
                  </div>
                  <span className="badge-pill badge-emerald">Ahorra horas de carga administrativa</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem' }}>
                  {[
                    { label: 'Comprobante', value: 'Factura A · 0001-00048291', color: 'var(--text-main)' },
                    { label: 'Proveedor', value: 'Acme Argentina S.A.', color: 'var(--text-main)' },
                    { label: 'CUIT & Vencimiento', value: '30-71458921-9 · 15/11/2026', color: 'var(--color-secondary)' },
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

            {/* Panel 3: Búsqueda por Filtros y Conexión ERP */}
            {activeTab === 'filters' && (
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
                      <Search size={14} color="var(--color-primary)" /> Proveedor o CUIT
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
                      Fecha: Este mes
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.7rem',
                      borderRadius: '0.4rem',
                      backgroundColor: 'var(--color-secondary-soft)',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    Integrable con tu ERP vía API
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    {
                      file: 'Factura_A_0001_00048291.pdf',
                      origin: 'Recibida por Email',
                      oc: 'OC-4819',
                      amount: '$ 145.200,00 ARS',
                      status: 'Validado',
                    },
                    {
                      file: 'Remito_Deposito_Norte_9921.pdf',
                      origin: 'Escáner HP Oficina',
                      oc: 'OC-4819',
                      amount: '12 artículos registrados',
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
                          Canal: <strong>{row.origin}</strong> · Ref: {row.oc}
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
