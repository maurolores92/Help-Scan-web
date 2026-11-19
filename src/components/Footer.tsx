import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PORTAL_URL = import.meta.env.VITE_PORTAL_URL || 'http://localhost:3000';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'rgba(255, 255, 255, 0.86)',
        backdropFilter: 'blur(8px)',
        padding: '4rem 0 2rem',
        marginTop: '2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/images/HelpScan.png"
                alt="Help Scan por HelpCopies SRL"
                style={{
                  height: '44px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Solución integral de digitalización documental por SFTP, Email, WhatsApp, Telegram y API ERP con procesamiento OCR e IA.
            </p>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Un producto de <strong>HelpCopies SRL</strong>
            </span>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#inicio" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Inicio</a>
              </li>
              <li>
                <a href="#nosotros" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Quiénes Somos</a>
              </li>
              <li>
                <a href="#por-que-elegirnos" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Por qué elegirnos</a>
              </li>
              <li>
                <a href="#planes" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Planes y Precios</a>
              </li>
              <li>
                <a href="#contacto" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Contacto</a>
              </li>
            </ul>
          </div>

          {/* Platform Access */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Plataforma
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href={`${PORTAL_URL}/login`} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Acceso a Clientes (Login) &rarr;
                </a>
              </li>
              <li>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Compatibilidad con HP Enterprise</span>
              </li>
              <li>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Bóveda Cifrada Multi-Tenant</span>
              </li>
              <li>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Google Gemini AI Integrado</span>
              </li>
            </ul>
          </div>

          {/* Security & Guarantees */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Compromiso
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Todos los datos y archivos PDF están resguardados con cifrado en reposo y aislamiento estricto por compañía.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', backgroundColor: 'rgba(5, 150, 105, 0.1)', border: '1px solid rgba(5, 150, 105, 0.25)', fontSize: '0.75rem', color: 'var(--color-accent)' }}>
              <ShieldCheck size={16} />
              <span>Conexiones SFTP y SSL seguras</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>Help Scan</strong>. Desarrollado por <strong>HelpCopies SRL</strong>.
          </div>
          <div>
            <span>Alquiler inteligente de escaneo y gestión documental empresarial.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
