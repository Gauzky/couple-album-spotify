import React, { createContext, useContext, useState } from 'react';

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number;
  coverUrl: string;
  audioUrl?: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  date: string;
}

export interface CoupleData {
  coupleStartDate: Date;
  songs: Song[];
  photos: Photo[];
  romanticMessage: string;
  storyTitle: string;
  storyDescription: string;
}

interface CoupleContextType {
  data: CoupleData;
  updateCoupleData: (data: Partial<CoupleData>) => void;
  addPhoto: (photo: Photo) => void;
  removePhoto: (id: string) => void;
  updatePhoto: (id: string, photo: Partial<Photo>) => void;
}

const CoupleContext = createContext<CoupleContextType | undefined>(undefined);

export const CoupleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<CoupleData>({
    coupleStartDate: new Date('2024-02-19'), // Data de exemplo - pode ser alterada
    songs: [
       {
        id: '1',
        title: 'The First Time',
        artist: 'Damiano David',
        duration: 218,
        coverUrl: 'https://imgs.search.brave.com/08qdo_SBPeM8HkOEZfqvQ4hVgsLyxHQZFNEGkVdnLb0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS96/S0VLWENMVDZ5Zy9t/YXhyZXNkZWZhdWx0/LmpwZw',
        audioUrl: '/musicas/musica1.mp3',
      },
      {
        id: '2',
        title: 'Velha Infância',
        artist: 'Tribalistas',
        duration: 240,
        coverUrl: 'https://imgs.search.brave.com/HMVr6V4K49m_GCzD5cIiratGAAnnz4-YILKfYLE7mf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS8zMDB4MzAwL2I3/MTVmYzExZmYzNDgz/NzRhZGUwZjkwM2Vi/ZTVkYjI0LmpwZw',
        audioUrl: '/musicas/musica2.mp3',
      },
      {
        id: '3',
        title: 'Iris',
        artist: 'The Goo Goo Dolls',
        duration: 280,
        coverUrl: 'https://imgs.search.brave.com/GKfGkARi3p44tgZn3JeKL_JSBucnHn5xI732DqPY09I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wMi50/cnJzZi5jb20vaW1h/Z2UvZmdldC9jZi83/NzQvMC9pbWFnZXMu/dGVycmEuY29tLzIw/MjUvMDQvMTkvMTkz/ODM0MjAyMy1nb28t/Z29vLWRvbGxzLTIt/d21nLXJlcHJpc2Uu/cG5n',
        audioUrl: '/musicas/musica3.mp3',
      },
      {
        id: '4',
        title: 'Que Sorte A Nossa',
        artist: 'Matheus & Kauan',
        duration: 188,
        coverUrl: 'https://imgs.search.brave.com/KPjjgj7BIjwZmCG6WlSXTz1wS2mB69uCu3zYqusCzl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvcHQvdGh1bWIv/MC8wOS9RdWVfU29y/dGVfYV9Ob3NzYS5q/cGcvMjUwcHgtUXVl/X1NvcnRlX2FfTm9z/c2EuanBn',
        audioUrl: '/musicas/musica4.mp3',
      },  
    ],
    photos: [

      {
    id: '1',
    url: '/fotos/foto1.jpg',
    caption: 'eu fofinhooo',
    date: '',
  },

  {
    id: '1',
    url: '/fotos/foto2.jpg',
    caption: 'você gostosona',
    date: '',
  },
  
  {
    id: '1',
    url: '/fotos/foto3.jpg',
    caption: 'nós dois no começo do relacionamento MUITOOO FELIZESS',
    date: '',
  },

  {
    id: '1',
    url: '/fotos/foto4.jpg',
    caption: 'Nossa primeira vez dançando juntos na escola, esse dia foi perfeito ao seu lado',
    date: '',
  },
  {
    id: '1',
    url: '/fotos/foto5.jpg',
    caption: 'você e eu di paiçooo',
    date: '',
  },

  {
    id: '1',
    url: '/fotos/foto6.jpg',
    caption: 'eu mimindo',
    date: '',
  },

  {
    id: '1',
    url: '/fotos/foto7.jpg',
    caption: 'Você novamente PERFEITA',
    date: '',
  },

  {
    id: '1',
    url: '/fotos/foto8.jpg',
    caption: 'EU E VOCÊ DE DOGHUINHUUU',
    date: '',
  },

  {
    id: '1',
    url: '/fotos/foto9.jpg',
    caption: 'Você todaa exibidaaa',
    date: '',
  },

  {
    id: '1',
    url: '/fotos/foto10.jpg',
    caption: 'VX TODA FOFINHAAA',
    date: '',
  },
  
    ],
    romanticMessage: '💕 Cada momento com você é um tesouro que guardo no meu coração. Você é minha música favorita.',
    storyTitle: 'Meu amor por você',
    storyDescription: 'Eu te amo muito meu amor, cada dia que passa eu amo mais e mais você, quero me casar com você, acorda ao seu lado, ter uma familia com você, você é a pessoa mais especial pra mim meu amor, é meu tesouro. Te amo muito❤️',
  });

  const updateCoupleData = (newData: Partial<CoupleData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const addPhoto = (photo: Photo) => {
    setData((prev) => ({
      ...prev,
      photos: [...prev.photos, photo],
    }));
  };

  const removePhoto = (id: string) => {
    setData((prev) => ({
      ...prev,
      photos: prev.photos.filter((p) => p.id !== id),
    }));
  };

  const updatePhoto = (id: string, photo: Partial<Photo>) => {
    setData((prev) => ({
      ...prev,
      photos: prev.photos.map((p) => (p.id === id ? { ...p, ...photo } : p)),
    }));
  };

  return (
    <CoupleContext.Provider value={{ data, updateCoupleData, addPhoto, removePhoto, updatePhoto }}>
      {children}
    </CoupleContext.Provider>
  );
};

export const useCoupleData = () => {
  const context = useContext(CoupleContext);
  if (!context) {
    throw new Error('useCoupleData must be used within CoupleProvider');
  }
  return context;
};

