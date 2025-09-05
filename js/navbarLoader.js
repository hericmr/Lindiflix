// Carrega o arquivo correto de navbar com base no ID do elemento
$(document).ready(function() {
    // Verifica se o elemento com id 'navbar' ou 'navbar_unifesp' existe
    var navbarElement = $("#navbar, #navbar_unifesp");

    if (navbarElement.length > 0) {
        if ($("#navbar").length > 0) {
            // Se o id for 'navbar', carrega o arquivo 'navbar.html'
            $("#navbar").load("partials/navbar.html", function(response, status, xhr) {
                if (status == "error") {
                    console.error("Erro ao carregar o navbar: " + xhr.status + " " + xhr.statusText);
                } else {
                    console.log("Navbar carregado com sucesso.");
                }
            });
        } else if ($("#navbar_unifesp").length > 0) {
            // Se o id for 'navbar_unifesp', carrega o arquivo 'navbar_unifesp.html'
            $("#navbar_unifesp").load("partials/navbar_unifesp.html", function(response, status, xhr) {
                if (status == "error") {
                    console.error("Erro ao carregar o navbar_unifesp: " + xhr.status + " " + xhr.statusText);
                } else {
                    console.log("Navbar UNIFESP carregado com sucesso.");
                }
            });
        }
    } else {
        console.error("Nenhum elemento de navbar encontrado.");
    }
});
