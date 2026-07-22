interface TextSectionProps {
  title?: string;
  paragraphs?: string[];
  alignment?: 'left' | 'center' | 'right';
}

export default function TextSection({
  title = 'Nuestra Misión',
  paragraphs = [
    'Grupo Oncologico Vivir Mejor- Casa Amiga fue creado por un grupo de pacientes oncológicos que vieron la necesidad que existía de contar con un lugar físico para alojar a pacientes oncológicos o familiares que llegan desde distintos puntos del país, a realizarse tratamientos o estudios médicos.',
    'Estos pacientes generalmente no cuentan con los recursos necesarios para afrontar la situación, lo que sumado a la angustia y preocupación por su salud, hace que los casos sean aun mas complejos.',
    'Casa Amiga brinda de forma gratuita estadía, alimentación, abrigo, artículos de higiene y todo lo necesario para que tanto el paciente como su entorno familiar puedan enfocarse en su recuperación.',
  ],
  alignment = 'center',
}: TextSectionProps) {
  const alignClass =
    alignment === 'left'
      ? 'text-left'
      : alignment === 'right'
        ? 'text-right'
        : 'text-center';

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto rounded-[20px] md:rounded-none bg-gray-200 md:bg-transparent">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
        {title}
      </h2>
      <div className={`space-y-5 text-gray-600 leading-relaxed text-lg ${alignClass}`}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
