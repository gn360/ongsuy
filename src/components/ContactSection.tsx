interface ContactItem {
  title: string;
  phone?: string;
  address?: string;
  email?: string;
}

interface ContactSectionProps {
  organizationName: string;
  logoSrc: string;
  backgroundColor: string;
  contacts: ContactItem[];
  socialLinks?: { label: string; url: string }[];
}

export default function ContactSection({
  organizationName,
  logoSrc,
  backgroundColor,
  contacts,
  socialLinks,
}: ContactSectionProps) {
  return (
    <section className={`${backgroundColor} text-gray-700 py-16 px-4 rounded-[20px] md:rounded-none overflow-hidden`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <img
          src={logoSrc}
          alt={`Logo ${organizationName}`}
          className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-5 drop-shadow-md"
        />

        {/* Nombre */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{organizationName}</h2>

        {/* Bloques de contacto: 3 en horizontal (desktop), apilados (mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-left">
          {contacts.map((contact, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h3 className="font-bold text-lg text-gray-900">{contact.title}</h3>
              {contact.phone && (
                <p className="text-base md:text-lg">
                  <span className="font-semibold text-gray-800">Teléfono: </span>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </p>
              )}
              {contact.address && (
                <p className="text-base md:text-lg">
                  <span className="font-semibold text-gray-800">Dirección: </span>
                  {contact.address}
                </p>
              )}
              {contact.email && (
                <p className="text-base md:text-lg">
                  <span className="font-semibold text-gray-800">Email: </span>
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </p>
              )}
            </div>
          ))}
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
