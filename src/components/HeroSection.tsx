interface HeroSectionProps {
  organizationName?: string;
  logoSrc?: string;
  backgroundColor?: string;
  tagline?: string;
}

export default function HeroSection({
  organizationName = 'Nombre de la ONG',
  logoSrc = '/logo.svg',
  backgroundColor = 'bg-primary-700',
  tagline = 'Comprometidos con un mundo mejor',
}: HeroSectionProps) {
  return (
    <section
      className={`${backgroundColor} text-white py-20 px-4 flex flex-col items-center justify-center text-center min-h-[50vh] rounded-[20px] md:rounded-none overflow-hidden`}
    >
      <img
        src={logoSrc}
        alt={`Logo ${organizationName}`}
        className="w-28 h-28 md:w-36 md:h-36 object-contain mb-6 drop-shadow-lg"
      />
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
        {organizationName}
      </h1>
      <p className="text-lg md:text-xl text-white/80 max-w-xl">{tagline}</p>
    </section>
  );
}
