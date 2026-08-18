const galleryImages = Array.from(
  { length: 29 },
  (_, index) => `/gallery/gallery-${String(index + 1).padStart(2, "0")}.webp`
);

function GalleryGroup({ duplicate = false }) {
  return (
    <div
      className="gallery-marquee__group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {galleryImages.map((src, index) => (
        <figure className="gallery-marquee__item" key={`${src}-${index}`}>
          <img
            src={src}
            alt={duplicate ? "" : `Amas & Rhod Law gallery artwork ${index + 1}`}
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}

export default function GalleryMarquee() {
  return (
    <section
      className="gallery-marquee-section bg-gray-50 py-16 md:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="px-6 text-center mb-10">
        <h2
          id="gallery-heading"
          className="text-4xl font-garamond md:text-5xl font-bold text-blue-950"
        >
          From Our Gallery
        </h2>
      </div>

      <div className="gallery-marquee" aria-label="Amas & Rhod Law gallery">
        <div className="gallery-marquee__track">
          <GalleryGroup />
          <GalleryGroup duplicate />
        </div>
      </div>
    </section>
  );
}
