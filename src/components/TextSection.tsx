interface TextSectionProps {
  title: string;
  paragraphs: string[];
}

export default function TextSection({ title, paragraphs }: TextSectionProps) {
  return (
    <section style={{ backgroundColor: '#C6B9E2' }}
      className="py-5 px-5 max-w-5xl mx-auto mb-5 rounded-[20px]">

      <div style={{ lineHeight: '1.1' }}
        className="text-gray-900 leading-relaxed text-lg">

        <h1 style={{ color: 'black', fontSize: '1.5rem', fontWeight: 700, lineHeight: '1.1' }}>
          {title}
        </h1>

        {paragraphs.map((p, i) => (
          <p key={i} style={{ marginTop: '0.8rem', fontSize: '1rem', lineHeight: '1.2' }}>{p}</p>
        ))}
      </div>
    </section>
  );
}
