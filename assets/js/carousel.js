// ===== HEADER ESTÁTICO =====
// Removida funcionalidade de carrossel - agora é apenas um header estático

class StaticHeader {
  constructor() {
    this.init();
  }

  init() {
    // Header estático - sem funcionalidade de carrossel
    console.log('Header estático carregado');
  }
}

// Tornar a classe disponível globalmente
window.StaticHeader = StaticHeader;

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.staticHeader === undefined) {
      window.staticHeader = new window.StaticHeader();
    }
  });
} else {
  if (window.staticHeader === undefined) {
    window.staticHeader = new window.StaticHeader();
  }
}
