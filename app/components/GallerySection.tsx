"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "../lib/data";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="mt-4 mb-6">A Visual Journey Through Our Cuisine</h2>
          <p className="text-foreground-muted text-lg">
            Explore the artistry and passion that goes into every dish we
            create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-2xl glass-card cursor-pointer group"
              onClick={() => setSelectedImage(index)}
              style={{
                animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-background" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  (selectedImage - 1 + galleryImages.length) %
                    galleryImages.length
                );
              }}
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
              className="absolute right-4 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % galleryImages.length);
              }}
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Image */}
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
