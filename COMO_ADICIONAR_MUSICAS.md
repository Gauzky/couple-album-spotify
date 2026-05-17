# 🎵 Como Adicionar Suas Músicas

## 📁 Passo 1: Colocar os Arquivos de Áudio

1. Abra a pasta: `couple-album-spotify/client/public/musicas/`
2. Coloque seus arquivos MP3 lá
3. Exemplo: `musica1.mp3`, `musica2.mp3`, etc

---

## 📝 Passo 2: Editar o Arquivo de Configuração

1. Abra o arquivo: `client/src/contexts/CoupleContext.tsx`
2. Procure por `songs: [`
3. Edite assim:

```javascript
songs: [
  {
    id: '1',
    title: 'Nome da Música 1',
    artist: 'Nome do Artista 1',
    duration: 180, // em segundos (3 min = 180 seg)
    coverUrl: 'https://i.scdn.co/image/...', // URL da capa
    audioUrl: '/musicas/musica1.mp3', // Nome do arquivo
  },
  {
    id: '2',
    title: 'Nome da Música 2',
    artist: 'Nome do Artista 2',
    duration: 240,
    coverUrl: 'https://i.scdn.co/image/...',
    audioUrl: '/musicas/musica2.mp3',
  },
  {
    id: '3',
    title: 'Nome da Música 3',
    artist: 'Nome do Artista 3',
    duration: 200,
    coverUrl: 'https://i.scdn.co/image/...',
    audioUrl: '/musicas/musica3.mp3',
  },
  {
    id: '4',
    title: 'Nome da Música 4',
    artist: 'Nome do Artista 4',
    duration: 220,
    coverUrl: 'https://i.scdn.co/image/...',
    audioUrl: '/musicas/musica4.mp3',
  },
],
```

---

## 🖼️ Como Conseguir a Capa (coverUrl)

1. Abra o Spotify
2. Clique na música
3. Clique com botão direito na capa
4. Selecione "Copiar endereço da imagem"
5. Cole no `coverUrl`

---

## ⏱️ Como Descobrir a Duração

1. Abra o Spotify ou o arquivo de áudio
2. Veja o tempo total (ex: 3:45)
3. Converta para segundos: (3 × 60) + 45 = 225 segundos
4. Coloque em `duration`

---

## 📋 Exemplo Prático:

Se você tem:
- Arquivo: `amor.mp3` (duração 3:30)
- Artista: João Silva
- Capa: https://i.scdn.co/image/ab67616d0000b273...

Fica assim:

```javascript
{
  id: '1',
  title: 'Amor',
  artist: 'João Silva',
  duration: 210, // 3:30 = 210 segundos
  coverUrl: 'https://i.scdn.co/image/ab67616d0000b273...',
  audioUrl: '/musicas/amor.mp3',
},
```

---

## ✅ Passo 3: Salvar e Testar

1. Salve o arquivo (Ctrl + S)
2. Atualize o navegador (F5)
3. Clique no Play
4. **Pronto! Sua música vai tocar!** 🎶

---

## 🎯 Resumo Rápido:

1. ✅ Coloque o MP3 em: `client/public/musicas/`
2. ✅ Edite `CoupleContext.tsx`
3. ✅ Adicione as informações
4. ✅ Salve e atualize
5. ✅ Teste!

---

## 💡 Dicas:

- Use nomes simples para os arquivos (sem espaços)
- Exemplo: `musica-1.mp3` ✅ (bom)
- Exemplo: `minha música.mp3` ❌ (ruim)
- Você pode ter até 4 músicas (ou mais, é só adicionar mais objetos)

---

**Pronto! Agora é só adicionar seus arquivos e editar o arquivo de configuração!** 💕✨
