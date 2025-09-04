// popupLoader.js

$(document).ready(function() {
    $("#popup-container").load("partials/popup.html", function(response, status, xhr) {
        if (status == "error") {
            console.error("Erro ao carregar o pop-up: " + xhr.status + " " + xhr.statusText);
        } else {
            console.log("Pop-up carregado com sucesso.");

            // Adicionando a funcionalidade de fechar o pop-up
            $("#close-popup").click(function() {
                $("#oi-popup").hide(); // Oculta o pop-up
            });
        }
    });
});
