import React from 'react';
import { ImagePlus } from 'lucide-react';

interface ImageSlotProps {
  slotLabel: string;
  recommendedSize: string;
  suggestionText: string;
  imageSrc?: string;
  minHeight?: string;
  aspectRatio?: string;
  imageFit?: 'cover' | 'contain';
  showLaserBeam?: boolean;
  topLeftBadge?: React.ReactNode;
  bottomRightCard?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Contenedor visual de alto impacto tecnológico preparado para alojar imágenes reales.
 * Mientras no se especifique `imageSrc`, muestra un fondo futurista con malla tech,
 * haz láser animado y una guía discreta con la medida recomendada para el reemplazo.
 */
export const ImageSlot: React.FC<ImageSlotProps> = ({
  slotLabel,
  recommendedSize,
  suggestionText,
  imageSrc,
  minHeight = '340px',
  aspectRatio,
  imageFit = 'cover',
  showLaserBeam = true,
  topLeftBadge,
  bottomRightCard,
  children,
}) => {
  return (
    <div
      className="image-slot-backdrop tech-grid-dark"
      style={{
        minHeight,
        aspectRatio,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.75rem',
      }}
    >
      {/* Imagen real cuando el usuario decida asignarla */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={slotLabel}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: imageFit,
            zIndex: 0,
          }}
        />
      )}

      {/* Orbes de iluminación ambiental en paleta HC-Scan */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(50, 160, 72, 0.42) 0%, transparent 70%)',
          filter: 'blur(24px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-50px',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.38) 0%, transparent 70%)',
          filter: 'blur(24px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Línea láser animada de escaneo */}
      {showLaserBeam && <div className="scan-beam-line" />}

      {/* Badge flotante superior izquierdo */}
      {topLeftBadge && (
        <div
          className="glass-dark-pill animate-float-slow"
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            zIndex: 4,
            borderRadius: '9999px',
            padding: '0.45rem 0.9rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {topLeftBadge}
        </div>
      )}

      {/* Indicador central de espacio reservado para imagen (solo si aún no hay imageSrc) */}
      {!imageSrc && (
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            textAlign: 'center',
            maxWidth: '340px',
            padding: '1.75rem 1.5rem',
            borderRadius: '1rem',
            border: '1px dashed rgba(255, 255, 255, 0.25)',
            backgroundColor: 'rgba(15, 23, 42, 0.46)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              margin: '0 auto 0.9rem',
              borderRadius: '0.85rem',
              background: 'linear-gradient(135deg, rgba(50, 160, 72, 0.25), rgba(2, 132, 199, 0.25))',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#48b85f',
            }}
          >
            <ImagePlus size={26} />
          </div>

          <div
            style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#f8fafc',
              marginBottom: '0.35rem',
            }}
          >
            {slotLabel}
          </div>

          <p
            style={{
              fontSize: '0.78rem',
              color: '#cbd5e1',
              lineHeight: 1.5,
              marginBottom: '0.75rem',
            }}
          >
            {suggestionText}
          </p>

          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 600,
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(50, 160, 72, 0.2)',
              border: '1px solid rgba(72, 184, 95, 0.4)',
              color: '#86efac',
            }}
          >
            Fondo listo · {recommendedSize}
          </span>
        </div>
      )}

      {children}

      {/* Tarjeta flotante inferior derecha */}
      {bottomRightCard && (
        <div
          className="glass-floating animate-float-reverse"
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: '1.25rem',
            zIndex: 4,
            borderRadius: '0.9rem',
            padding: '0.85rem 1.1rem',
            maxWidth: '270px',
          }}
        >
          {bottomRightCard}
        </div>
      )}
    </div>
  );
};
