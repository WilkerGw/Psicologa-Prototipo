# Prompt: Landing Page Moderna para Psicóloga — Next.js + TypeScript + Tailwind CSS

---

## 🎯 Contexto Geral

Crie uma **landing page completa e moderna** para a psicóloga **Vanessa Tamiello** (CRP 06/108983), com foco em transmitir **acolhimento, sofisticação e confiança**. O projeto já existe em Next.js 14 (App Router), TypeScript e Tailwind CSS. Substitua totalmente o layout atual.

**Persona do usuário-alvo:** Adultos entre 25–50 anos buscando suporte psicológico, provavelmente acessando pelo celular. Precisam sentir segurança e empatia antes de agendar.

---

## 🎨 Identidade Visual & Design System

### Paleta de Cores
```css
/* Defina no globals.css ou tailwind.config.ts */
--color-sage:       #A8B5A2;   /* verde-sálvia suave — cor primária */
--color-warm-ivory: #F7F3EE;   /* fundo principal — off-white quente */
--color-terracota:  #C17D5C;   /* accent — chamadas para ação */
--color-charcoal:   #2C2C2C;   /* texto principal */
--color-blush:      #E8D5CC;   /* fundo de seções alternadas */
--color-gold:       #B8965A;   /* detalhes dourados — títulos especiais */
```

### Tipografia
- **Display / Títulos principais:** `Playfair Display` (Google Fonts) — elegante, editorial
- **Subtítulos / Destaques:** `Cormorant Garamond` — refinado, humanista
- **Corpo de texto:** `DM Sans` — legível, moderno, acolhedor
- **Detalhes / Labels:** `DM Sans` weight 300 em uppercase com letter-spacing

### Configuração no `tailwind.config.ts`
```typescript
fontFamily: {
  display: ['"Playfair Display"', 'serif'],
  heading: ['"Cormorant Garamond"', 'serif'],
  body: ['"DM Sans"', 'sans-serif'],
},
colors: {
  sage: '#A8B5A2',
  ivory: '#F7F3EE',
  terracota: '#C17D5C',
  charcoal: '#2C2C2C',
  blush: '#E8D5CC',
  gold: '#B8965A',
}
```

### Princípios de Layout
- Fundo geral: `#F7F3EE` (ivory quente), nunca branco puro
- Seções alternadas usam `#E8D5CC` (blush)
- Elementos decorativos: linhas finas douradas, formas orgânicas com `border-radius` assimétrico
- Grid: máx. `1100px` de largura, com padding lateral generoso (`px-6 md:px-12 lg:px-20`)
- **Textura de fundo sutil:** use um SVG noise ou padrão de pontinhos suave em `opacity-[0.03]`

---

## 📁 Estrutura de Arquivos

```
app/
├── layout.tsx          ← Layout raiz com fontes e metadata
├── page.tsx            ← Home (rota /)
├── profissional/
│   └── page.tsx        ← Página Profissional
├── consultorio/
│   └── page.tsx        ← Página Consultório
├── locacao/
│   └── page.tsx        ← Locação de Salas
├── contato/
│   └── page.tsx        ← Contato
components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── ui/
│   ├── Button.tsx
│   ├── SectionTitle.tsx
│   └── DecorativeDivider.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Quote.tsx
│   ├── AboutPreview.tsx
│   ├── Services.tsx
│   ├── MediaFeatures.tsx
│   └── OfficeGallery.tsx
```

---

## 🧩 Componentes Globais

### `components/layout/Header.tsx`

**Comportamento:**
- Em desktop: barra horizontal fixa no topo com `backdrop-blur-md bg-ivory/80`
- Em mobile: hamburger menu com drawer lateral que desliza da direita
- Ao fazer scroll > 80px: adiciona sombra suave `shadow-sm` e reduz padding

**Estrutura:**
```
[Logo: borboleta SVG + "Vanessa Tamiello" em Playfair Display]  ←→  [Nav Links]  [CTA Button]
```

**Nav Links:**
- Home
- Profissional
- Consultório
- Locação de Salas
- Contato

**CTA no header:** Botão `"Agendar Consulta"` — cor terracota, borda arredondada `rounded-full`, leva ao WhatsApp

**Efeito de hover nos links:** linha dourada animada abaixo do texto (`::after` pseudoelemento que expande de 0 para 100% de largura)

**Logo:**
- Ícone de borboleta SVG estilizado em sage/gold
- Nome em `font-display` tamanho `text-xl`
- CRP em `font-body text-xs text-charcoal/50` abaixo do nome

---

### `components/layout/Footer.tsx`

**Layout em 3 colunas** (colapsa para 1 coluna no mobile):

**Coluna 1 — Identidade:**
- Logo completo (borboleta + nome)
- Tagline: *"Psicologia com acolhimento e ciência"*
- Ícones sociais: Instagram linkado para `https://www.instagram.com/psivanessatamiello/`

**Coluna 2 — Navegação rápida:**
- Links das 5 páginas

**Coluna 3 — Contato:**
- Endereço: Rua Antonio de Barros, 2687, 1º andar — Tatuapé, SP
- Tel: (11) 98109.1524
- Horários: Seg–Sex 7h–19h | Sáb–Dom 7h–13h
- Badge: "NÃO ATENDEMOS CONVÊNIOS — Particular com recibo para reembolso"

**Rodapé inferior:**
- Linha fina dourada separadora
- `© 2025 Vanessa Tamiello — Psicologia | CRP 06/108983`
- Fundo: `#2C2C2C` (charcoal) com texto em `ivory/70`

---

### `components/ui/Button.tsx`

Variantes:
```typescript
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
```

- **primary:** `bg-terracota text-white rounded-full px-8 py-3 hover:bg-terracota/90 transition-all`
- **secondary:** `border-2 border-sage text-charcoal rounded-full px-8 py-3 hover:bg-sage/10`
- **ghost:** texto com seta animada `→`
- **whatsapp:** verde WhatsApp `#25D366` com ícone SVG do WhatsApp

---

### `components/ui/SectionTitle.tsx`

Props: `{ eyebrow?: string, title: string, subtitle?: string, centered?: boolean }`

```
[eyebrow em DM Sans uppercase tracking-widest text-terracota text-xs]
[título em Playfair Display text-3xl md:text-5xl text-charcoal]
[linha decorativa: 60px de largura, 2px, cor gold]
[subtitle em DM Sans text-charcoal/60]
```

---

## 📄 Páginas

---

### 1. `app/page.tsx` — HOME

#### Seção 1: Hero

**Layout:** Full-width, altura `min-h-[90vh]`, com divisão assimétrica:
- **Lado esquerdo (60%):** conteúdo textual com padding generoso
- **Lado direito (40%):** imagem da psicóloga com moldura orgânica (blob shape usando `clip-path`)

**Conteúdo textual:**
```
[Eyebrow] "Psicologia Clínica · Tatuapé, SP"

[Título H1 — Playfair Display, text-5xl md:text-7xl]
"Cuidar de você
começa com uma
conversa."

[Parágrafo]
"Atendimentos presenciais e online para te ajudar
a entender suas emoções, desenvolver potenciais
e construir uma vida com mais equilíbrio."

[Dois botões lado a lado]
• "Agendar pelo WhatsApp" → variant whatsapp
• "Conhecer o trabalho" → variant ghost (scroll para seção Sobre)
```

**Imagem:** Foto profissional da Vanessa (polka dots, óculos, sorrindo). Use `next/image` com `object-cover`. Moldura: blob SVG como `clip-path`, borda de 3px em sage. Sombra lateral suave.

**Elemento decorativo:** Citação em Cormorant Garamond `italic`, rotacionada `-6deg`, posicionada em canto inferior esquerdo em `text-sage/30 text-8xl` — aspas ornamentais gigantes `"`.

**Animações de entrada (use `@keyframes` no Tailwind ou Framer Motion):**
- Título faz `fadeInUp` com `delay-100ms`
- Parágrafo com `delay-300ms`
- Botões com `delay-500ms`
- Imagem com `delay-200ms` + leve `scale` de 0.95→1

---

#### Seção 2: Quote/Citação

**Fundo:** `bg-sage` — largura total, padding vertical `py-16 md:py-24`

**Conteúdo centralizado:**
```
[Aspas ornamentais SVG em gold, tamanho 64px]

[Citação em Cormorant Garamond italic, text-xl md:text-2xl, text-ivory, max-w-3xl mx-auto]
"O principal objetivo da terapia psicológica não é transportar o paciente
para um impossível estado de felicidade, mas sim ajudá-lo a adquirir
firmeza e paciência diante do sofrimento."

[Autor em DM Sans, text-sm, uppercase, tracking-wider, text-ivory/60]
— Carl Gustav Jung
```

---

#### Seção 3: Sobre / Apresentação

**Layout 2 colunas** no desktop (reverso do hero — imagem à esquerda):

**Coluna imagem:** foto mais próxima (rosto/busto), forma quadrada com `rounded-3xl`, borda sage

**Coluna texto:**
```
[SectionTitle eyebrow="Sobre Mim" title="Psicologia com base científica e escuta humana"]

[3 parágrafos do site original, reescritos de forma mais moderna e direta]
Parágrafo 1: "Sou Vanessa Tamiello, psicóloga formada pela PUCSP e pós-graduada pela USP..."
Parágrafo 2: Sobre a abordagem — ajudar a entender emoções, criar estratégias, crescimento pessoal
Parágrafo 3: Atendimentos on-line e presencial

[Grid de 3 badges/chips em linha]
• "Formada pela PUCSP"
• "Pós-grad. USP"
• "CRP 06/108983"

[Botão ghost] "Ver perfil completo →" → link para /profissional
```

**Estilo dos badges:** `bg-blush text-charcoal text-xs px-4 py-2 rounded-full border border-sage/30`

---

#### Seção 4: Serviços

**Fundo:** `bg-blush`

**SectionTitle** centralizado:
- Eyebrow: "O que ofereço"
- Title: "Formas de atendimento"

**Grid de 3 cards** (colapsa para 1 coluna no mobile):

**Card 1 — Terapia Individual Presencial**
- Ícone SVG: sofá/poltrona estilizado
- Título: "Presencial"
- Desc: "Sessões no consultório em Tatuapé, SP. Ambiente acolhedor e reservado."
- Badge: "Tatuapé — SP"

**Card 2 — Terapia Online**
- Ícone SVG: tela de computador com coração
- Título: "Online"
- Desc: "Atendimento via plataforma segura, de qualquer lugar do Brasil."
- Badge: "Todo o Brasil"

**Card 3 — Locação de Salas**
- Ícone SVG: chave / porta
- Título: "Locação de Salas"
- Desc: "Salas equipadas disponíveis para outros profissionais de saúde em Tatuapé."
- Badge: "Para profissionais"

**Estilo dos cards:**
```
bg-ivory rounded-2xl p-8 border border-sage/20
hover:shadow-lg hover:-translate-y-1 transition-all duration-300
```

**Nota importante** (abaixo dos cards, centralizada):
```
[Ícone de info em terracota]
"NÃO ATENDEMOS CONVÊNIOS — Atendimento particular com emissão de recibo para reembolso junto ao seu plano."
Estilo: text-sm text-charcoal/60, fundo bg-blush/50, border-l-4 border-terracota, px-4 py-3 rounded-r-lg
```

---

#### Seção 5: Depoimento / CTA Emocional

**Fundo:** imagem de fundo suave (textura de papel ou foto desfocada do consultório) com overlay `bg-charcoal/70`

**Conteúdo centralizado:**
```
[Ícone de borboleta SVG em gold]

[Título em Playfair Display, text-3xl md:text-5xl, text-ivory]
"Dar o primeiro passo
já é um ato de coragem."

[Parágrafo em DM Sans, text-ivory/80]
"Fazer terapia é reservar um espaço e tempo para cuidar de você.
Entre em contato e tire suas dúvidas sem compromisso."

[Botão primary grande] "Falar com Vanessa no WhatsApp"
Link: https://wa.me/5511981091524
```

---

#### Seção 6: Na Mídia (prévia)

**Fundo:** `bg-ivory`

**SectionTitle:**
- Eyebrow: "Imprensa"
- Title: "Vanessa Tamiello na mídia"

**Grid de 2 colunas** de cards de mídia:

**Card 1:**
- Logo: "SP no Ar — Record"
- Título: "Adolescentes marcam rolezinho do sexo em parque de São Paulo"
- Tipo: badge "TV"

**Card 2:**
- Logo: "Terra"
- Título: "Após inquérito, MC Melody tira bojo e quer ser Anitta aos 8"
- Tipo: badge "Portal"

**Card 3:**
- Logo: "Women's Health"
- Título: "O poder do 'não' em um relacionamento"
- Tipo: badge "Revista"

**Card 4:**
- Logo: "UOL Comportamento"
- Título: "6 mandamentos para morar junto e não surtar no primeiro mês"
- Tipo: badge "Portal"

**Estilo:** cards com borda esquerda colorida (`border-l-4 border-sage`), fundo `bg-ivory`, `hover:bg-blush/30 transition-colors`

**Link:** botão ghost "Ver todas as participações →" → link para /profissional

---

### 2. `app/profissional/page.tsx` — PROFISSIONAL

#### Hero da Página
```
[Fundo bg-blush, py-24]
[SectionTitle eyebrow="Conheça a profissional" title="Formação & Trajetória" centered]
```

#### Seção — Perfil Profissional

**Layout 2 colunas:**

**Coluna esquerda:** card de perfil com:
- Foto em `rounded-2xl`
- Nome: "Vanessa Tamiello"
- Cargo: "Psicóloga"
- Dados em lista limpa:
  - CRP: 06/108983
  - Graduação: PUCSP
  - Pós-graduação: USP
- Ícone Instagram com link

**Coluna direita:** texto formativo:
```
[Título em Playfair Display] "Quem sou eu"

[3–4 parágrafos fluidos sobre formação, abordagem e valores]
"Sou Vanessa Tamiello, psicóloga formada pela PUCSP e pós-graduada
pela USP. Ao longo da minha trajetória..."

[Grid de competências/especialidades — 4 chips]
• Psicologia Clínica
• Relacionamentos
• Autoconhecimento
• Desenvolvimento Pessoal
```

---

#### Seção — Na Mídia (completa)

**Fundo:** `bg-ivory`

**SectionTitle:** "Vanessa Tamiello na mídia"

**Layout lista vertical** — cada item tem:
```
[Divider linha sutil]
[Logo do veículo — texto estilizado ou placeholder]
[Descrição do contexto — eg: "Comentou para o SP no Ar da Record..."]
[Título do conteúdo com link externo]
[Badge do tipo: TV / Portal / Revista]
```

**Itens:**
1. Record TV — SP no Ar: "Adolescentes marcam rolezinho do sexo em parque de SP" — link YouTube
2. Terra: "Após inquérito, MC Melody tira bojo e quer ser Anitta aos 8"
3. Terra: "Após polêmicas, MC Melody e Pikena se afastam do funk sensual"
4. Women's Health: "O poder do 'não' em um relacionamento"
5. UOL Comportamento: "6 mandamentos para morar junto e não surtar no primeiro mês"

---

### 3. `app/consultorio/page.tsx` — CONSULTÓRIO

#### Hero da Página
```
[Fundo bg-sage, py-20, texto em ivory]
[SectionTitle title="O Consultório" subtitle="Um espaço pensado para o seu acolhimento" centered]
```

#### Seção — Galeria

**Layout Masonry ou Grid criativo:**
- 6 fotos do consultório real (usar `next/image`)
- Grid: `grid-cols-3` com `gap-3`, algumas células ocupando 2 colunas (`col-span-2`) para variedade visual
- Todas as imagens com `rounded-xl hover:scale-[1.02] transition-transform cursor-zoom-in`
- **Lightbox simples:** ao clicar, abre modal com imagem ampliada e overlay escuro

**Texto introdutório acima da galeria:**
```
[Parágrafo centralizado, max-w-2xl mx-auto]
"O consultório foi projetado para oferecer conforto, privacidade e
um ambiente propício à reflexão. Cada detalhe foi pensado para
que você se sinta à vontade desde o primeiro momento."
```

---

#### Seção — Localização

**Layout 2 colunas:**

**Esquerda — texto:**
```
[SectionTitle eyebrow="Como chegar" title="Fica fácil de encontrar"]

[Endereço formatado com ícone pin]
Rua Antonio de Barros, 2687, 1º andar
Tatuapé — São Paulo, SP

[Horários com ícone relógio]
Segunda a Sexta: 7h às 19h
Sábado e Domingo: 7h às 13h

[Telefone com ícone]
(11) 98109.1524

[Botão] "Como chegar — Google Maps" → link externo
```

**Direita — mapa:**
- `<iframe>` do Google Maps embed responsivo
- `rounded-2xl overflow-hidden`
- Coordenadas: Rua Antonio de Barros, 2687, Tatuapé, SP

---

### 4. `app/locacao/page.tsx` — LOCAÇÃO DE SALAS

#### Hero da Página
```
[Fundo bg-charcoal, py-24, texto ivory]
[Eyebrow em terracota: "Para profissionais de saúde"]
[Título Playfair Display, text-5xl, ivory]
"Salas disponíveis para locação em Tatuapé"
[Parágrafo ivory/70]
"Espaços modernos e equipados para psicólogos, terapeutas e outros profissionais."
[Botão whatsapp grande] "Consultar disponibilidade"
```

#### Seção — Diferenciais

**Grid de 4 cards de destaque:**

**Card 1:** Ícone wifi → "Wi-Fi incluso"
**Card 2:** Ícone ar-condicionado → "Climatização"
**Card 3:** Ícone privacidade → "Total privacidade"
**Card 4:** Ícone localização → "Fácil acesso — Tatuapé"

**Estilo:** `bg-ivory/10 border border-ivory/20 rounded-2xl p-6 text-ivory text-center`

#### Seção — Galeria das Salas

**Fundo:** `bg-ivory`

**Grid 3x3** com 9 fotos das salas disponíveis para locação (mesma abordagem de galeria com lightbox).

**Texto:** "Salas individuais, mobiliadas e climatizadas, prontas para atendimento. Disponibilidade flexível — por hora ou período."

#### Seção — Contato Locação

**Fundo:** `bg-blush`

```
[Centralizado]
[Título] "Interessado em locar uma sala?"
[Endereço + telefone]
[Botão whatsapp] "Falar sobre locação"
```

---

### 5. `app/contato/page.tsx` — CONTATO

#### Hero da Página
```
[Fundo bg-blush, py-20]
[SectionTitle eyebrow="Vamos conversar?" title="Entre em contato" centered]
[Parágrafo centralizado]
"Tire suas dúvidas, saiba mais sobre os atendimentos ou agende sua consulta.
Estou à disposição para te ajudar."
```

#### Seção Principal — Duas Colunas

**Coluna Esquerda — Formulário de contato:**

```
[Título] "Envie uma mensagem"

Campos:
• input: Nome completo (required)
• input: E-mail (required, type="email")
• input: Telefone/WhatsApp
• select: "Como prefere ser atendido?" → [Presencial, Online, Sem preferência]
• textarea: Mensagem (rows=5)
• checkbox: "Li e concordo com a política de privacidade"

[Botão primary full-width] "Enviar mensagem"
```

**Estilo dos campos:**
```
bg-ivory border border-sage/40 rounded-xl px-4 py-3
focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20
font-body text-charcoal placeholder:text-charcoal/40
transition-all duration-200
```

**Nota:** Formulário pode enviar para API Route Next.js (`/api/contact`) ou via link mailto como fallback.

---

**Coluna Direita — Informações de Contato:**

```
[Card com bg-charcoal text-ivory rounded-2xl p-8]

[Título Playfair Display] "Informações"

[Item com ícone] 📍 Endereço
Rua Antonio de Barros, 2687, 1º andar
Tatuapé — São Paulo, SP

[Item com ícone] 📞 Telefone
(11) 98109.1524

[Item com ícone] 🕐 Horários
Seg–Sex: 7h às 19h
Sáb–Dom: 7h às 13h

[Divider ouro]

[Botão whatsapp full-width]
"Falar no WhatsApp agora"

[Badge aviso]
"NÃO ATENDEMOS CONVÊNIOS"
"Particular com recibo para reembolso"
Estilo: border-l-4 border-terracota bg-terracota/10 text-terracota px-4 py-3 rounded-r-lg text-sm mt-6
```

#### Seção — Mapa

**Full-width** com `iframe` Google Maps embed:
- Rua Antonio de Barros, 2687, Tatuapé, SP
- Altura: `400px`
- `rounded-2xl overflow-hidden`

---

## ✨ Detalhes de UI/UX Globais

### Microinterações
- Todos os links com `transition-colors duration-200`
- Botões com `active:scale-95 transition-transform`
- Cards com `hover:-translate-y-1 hover:shadow-md transition-all duration-300`
- Imagens com `hover:scale-[1.02]` dentro de containers com `overflow-hidden`

### Acessibilidade
- Todos os `<img>` com `alt` descritivo
- Foco visível em todos os elementos interativos: `focus-visible:ring-2 focus-visible:ring-sage`
- Contraste mínimo AA em todos os textos
- Links de WhatsApp com `aria-label="Abrir WhatsApp com Vanessa Tamiello"`
- Atributo `lang="pt-BR"` no `<html>`

### Scroll Animations (Intersection Observer)
Criar hook `useScrollReveal`:
```typescript
// components/hooks/useScrollReveal.ts
// Adiciona classe 'animate-in' quando elemento entra na viewport
// Fade + translateY(20px → 0) com duration 600ms
```

Aplicar em:
- Todos os `SectionTitle`
- Cards de serviços
- Cards de mídia
- Cada item da lista de contato

### WhatsApp Floating Button
Componente `<WhatsAppFloat />` fixo no canto inferior direito:
```
bottom-6 right-6 z-50
bg-[#25D366] text-white rounded-full
w-14 h-14 flex items-center justify-center
shadow-lg hover:scale-110 transition-transform
```

Link: `https://wa.me/5511981091524?text=Olá%20Vanessa!%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos.`

Tooltip ao hover: `"Falar com Vanessa"`

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| `< 640px` | 1 coluna, hero stack vertical, nav drawer |
| `640px–1024px` | 2 colunas onde cabem, nav ainda drawer |
| `> 1024px` | Layout completo, nav horizontal, hero side-by-side |

- Hero: `flex-col md:flex-row`
- Grids de cards: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Galeria: `grid-cols-2 md:grid-cols-3`
- Tamanhos de fonte: use escala fluida com `clamp()` ou classes Tailwind responsivas

---

## 🔗 Links e Dados Reais

| Dado | Valor |
|---|---|
| WhatsApp | `https://wa.me/5511981091524` |
| Instagram | `https://www.instagram.com/psivanessatamiello/` |
| Endereço | Rua Antonio de Barros, 2687, 1º andar, Tatuapé–SP |
| Telefone | (11) 98109.1524 |
| CRP | 06/108983 |
| Graduação | PUCSP |
| Pós-graduação | USP |
| Horário Seg–Sex | 7h às 19h |
| Horário Sáb–Dom | 7h às 13h |

---

## 🛠️ Dependências a Instalar

```bash
npm install framer-motion        # animações
npm install @radix-ui/react-dialog  # modal lightbox
npm install react-hook-form      # formulário de contato
npm install lucide-react         # ícones SVG
```

**Fontes (adicionar no `app/layout.tsx`):**
```typescript
import { Playfair_Display, Cormorant_Garamond, DM_Sans } from 'next/font/google'
```

---

## 🏁 Prioridade de Implementação

1. `layout.tsx` — Header + Footer + fontes
2. `page.tsx` — Home completa (Hero → Quote → Sobre → Serviços → CTA → Mídia)
3. `components/ui/` — Button, SectionTitle, DecorativeDivider
4. `contato/page.tsx` — formulário + mapa + infos
5. `profissional/page.tsx` — perfil + mídia
6. `consultorio/page.tsx` — galeria + localização
7. `locacao/page.tsx` — galeria + contato

---

*Prompt gerado com base na análise do site psivanessatamiello.com e nas melhores práticas de design UI/UX para saúde mental e bem-estar.*
