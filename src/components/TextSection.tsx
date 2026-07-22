interface TextSectionProps {
  title?: string;
  paragraphs?: string[];
  alignment?: 'left' | 'center' | 'right';
}

export default function TextSection({
  title = 'Nuestra Misión',
  paragraphs = [
    'Somos una organización sin fines de lucro dedicada a transformar vidas a través de la solidaridad y el trabajo comunitario. Creemos en el poder de la colaboración para generar cambios reales y sostenibles.',
    'Desde nuestra fundación, hemos impactado positivamente a miles de personas mediante programas de educación, salud y desarrollo social. Cada donación, cada voluntario y cada proyecto nos acerca un paso más a nuestra visión.',
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
    <section className="py-16 px-4 max-w-3xl mx-auto rounded-[20px] md:rounded-none bg-white md:bg-transparent">
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
