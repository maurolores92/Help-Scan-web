import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
}

const PORTAL_URL = import.meta.env.VITE_PORTAL_URL || 'http://localhost:3000';

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'HelpCopies SRL', href: '#nosotros' },
    { label: 'Tecnología', href: '#por-que-elegirnos' },
    { label: 'Planes', href: '#planes' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(248, 250, 252, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid rgba(15, 23, 42, 0.04)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        padding: scrolled ? '0.7rem 0' : '1rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <img
            src="/images/logo-sin-fondo.png"
            alt="Help Scan Logo"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 3px 8px rgba(50, 160, 72, 0.22))',
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                Help Scan
              </span>
              <span
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-primary-soft)',
                  color: 'var(--color-primary-hover)',
                  border: '1px solid rgba(50, 160, 72, 0.25)',
                }}
              >
                AI + OCR
              </span>
            </div>
            <p style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', margin: 0, fontWeight: 500 }}>
              por <strong style={{ color: 'var(--text-secondary)' }}>HelpCopies SRL</strong>
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right CTA Actions */}
        <div className="nav-desktop-actions">
          <a
            href={`${PORTAL_URL}/login`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--text-main)',
              padding: '0.58rem 1rem',
              borderRadius: '0.625rem',
              border: '1px solid var(--border-color)',
              backgroundColor: '#ffffff',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
          >
            <span>Portal Clientes</span>
            <ArrowUpRight size={15} />
          </a>
          <button
            onClick={onOpenTrial}
            className="btn-primary"
            style={{
              padding: '0.62rem 1.25rem',
              fontSize: '0.875rem',
            }}
          >
            <Sparkles size={15} />
            <span>Prueba 6 días gratis</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          style={{
            padding: '0.5rem',
            borderRadius: '0.5rem',
            border: '1px solid var(--border-color)',
            backgroundColor: '#ffffff',
            color: 'var(--text-main)',
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '0.25rem 0' }} />
          <a
            href={`${PORTAL_URL}/login`}
            style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}
          >
            Iniciar Sesión en el Portal &rarr;
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTrial();
            }}
            className="btn-primary"
            style={{ width: '100%' }}
          >
            <Sparkles size={16} />
            <span>Prueba 6 días gratis</span>
          </button>
        </div>
      )}
    </nav>
  );
};
