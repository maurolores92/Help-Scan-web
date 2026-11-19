import React from 'react';
import { ShieldCheck, Wrench, Building2, CheckCircle, Award, FileCheck, Cpu, Clock } from 'lucide-react';
import { ImageSlot } from './ImageSlot';

export const AboutUs: React.FC = () => {
  const stats = [
    {
      value: '+30',
      label: 'Años de Trayectoria',
      desc: 'HelpCopies SRL liderando soluciones de impresión corporativa',
      color: 'var(--color-primary)',
      softBg: 'var(--color-primary-soft)',
      icon: <Award size={22} color="var(--color-primary)" />,
    },
    {
      value: '+500K',
      label: 'Documentos Indexados',
      desc: 'Facturas, remitos, recibos y O.C. procesados con éxito',
      color: 'var(--color-secondary)',
      softBg: 'var(--color-secondary-soft)',
      icon: <FileCheck size={22} color="var(--color-secondary)" />,
    },
    {
      value: '99.8%',
      label: 'Precisión Automática',
      desc: 'Lectura exacta de CUITs, vencimientos, fechas e importes',
      color: 'var(--color-accent)',
      softBg: 'var(--color-accent-soft)',
      icon: <Cpu size={22} color="var(--color-accent)" />,
    },
    {
      value: '< 24hs',
      label: 'Soporte y Reposición',
      desc: 'Mantenimiento preventivo y repuestos originales HP cubiertos',
      color: 'var(--color-warning)',
      softBg: 'rgba(245, 158, 11, 0.12)',
      icon: <Clock size={22} color="var(--color-warning)" />,
    },
  ];

  const pillars = [
    {
      title: 'Modelo de Alquiler Todo Incluido por HelpCopies SRL',
      desc: 'Sin necesidad de comprar costosos equipos de digitalización. Te instalamos hardware HP LaserJet y ScanJet de alta velocidad con insumos y soporte técnico integral.',
    },
    {
      title: 'Recepción Automática desde Cualquier Canal',
      desc: 'Eliminamos las tareas manuales de descarga y archivo. Cada comprobante escaneado o recibido por correo, WhatsApp, Telegram o tu sistema contable se clasifica al instante.',
    },
    {
      title: 'Archivo Empresarial Seguro y Ordenado',
      desc: 'Tus documentos dejan de ser archivos sueltos en carpetas: pasan a estar organizados por proveedor, fecha e importe, listos para filtrar y aprobar.',
    },
  ];

  return (
    <section id="nosotros" style={{ padding: '6rem 0', backgroundColor: 'rgba(255, 255, 255, 0.72)', position: 'relative' }}>
      <div className="container">
        {/* Encabezado de Sección */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 4rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Building2 size={14} />
            <span>Tecnología de HelpCopies SRL</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              fontWeight: 900,
              marginBottom: '1.25rem',
              color: 'var(--text-main)',
              lineHeight: 1.25,
            }}
          >
            Innovación en Digitalización respaldada por{' '}
            <img
              src="/images/Help-Copies-con-fondo-blanco.png"
              alt="HelpCopies SRL"
              style={{
                height: '4em',
                width: 'auto',
                display: 'inline-block',
                verticalAlign: 'middle',
                marginLeft: '0.2rem',
                transform: 'translateY(-0.06em)',
                mixBlendMode: 'multiply',
              }}
            />
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
            En <strong>HelpCopies SRL</strong> unimos décadas de liderazgo en equipamiento de impresión empresarial con ingeniería propia de Inteligencia Artificial.
            Diseñamos <strong>Help Scan</strong> para convertir los equipos multifunción de tu oficina en un centro neurálgico de gestión documental automática.
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
              <span>Respaldo Integral en Hardware y Software</span>
            </div>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.25, color: 'var(--text-main)' }}>
              ¿Por qué conformarte con un escáner común si puedes automatizar toda tu administración?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>
              Los escáneres tradicionales solo guardan archivos mudos en carpetas compartidas. Con <strong>Help Scan de HelpCopies SRL</strong>, cada comprobante que entra por tu impresora HP, correo o mensajería queda clasificado por tipo, fecha, CUIT, orden de compra e importes, listo para buscar o exportar a tu ERP.
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

          {/* Columna Derecha: Fondo visual preparado para imagen de HelpCopies SRL / Flota HP */}
          <div>
            <ImageSlot
              slotLabel="Imagen Corporativa · HelpCopies SRL"
              recommendedSize="1000 × 750 px"
              suggestionText="Espacio reservado para foto de tu flota de impresoras HP Enterprise, centro técnico o equipo de HelpCopies SRL."
              minHeight="420px"
              showLaserBeam={false}
              topLeftBadge={
                <>
                  <ShieldCheck size={14} color="#48b85f" />
                  <span>Garantía Oficial HelpCopies SRL</span>
                </>
              }
              bottomRightCard={
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '0.6rem',
                      backgroundColor: 'var(--color-secondary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Wrench size={18} color="var(--color-secondary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      Mantenimiento e Insumos 100% Cubiertos
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Reposición y calibración en &lt; 24 hs hábiles
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
