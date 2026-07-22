interface ContactSectionProps {
  organizationName: string;
  logoSrc: string;
  backgroundColor: string;
  phone: string;
  address: string;
  email?: string;
  socialLinks?: { label: string; url: string }[];
}

export default function ContactSection({
  organizationName,
  logoSrc,
  backgroundColor,
  phone,
  address,
  email,
  socialLinks,
}: ContactSectionProps) {
  return (
    <section className={`${backgroundColor} text-gray-700 py-16 px-4 rounded-[20px] md:rounded-none overflow-hidden`}>
      <div className="max-w-lg mx-auto text-center">
        {/* Logo */}
        <img
          src={logoSrc}
          alt={`Logo ${organizationName}`}
          className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-5 drop-shadow-md"
        />

        {/* Nombre */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{organizationName}</h2>

        {/* Datos de contacto */}
        <div className="space-y-3 text-base md:text-lg text-gray-700">
          {email && (
            <p>
              <span className="font-semibold text-gray-700">Email: </span>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </p>
          )}
          {phone && (
            <p>
              <span className="font-semibold text-gray-700">Teléfono: </span>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:underline">
                {phone}
              </a>
            </p>
          )}
          {address && (
            <p>
              <span className="font-semibold text-gray-700">Dirección: </span>
              {address}
            </p>
          )}
        </div>

        {/* Redes sociales */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex justify-center gap-4 mt-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/15 hover:bg-white/25 rounded-full text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
