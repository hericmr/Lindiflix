const aldeiaData = {
    'aldeia1': {
        image: 'fotos/claudinei.jpeg',
        title: 'Professor Claudinei da Silva',
        description: 'Aldeia Nhanderepu'
    },
    'aldeia2': {
        image: 'fotos/joao.jpeg',
        title: 'Professor João Batista Ortega',
        description: 'Aldeia Jejyty'
    },
    'aldeia3': {
        image: 'fotos/jonathan.jpeg',
        title: 'Professor Jonhathan Marcolino',
        description: 'Aldeia Tereguá'
    },
    'aldeia4': {
        image: 'fotos/paula.jpeg',
        title: 'Professora Paula Aparecida Baptista',
        description: 'Aldeia Tangará'
    },
    'aldeia5': [
        {
            image: 'fotos/iara.jpeg',
            title: 'Professora Iara Mendonça Bolgarim',
            description: 'Aldeia do Jaraguá'
        },
        {
            image: 'fotos/marilene.jpeg',
            title: 'Professora Marilene Mendonça Bolgarim',
            description: 'Aldeia do Jaraguá'
        }
    ]
};

// Função para inserir informações no HTML
function addAldeiaInfo(aldeiaId, data) {
    const container = document.getElementById(`info-${aldeiaId}`);
    if (Array.isArray(data)) {
        data.forEach(professor => {
            container.innerHTML += `
                <div class="professor-info">
                    <img src="${professor.image}" alt="${professor.title}">
                    <h3>${professor.title}</h3>
                    <p>${professor.description}</p>
                </div>
            `;
        });
    } else {
        container.innerHTML = `
            <div class="professor-info">
                <img src="${data.image}" alt="${data.title}">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            </div>
        `;
    }
}

// Inserir as informações em cada vídeo
document.addEventListener("DOMContentLoaded", function() {
    Object.keys(aldeiaData).forEach(aldeiaId => {
        const data = aldeiaData[aldeiaId];
        addAldeiaInfo(aldeiaId, data);
    });
});
