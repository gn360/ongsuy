interface HeroSectionProps {
  organizationName: string;
  logoSrc: string;
  backgroundColor: string;
  tagline?: string;
}

export default function HeroSection({
  organizationName,
  logoSrc,
  backgroundColor,
  tagline,
}: HeroSectionProps) {
  return (
    <section
      style={{ backgroundColor }}
      className="text-white py-20 px-4 flex flex-col items-center justify-center text-center min-h-[50vh] rounded-[20px] md:rounded-none overflow-hidden"
    >
      {logoSrc && (
        <div className="rounded-lg overflow-hidden inline-block mb-6">
          <img
            src={logoSrc}
            alt={`Logo ${organizationName}`}
            className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-lg"
          />
        </div>
      )}
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
        {organizationName}
      </h1>
      {tagline && (
        <p className="text-lg md:text-xl text-white/80 max-w-xl">{tagline}</p>
      )}
    </section>
  );
}
