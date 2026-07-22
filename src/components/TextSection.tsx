interface TextSectionProps {
  paragraphs: string[];
}

export default function TextSection({ paragraphs }: TextSectionProps) {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto rounded-[20px] md:rounded-none bg-gray-200 md:bg-transparent">
      <div className="space-y-5 text-gray-600 leading-relaxed text-lg text-center">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
