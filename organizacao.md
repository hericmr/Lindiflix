## Organização do Projeto - Lindiflix

### Estrutura recomendada
```
/
├── index.html
├── contato.html
├── mapa.html
├── popup.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── style_videos.css
│   ├── js/
│   │   ├── utils.js
│   │   ├── script3.js
│   │   ├── navbarLoader.js
│   │   ├── footerLoader.js
│   │   └── popupLoader.js
│   └── images/
│       ├── lindi*.png (originais)
│       ├── lindi*.webp (otimizadas)
│       └── professores/ (todas as fotos)
├── fotos/ (legado; manter apenas até migração total)
├── professores.json
├── README.md
├── planning.md
├── FASE1-IMPLEMENTADA.md
├── organizacao.md
└── ferramentas/
    └── convert-images.js
```

### Arquivos em uso (após consolidação)
- `index.html`, `contato.html`, `mapa.html`, `popup.html`
- CSS: `style.css`, `style_videos.css`
- JS: `utils.js`, `script3.js`, `navbarLoader.js`, `footerLoader.js`, `popupLoader.js`
- Dados: `professores.json`

### Arquivos removidos (não utilizados)
- `script.js` (legado)
- `script2.js` (legado)
- `profs.json` (não referenciado)

### Itens para revisar antes de mover pastas
- Atualizar referências de CSS/JS nas páginas para `assets/css` e `assets/js`
- Mover imagens para `assets/images` mantendo nomes estáveis
- Garantir loaders (`navbarLoader.js`, `footerLoader.js`) com caminhos atualizados

### Etapas de organização (em sprints curtos)
1) Sprint A - Movimentação inicial
- Criar pastas `assets/css`, `assets/js`, `assets/images/professores`
- Mover `style.css`, `style_videos.css` → `assets/css/`
- Mover `utils.js`, `script3.js`, `navbarLoader.js`, `footerLoader.js`, `popupLoader.js` → `assets/js/`
- Atualizar imports em `index.html`, `contato.html`, `mapa.html`

2) Sprint B - Imagens e srcset
- Mover `lindi*.png` e `*.webp` → `assets/images/`
- Mover `fotos/*.jpeg` e conversões → `assets/images/professores/`
- Atualizar `utils.js` e `script3.js` para novos caminhos

3) Sprint C - Limpeza final
- Remover pasta `fotos/` após validação visual
- Ajustar `navbar.html` e `footer.html` se necessário
- Rodar `npm run build` e validar em `vite preview`

### Convenções
- Nomes descritivos e consistentes
- Evitar duplicação de dados e scripts
- Imagens sempre com `loading="lazy"` e dimensões quando aplicável
- Preferir WebP com fallback

### Checklist rápido
- [x] Remover arquivos legados não usados
- [ ] Mover CSS/JS para `assets/`
- [ ] Mover imagens para `assets/images/`
- [ ] Atualizar referências nas páginas
- [ ] Validar layout no desktop e mobile
