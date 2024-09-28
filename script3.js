

// Função para criar os elementos HTML para cada professor
function criarVideoItem(professor) {
    // Cria a coluna
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-4 col-md-6 col-sm-12 video-item';

    // Cria o container do vídeo
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    // Cria a seção de informações do professor
    const professorInfo = document.createElement('div');
    professorInfo.className = 'professor-info';

    // Cria a imagem do professor
    const img = document.createElement('img');
    img.src = professor.imagem || 'fotos/default.jpeg'; // Imagem padrão caso não haja
    img.alt = `Foto do ${professor.professor || professor.professora || 'Professor'}`;
    img.className = 'professor-img';

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

    // Verifica se 'aldeia' está presente
    const pAldeia = document.createElement('p');
    if (professor.aldeia) {
        pAldeia.innerHTML = `<strong>Aldeia:</strong> ${professor.aldeia}`;
    } else {
        pAldeia.innerHTML = `<strong>Aldeia:</strong> Não Informado`;
    }

    // Verifica se 'povo' está presente
    const pPovo = document.createElement('p');
    if (professor.povo) {
        pPovo.innerHTML = `<strong>Povo:</strong> ${professor.povo}`;
    } else {
        pPovo.innerHTML = `<strong>Povo:</strong> Não Informado`;
    }

    // Verifica se 'uf' está presente
    const pUF = document.createElement('p');
    if (professor.uf) {
        pUF.innerHTML = `<strong>UF:</strong> ${professor.uf}`;
    } else {
        pUF.innerHTML = `<strong>UF:</strong> Não Informado`;
    }

    // Adiciona os parágrafos à div de detalhes
    professorDetails.appendChild(pNome);
    professorDetails.appendChild(pAldeia);
    professorDetails.appendChild(pPovo);
    professorDetails.appendChild(pUF);

    // Adiciona a imagem e os detalhes à seção de informações
    professorInfo.appendChild(img);
    professorInfo.appendChild(professorDetails);

    // Cria o iframe do vídeo
    const iframe = document.createElement('iframe');
    iframe.src = professor.youtube || 'https://www.youtube.com/embed/VIDEO_ID'; // Vídeo padrão caso não haja
    iframe.title = `Aula do ${professor.professor || professor.professora || 'Professor'} ${professor.nome}`;
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.frameBorder = "0";

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
        // Ignorar entradas incompletas (opcional)
        if (professor.nome && (professor.youtube || professor.professor || professor.professora)) {
            const videoItem = criarVideoItem(professor);
            videoGrid.appendChild(videoItem);
        }
    });
}

// Função para buscar os dados dos professores de um arquivo JSON
function buscarProfessores() {
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

// Chama a função quando a página for carregada
document.addEventListener('DOMContentLoaded', buscarProfessores);
