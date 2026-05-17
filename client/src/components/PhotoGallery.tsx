import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Photo } from '@/contexts/CoupleContext';

interface PhotoGalleryProps {
  photos: Photo[];
  onPhotoClick?: (photo: Photo) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onPhotoClick }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => {
              setSelectedPhoto(photo);
              onPhotoClick?.(photo);
            }}
            className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-square shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                console.error('Erro ao carregar imagem:', photo.url);
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glassmorphism card on hover */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-white font-accent text-sm font-medium truncate">{photo.caption}</p>
              <p className="text-white/60 text-xs font-accent mt-1">{photo.date}</p>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/50"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-200 hover:scale-110"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full h-auto max-h-[70vh] object-cover"
            />

            {/* Info */}
            <div className="p-6 bg-gradient-to-t from-black/40 to-transparent">
              <h3 className="text-xl font-bold text-white font-display mb-2">{selectedPhoto.caption}</h3>
              <p className="text-white/70 text-sm font-accent">{selectedPhoto.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
