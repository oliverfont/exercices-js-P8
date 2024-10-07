// S'assurer que le DOM est complètement chargé avant d'interagir avec lui
document.addEventListener('DOMContentLoaded', function() {

    // Fonction pour ajouter les chiffres et opérateurs à l'affichage
    function appendToDisplay(value) {
        const display = document.getElementById('display');
        if (display) {
            const lastChar = display.value.slice(-1); // Dernier caractère de l'affichage
            // Empêcher d'ajouter plusieurs opérateurs consécutifs
            if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
                return; // Ne rien faire si deux opérateurs consécutifs
            }
            // Empêcher d'ajouter un opérateur en premier caractère
            if (display.value === '' && ['+', '-', '*', '/'].includes(value)) {
                return; // Ne rien faire si le premier caractère est un opérateur
            }
            display.value += value;  // Ajoute la valeur au contenu actuel
        }
    }

    // Fonction pour effacer l'affichage
    function clearDisplay() {
        const display = document.getElementById('display');
        if (display) {
            display.value = '';  // Réinitialise l'affichage
        }
    }

    // Fonction pour calculer et afficher le résultat
    function calculateResult() {
        const display = document.getElementById('display');
        if (display) {
            try {
                // Empêcher les calculs sur une expression vide
                if (display.value === '') {
                    return;
                }

                // Évaluer l'expression mathématique
                const result = eval(display.value);  // Évaluer l'expression

                // Vérifier si le résultat est Infinity ou -Infinity (ce qui implique une division par zéro)
                if (result === Infinity || result === -Infinity) {
                    display.value = 'Division by zero is not allowed';
                } else {
                    display.value = result;
                }

            } catch (error) {
                display.value = 'Erreur';  // Affiche une erreur si l'expression est invalide
            }
        }
    }

    // Exposer les fonctions pour qu'elles soient accessibles dans le HTML
    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculateResult = calculateResult;
});
