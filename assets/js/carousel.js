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

// Disponibilizar a classe StaticHeader globalmente
window.StaticHeader = StaticHeader;
