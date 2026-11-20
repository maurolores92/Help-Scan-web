import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send, AlertCircle, Loader2, Video } from 'lucide-react';
import { sendDemoRequest } from '../services/api';
import { MANAGEMENT_SYSTEM_OPTIONS } from '../constants/managementSystems';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDemo: string | null;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  selectedDemo,
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [managementSystem, setManagementSystem] = useState(MANAGEMENT_SYSTEM_OPTIONS[0].value);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentEmail, setSentEmail] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await sendDemoRequest({
        fullName,
        companyName,
        email,
        phone,
        managementSystem,
        selectedDemo: selectedDemo || undefined,
        message,
        source: 'demo_modal',
      });
      setSentEmail(email);
    } catch (err: any) {
      setError(err?.message || 'Ocurrió un error al enviar la solicitud de demostración.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setManagementSystem(MANAGEMENT_SYSTEM_OPTIONS[0].value);
    setMessage('');
    setError(null);
    setSentEmail(null);
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.72rem 0.9rem',
    borderRadius: '0.5rem',
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-color)',
    color: 'var(--text-main)',
    fontSize: '0.875rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8125rem',
    color: 'var(--text-secondary)',
    marginBottom: '0.35rem',
    fontWeight: 500,
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
      }}
      onClick={handleResetAndClose}
    >
      <div
        className="light-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '2.25rem',
          backgroundColor: '#ffffff',
          border: '1px solid var(--border-color)',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.28)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute',
            top: '1.15rem',
            right: '1.15rem',
            color: 'var(--text-muted)',
            background: 'transparent',
            padding: '0.35rem',
            borderRadius: '0.4rem',
          }}
        >
          <X size={20} />
        </button>

        {sentEmail ? (
          <div style={{ textAlign: 'center', padding: '1rem 0.5rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(50, 160, 72, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}
            >
              <CheckCircle2 size={38} color="var(--color-primary)" />
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.6rem' }}>
              ¡Solicitud de Demostración Enviada!
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Gracias por tu interés en <strong>HelpScan</strong>. Nuestro equipo comercial de{' '}
              <strong>HelpCopies SRL</strong> se comunicará a <strong>{sentEmail}</strong> para coordinar tu demostración en vivo.
            </p>
            <button
              onClick={handleResetAndClose}
              className="btn-primary"
              style={{ padding: '0.8rem 2rem' }}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
                <Sparkles size={14} />
                <span>Demostración en Vivo · HelpCopies SRL</span>
              </div>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                Solicitar Demostración
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Completá tus datos y te mostramos cómo funciona HelpScan con comprobantes reales de tu empresa, sin cambiar tu sistema contable.
              </p>

              {selectedDemo && (
                <div
                  style={{
                    marginTop: '0.85rem',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '0.55rem',
                    backgroundColor: 'var(--color-primary-soft)',
                    border: '1px solid rgba(50, 160, 72, 0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-hover)',
                  }}
                >
                  <Video size={16} />
                  <span>Demo seleccionada: {selectedDemo}</span>
                </div>
              )}
            </div>

            {error && (
              <div
                style={{
                  marginBottom: '1.1rem',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.35)',
                  color: '#b91c1c',
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.9rem' }}>
                <div>
                  <label style={labelStyle}>Nombre y Apellido *</label>
                  <input
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej: Juan Pérez"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Empresa / Razón Social *</label>
                  <input
                    required
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Ej: Logística Austral S.A."
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '0.9rem' }}>
                <div>
                  <label style={labelStyle}>Correo Electrónico *</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="juan@tuempresa.com"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 11 1234-5678"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Sistema de Gestión</label>
                <select
                  value={managementSystem}
                  onChange={(e) => setManagementSystem(e.target.value)}
                  style={inputStyle}
                >
                  {MANAGEMENT_SYSTEM_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Contanos brevemente qué querés ver en la demo</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ej: Recibimos facturas por mail y remitos por WhatsApp, usamos Tango Gestión..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem', marginTop: '0.35rem' }}
              >
                {loading ? <Loader2 size={18} /> : <Send size={18} />}
                <span>{loading ? 'Enviando solicitud...' : 'Enviar Solicitud de Demostración'}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
