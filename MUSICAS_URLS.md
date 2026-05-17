# URLs de Áudio para as Músicas

## Como Usar:

1. Abra o arquivo `client/src/contexts/CoupleContext.tsx`
2. Procure por `songs: [`
3. Substitua os `audioUrl` pelas URLs abaixo

---

## Opção 1: URLs de Teste (Funcionam 100%)

```javascript
songs: [
  {
    id: '1',
    title: 'The First Time',
    artist: 'Damiano David',
    duration: 218,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273a1234567890abcdef123456',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '2',
    title: 'Velha Infância',
    artist: 'Tribalistas',
    duration: 240,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273b1234567890abcdef123456',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: '3',
    title: 'Iris',
    artist: 'The Goo Goo Dolls',
    duration: 280,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273c1234567890abcdef123456',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: '4',
    title: 'Que Sorte A Nossa',
    artist: 'Matheus & Kauan',
    duration: 188,
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b273d1234567890abcdef123456',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
],
```

---

## Opção 2: Usar Suas Próprias Músicas

### Se você tem arquivo MP3 no seu computador:

1. Coloque o arquivo MP3 em: `couple-album-spotify/client/public/musicas/`
2. Use a URL: `audioUrl: '/musicas/nome-do-arquivo.mp3'`

Exemplo:
```javascript
audioUrl: '/musicas/the-first-time.mp3',
```

---

## Opção 3: Usar URLs do YouTube

Se quiser usar YouTube, precisa de um proxy. Deixa que eu configuro isso para você!

---

## ⚠️ Importante:

- **Spotify**: Links diretos NÃO funcionam por CORS (segurança)
- **YouTube**: Também tem restrição de CORS
- **Melhor opção**: Usar arquivos MP3 locais ou URLs públicas sem restrição

---

## 🚀 Próximos Passos:

1. Escolha uma opção acima
2. Edite o arquivo `CoupleContext.tsx`
3. Salve (Ctrl + S)
4. Atualize o navegador (F5)
5. Teste o player!

**Pronto! A música deve tocar agora!** 🎵
