import React from 'react';
import { ShieldCheck, Building2, CheckCircle, FolderOpen, Clock, AlertTriangle, RefreshCw } from 'lucide-react';
import { ImageSlot } from './ImageSlot';

export const AboutUs: React.FC = () => {
  const stats = [
    {
      value: 'Dispersión',
      label: 'Comprobantes por todos lados',
      desc: 'Facturas y remitos que llegan por mail, WhatsApp o papel y nadie sabe dónde quedaron.',
      color: 'var(--color-primary)',
      softBg: 'var(--color-primary-soft)',
      icon: <FolderOpen size={22} color="var(--color-primary)" />,
    },
    {
      value: 'Tiempo',
      label: 'Horas de carga manual',
      desc: 'Personal descargando adjuntos, cargando importes a mano o buscando entre archivos sueltos sin estructura.',
      color: 'var(--color-secondary)',
      softBg: 'var(--color-secondary-soft)',
      icon: <Clock size={22} color="var(--color-secondary)" />,
    },
    {
      value: 'Errores',
      label: 'Riesgo de cargar mal o duplicar',
      desc: 'Pasar mal un importe o una fecha, duplicar un gasto o demorar el control del mes.',
      color: 'var(--color-warning)',
      softBg: 'rgba(245, 158, 11, 0.12)',
      icon: <AlertTriangle size={22} color="var(--color-warning)" />,
    },
    {
      value: 'Fricción',
      label: 'Miedo a cambiar de sistema',
      desc: 'La molestia de pensar en cambiar tu sistema contable/ERP actual o armar procesos complejos.',
      color: 'var(--color-accent)',
      softBg: 'var(--color-accent-soft)',
      icon: <RefreshCw size={22} color="var(--color-accent)" />,
    },
  ];

  const pillars = [
    {
      title: '1. Entra solo, sin importar el canal',
      desc: 'Lo que llega por correo, WhatsApp, Telegram, escáner/impresora HP o integración pasa directo al circuito, sin descargar archivos uno por uno.',
    },
    {
      title: '2. Queda ordenado y legible al instante',
      desc: 'Cada comprobante deja de ser un archivo suelto y pasa a tener sus datos clave ordenados para validar importes, fechas y revisar rápido.',
    },
    {
      title: '3. Listo para tu gestión y respaldo',
      desc: 'Podés ubicar cualquier comprobante en segundos o llevar la información a tu sistema habitual, sumando el respaldo de HelpCopies SRL en equipos HP y puesta en marcha.',
    },
  ];

  return (
    <section id="nosotros" style={{ position: 'relative' }}>
      <div className="container">
        {/* Encabezado de Sección: Bloque 2 - El problema cotidiano */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 2.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Building2 size={14} />
            <span>¿Te pasa esto en tu administración? · HelpCopies SRL</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.6vw, 2.55rem)',
              fontWeight: 900,
              marginBottom: '1.25rem',
              color: 'var(--text-main)',
              lineHeight: 1.25,
            }}
          >
            Controlar comprobantes sin perder horas,{' '}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap',
                verticalAlign: 'middle',
              }}
            >
              <span>respaldado por</span>
              <img
                src="/images/Help-Copies-con-fondo-blanco.png"
                alt="HelpCopies SRL"
                style={{
                  height: '3.1em',
                  width: 'auto',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  transform: 'translateY(-0.04em)',
                  mixBlendMode: 'multiply',
                }}
              />
            </span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
            Un escáner común o un archivo PDF guardado no resuelve el día a día de administración.
            Lo que realmente ahorra tiempo es validar lo que llegó, evitar errores de carga y ubicar cada dato al instante.
          </p>
        </div>

        {/* Pequeño texto personal antes del grid */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <p
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              fontWeight: 700,
              color: 'var(--text-main)',
              letterSpacing: '-0.01em',
            }}
          >
            ¿Así es tu día a día?
          </p>
        </div>

        {/* Grid de Métricas con Acentos de Color y Sombras */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderTop: `3px solid ${stat.color}`,
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.85rem',
                  backgroundColor: stat.softBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}
              >
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  marginBottom: '0.35rem',
                  lineHeight: 1,
                  color: stat.color,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                {stat.label}
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Vista Dividida: Pilares + Espacio Visual para Fotografía Corporativa */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div className="badge-pill badge-cyan" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={14} />
              <span>Cómo lo resolvemos sin romper tu circuito</span>
            </div>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.25, color: 'var(--text-main)' }}>
              Se adapta a tu forma de trabajar, sin cambiar tu sistema contable
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>
              Los escáneres tradicionales solo guardan archivos mudos sin datos útiles. Con <strong>HelpScan de HelpCopies SRL</strong>, cada comprobante entra por tu canal habitual y queda validado, ordenado y listo para pasar a tu gestión.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="light-card"
                  style={{
                    display: 'flex',
                    gap: '0.85rem',
                    alignItems: 'flex-start',
                    padding: '1rem 1.15rem',
                    backgroundColor: 'var(--bg-page)',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '0.1rem',
                    }}
                  >
                    <CheckCircle size={16} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Transformación del documento dentro de ImageSlot con efecto escáner */}
          <div>
            <ImageSlot
              slotLabel="Transformación de archivo mudo a dato estructurado listo para ERP con HelpScan"
              recommendedSize="1024 × 1024 px"
              suggestionText=""
              imageSrc="/images/BannerAboutTransformation-square.jpg"
              minHeight="auto"
              aspectRatio="4 / 3"
              imageFit="cover"
              showLaserBeam
            />
          </div>
        </div>
      </div>
    </section>
  );
};
