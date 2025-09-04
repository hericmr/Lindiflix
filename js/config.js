/**
 * Configuração global para o site Lindiflix
 * Define a URL base para evitar problemas de caminhos relativos
 */

// Detectar se estamos em produção (GitHub Pages) ou desenvolvimento
const isProduction = window.location.hostname === 'hericmr.github.io';
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Definir a URL base
window.PUBLIC_URL = isProduction 
  ? 'https://hericmr.github.io/Lindiflix' 
  : '';

// Função para construir URLs absolutas
window.buildUrl = (path) => {
  if (path.startsWith('http')) {
    return path; // Já é uma URL absoluta
  }
  
  // Remover barra inicial se existir
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return isProduction 
    ? `${window.PUBLIC_URL}/${cleanPath}`
    : `/${cleanPath}`;
};

// Função para carregar recursos com fallback
window.loadResource = async (path, fallbackPath = null) => {
  try {
    const url = window.buildUrl(path);
    const response = await fetch(url);
    
    if (response.ok) {
      return await response.text();
    }
    
    // Se falhar e tiver fallback, tentar o fallback
    if (fallbackPath) {
      const fallbackUrl = window.buildUrl(fallbackPath);
      const fallbackResponse = await fetch(fallbackUrl);
      
      if (fallbackResponse.ok) {
        return await fallbackResponse.text();
      }
    }
    
    throw new Error(`Failed to load: ${url}`);
  } catch (error) {
    console.error(`Erro ao carregar recurso: ${path}`, error);
    throw error;
  }
};

console.log('Configuração carregada:', {
  isProduction,
  isLocalhost,
  PUBLIC_URL: window.PUBLIC_URL
});
