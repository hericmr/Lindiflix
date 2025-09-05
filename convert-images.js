const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configurações de conversão
const sizes = {
    desktop: [1200, 800],
    mobile: [600, 400]
};

// Função para converter imagem para WebP
async function convertToWebP(inputPath, outputPath, width = null) {
    try {
        let sharpInstance = sharp(inputPath);
        
        if (width) {
            sharpInstance = sharpInstance.resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });
        }
        
        await sharpInstance
            .webp({ quality: 80 })
            .toFile(outputPath);
            
        console.log(`✅ Convertido: ${inputPath} → ${outputPath}`);
    } catch (error) {
        console.error(`❌ Erro ao converter ${inputPath}:`, error.message);
    }
}

// Função para processar todas as imagens
async function processImages() {
    const fotosDir = './fotos';
    const outputDir = './fotos/webp';
    
    // Criar diretório de saída se não existir
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Processar imagens da pasta fotos
    if (fs.existsSync(fotosDir)) {
        const files = fs.readdirSync(fotosDir);
        
        for (const file of files) {
            if (file.match(/\.(jpeg|jpg|png)$/i)) {
                const inputPath = path.join(fotosDir, file);
                const baseName = path.parse(file).name;
                
                // Converter para WebP em diferentes tamanhos
                for (const size of sizes.desktop.concat(sizes.mobile)) {
                    const outputPath = path.join(outputDir, `${baseName}-${size}w.webp`);
                    await convertToWebP(inputPath, outputPath, size);
                }
                
                // Versão original em WebP
                const originalOutputPath = path.join(outputDir, `${baseName}.webp`);
                await convertToWebP(inputPath, originalOutputPath);
            }
        }
    }
    
    // Processar imagens lindi*.png
    const lindiFiles = ['lindi.png', 'lindi2.png', 'lindi3.png', 'lindi4.png'];
    
    for (const file of lindiFiles) {
        if (fs.existsSync(file)) {
            const baseName = path.parse(file).name;
            
            // Converter para WebP em diferentes tamanhos
            for (const size of sizes.desktop.concat(sizes.mobile)) {
                const outputPath = `./${baseName}-${size}w.webp`;
                await convertToWebP(file, outputPath, size);
            }
            
            // Versão original em WebP
            const originalOutputPath = `./${baseName}.webp`;
            await convertToWebP(file, originalOutputPath);
        }
    }
    
    console.log('🎉 Conversão de imagens concluída!');
}

// Executar o script
processImages().catch(console.error);
