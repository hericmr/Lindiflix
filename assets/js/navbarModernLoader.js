/**
 * Navbar Modern Loader - LINDI
 * Carrega a navbar moderna dinamicamente
 */

class NavbarModernLoader {
  constructor() {
    this.navbarContainer = document.getElementById('navbar');
    this.navbarPath = 'partials/navbar_modern.html';
  }

  async loadNavbar() {
    if (!this.navbarContainer) {
      console.warn('Container da navbar não encontrado');
      return;
    }

    try {
      const response = await fetch(this.navbarPath);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const html = await response.text();
      this.navbarContainer.innerHTML = html;
      
      // Inicializar funcionalidades da navbar
      this.initializeNavbar();
      
    } catch (error) {
      console.error('Erro ao carregar navbar moderna:', error);
      this.showFallback();
    }
  }

  initializeNavbar() {
    // Adicionar funcionalidade ao botão de busca
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        this.handleSearch();
      });
    }

    // Adicionar funcionalidade ao botão administrativo
    const adminBtn = document.querySelector('.admin-btn');
    if (adminBtn) {
      adminBtn.addEventListener('click', () => {
        this.handleAdmin();
      });
    }

    // Adicionar funcionalidade ao menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        this.handleMobileMenu();
      });
    }

    // Adicionar funcionalidade ao título
    const titleBtn = document.querySelector('.navbar-title-btn');
    if (titleBtn) {
      titleBtn.addEventListener('click', () => {
        this.handleTitleClick();
      });
    }
  }

  handleSearch() {
    // Implementar funcionalidade de busca
    console.log('Busca ativada');
    // Aqui você pode adicionar um modal de busca ou redirecionar para uma página de busca
  }

  handleAdmin() {
    // Implementar funcionalidade administrativa
    console.log('Acesso administrativo ativado');
    // Aqui você pode redirecionar para uma área administrativa
  }

  handleMobileMenu() {
    // Implementar menu mobile
    console.log('Menu mobile ativado');
    // Aqui você pode implementar um menu dropdown mobile
  }

  handleTitleClick() {
    // Implementar ação do título
    console.log('Título clicado');
    // Aqui você pode redirecionar para a página inicial ou mostrar informações
  }

  showFallback() {
    this.navbarContainer.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="assets/images/lindi2.png" alt="LINDI" class="navbar-logo">
            Lindiflix
          </a>
        </div>
      </nav>
    `;
  }
}

// Inicializar loader quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const navbarLoader = new NavbarModernLoader();
  navbarLoader.loadNavbar();
});

// Suporte para carregamento dinâmico
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const navbarLoader = new NavbarModernLoader();
    navbarLoader.loadNavbar();
  });
} else {
  const navbarLoader = new NavbarModernLoader();
  navbarLoader.loadNavbar();
}
