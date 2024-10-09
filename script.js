// Função para redirecionar para uma página HTML específica ao clicar no ponto
function redirectToHTML(aldeiaId) {
    window.location.href = aldeiaId + ".html"; // Redireciona para a página da aldeia
}

// Função para redirecionar para a página com o vídeo embutido
function redirectToVideoPage(aldeiaId) {
    const videoLinks = {
        'aldeia1': 'https://www.youtube.com/embed/aVnLAbow-kY?si=6xU4QtVG5mru6ZHO',
        'aldeia2': 'https://www.youtube.com/embed/rBXZkhe6Qmo',
        'aldeia3': 'https://www.youtube.com/embed/dq6lps46jQw',
        'aldeia4': 'https://www.youtube.com/embed/rqp1SwCDnfc',
        'aldeia5': 'https://www.youtube.com/embed/yYBeDUKZjk4',
        'aldeia6': 'https://www.youtube.com/embed/5j3YEdeMraw',
        'aldeia7': 'https://www.youtube.com/embed/IsIJVA4ppOg',
        'aldeia8': 'https://www.youtube.com/embed/_6PuOnVIhEU',
        'aldeia9': 'https://www.youtube.com/embed/3e8N8uGyIvE',
        'aldeia10': 'https://www.youtube.com/embed/yum4n1kHsGE',
        'aldeia11': 'https://www.youtube.com/embed/AXcJ2C_ofHo',
        'aldeia13': 'https://www.youtube.com/embed/1Ld2I2t01U8',
        'aldeia14': 'https://www.youtube.com/embed/VVTfkbrvxZs',
        'aldeia15': 'https://www.youtube.com/embed/7Xt-wM3po2w ',
        'aldeia16': 'https://www.youtube.com/embed/wzXQT6O-N8c',
        'aldeia17': 'https://www.youtube.com/embed/-BREiQHALvE',
        'aldeia18': 'https://www.youtube.com/embed/fSLgQd3QuRg',
        'aldeia19': 'https://www.youtube.com/embed/yOn8nVP6qpI',
        'aldeia20': 'https://www.youtube.com/embed/ufv3fKPHk60',
        'aldeia21': 'https://www.youtube.com/embed/mRfa7KPkoMU',
        'aldeia22': 'https://www.youtube.com/embed/-tLEHM4TRhw',
        'aldeia23': 'https://www.youtube.com/embed/yum4n1kHsGE',
        'aldeia24': 'https://www.youtube.com/embed/jjl3-7MpHZg',
        'aldeia25': 'https://www.youtube.com/embed/jm-RxazV9w4',
        'aldeia26': 'https://www.youtube.com/embed/ClCXAq2uy6c',
        'aldeia27': 'https://www.youtube.com/embed/5IrPkutF9z4',
        'aldeia28': 'https://www.youtube.com/embed/A79kDuycPs4'
    };

    // Cria a página HTML com o link do vídeo correspondente
    const videoLink = videoLinks[aldeiaId];
    const newPageContent = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vídeo da Aldeia</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body, html { height: 100%; display: flex; justify-content: center; align-items: center; background-color: black; }
                iframe { width: 100vw; height: 100vh; border: none; }
            </style>
        </head>
        <body>
            <iframe src="${videoLink}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </body>
        </html>
    `;

    // Abre uma nova janela com o conteúdo da página gerada
    const newWindow = window.open();
    newWindow.document.write(newPageContent);
    newWindow.document.close();
}

// Função para exibir o pop-up com a imagem e informações da aldeia
// Função para exibir o pop-up com a imagem e informações da aldeia
function showInfo(aldeiaId) {
    const popup = document.getElementById('info-popup');
    const content = document.getElementById('info-content');

    // Limpa o conteúdo anterior
    content.innerHTML = '';

    const data = aldeiaData[aldeiaId];

    // Verifica se há mais de um professor(a) e ajusta a exibição
    if (Array.isArray(data)) {
        // Caso haja múltiplos professores
        data.forEach(professor => {
            const professorInfo = `
                <img src="${professor.image}" class="info-image" alt="${professor.title}" />
                <div class="info-text">
                    <p><strong>${professor.title}</strong></p>
                    <p>${professor.description}</p>
                </div>
            `;
            content.innerHTML += professorInfo;
        });
    } else {
        // Caso seja apenas um professor(a)
        const professorInfo = `
            <img src="${data.image}" class="info-image" alt="${data.title}" />
            <div class="info-text">
                <p><strong>${data.title}</strong></p>
                <p>${data.description}</p>
            </div>
        `;
        content.innerHTML = professorInfo;
    }

    popup.style.display = 'block';
}

// Função para fechar o pop-up
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('info-popup').style.display = 'none';
});


// Função para esconder o pop-up
function hideInfo() {
    const popup = document.getElementById('info-popup');
    popup.style.display = 'none';
}

// Dados das aldeias, incluindo a imagem, o título e a descrição
// Dados das aldeias, incluindo a imagem, o título e a descrição
const aldeiaData = {
    'aldeia1': {
    "image": "http://phpu.unifesp.br/dsi/aux/fotos/fotos.php?rf=1537099",
    "title": "Professor(a) Paula Aparecida Baptista",
    "description": "Aldeia Tangará"
},
    'aldeia2': {
    "image": "fotos/renato.jpeg",
    "title": "Professor(a) Renato da Silva Mariano",
    "description": "Aldeia Pindo-ty"
},
    'aldeia3': {
    "image": "fotos/andreia.jpeg",
    "title": "Professor(a) Andreia Ribeiro dos Santos",
    "description": "Terra Indígena Djaiko Aty"
},
    'aldeia4': {
    "image": "fotos/jonathan.jpeg",
    "title": "Professor(a) Jonathan Marcolino",
    "description": "Aldeia Tereguá"
},
    'aldeia5': {
    "image": "http://phpu.unifesp.br/dsi/aux/fotos/fotos.php?rf=1537089",
    "title": "Professor(a) Kerexu Mirim da Silva ",
    "description": "Aldeia Krukutu"
},
    'aldeia6': {
    "image": "fotos/rodrigo.jpeg",
    "title": "Professor(a) Rodrigo Vera Mirim da Silva",
    "description": "Aldeia Takuari-ty"
},
    'aldeia7': {
    "image": "fotos/mariza.jpeg",
    "title": "Professor(a) Mariza da Silva",
    "description": "Aldeia Pegua-oty"
},
    'aldeia8': {
    "image": "fotos/abilio.jpeg",
    "title": "Professor(a) Abílio Fernandes",
    "description": "Aldeia Uru'ity."
},
    'aldeia9': {
    "image": "http://phpu.unifesp.br/dsi/aux/fotos/fotos.php?rf=1537057",
    "title": "Professor(a) Adão Alves",
    "description": "Aldeia Kopenoti (Avaí/SP)"
},
    'aldeia10': {
    "image": "fotos/iara.jpeg",
    "title": "Professor(a) Iara Mendonça Bolgarim",
    "description": "Terra Indígena Jaraguá"
},
    'aldeia11': {
    "image": "fotos/edson.jpeg",
    "title": "Professor(a) Edson Rodrigues",
    "description": "Terra indígena Amba Porã"
},
    'aldeia12': {
    "image": "",
    "title": "Professor(a) ",
    "description": ""
},
    'aldeia13': {
    "image": "fotos/claudinei.jpeg",
    "title": "Professor(a) Claudinei Fermino da Silva",
    "description": "Aldeia Nimuendaju"
},
    'aldeia14': {
    "image": "fotos/cledinilson.jpeg",
    "title": "Professor(a) Cledinilson Alves Marcolino",
    "description": "Aldeia Nimuendaju"
},
    'aldeia15': {
    "image": "fotos/ingrid.jpeg",
    "title": "Professor(a) Ingrid Ara I Santos da Silva",
    "description": "Aldeia Boa Vista"
},
    'aldeia16': {
    "image": "fotos/kamila.jpeg",
    "title": "Professor(a) Kamila Ariellen Dina dos Santos",
    "description": "Aldeia Nhamandu Mirim"
},
    'aldeia17': {
    "image": "fotos/leonardo.jpeg",
    "title": "Professor(a) Leonardo Edileno Wera Tupã Macena",
    "description": "Aldeia Rio Silveira"
},
    'aldeia18': {
    "image": "fotos/lidiane.jpeg",
    "title": "Professor(a) Lidiane Damaceno Cotui Afonso",
    "description": "Aldeia Vanuire"
},
    'aldeia19': {
    "image": "fotos/marcelo.jpeg",
    "title": "Professor(a) Marcelo Papa Benite",
    "description": "Tekoa Mirim"
},
    'aldeia20': {
    "image": "fotos/marcio.jpeg",
    "title": "Professor(a) Marcio da Silva",
    "description": "Aldeia Itapuã"
},
    'aldeia21': {
    "image": "fotos/mariana.jpeg",
    "title": "Professor(a) Mariana Benite",
    "description": "Aldeia Renascer"
},
    'aldeia22': {
    "image": "fotos/roberto.jpeg",
    "title": "Professor(a) Roberto Martin da Silva",
    "description": "Adeia Aguapeu"
},
    'aldeia23': {
    "image": "fotos/marilene.jpeg",
    "title": "Professor(a) Marilene Mendonça Bolgarim",
    "description": "Terra Indígena Jaraguá"
},
    'aldeia24': {
    "image": "fotos/reinaldo.jpeg",
    "title": "Professor(a) Reinaldo karai tukumbbo Peralta",
    "description": "Tekoa Tupã reko"
},
    'aldeia25': {
    "image": "fotos/rosangela.jpeg",
    "title": "Professor(a) Rosângela Barbosa",
    "description": "Tekoa Arandu"
},
    'aldeia26': {
    "image": "fotos/rosimeire.jpeg",
    "title": "Professor(a) Rosimeire Iaiaiti Indubrasil",
    "description": "Aldeia Indigena Icatu"
},
    'aldeia27': {
    "image": "fotos/severino.jpeg",
    "title": "Professor(a) Severino Cabral Ramires",
    "description": "Madenuá Porã"
},
    'aldeia28': {
    "image": "fotos/joao.jpeg",
    "title": "Professor(a) João Batista Ortega",
    "description": "Aldeia Ka'aguy hovy"
}
};


// Função para fechar o pop-up
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('oi-popup').style.display = 'none';
});

// Opcional: permite fechar o pop-up clicando fora da caixa
window.onclick = function(event) {
    const popup = document.getElementById('info-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};
