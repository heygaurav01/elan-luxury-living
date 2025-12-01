import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import galleryGolf from '@/assets/gallery-golf.png';
import galleryGarden from '@/assets/gallery-garden.png';
import galleryPool from '@/assets/gallery-pool.png';
import heroTowers from '@/assets/hero-towers.png';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: heroTowers, alt: 'Max Estate 361 - Aerial View of Towers', title: 'Majestic Towers' },
    { src: galleryGolf, alt: 'Max Estate 361 - Golf Course View', title: 'Golf Course Living' },
    { src: galleryPool, alt: 'Max Estate 361 - Pool Area', title: 'Resort-Style Pool' },
    { src: galleryGarden, alt: 'Max Estate 361 - Garden Area', title: 'Landscaped Gardens' },
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-copper font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Visual Tour
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Project <span className="text-copper">Gallery</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-2xl mx-auto">
            Explore the stunning visuals of Max Estate 361 - where luxury meets nature
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-copper to-gold mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`aspect-video ${index === 0 ? 'md:aspect-[21/9]' : ''}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-cream font-serif text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream/70 hover:text-cream transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrev}
            className="absolute left-4 lg:left-8 text-cream/70 hover:text-cream transition-colors p-2 bg-charcoal/50 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 lg:right-8 text-cream/70 hover:text-cream transition-colors p-2 bg-charcoal/50 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-6xl max-h-[80vh] mx-4">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-cream text-center mt-4 font-serif text-xl">
              {images[selectedImage].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
