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
      title: 'Equipos HP Enterprise en Comodato',
      desc: 'Evita inversiones iniciales y obsolescencia. HelpCopies SRL te provee impresoras y escáneres multifunción HP con alimentador ADF doble faz y service incluido.',
    },
    {
      icon: <Zap size={25} color="#0284c7" />,
      accent: '#0284c7',
      softBg: 'rgba(2, 132, 199, 0.1)',
      tag: 'Impresoras SFTP',
      title: 'Sincronización SFTP desde Escáneres',
      desc: 'Al presionar escanear en tu impresora HP, el PDF viaja por SFTP/FTPS directo a tu bóveda privada. Nuestro watcher en tiempo real lo detecta al instante.',
    },
    {
      icon: <Mail size={25} color="#10b981" />,
      accent: '#10b981',
      softBg: 'rgba(16, 185, 129, 0.12)',
      tag: 'Email IMAP',
      title: 'Ingesta Automática por Correo Electrónico',
      desc: 'Conecta Gmail, Outlook o tu servidor IMAP propio. Help Scan lee facturas adjuntas, muestra el correo recibido e incluso convierte notificaciones de pago en PDFs.',
    },
    {
      icon: <MessageCircle size={25} color="#16a34a" />,
      accent: '#16a34a',
      softBg: 'rgba(22, 163, 74, 0.1)',
      tag: 'WhatsApp & Telegram',
      title: 'Captura Móvil por Mensajería',
      desc: 'Recibe fotografías de remitos firmados, tickets y comprobantes en PDF directamente por WhatsApp o Telegram desde depósitos y choferes en la calle.',
    },
    {
      icon: <Cpu size={25} color="#7c3aed" />,
      accent: '#7c3aed',
      softBg: 'rgba(124, 58, 237, 0.1)',
      tag: 'OCR + IA a BD',
      title: 'Procesamiento OCR + IA a Base de Datos',
      desc: 'La IA interpreta el texto extraído por el OCR y guarda automáticamente CUIT, Letra, Punto de Venta, CAE, Orden de Compra, ítems y totales en PostgreSQL.',
    },
    {
      icon: <Webhook size={25} color="#f59e0b" />,
      accent: '#f59e0b',
      softBg: 'rgba(245, 158, 11, 0.12)',
      tag: 'API ERP',
      title: 'Conexión con Aplicaciones ERP vía API',
      desc: 'Conecta Tango Gestión, Bejerman, SAP o cualquier software propio mediante API REST para enviar comprobantes o sincronizar datos validados sin tipeo manual.',
    },
    {
      icon: <SlidersHorizontal size={25} color="#0ea5e9" />,
      accent: '#0ea5e9',
      softBg: 'rgba(14, 165, 233, 0.1)',
      tag: 'Filtros y Validación',
      title: 'Consulta por Filtros Avanzados',
      desc: 'Encuentra al instante cualquier archivo filtrando por tipo de documento, N° de Orden de Compra, CUIT, rango de fechas o canal de origen, y valida lado a lado.',
    },
    {
      icon: <Lock size={25} color="#0f172a" />,
      accent: '#0f172a',
      softBg: 'rgba(15, 23, 42, 0.08)',
      tag: 'Seguridad AES-256',
      title: 'Bóveda Multi-Tenant y Auditoría Total',
      desc: 'Archivos cifrados con AES-256-GCM y llave única por compañía, deduplicación SHA-256, roles con permisos granulares y registro histórico de trazabilidad.',
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
            <span>Arquitectura Tecnológica Help Scan</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
            Un ecosistema completo entre{' '}
            <span className="gradient-text-tech">Hardware HP, Canales Digitales y ERP</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.65 }}>
            No necesitas comprar servidores ni contratar programadores. <strong>HelpCopies SRL</strong> instala tu equipamiento y despliega tu plataforma lista para recibir, procesar y filtrar cada documento.
          </p>
        </div>

        {/* Banner Visual Ancho para Captura del Portal / Ecosistema */}
        <div style={{ marginBottom: '3.5rem' }}>
          <ImageSlot
            slotLabel="Banner Tecnológico · Captura del Portal o Flujo Multi-Canal"
            recommendedSize="1400 × 520 px"
            suggestionText="Espacio ideal para mostrar una captura panorámica del Portal Web Help Scan, el visor de validación PDF + OCR o la red de impresoras."
            minHeight="280px"
            showLaserBeam
            topLeftBadge={
              <>
                <span className="live-dot" />
                <span>Canales Activos · SFTP · Email · WhatsApp · Telegram · API ERP</span>
              </>
            }
            bottomRightCard={
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Cpu size={20} color="var(--color-primary)" />
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    OCR + IA Guardado en Base de Datos
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    Consulta inmediata por filtros y API
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
                <span>Incluido en el ecosistema Help Scan</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
