// Carrega o arquivo footer.html no div com id 'footer'
$(document).ready(function() {
    $("#footer").load("partials/footer.html", function(response, status, xhr) {
        if (status == "error") {
            console.error("Erro ao carregar o footer: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Rodapé carregado com sucesso.");
        }
    });
});
