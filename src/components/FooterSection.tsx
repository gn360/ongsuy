interface FooterSectionProps {
  donaFacilUrl: string;
  donaFacilLogoSrc: string;
  legalText: string;
  copyrightText?: string;
  /** Líneas de contacto de Doná Fácil (tel, direcciones, email) */
  contactLines?: string[];
  developedByText?: string;
}

export default function FooterSection({
  donaFacilUrl,
  donaFacilLogoSrc,
  legalText,
  copyrightText,
  contactLines,
  developedByText,
}: FooterSectionProps) {
  return (
    <footer className="bg-white text-white pb-5 px-5 rounded-[20px] md:rounded-none overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo Doná Fácil */}
        <a
          href={donaFacilUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 hover:opacity-80 transition-opacity"
        >
          <img
            src={donaFacilLogoSrc}
            alt="Doná Fácil"
            className="h-10 md:h-12 object-contain mx-auto"
          />
        </a>

        {/* Texto legal */}
        {legalText && (
          <p
            className="leading-relaxed max-w-md mx-auto text-start"
            style={{ color: 'black', fontSize: '0.8rem', lineHeight: '1.2' }}
          >
            {legalText}
          </p>
        )}

        {/* Contacto Doná Fácil */}
        {contactLines && contactLines.length > 0 && (
          <div
            className="leading-relaxed mb-5"
            style={{ color: '#151516', fontSize: '0.6rem', marginTop: '1.2rem', lineHeight: '1.4' }}
          >
            {contactLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        <hr></hr>

        {/* Desarrollado por */}
        {developedByText && (
          <p style={{ color: 'black', fontSize: '0.5rem', marginTop: '0.6rem' }}>
            {developedByText}
          </p>
        )}

        {/* Copyright */}
        {copyrightText && (
          <p style={{ color: '#151516', fontSize: '0.5rem', marginTop: '0.2rem' }}>
            {copyrightText}
          </p>
        )}
      </div>
    </footer>
  );
}
