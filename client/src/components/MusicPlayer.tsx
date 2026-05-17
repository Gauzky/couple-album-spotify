import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { Song } from '@/contexts/CoupleContext';

interface MusicPlayerProps {
  songs: Song[];
  onSongChange?: (song: Song) => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ songs, onSongChange }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    onSongChange?.(currentSong);
  }, [currentSongIndex, currentSong, onSongChange]);

  // Carregar áudio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentSong.audioUrl || '';
    
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      handleNextSong();
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSong.audioUrl]);

  // Controlar play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.error('Erro ao tocar áudio:', err);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Controlar volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentTime(0);
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
  };

  const handlePreviousSong = () => {
    setCurrentTime(0);
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    if (!isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const displayDuration = duration || currentSong.duration;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background blur effect */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-40 -z-10 transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(255, 107, 157, 0.3) 0%, rgba(255, 71, 87, 0.2) 100%)`,
        }}
      />

      {/* Player Container */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
        {/* Album Cover */}
        <div className="mb-8 relative group">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={currentSong.coverUrl}
              alt={currentSong.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Play indicator overlay */}
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                <div className="flex gap-1">
                  <div className="w-1 h-8 bg-pink-500 rounded animate-pulse" />
                  <div className="w-1 h-6 bg-pink-500 rounded animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div className="w-1 h-8 bg-pink-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Song Info */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-2">{currentSong.title}</h3>
          <p className="text-sm text-pink-400">{currentSong.artist}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max={displayDuration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-pink-500"
            style={{
              background: `linear-gradient(to right, #ff6b9d 0%, #ff6b9d ${displayDuration ? (currentTime / displayDuration) * 100 : 0}%, rgba(255,255,255,0.1) ${displayDuration ? (currentTime / displayDuration) * 100 : 0}%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(displayDuration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <button
            onClick={handlePreviousSong}
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
          >
            <SkipBack size={24} className="text-white" />
          </button>

          <button
            onClick={handlePlayPause}
            className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-pink-500/50"
          >
            {isPlaying ? (
              <Pause size={32} className="text-white fill-white" />
            ) : (
              <Play size={32} className="text-white fill-white ml-1" />
            )}
          </button>

          <button
            onClick={handleNextSong}
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110"
          >
            <SkipForward size={24} className="text-white" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-200"
          >
            {isMuted ? (
              <VolumeX size={20} className="text-white" />
            ) : (
              <Volume2 size={20} className="text-white" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (isMuted) setIsMuted(false);
            }}
            className="flex-1 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-pink-500"
            style={{
              background: `linear-gradient(to right, #ff6b9d 0%, #ff6b9d ${volume}%, rgba(255,255,255,0.1) ${volume}%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
        </div>

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          crossOrigin="anonymous"
        />
      </div>
    </div>
  );
};
