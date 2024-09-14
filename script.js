// Função para redirecionar para uma página específica ao clicar no ponto
function redirectToVideo(aldeia) {
    window.location.href = aldeia + ".html"; // Redireciona para a página da aldeia
}

// Função para redirecionar ao clicar no círculo
function redirectToPage(page) {
    console.log('Redirecionando para página:', page);
    window.location.href = page + ".html";  // Redireciona para 'paginaDestino.html'
}

function showImage() {
    console.log('Exibindo informação');
    var infoPopup = document.getElementById('info-popup');
    infoPopup.style.display = 'block';  // Mostra o pop-up no centro da tela
}

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
