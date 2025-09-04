/**
 * Script para copiar arquivos estáticos para a pasta dist
 * Executado após o build do Vite
 */

const fs = require('fs');
const path = require('path');

// Função para copiar diretório recursivamente
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copiado: ${srcPath} -> ${destPath}`);
    }
  }
}

// Função para copiar arquivo único
function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
  console.log(`Copiado: ${src} -> ${dest}`);
}

// Função principal
function copyAssets() {
  console.log('🔄 Copiando arquivos estáticos para dist...');

  try {
    // Copiar pasta assets/js
    if (fs.existsSync('assets/js')) {
      copyDir('assets/js', 'dist/assets/js');
    }

    // Copiar pasta assets/images
    if (fs.existsSync('assets/images')) {
      copyDir('assets/images', 'dist/assets/images');
    }

    // Copiar pasta assets/css
    if (fs.existsSync('assets/css')) {
      copyDir('assets/css', 'dist/assets/css');
    }

    // Copiar pasta fotos
    if (fs.existsSync('fotos')) {
      copyDir('fotos', 'dist/fotos');
    }

    // Copiar pasta partials
    if (fs.existsSync('partials')) {
      copyDir('partials', 'dist/partials');
    }

    // Copiar favicons
    const favicons = [
      'lindi-favicon-32x32.png',
      'lindi-favicon-16x16.png',
      'lindi-apple-touch-icon.png'
    ];

    favicons.forEach(favicon => {
      if (fs.existsSync(favicon)) {
        copyFile(favicon, `dist/${favicon}`);
      }
    });

    // Copiar outros arquivos importantes
    const importantFiles = [
      'professores.json',
      'grafico.svg'
    ];

    importantFiles.forEach(file => {
      if (fs.existsSync(file)) {
        copyFile(file, `dist/${file}`);
      }
    });

    console.log('✅ Arquivos copiados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao copiar arquivos:', error);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  copyAssets();
}

module.exports = copyAssets;
