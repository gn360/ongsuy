interface HeroSectionProps {
  organizationName: string;
  logoSrc: string;
  backgroundColor: string;
}

export default function HeroSection({
  organizationName,
  logoSrc,
  backgroundColor,
}: HeroSectionProps) {
  return (
    <section
      style={{ backgroundColor, minHeight: '20vh' }}
      className="text-white p-0 flex flex-col items-center justify-center text-center min-h-[25vh] rounded-[20px] md:rounded-none overflow-hidden"
    >
      {logoSrc && (
        <img
          src={logoSrc}
          alt={`Logo ${organizationName}`}
          style={{ width: '15rem', height: '10rem' }}
          className="w-48 h-28 md:w-48 md:h-28 object-contain mb-0"
        />
      )}
      {/* <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
        {organizationName}
      </h1>
      {tagline && (
        <p className="text-lg md:text-xl text-white/80 max-w-xl">{tagline}</p>
      )}*/}
    </section>
  );
}
