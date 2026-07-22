import { useState } from 'react';
import ImageModal from './ImageModal';

interface GallerySectionProps {
  title: string;
  images: { src: string; alt: string }[];
}

export default function GallerySection({
  title,
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
    <section className="py-16 px-4 bg-white rounded-[20px] md:rounded-none overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md bg-white aspect-[3/2] cursor-pointer"
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
