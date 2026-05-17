# Ideias de Design - Álbum de Casal Spotify Style

## Conceito Selecionado: **Spotify Luxe + Romance Cinematográfico**

### Design Movement
**Neomorphism Moderno + Glassmorphism Elegante** - Inspirado no design premium do Spotify com toques de romance cinematográfico. Foco em profundidade, transparência e iluminação suave.

### Core Principles

1. **Escuridão Envolvente**: Fundo escuro (quase preto) como base, criando intimidade e foco no conteúdo
2. **Detalhe em Rosa/Vermelho Suave**: Acentos delicados em tons quentes (rose, coral suave) para romantismo
3. **Glassmorphism Premium**: Cards com vidro fosco, bordas suaves e blur de fundo
4. **Cinematografia**: Blur dinâmico baseado na capa da música, criando profundidade visual

### Color Philosophy

- **Background Principal**: `#0f0f0f` (quase preto absoluto)
- **Accent Rosa**: `#ff6b9d` (rosa suave, romântico)
- **Accent Vermelho**: `#ff4757` (vermelho suave, apaixonado)
- **Gradiente**: Transições suaves entre rosa e roxo (`#ff6b9d` → `#a78bfa`)
- **Texto**: Branco puro com opacidade variável para hierarquia
- **Cards**: `rgba(255, 255, 255, 0.05)` com backdrop blur

### Layout Paradigm

- **Hero Section**: Player de música centralizado, ocupando 70% da viewport
- **Background Dinâmico**: Imagem desfocada da capa da música com overlay gradiente
- **Navegação Flutuante**: Menu minimalista no topo, integrado com o design
- **Galeria Abaixo**: Layout tipo Pinterest com cards em glassmorphism
- **Seções Laterais**: Contador de relacionamento e mensagem romântica em cards flutuantes

### Signature Elements

1. **Partículas/Flocos Animados**: Pequenos pontos de luz que fluem suavemente pelo fundo
2. **Glow Effects**: Halos suaves ao redor do player e cards principais
3. **Blur Dinâmico**: Background da capa com blur que responde à música
4. **Cursor Personalizado**: Cursor elegante em rosa/branco com efeito de trilha

### Interaction Philosophy

- **Transições Suaves**: Todas as interações com easing `cubic-bezier(0.23, 1, 0.32, 1)`
- **Hover Effects**: Cards ganham brilho e elevação suave
- **Play/Pause**: Botão com escala e glow ao interagir
- **Scroll Revelação**: Elementos aparecem com fade-in ao scroll

### Animation

- **Entrada do Site**: Loader animado com partículas, fade-in suave
- **Player**: Pulsação suave ao tocar, barra de progresso fluida
- **Cards de Fotos**: Hover com zoom suave (1.02x) + aumento de glow
- **Partículas**: Movimento contínuo, não-linear, com variação de velocidade
- **Mensagem Romântica**: Aparecimento lento com fade-in + slide suave
- **Contador**: Números com transição suave ao mudar

### Typography System

- **Display/Títulos**: `Playfair Display` (elegante, cinematográfico)
- **Subtítulos**: `Poppins Bold` (moderno, legível)
- **Body**: `Inter` (limpo, profissional)
- **Hierarquia**:
  - Títulos principais: 48px, Playfair Display
  - Nomes de músicas: 32px, Poppins Bold
  - Artistas: 18px, Inter Regular
  - Texto corpo: 14px, Inter Regular

---

## Referências Visuais

- Spotify Premium Dark Mode
- Apple Music Design
- Tidal Premium Interface
- Dribbble: Glassmorphism Music Players
- Behance: Romantic Web Design

---

## Paleta de Cores Final

| Elemento | Cor | Uso |
|----------|-----|-----|
| Background | `#0f0f0f` | Fundo principal |
| Accent Primário | `#ff6b9d` | Botões, highlights |
| Accent Secundário | `#ff4757` | Hover, ênfase |
| Glass Light | `rgba(255,255,255,0.05)` | Cards |
| Glass Border | `rgba(255,255,255,0.1)` | Bordas |
| Texto Principal | `#ffffff` | Títulos, texto principal |
| Texto Secundário | `rgba(255,255,255,0.7)` | Subtítulos |
| Texto Terciário | `rgba(255,255,255,0.5)` | Labels |

---

## Estrutura de Páginas

1. **Home** - Player + Galeria + Contador
2. **Nossa História** - Seção narrativa com timeline
3. **Memórias** - Galeria expandida com categorias
4. **Nossa Música** - Playlist completa com detalhes

---

**Objetivo Final**: Um site que parece um aplicativo premium real, com visual cinematográfico e emocional, perfeito para surpreender alguém especial.
