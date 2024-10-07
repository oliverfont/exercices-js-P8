// Attendre que le DOM soit complètement chargé avant d'ajouter l'écouteur d'événements
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton et le paragraphe
    const button = document.getElementById('myButton');
    const messageParagraph = document.getElementById('message');

    // Ajouter un écouteur d'événement au bouton
    button.addEventListener('click', function() {
        // Afficher le message dans le paragraphe
        messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    });
});
