interface FooterSectionProps {
  donaFacilUrl?: string;
  donaFacilLogoSrc?: string;
  legalText?: string;
  copyrightText?: string;
}

export default function FooterSection({
  donaFacilUrl = 'https://donafacil.org',
  donaFacilLogoSrc = '/logo-donafacil.svg',
  legalText = 'Doná Fácil es una plataforma que conecta donantes con organizaciones sin fines de lucro, facilitando las donaciones de forma segura y transparente. Las donaciones realizadas a través de esta plataforma pueden ser deducibles de impuestos según la legislación vigente.',
  copyrightText = '© 2026 Doná Fácil. Todos los derechos reservados.',
}: FooterSectionProps) {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 rounded-[20px] md:rounded-none overflow-hidden">
      <div className="max-w-lg mx-auto text-center">
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

        {/* Texto chico */}
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6 max-w-md mx-auto">
          {legalText}
        </p>

        {/* Línea separadora */}
        <hr className="border-gray-700 mb-4" />

        {/* Copyright */}
        <p className="text-xs text-gray-500">{copyrightText}</p>
      </div>
    </footer>
  );
}
