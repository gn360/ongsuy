import { useState } from 'react';
import ImageModal from './ImageModal';

interface GallerySectionProps {
  title: string;
  video_url: string;
  text: string;
  images: { src: string; alt: string }[];
}

export default function GallerySection({
  title,
  video_url,
  text,
  images,
}: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrev = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null,
    );
  };

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null,
    );
  };

  return (
    <section style={{ backgroundColor: '#F1B635' }} className="py-10 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <h2 style={{ color: 'black', fontSize: '1.5rem', fontWeight: 700, lineHeight: '1.1' }}
          className="leading-tight font-bold mb-6 text-center">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

          {video_url && (
            <div className="col-span-full w-full aspect-video mb-0">
              <iframe
                className="w-full h-full rounded-xl"
                src={video_url}
                title="Gallery Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <p style={{ color: 'black', marginTop: '0.8rem', fontSize: '1rem', lineHeight: '1.2', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
            className="text-start col-span-full mb-3">
            {text}
          </p>

          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md bg-white aspect-square cursor-pointer"
              onClick={() => openModal(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 font-medium">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <ImageModal
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          onClose={closeModal}
          onPrev={goToPrev}
          onNext={goToNext}
          hasPrev={images.length > 1}
          hasNext={images.length > 1}
        />
      )}
    </section>
  );
}
