// Função para redirecionar para uma página HTML específica ao clicar no ponto
function redirectToHTML(aldeiaId) {
    window.location.href = aldeiaId + ".html"; // Redireciona para a página da aldeia
}

// Função para redirecionar para a página com o vídeo embutido
function redirectToVideoPage(aldeiaId) {
    const videoLinks = {
        'aldeia1': 'https://www.youtube.com/embed/5XqSBaVYfBM?si=GWLZgaRfXA-zyTaA',
        'aldeia2': 'https://www.youtube.com/embed/A79kDuycPs4', 
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
function showInfo(aldeiaId) {
    const popup = document.getElementById('info-popup');
    const image = document.getElementById('info-image');
    const title = document.getElementById('info-title');
    const description = document.getElementById('info-description');

    const data = aldeiaData[aldeiaId];

    image.src = data.image;
    title.textContent = data.title;
    description.textContent = data.description;

    popup.style.display = 'block';
}

<<<<<<< HEAD
// Função para esconder o pop-up
function hideInfo() {
    const popup = document.getElementById('info-popup');
    popup.style.display = 'none';
}

// Dados das aldeias, incluindo a imagem, o título e a descrição
const aldeiaData = {
    'aldeia1': {
        image: 'claudinei.jpeg',
        title: 'Professor Claudinei da Silva',
        description: 'Aldeia Nhanderepu'
    },
    'aldeia2': {
        image: 'joao.jpeg',
        title: 'Professor João Batista Ortega',
        description: 'Aldeia Jejyty'
    }
};
=======
function hideImage() {
    console.log('Ocultando informação');
    var infoPopup = document.getElementById('info-popup');
    infoPopup.style.display = 'none';  // Esconde o pop-up
}

document.getElementById('aldeia1').addEventListener('click', function() {
    window.location.href = 'aldeia1.html'; // Redireciona para a página da aldeia
});

// Captura eventos de toque para dispositivos móveis
document.getElementById('aldeia1').addEventListener('touchstart', function() {
    window.location.href = 'aldeia1.html';
});
// Captura eventos de toque para dispositivos móveis
document.getElementById('aldeia1').addEventListener('touchstart', function() {
    window.location.href = 'aldeia1.html';
});
>>>>>>> 78d47feba8f892d613fcbc3d44ef1d40cdb9267d