# 🌟 Lindiflix

> Site que reúne vídeos produzidos por estudantes da Licenciatura Intercultural Indígena da UNIFESP, mostrando o cotidiano, conhecimentos e brincadeiras das crianças das aldeias indígenas de São Paulo.

## 🚀 Status do Projeto

**Fase 1 - Melhorias Críticas:** ✅ **CONCLUÍDA**
- ✅ Otimização de imagens (WebP + lazy loading)
- ✅ Performance de scripts (defer + consolidação)
- ✅ SEO básico (meta tags + estrutura semântica)

**Próxima fase:** Fase 2 - Melhorias Importantes

## 📋 Sobre o Projeto

Este site reúne alguns dos trabalhos produzidos pelos estudantes da Licenciatura Intercultural Indígena da UNIFESP em 2024. São vídeos em que as próprias crianças das aldeias mostram o seu cotidiano, conhecimentos, brincadeiras e comunidades. Um convite para conhecer a diversidade dos povos originários de São Paulo.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos responsivos e modernos
- **JavaScript** - Funcionalidades interativas
- **Bootstrap 5** - Framework CSS para responsividade
- **WebP** - Formato de imagem otimizado
- **Vite** - Build tool para otimização

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/hericmr/Lindiflix.git
cd Lindiflix

# Instale as dependências
npm install
```

### Desenvolvimento
```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

### Otimização de Imagens
```bash
# Converta as imagens para WebP
npm run convert-images
```

### Build para Produção
```bash
# Gere os arquivos otimizados
npm run build

# Visualize o build
npm run preview
```

## 📁 Estrutura do Projeto

```
Lindiflix/
├── index.html              # Página principal
├── contato.html            # Página de contato
├── mapa.html               # Página do mapa
├── popup.html              # Popup de informações
├── fotos/                  # Imagens dos professores
├── style.css               # Estilos principais
├── style_videos.css        # Estilos dos vídeos
├── script.js               # Script principal (legado)
├── script2.js              # Script secundário (legado)
├── script3.js              # Script de vídeos (atualizado)
├── utils.js                # Utilitários consolidados
├── navbarLoader.js         # Carregador da navbar
├── footerLoader.js         # Carregador do footer
├── popupLoader.js          # Carregador do popup
├── professores.json        # Dados dos professores
├── profs.json             # Dados adicionais
├── convert-images.js       # Script de conversão de imagens
├── vite.config.js          # Configuração do Vite
├── package.json            # Dependências e scripts
├── planning.md             # Plano de melhorias
└── FASE1-IMPLEMENTADA.md  # Documentação da Fase 1
```

## 🎯 Melhorias Implementadas

### Performance
- **Imagens WebP**: Conversão automática com fallback para JPEG
- **Lazy Loading**: Carregamento sob demanda de imagens e vídeos
- **Scripts Defer**: Carregamento não-bloqueante de JavaScript
- **Preload**: Carregamento prioritário de recursos críticos

### SEO
- **Meta Tags**: Description, keywords, Open Graph, Twitter Cards
- **Estrutura Semântica**: HTML5 com landmarks ARIA
- **Canonical URL**: URL canônica definida
- **Favicon**: Ícones para diferentes dispositivos

### Acessibilidade
- **Skip Links**: Navegação por teclado melhorada
- **ARIA Labels**: Descrições para leitores de tela
- **Contraste**: Cores otimizadas para visibilidade
- **Foco Visível**: Indicadores de foco para navegação

## 📊 Métricas de Performance

### Antes das Melhorias
- Lighthouse Score: ~60-70
- First Contentful Paint: ~3-4s
- Largest Contentful Paint: ~5-6s
- Cumulative Layout Shift: ~0.2-0.3

### Após as Melhorias (Esperado)
- Lighthouse Score: ~85-95
- First Contentful Paint: ~1.5-2s
- Largest Contentful Paint: ~2.5-3s
- Cumulative Layout Shift: ~0.05-0.1

## 🔄 Próximas Melhorias

### Fase 2 - Melhorias Importantes
- [ ] Acessibilidade completa (WCAG 2.1 AA)
- [ ] Estrutura de arquivos organizada
- [ ] Consolidação de CSS com variáveis

### Fase 3 - UX
- [ ] Navegação responsiva melhorada
- [ ] Páginas de contato e mapa otimizadas
- [ ] Galeria de professores interativa

### Fase 4 - Otimizações Avançadas
- [ ] SEO avançado (JSON-LD, sitemap)
- [ ] Performance avançada (PWA, service worker)
- [ ] Analytics e monitoramento

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **LINDI - Licenciatura Intercultural Indígena da UNIFESP**
- **Estudantes da LINDI** - Vídeos e conteúdo
- **Héricmr** - Desenvolvimento e otimizações

## 📞 Contato

- **Email**: heric.moura@unifesp.br
- **Site**: https://hericmr.github.io/Lindiflix/
- **GitHub**: [@hericmr](https://github.com/hericmr)

---

*Última atualização: $(date)*
*Versão: 2.0 - Fase 1 Concluída*
