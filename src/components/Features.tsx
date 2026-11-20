import React from 'react';
import {
  Printer,
  Zap,
  Cpu,
  Lock,
  CheckCircle2,
  Sparkles,
  Mail,
  MessageCircle,
  Webhook,
  SlidersHorizontal,
} from 'lucide-react';
import { ImageSlot } from './ImageSlot';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Printer size={20} color="#32a048" />,
      accent: '#32a048',
      softBg: 'rgba(50, 160, 72, 0.1)',
      tag: 'Equipos HP + Soporte',
      title: 'Acompañamiento real de HelpCopies SRL',
      desc: 'No te dejamos solo con un software. Te proveemos equipos HP con mantenimiento e insumos cubiertos y te acompañamos en la puesta en marcha real.',
    },
    {
      icon: <Zap size={20} color="#0284c7" />,
      accent: '#0284c7',
      softBg: 'rgba(2, 132, 199, 0.1)',
      tag: 'Del Papel al Control',
      title: 'Escaneás con un toque y ya queda validado',
      desc: 'Apoyás facturas o remitos en el dispositivo ScanJet de HP, tocás un botón y cada comprobante entra directo a tu tablero ordenado, sin carpetas compartidas.',
    },
    {
      icon: <Mail size={20} color="#10b981" />,
      accent: '#10b981',
      softBg: 'rgba(16, 185, 129, 0.12)',
      tag: 'Correo Electrónico',
      title: 'Olvidate de descargar facturas del mail',
      desc: 'Todo lo que mandan tus proveedores a la casilla —incluso comprobantes de transferencia— entra automáticamente al circuito y queda clasificado.',
    },
    {
      icon: <MessageCircle size={20} color="#16a34a" />,
      accent: '#16a34a',
      softBg: 'rgba(22, 163, 74, 0.1)',
      tag: 'WhatsApp & Telegram',
      title: 'Comprobantes desde calle, obra o depósito',
      desc: 'Mandan la foto de un remito o ticket por WhatsApp o Telegram, el sistema confirma la recepción al instante y administración lo ve listo para revisar.',
    },
    {
      icon: <Cpu size={20} color="#7c3aed" />,
      accent: '#7c3aed',
      softBg: 'rgba(124, 58, 237, 0.1)',
      tag: 'Cero Carga Manual',
      title: 'Evitá errores de tipeo y gastos duplicados',
      desc: 'Validamos proveedor, CUIT, tipo de comprobante, vencimiento, orden de compra e importes para saber al instante si llegó bien y cuánto suma.',
    },
    {
      icon: <Webhook size={20} color="#f59e0b" />,
      accent: '#f59e0b',
      softBg: 'rgba(245, 158, 11, 0.12)',
      tag: 'Sin Cambiar de ERP',
      title: 'Se adapta al sistema que ya usás',
      desc: 'Seguí trabajando con Tango Gestión, Bejerman, SAP o tu sistema contable propio. Llevás los datos validados por API cuando los necesites.',
    },
    {
      icon: <SlidersHorizontal size={20} color="#0ea5e9" />,
      accent: '#0ea5e9',
      softBg: 'rgba(14, 165, 233, 0.1)',
      tag: 'Ubicación Inmediata',
      title: '¿Dónde quedó ese comprobante? Encontralo ya',
      desc: 'Dejá de revolver mails o chats: ubicá cualquier factura o remito en segundos por proveedor, CUIT, Orden de Compra, fecha o canal de llegada.',
    },
    {
      icon: <Lock size={20} color="#0f172a" />,
      accent: '#0f172a',
      softBg: 'rgba(15, 23, 42, 0.08)',
      tag: 'Control Total',
      title: 'Trazabilidad clara para quien revisa',
      desc: 'Tu empresa trabaja en un espacio privado con permisos por usuario para saber exactamente qué llegó, quién lo validó y en qué estado está.',
    },
  ];

  return (
    <section
      id="por-que-elegirnos"
      style={{ padding: '6rem 0', position: 'relative' }}
    >
      <div className="container">
        {/* Encabezado */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Tranquilidad y tiempo ganado para tu equipo</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            Menos carga repetitiva,{' '}
            <span className="gradient-text-tech">más control en cada cierre</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
            Quien revisa o carga comprobantes necesita saber si el dato está bien, qué dice y dónde encontrarlo sin demoras.{' '}
            <strong>HelpCopies SRL</strong> instala tus equipos HP y deja todo funcionando desde el día uno.
          </p>
        </div>

        {/* Banner Visual Ancho para Captura del Portal / Ecosistema */}
        <div style={{ marginBottom: '3.5rem' }}>
          <ImageSlot
            slotLabel="Configurado y Operativo · HelpCopies SRL e ScanJet de HP"
            recommendedSize="3392 × 1248 px"
            suggestionText=""
            imageSrc="/images/banner-tercero.jpeg"
            minHeight="auto"
            aspectRatio="3392 / 1248"
            imageFit="cover"
            showLaserBeam
            topLeftBadge={
              <>
                <span className="live-dot" />
                <span>ScanJet de HP · Email · WhatsApp · Telegram · ERP</span>
              </>
            }
            bottomRightCard={
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Cada comprobante validado y ubicable en segundos
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    Sin descargas manuales, sin tipeo ni cambios de sistema
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Grid de 8 Cards compactas mostradas de 4 en 4 en desktop */}
        <div className="features-grid-4">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: '1.35rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                borderTop: `3px solid ${feat.accent}`,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '2.65rem',
                      height: '2.65rem',
                      borderRadius: '0.7rem',
                      backgroundColor: feat.softBg,
                      border: `1px solid ${feat.accent}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {feat.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '9999px',
                      backgroundColor: feat.softBg,
                      color: feat.accent,
                      letterSpacing: '0.03em',
                      textAlign: 'right',
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 800, marginBottom: '0.45rem', lineHeight: 1.3, color: 'var(--text-main)' }}>
                  {feat.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', lineHeight: 1.5 }}>
                  {feat.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1rem',
                  paddingTop: '0.7rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: feat.accent,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={14} color={feat.accent} />
                <span>Listo para tu operatoria diaria</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
