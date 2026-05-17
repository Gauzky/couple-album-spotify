import React, { useState, useEffect } from 'react';
import { MusicPlayer } from '@/components/MusicPlayer';
import { RelationshipCounter } from '@/components/RelationshipCounter';
import { PhotoGallery } from '@/components/PhotoGallery';
import { RomanticMessage } from '@/components/RomanticMessage';
import { ParticleBackground } from '@/components/ParticleBackground';
import { useCoupleData } from '@/contexts/CoupleContext';
import { Song } from '@/contexts/CoupleContext';

export default function Home() {
  const { data } = useCoupleData();
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="mb-8 relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-white/10 border-t-pink-500 animate-spin" />
          </div>
          <p className="text-white/60 font-accent">Carregando seu álbum especial...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Main background image with blur */}
      {currentSong && (
        <div
          className="fixed inset-0 -z-10 transition-all duration-500"
          style={{
            backgroundImage: `url(${currentSong.coverUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(80px)',
            opacity: 0.15,
          }}
        />
      )}

      {/* Gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/5 backdrop-blur-sm bg-black/30 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl">💕</div>
              <h1 className="text-xl font-bold text-white font-display">Nosso Álbum</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#player" className="text-white/70 hover:text-white transition-colors font-accent text-sm">
                Música
              </a>
              <a href="#gallery" className="text-white/70 hover:text-white transition-colors font-accent text-sm">
                Fotos
              </a>
              <a href="#story" className="text-white/70 hover:text-white transition-colors font-accent text-sm">
                Nossa História
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          {/* Hero section with player */}
          <section id="player" className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="flex justify-center">
              <MusicPlayer songs={data.songs} onSongChange={setCurrentSong} />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display leading-tight">
                  Nossa Música
                </h2>
                <p className="text-white/70 font-accent text-lg leading-relaxed">
                  Cada nota, cada palavra, cada momento... Tudo nos lembra um do outro. Aqui estão as músicas que
                  definem nosso amor.
                </p>
              </div>
              <RomanticMessage message={data.romanticMessage} delay={500} />
            </div>
          </section>

          {/* Relationship counter */}
          <section className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <RelationshipCounter startDate={data.coupleStartDate} />
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 font-display">Cada Momento Importa</h3>
                <p className="text-white/70 font-accent text-base leading-relaxed">
                  Desde o primeiro dia, cada segundo ao seu lado é precioso. Cada abraço, cada beijo, cada risada...
                  Tudo é especial. Tudo é nosso.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-2xl font-bold text-pink-400 font-display">∞</p>
                  <p className="text-white/60 text-sm font-accent mt-2">Para Sempre</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="text-2xl font-bold text-pink-400 font-display">💑</p>
                  <p className="text-white/60 text-sm font-accent mt-2">Juntos</p>
                </div>
              </div>
            </div>
          </section>

          {/* Photo gallery section */}
          <section id="gallery" className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 font-display">Nossa Galeria</h2>
              <p className="text-white/70 font-accent text-lg">
                Momentos capturados, memórias eternizadas. Cada foto conta uma história do nosso amor.
              </p>
            </div>
            {data.photos.length > 0 ? (
              <PhotoGallery photos={data.photos} />
            ) : (
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                <p className="text-white/60 font-accent mb-4">Nenhuma foto adicionada ainda</p>
                <p className="text-white/40 text-sm font-accent">
                  Adicione fotos especiais do seu casal para criar uma galeria memorável
                </p>
              </div>
            )}
          </section>

          {/* Story section */}
          <section id="story" className="py-12">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-white mb-6 font-display">{data.storyTitle}</h2>
              <p className="text-white/70 font-accent text-lg leading-relaxed mb-8">{data.storyDescription}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent mb-8" />
              <p className="text-white/60 font-accent text-center italic">
                E a nossa história continua sendo escrita a cada dia... 📖✨
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8 text-center text-white/40 font-accent text-sm">
          <p>Feito com 💕 para o amor da minha vida</p>
        </footer>
      </div>
    </div>
  );
}

