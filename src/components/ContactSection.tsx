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
  legalMarks?: string;
  legalAbout?: string;
}

export default function ContactSection({
  organizationName,
  logoSrc,
  backgroundColor,
  contacts,
  socialLinks,
  legalMarks,
  legalAbout,
}: ContactSectionProps) {
  return (
    <section className={`${backgroundColor} text-gray-700 py-5 px-5 rounded-[20px] md:rounded-none overflow-hidden`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <img
          src={logoSrc}
          alt={`Logo ${organizationName}`}
          className="w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
        />

        {/* Bloques de contacto: 3 en horizontal (desktop), apilados (mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-left">
          {contacts.map((contact, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h3 style={{ fontSize: '0.9rem', lineHeight: '1.2' }}
                className="text-lg text-gray-900">{contact.title}</h3>
              {contact.phone && (
                <p style={{ fontSize: '0.7rem', lineHeight: '1.2' }}
                  className="text-base md:text-lg">
                  <span className="text-gray-800">Teléfono: </span>
                  {/*<a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:underline">*/}
                  {contact.phone}
                  {/*</a>*/}
                </p>
              )}
              {contact.address && (
                <p style={{ fontSize: '0.7rem', lineHeight: '1.2' }}
                  className="text-base md:text-lg">
                  <span className="text-gray-800">Dirección: </span>
                  {contact.address}
                </p>
              )}
              {contact.email && (
                <p style={{ fontSize: '0.7rem', lineHeight: '1.2' }}
                  className="text-base md:text-lg">
                  <span className="text-gray-800">Email: </span>
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Legales de la asociación */}
        {legalMarks && (
          <p className="text-left" style={{ color: '#171717', fontSize: '0.5rem', lineHeight: '1.4', marginTop: '2rem' }}>
            {legalMarks}
          </p>
        )}
        {legalAbout && (
          <p className="text-left" style={{ color: '#171717', fontSize: '0.5rem', lineHeight: '1.4', marginTop: '0.6rem' }}>
            {legalAbout}
          </p>
        )}

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

        <hr className="mt-6"></hr>
      </div>
    </section>
  );
}
