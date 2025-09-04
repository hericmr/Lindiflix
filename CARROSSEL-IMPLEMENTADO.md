# 🎠 Carrossel Hero - LINDI

## 📋 Resumo da Implementação

Carrossel responsivo implementado no header do site LINDI, exibindo imagens das aldeias indígenas e o logo do projeto. Segue as melhores práticas de performance, acessibilidade e UX.

## ✨ Funcionalidades Implementadas

### 🎯 **Características Principais**
- **6 slides**: Aldeias indígenas + Logo LINDI
- **Autoplay**: Transição automática a cada 5 segundos
- **Navegação manual**: Botões anterior/próximo + indicadores
- **Responsivo**: Adaptação para mobile, tablet e desktop
- **Touch/Swipe**: Suporte completo para dispositivos móveis
- **Teclado**: Navegação por setas, Home, End
- **Acessibilidade**: ARIA labels, roles, focus management

### 🖼️ **Imagens Otimizadas**
- **Formato WebP**: Compressão avançada para melhor performance
- **Múltiplos tamanhos**: 400w, 600w, 800w, 1000w, 1200w, 1600w
- **Responsive images**: `srcset` e `sizes` para carregamento otimizado
- **Lazy loading**: Carregamento sob demanda para slides não visíveis
- **Preload**: Primeira imagem carregada com prioridade

### 🎨 **Design e UX**
- **Transições suaves**: CSS transitions com easing personalizado
- **Hover effects**: Zoom sutil nas imagens e revelação de conteúdo
- **Overlay gradiente**: Texto legível sobre as imagens
- **Indicadores visuais**: Pontos indicando slide atual
- **Controles intuitivos**: Botões grandes e bem posicionados

## 🛠️ **Arquivos Criados/Modificados**

### 📁 **Novos Arquivos**
- `partials/carousel.html` - Estrutura HTML do carrossel
- `assets/css/carousel.css` - Estilos do carrossel
- `assets/js/carousel.js` - Funcionalidade JavaScript
- `assets/js/carouselLoader.js` - Carregamento dinâmico
- `convert-carrossel.js` - Script de conversão de imagens
- `assets/images/carousel/` - Imagens otimizadas (36 arquivos WebP)

### 📝 **Arquivos Modificados**
- `index.html` - Adicionado carrossel e scripts
- `package.json` - Novos scripts de conversão
- `assets/css/main.css` - Integração com variáveis CSS

## 🎯 **Slides do Carrossel**

1. **Aldeia Amba Porã** - Terra Indígena Amba Porã - Guarani Mbya
2. **Aldeia Jejyty** - Comunidade tradicional Guarani
3. **Aldeia Kopenoti** - Terra Indígena Araribá - Avaí/SP
4. **Aldeia Rio Silveira** - Terra Indígena Ribeirão Silveira
5. **Aldeia Takuari-ty** - TI Pakurity - Guarani Mbya
6. **LINDI** - Laboratório de Informática e Educação Indígena

## 🔧 **Como Usar**

### **Desenvolvimento**
```bash
# Converter imagens do carrossel
npm run convert-carousel

# Iniciar servidor de desenvolvimento
npm run dev
```

### **Controle via JavaScript**
```javascript
// Acessar instância do carrossel
const carousel = window.heroCarousel;

// Controles programáticos
carousel.play();           // Iniciar autoplay
carousel.pause();          // Pausar autoplay
carousel.nextSlide();      // Próximo slide
carousel.prevSlide();      // Slide anterior
carousel.goToSlide(2);     // Ir para slide específico

// Informações
carousel.getCurrentSlide(); // Slide atual (0-5)
carousel.getTotalSlides();  // Total de slides (6)
```

## ♿ **Acessibilidade**

### **ARIA Labels e Roles**
- `role="region"` no container principal
- `role="tabpanel"` nos slides
- `role="tablist"` nos indicadores
- `role="tab"` nos botões indicadores
- `aria-label` descritivos para todos os controles
- `aria-selected` nos indicadores ativos
- `aria-hidden` para slides não visíveis

### **Navegação por Teclado**
- **Seta Esquerda**: Slide anterior
- **Seta Direita**: Próximo slide
- **Home**: Primeiro slide
- **End**: Último slide
- **Tab**: Navegação entre controles
- **Enter/Space**: Ativar controles

### **Suporte para Leitores de Tela**
- Descrições detalhadas das imagens
- Estados dos controles anunciados
- Navegação por landmarks
- Textos alternativos informativos

## 📱 **Responsividade**

### **Breakpoints**
- **Desktop**: 1200px+ - Altura 60vh, controles grandes
- **Tablet**: 768px-1199px - Altura 50vh, controles médios
- **Mobile**: <768px - Altura 40vh, controles pequenos

### **Touch Support**
- **Swipe**: Gestos de deslizar para navegar
- **Touch targets**: Mínimo 44px para botões
- **Hover disabled**: Comportamento otimizado para touch
- **Passive listeners**: Performance otimizada

## ⚡ **Performance**

### **Otimizações Implementadas**
- **WebP**: 30-50% menor que PNG/JPEG
- **Lazy loading**: Carregamento sob demanda
- **Preload**: Primeira imagem priorizada
- **Intersection Observer**: Pausa quando não visível
- **CSS transforms**: Animações GPU-accelerated
- **Event delegation**: Menos event listeners

### **Métricas Esperadas**
- **Lighthouse Performance**: 90+ pontos
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🎨 **Customização**

### **Variáveis CSS Disponíveis**
```css
:root {
  --carousel-height: 60vh;
  --carousel-min-height: 400px;
  --carousel-max-height: 600px;
  --carousel-transition-duration: 0.6s;
  --carousel-autoplay-delay: 5000ms;
}
```

### **Modificando Slides**
1. Adicionar imagem em `carrossel/`
2. Executar `npm run convert-carousel`
3. Atualizar `partials/carousel.html`
4. Ajustar `totalSlides` em `carousel.js`

## 🐛 **Solução de Problemas**

### **Carrossel não carrega**
- Verificar se `partials/carousel.html` existe
- Confirmar que `carousel.js` está carregado
- Verificar console para erros JavaScript

### **Imagens não aparecem**
- Executar `npm run convert-carousel`
- Verificar se imagens existem em `assets/images/carousel/`
- Confirmar caminhos no HTML

### **Autoplay não funciona**
- Verificar se Intersection Observer é suportado
- Confirmar que carrossel está visível na tela
- Verificar se não há hover ativo

## 📈 **Próximas Melhorias**

### **Fase 3 - Melhorias de UX**
- [ ] Adicionar transições entre slides mais elaboradas
- [ ] Implementar modo fullscreen
- [ ] Adicionar controles de velocidade
- [ ] Criar miniaturas dos slides
- [ ] Implementar zoom nas imagens

### **Fase 4 - Funcionalidades Avançadas**
- [ ] Integração com analytics
- [ ] Modo apresentação automática
- [ ] Sincronização com outros elementos
- [ ] Suporte a vídeos nos slides
- [ ] Galeria de imagens expandida

---

*Implementado em: $(date)*
*Status: ✅ Funcional e otimizado*
*Próximo: Integração com Fase 3 do planning*
