// Função para criar os elementos HTML para cada professor
function criarVideoItem(professor) {
    // Cria a coluna
    const colDiv = document.createElement('div');
    colDiv.className = 'video-item';

    // Cria o container do vídeo
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    // Cria a seção de informações do professor
    const professorInfo = document.createElement('div');
    professorInfo.className = 'professor-info';

    // Cria a imagem do professor com lazy loading
    const img = document.createElement('img');
    img.src = professor.imagem || 'fotos/default.jpeg'; // Imagem padrão caso não haja
    img.alt = `Foto do ${professor.professor || professor.professora || 'Professor'}`;
    img.className = 'professor-img';
    img.loading = 'lazy';
    
    // Adiciona classe especial se for foto padrão
    if (professor.imagem === 'fotos/default.jpeg') {
        img.classList.add('professor-img--default');
    }

    // Cria a div para os detalhes do professor
    const professorDetails = document.createElement('div');
    professorDetails.className = 'professor-details';

    // Cria os parágrafos com as informações
    const pNome = document.createElement('p');
    if (professor.professor) {
        pNome.innerHTML = `<strong>Professor:</strong> ${professor.professor}`;
    } else if (professor.professora) {
        pNome.innerHTML = `<strong>Professora:</strong> ${professor.professora}`;
    } else {
        pNome.innerHTML = `<strong>Professor:</strong> Não Informado`;
    }

    const pAldeia = document.createElement('p');
    if (professor.aldeia) {
        pAldeia.innerHTML = `<strong>Comunidade:</strong> ${professor.aldeia}`;
    } else {
        pAldeia.innerHTML = `<strong>Comunidade:</strong> Não Informado`;
    }

    const pPovo = document.createElement('p');
    if (professor.povo) {
        pPovo.innerHTML = `<strong>Povo:</strong> ${professor.povo}`;
    } else {
        pPovo.innerHTML = `<strong>Povo:</strong> Não Informado`;
    }

    // Adiciona os parágrafos à div de detalhes
    professorDetails.appendChild(pNome);
    professorDetails.appendChild(pAldeia);
    professorDetails.appendChild(pPovo);

    // Adiciona a imagem e os detalhes à seção de informações
    professorInfo.appendChild(img);
    professorInfo.appendChild(professorDetails);

    // Cria o iframe do vídeo, mas usa data-src para evitar o carregamento imediato
    const iframe = document.createElement('iframe');
    iframe.dataset.src = professor.youtube || 'https://www.youtube.com/embed/VIDEO_ID'; // Vídeo padrão caso não haja
    iframe.title = `Aula do ${professor.professor || professor.professora || 'Professor'} ${professor.nome}`;
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.frameBorder = "0";
    iframe.className = 'lazy-video';  // Adiciona uma classe para identificação
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    // Adiciona a seção de informações e o iframe ao container do vídeo
    videoContainer.appendChild(professorInfo);
    videoContainer.appendChild(iframe);

    // Adiciona o container do vídeo à coluna
    colDiv.appendChild(videoContainer);

    return colDiv;
}

// Função para inserir todos os vídeos na página
function inserirVideos(professores) {
    const videoGrid = document.getElementById('videoGrid');

    if (!professores.length) {
        document.getElementById('noData').style.display = 'block';
        return;
    }

    professores.forEach(professor => {
        if (professor.nome && (professor.youtube || professor.professor || professor.professora)) {
            const videoItem = criarVideoItem(professor);
            videoGrid.appendChild(videoItem);
        }
    });

    // Após inserir os vídeos, ativa o lazy loading usando a função do utils.js
    if (window.LindiflixUtils && window.LindiflixUtils.lazyLoadVideos) {
        window.LindiflixUtils.lazyLoadVideos();
    } else {
        lazyLoadVideos();
    }
    
    // Configura navegação por teclado
    if (window.LindiflixUtils && window.LindiflixUtils.setupKeyboardNavigation) {
        window.LindiflixUtils.setupKeyboardNavigation();
    }
}

// Função para implementar o carregamento preguiçoso dos vídeos
function lazyLoadVideos() {
    const videos = document.querySelectorAll('.lazy-video');

    // Configura o IntersectionObserver para carregar os vídeos somente quando visíveis
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.dataset.src; // Define a fonte do vídeo apenas quando ele estiver na viewport
                observer.unobserve(video); // Para de observar após o carregamento
            }
        });
    });

    videos.forEach(video => observer.observe(video));
}

// Função para buscar os dados dos professores de um arquivo JSON
function buscarProfessores() {
    // Usa a função do utils.js se disponível, senão usa a implementação local
    if (window.LindiflixUtils && window.LindiflixUtils.buscarProfessores) {
        window.LindiflixUtils.buscarProfessores();
    } else {
        fetch('professores.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                inserirVideos(data);
            })
            .catch(error => {
                console.error('Erro ao carregar os dados dos professores:', error);
                document.getElementById('noData').textContent = 'Erro ao carregar os dados dos professores.';
                document.getElementById('noData').style.display = 'block';
            });
    }
}

// Chama a função quando a página for carregada
document.addEventListener('DOMContentLoaded', buscarProfessores);
