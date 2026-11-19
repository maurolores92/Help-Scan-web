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
      icon: <Printer size={25} color="#32a048" />,
      accent: '#32a048',
      softBg: 'rgba(50, 160, 72, 0.1)',
      tag: 'Hardware HP',
      title: 'Equipos HP en Comodato Todo Incluido',
      desc: 'Evita inversiones iniciales y obsolescencia. HelpCopies SRL te provee impresoras y escáneres multifunción HP con insumos y servicio técnico cubierto.',
    },
    {
      icon: <Zap size={25} color="#0284c7" />,
      accent: '#0284c7',
      softBg: 'rgba(2, 132, 199, 0.1)',
      tag: 'Un Solo Botón',
      title: 'Escaneo Directo a tu Portal en la Nube',
      desc: 'Coloca el papel en la bandeja del equipo HP, presiona un botón y el documento aparece ordenado automáticamente en la cuenta de tu empresa.',
    },
    {
      icon: <Mail size={25} color="#10b981" />,
      accent: '#10b981',
      softBg: 'rgba(16, 185, 129, 0.12)',
      tag: 'Correo Email',
      title: 'Recepción Automática de Facturas por Mail',
      desc: 'Conecta tu casilla de proveedores y olvídate de descargar adjuntos uno por uno. Incluso las notificaciones de transferencia se guardan como comprobantes.',
    },
    {
      icon: <MessageCircle size={25} color="#16a34a" />,
      accent: '#16a34a',
      softBg: 'rgba(22, 163, 74, 0.1)',
      tag: 'WhatsApp & Telegram',
      title: 'Captura Ágil desde Calle y Depósito',
      desc: 'Recibe fotografías de remitos firmados, tickets y comprobantes directamente por WhatsApp o Telegram desde cualquier sucursal o chofer en ruta.',
    },
    {
      icon: <Cpu size={25} color="#7c3aed" />,
      accent: '#7c3aed',
      softBg: 'rgba(124, 58, 237, 0.1)',
      tag: 'Cero Tipeo',
      title: 'Lectura Automática de Comprobantes',
      desc: 'Identificamos proveedor, CUIT, Letra, Punto de Venta, vencimientos, Orden de Compra, artículos e importes para evitar horas de carga manual.',
    },
    {
      icon: <Webhook size={25} color="#f59e0b" />,
      accent: '#f59e0b',
      softBg: 'rgba(245, 158, 11, 0.12)',
      tag: 'Conexión ERP',
      title: 'Integración con tu Sistema Contable vía API',
      desc: 'Conecta Tango Gestión, Bejerman, SAP o cualquier software propio mediante API para enviar comprobantes y sincronizar información aprobada.',
    },
    {
      icon: <SlidersHorizontal size={25} color="#0ea5e9" />,
      accent: '#0ea5e9',
      softBg: 'rgba(14, 165, 233, 0.1)',
      tag: 'Control Ágil',
      title: 'Búsqueda Instantánea por Filtros',
      desc: 'Encuentra cualquier factura o remito en segundos filtrando por tipo de comprobante, N° de Orden de Compra, CUIT, fecha o canal de ingreso.',
    },
    {
      icon: <Lock size={25} color="#0f172a" />,
      accent: '#0f172a',
      softBg: 'rgba(15, 23, 42, 0.08)',
      tag: 'Seguridad Total',
      title: 'Resguardo Privado y Trazabilidad',
      desc: 'Cada empresa opera en su propio entorno privado con archivos cifrados, control de permisos por rol y registro completo de cada validación.',
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
            <span>Facilitamos tus Procesos Administrativos</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            Menos carga operativa,{' '}
            <span className="gradient-text-tech">más control para tu empresa</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
            No necesitas comprar servidores ni configurar procesos complejos. <strong>HelpCopies SRL</strong> instala tu equipamiento y deja toda tu operatoria lista desde el primer día.
          </p>
        </div>

        {/* Banner Visual Ancho para Captura del Portal / Ecosistema */}
        <div style={{ marginBottom: '3.5rem' }}>
          <ImageSlot
            slotLabel="Banner Visual · Portal Unificado Help Scan"
            recommendedSize="1400 × 520 px"
            suggestionText="Espacio ideal para mostrar una captura panorámica del Portal Web Help Scan, la vista de validación o tu flota de impresoras."
            minHeight="280px"
            showLaserBeam
            topLeftBadge={
              <>
                <span className="live-dot" />
                <span>Impresoras HP · Email · WhatsApp · Telegram · ERP</span>
              </>
            }
            bottomRightCard={
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle2 size={20} color="var(--color-primary)" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    Toda tu Documentación en un Solo Lugar
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    Sin descargas manuales ni planillas repetitivas
                  </div>
                </div>
              </div>
            }
          />
        </div>

        {/* Grid de 8 Cards Coloridas con Hover Elevado */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#ffffff',
                borderTop: `3px solid ${feat.accent}`,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: '0.85rem',
                      backgroundColor: feat.softBg,
                      border: `1px solid ${feat.accent}25`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {feat.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      backgroundColor: feat.softBg,
                      color: feat.accent,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: '0.65rem', color: 'var(--text-main)' }}>
                  {feat.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.9rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: feat.accent,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                }}
              >
                <CheckCircle2 size={15} color={feat.accent} />
                <span>Incluido en el servicio Help Scan</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
