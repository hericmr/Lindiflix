/**
 * Header Loader - LINDI
 * Carrega o conteúdo do header dinamicamente
 */

class HeaderLoader {
  constructor() {
    this.container = document.getElementById('carousel-container');
    this.headerPath = 'partials/carousel.html';
  }

  async loadHeader() {
    if (!this.container) {
      console.warn('Container do header não encontrado');
      return;
    }

    try {
      // Usar a função loadResource da configuração global
      let html = await window.loadResource(this.headerPath);
      
      // Substituir caminhos relativos por absolutos usando buildUrl
      if (window.buildUrl) {
        html = html.replace(/src="\.\/assets\//g, `src="${window.buildUrl('assets/')}`);
        html = html.replace(/srcset="\.\/assets\//g, `srcset="${window.buildUrl('assets/')}`);
      }
      
      this.container.innerHTML = html;
      
      // Inicializar header após carregar o HTML
      this.initializeHeader();
      
    } catch (error) {
      console.error('Erro ao carregar header:', error);
      this.showFallback();
    }
  }

  initializeHeader() {
    // Aguardar um pouco para garantir que o DOM foi atualizado
    setTimeout(() => {
      if (window.StaticHeader && typeof window.StaticHeader === 'function') {
        try {
          window.staticHeader = new window.StaticHeader();
          console.log('Header estático inicializado com sucesso');
        } catch (error) {
          console.error('Erro ao inicializar header estático:', error);
        }
      } else {
        // Se a classe não estiver disponível, tentar novamente
        console.log('StaticHeader não disponível, tentando novamente...');
        setTimeout(() => {
          if (window.StaticHeader && typeof window.StaticHeader === 'function') {
            try {
              window.staticHeader = new window.StaticHeader();
              console.log('Header estático inicializado com sucesso (segunda tentativa)');
            } catch (error) {
              console.error('Erro ao inicializar header estático (segunda tentativa):', error);
            }
          } else {
            console.error('StaticHeader não encontrado após múltiplas tentativas');
          }
        }, 500);
      }
    }, 100);
  }

  showFallback() {
    // Usar caminhos absolutos baseados na configuração
    const baseUrl = window.PUBLIC_URL || '';
    const imagePath = `${baseUrl}/assets/images/carousel/turma24`;
    
    this.container.innerHTML = `
      <section class="hero-fallback" role="region" aria-label="Imagem de destaque">
        <div class="hero-fallback-content">
          <picture>
            <source 
              srcset="${imagePath}-1200w.webp 1200w,
                      ${imagePath}-800w.webp 800w,
                      ${imagePath}-400w.webp 400w"
              sizes="100vw"
              type="image/webp">
            <img 
              src="${imagePath}.webp" 
              alt="Turma 2024 da Licenciatura Intercultural Indígena da UNIFESP"
              class="hero-fallback-img">
          </picture>
          <div class="hero-fallback-text">
            <h2>Turma 2024</h2>
            <p>Licenciatura Intercultural Indígena - UNIFESP</p>
          </div>
        </div>
      </section>
    `;
  }
}

// Inicializar loader quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const headerLoader = new HeaderLoader();
  headerLoader.loadHeader();
});

// Suporte para carregamento dinâmico
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const headerLoader = new HeaderLoader();
    headerLoader.loadHeader();
  });
} else {
  const headerLoader = new HeaderLoader();
  headerLoader.loadHeader();
}
