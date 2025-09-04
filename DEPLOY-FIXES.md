# Correções de Deploy - Lindiflix

## Problemas Resolvidos

### 1. Erro de Caminhos Relativos
**Problema**: Scripts e recursos não carregavam corretamente no GitHub Pages devido a caminhos relativos.

**Solução**: Implementada variável `PUBLIC_URL` para detectar automaticamente o ambiente e usar caminhos absolutos.

### 2. Erro "window.StaticHeader is not a constructor"
**Problema**: A classe StaticHeader não estava sendo definida globalmente corretamente.

**Solução**: Corrigida a definição da classe no `carousel.js` para torná-la disponível globalmente.

### 3. Imagens não encontradas (404)
**Problema**: Caminhos de imagens não funcionavam em produção.

**Solução**: Implementados caminhos absolutos baseados na configuração `PUBLIC_URL`.

## Arquivos Modificados

### 1. `assets/js/config.js` (NOVO)
- Detecta automaticamente se está em produção (GitHub Pages) ou desenvolvimento
- Define `window.PUBLIC_URL` com a URL base correta
- Fornece funções `buildUrl()` e `loadResource()` para carregar recursos

### 2. `assets/js/carouselLoader.js`
- Usa `window.loadResource()` para carregar o carrossel
- Implementa caminhos absolutos no fallback de imagens

### 3. `assets/js/footerLoader.js`
- Usa `window.buildUrl()` para carregar o footer

### 4. `assets/js/carousel.js`
- Corrigida definição global da classe `StaticHeader`

### 5. `index.html`
- Adicionado script `config.js` antes dos outros scripts

### 6. `copy-assets.js` (NOVO)
- Script para copiar arquivos estáticos para a pasta `dist`
- Garante que todos os recursos (JS, CSS, imagens, partials) sejam incluídos no deploy

### 7. `package.json`
- Adicionado script `build-copy` que combina build + cópia de assets
- Atualizado `deploy-build` para usar o novo processo

## Como Usar a Variável PUBLIC_URL

### Em JavaScript:
```javascript
// Construir URL absoluta
const imageUrl = window.buildUrl('assets/images/logo.png');

// Carregar recurso com fallback
const html = await window.loadResource('partials/header.html', 'partials/header-fallback.html');

// Verificar ambiente
if (window.PUBLIC_URL) {
  console.log('Estamos em produção:', window.PUBLIC_URL);
} else {
  console.log('Estamos em desenvolvimento');
}
```

### Em HTML:
```html
<!-- Para imagens -->
<img src="" id="dynamic-image">

<script>
  // Definir src dinamicamente
  document.getElementById('dynamic-image').src = window.buildUrl('assets/images/photo.jpg');
</script>
```

## Scripts de Deploy

```bash
# Deploy direto dos arquivos atuais (RECOMENDADO)
npm run deploy

# Deploy com build otimizado + cópia de assets (experimental)
npm run deploy-build

# Build + cópia de assets (sem deploy)
npm run build-copy
```

## ⚠️ Nota Importante

O deploy direto (`npm run deploy`) é a opção recomendada porque:
- Evita problemas de caminhos absolutos gerados pelo Vite
- Mantém a estrutura original dos arquivos
- Funciona perfeitamente com GitHub Pages
- Mais simples e confiável

## URLs do Site

- **Produção**: https://hericmr.github.io/Lindiflix
- **Desenvolvimento**: http://localhost:3000 (com `npm run dev`)

## Estrutura de Configuração

```
assets/js/
├── config.js          # Configuração global e funções utilitárias
├── carouselLoader.js  # Carregador do carrossel (usando config)
├── footerLoader.js    # Carregador do footer (usando config)
├── carousel.js        # Classe StaticHeader corrigida
└── ...

copy-assets.js         # Script para copiar assets para dist
```

## Benefícios da Implementação

1. **Detecção Automática**: O site funciona tanto em desenvolvimento quanto em produção
2. **Caminhos Absolutos**: Evita problemas de 404 em recursos
3. **Fallbacks**: Sistema de fallback para recursos que falham
4. **Manutenibilidade**: Centraliza a configuração de URLs
5. **Escalabilidade**: Fácil de adaptar para outros ambientes
