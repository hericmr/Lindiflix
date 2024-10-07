// Carrega o arquivo navbar.html no div com id 'navbar'
$(document).ready(function() {
    $("#navbar").load("navbar.html", function(response, status, xhr) {
        if (status == "error") {
            console.error("Erro ao carregar o navbar: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Navbar carregado com sucesso.");
        }
    });
});
